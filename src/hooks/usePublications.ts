import { useState, useEffect, useCallback, useRef } from "react";
import type { Publication } from "@/data/publications";
import { seedPublications } from "@/data/publications";
import { fetchOrcidWorks } from "@/services/orcidApi";
import { fetchAuthorsBatch } from "@/services/crossrefApi";

const ORCID_ID = "0000-0001-6697-0198";
const CACHE_KEY = "orcid_publications_v2";
const CACHE_TTL_MS = 24 * 60 * 60 * 1000; // 24 hours

interface CacheEntry {
  data: Publication[];
  fetchedAt: number;
}

interface UsePublicationsReturn {
  publications: Publication[];
  loading: boolean;
  error: string | null;
  isRefreshing: boolean;
  lastUpdated: Date | null;
  refresh: () => void;
  source: "cache" | "api" | "seed";
}

function loadCache(): Publication[] | null {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const entry: CacheEntry = JSON.parse(raw);
    if (Date.now() - entry.fetchedAt > CACHE_TTL_MS) return null;
    return entry.data;
  } catch {
    return null;
  }
}

function saveCache(data: Publication[]) {
  try {
    const entry: CacheEntry = { data, fetchedAt: Date.now() };
    localStorage.setItem(CACHE_KEY, JSON.stringify(entry));
  } catch {
    // localStorage full or unavailable
  }
}

function clearCache() {
  localStorage.removeItem(CACHE_KEY);
}

/**
 * Merge ORCID + Crossref data with local seed data.
 * Priority: ORCID for title/year/DOI/journal, seed for authors + highlight.
 */
function mergeWithSeed(
  orcidPubs: Publication[],
  seedPubs: Publication[]
): Publication[] {
  const seedMap = new Map(seedPubs.map((p) => [p.doi, p]));

  return orcidPubs.map((pub) => {
    const seed = seedMap.get(pub.doi);
    if (!seed) return pub;

    return {
      ...pub,
      // Seed data overrides for authors and highlight
      authors: seed.authors.length > 0 ? seed.authors : pub.authors,
      highlight: seed.highlight ?? pub.highlight,
      // Use seed journal if ORCID didn't have one
      journal: pub.journal === "Preprint" && seed.journal
        ? seed.journal
        : pub.journal,
    };
  });
}

export function usePublications(): UsePublicationsReturn {
  const [publications, setPublications] = useState<Publication[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const [source, setSource] = useState<"cache" | "api" | "seed">("seed");
  const mounted = useRef(true);

  const load = useCallback(
    async (forceRefresh = false) => {
      if (!mounted.current) return;

      // 1. Try cache first (unless force refresh)
      if (!forceRefresh) {
        const cached = loadCache();
        if (cached && cached.length > 0) {
          setPublications(cached);
          setLoading(false);
          setSource("cache");
          setLastUpdated(new Date());
          return;
        }
      }

      // 2. Fetch from ORCID API
      try {
        if (forceRefresh) setIsRefreshing(true);

        const orcidPubs = await fetchOrcidWorks(ORCID_ID);

        if (!mounted.current) return;

        if (orcidPubs.length === 0) {
          throw new Error("No publications found on ORCID");
        }

        // 3. Fetch authors from Crossref for papers missing authors
        const doisNeedingAuthors = orcidPubs
          .filter((p) => p.authors.length === 0)
          .map((p) => p.doi);

        if (doisNeedingAuthors.length > 0) {
          const authorMap = await fetchAuthorsBatch(doisNeedingAuthors);

          if (!mounted.current) return;

          for (const pub of orcidPubs) {
            if (pub.authors.length === 0 && authorMap[pub.doi]) {
              pub.authors = authorMap[pub.doi];
            }
          }
        }

        // 4. Merge with seed data
        const merged = mergeWithSeed(orcidPubs, seedPublications);

        // 5. Save and display
        saveCache(merged);
        setPublications(merged);
        setSource("api");
        setLastUpdated(new Date());
        setError(null);
      } catch (err) {
        if (!mounted.current) return;

        // Fallback to seed data
        console.warn("ORCID fetch failed, using seed data:", err);
        setPublications(seedPublications);
        setSource("seed");
        setError(
          err instanceof Error
            ? err.message
            : "Failed to fetch from ORCID"
        );
      } finally {
        if (mounted.current) {
          setLoading(false);
          setIsRefreshing(false);
        }
      }
    },
    []
  );

  useEffect(() => {
    mounted.current = true;
    load(false);
    return () => {
      mounted.current = false;
    };
  }, [load]);

  const refresh = useCallback(() => {
    clearCache();
    load(true);
  }, [load]);

  return {
    publications,
    loading,
    error,
    isRefreshing,
    lastUpdated,
    refresh,
    source,
  };
}
