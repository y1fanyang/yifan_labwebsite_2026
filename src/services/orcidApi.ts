/**
 * ORCID Public API Client
 * Fetches publication metadata from ORCID (no auth required)
 * Endpoint: https://pub.orcid.org/v3.0/{orcid}/works
 */

import type { Publication } from "@/data/publications";

const ORCID_API_BASE = "https://pub.orcid.org/v3.0";

// CORS proxy fallback - only used if direct request fails
const CORS_PROXIES = [
  "", // direct first
  "https://corsproxy.io/?",
];

interface OrcidWorkSummary {
  "put-code": number;
  title: {
    title: { value: string };
  };
  "journal-title"?: { value: string } | null;
  type: string;
  "publication-date"?: {
    year?: { value: string } | null;
    month?: { value: string } | null;
    day?: { value: string } | null;
  } | null;
  "external-ids": {
    "external-id": Array<{
      "external-id-type": string;
      "external-id-value": string;
      "external-id-url"?: { value: string } | null;
    }>;
  };
  url?: { value: string } | null;
}

interface OrcidWorksResponse {
  group: Array<{
    "work-summary": OrcidWorkSummary[];
  }>;
}

async function fetchWithFallback(
  url: string,
  options: RequestInit
): Promise<Response> {
  let lastError: Error | null = null;

  for (const proxy of CORS_PROXIES) {
    try {
      const response = await fetch(proxy + url, {
        ...options,
        signal: AbortSignal.timeout(15000),
      });
      if (response.ok) return response;
      lastError = new Error(`HTTP ${response.status}`);
    } catch (e) {
      lastError = e as Error;
    }
  }

  throw lastError || new Error("All fetch attempts failed");
}

/**
 * Fetch works from ORCID public API.
 * No authentication required for public records.
 */
export async function fetchOrcidWorks(
  orcid: string
): Promise<Publication[]> {
  const url = `${ORCID_API_BASE}/${orcid}/works`;

  const response = await fetchWithFallback(url, {
    headers: {
      Accept: "application/json",
    },
  });

  const data: OrcidWorksResponse = await response.json();
  const publications: Publication[] = [];

  for (const group of data.group) {
    const summary = group["work-summary"][0];
    if (!summary) continue;

    // Extract DOI
    let doi = "";
    let link = "";
    for (const extId of summary["external-ids"]["external-id"]) {
      if (extId["external-id-type"] === "doi") {
        doi = extId["external-id-value"];
        link =
          extId["external-id-url"]?.value || `https://doi.org/${doi}`;
        break;
      }
    }

    // Skip entries without DOI (likely incomplete records)
    if (!doi) continue;

    const year = parseInt(
      summary["publication-date"]?.year?.value || "0",
      10
    );
    const title = summary.title.title.value;
    const journal = summary["journal-title"]?.value || "";

    publications.push({
      id: `orcid-${doi.replace(/[/.]/g, "-")}`,
      title,
      authors: [], // Will be populated by Crossref
      journal: journal || "Preprint",
      date: `${year}-01-01`,
      year,
      doi,
      link,
      // Only journal articles get highlight by default
      highlight:
        summary.type === "journal-article" &&
        journal.length > 0 &&
        year >= 2023,
    });
  }

  // Drop incomplete records (missing publication year) and deduplicate by DOI.
  // ORCID sometimes holds a second, dateless copy of a paper, which would
  // otherwise surface as a year-0 duplicate of the real entry.
  const byDoi = new Map<string, Publication>();
  for (const pub of publications) {
    if (pub.year <= 0) continue; // skip records without a valid year
    const existing = byDoi.get(pub.doi);
    if (!existing || pub.year > existing.year) {
      byDoi.set(pub.doi, pub);
    }
  }

  // Sort by year descending
  return Array.from(byDoi.values()).sort((a, b) => b.year - a.year);
}
