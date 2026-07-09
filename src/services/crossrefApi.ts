/**
 * Crossref API Client
 * Fetches author lists and journal info by DOI
 * Polite pool requires User-Agent header with email
 * Endpoint: https://api.crossref.org/works/{doi}
 */

const CROSSREF_BASE = "https://api.crossref.org/works";

interface CrossrefAuthor {
  given?: string;
  family?: string;
  name?: string;
}

interface CrossrefWorkMessage {
  author?: CrossrefAuthor[];
  "container-title"?: string[];
  "published-print"?: { "date-parts": number[][] };
  "published-online"?: { "date-parts": number[][] };
  title?: string[];
}

interface CrossrefResponse {
  message: CrossrefWorkMessage;
}

/**
 * Fetch author list for a single DOI from Crossref.
 * Uses polite pool (adds User-Agent with email).
 */
export async function fetchAuthorsByDoi(
  doi: string
): Promise<string[]> {
  try {
    const response = await fetch(`${CROSSREF_BASE}/${encodeURIComponent(doi)}`, {
      headers: {
        "User-Agent": "SystemsAgingLab/1.0 (yangyifan@westlake.edu.cn)",
      },
      signal: AbortSignal.timeout(8000),
    });

    if (!response.ok) return [];

    const data: CrossrefResponse = await response.json();
    const authors = data.message?.author || [];

    return authors
      .map((a) => {
        if (a.name) return a.name;
        const parts = [a.given, a.family].filter(Boolean);
        return parts.join(" ");
      })
      .filter(Boolean);
  } catch {
    return [];
  }
}

/**
 * Batch fetch authors for multiple DOIs.
 * Crossref polite pool recommends adding delays between requests.
 */
export async function fetchAuthorsBatch(
  dois: string[]
): Promise<Record<string, string[]>> {
  const result: Record<string, string[]> = {};

  // Process in chunks to avoid rate limiting
  const CHUNK_SIZE = 3;
  for (let i = 0; i < dois.length; i += CHUNK_SIZE) {
    const chunk = dois.slice(i, i + CHUNK_SIZE);

    await Promise.all(
      chunk.map(async (doi) => {
        const authors = await fetchAuthorsByDoi(doi);
        if (authors.length > 0) {
          result[doi] = authors;
        }
      })
    );

    // Small delay between chunks
    if (i + CHUNK_SIZE < dois.length) {
      await new Promise((r) => setTimeout(r, 200));
    }
  }

  return result;
}

/**
 * Fetch journal name for a DOI (to override ORCID's journal field)
 */
export async function fetchJournalByDoi(
  doi: string
): Promise<string | null> {
  try {
    const response = await fetch(`${CROSSREF_BASE}/${encodeURIComponent(doi)}`, {
      headers: {
        "User-Agent": "SystemsAgingLab/1.0 (yangyifan@westlake.edu.cn)",
      },
      signal: AbortSignal.timeout(8000),
    });

    if (!response.ok) return null;

    const data: CrossrefResponse = await response.json();
    const containerTitle = data.message?.["container-title"];
    return containerTitle && containerTitle.length > 0
      ? containerTitle[0]
      : null;
  } catch {
    return null;
  }
}
