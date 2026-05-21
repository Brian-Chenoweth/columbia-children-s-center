
import React, { useEffect, useMemo, useRef, useState } from "react";
import Fuse from "fuse.js";
import handbookData from "../../data/parent-handbook/parent-handbook.json";
import "./parentHandbook.css";
import Layout from "../../components/layout";

const SEARCH_SYNONYMS = {
  sick: ["illness", "fever", "absent"],
  illness: ["sick", "absent"],
  absent: ["illness", "sick"],
  payment: ["tuition", "billing", "fee"],
  payments: ["tuition", "billing", "fee"],
  billing: ["tuition", "payment", "fee"],
  tuition: ["billing", "payment", "fee"],
  pickup: ["arrival", "departure", "dropoff"],
  dropoff: ["arrival", "departure"],
  nap: ["rest", "sleep"],
  discipline: ["behavior", "guidance"],
  allergy: ["allergies", "meals", "snacks"],
  allergies: ["allergy", "meals", "snacks"],
};

function tokenizeSearch(query) {
  return query
    .toLowerCase()
    .split(/\s+/)
    .map((token) => token.trim())
    .filter(Boolean);
}

function expandQueryWithSynonyms(query) {
  const terms = tokenizeSearch(query);
  const expanded = new Set(terms);

  terms.forEach((term) => {
    const synonyms = SEARCH_SYNONYMS[term] || [];
    synonyms.forEach((synonym) => expanded.add(synonym));
  });

  return Array.from(expanded).join(" ");
}

function expandQueryTerms(query) {
  const expandedQuery = expandQueryWithSynonyms(query);
  return tokenizeSearch(expandedQuery);
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function normalizeForPhraseMatch(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
    .replace(/\s+/g, " ");
}

function containsEquivalentPhrase(text, query) {
  const normalizedQuery = normalizeForPhraseMatch(query);
  if (!normalizedQuery) {
    return false;
  }

  return normalizeForPhraseMatch(text).includes(normalizedQuery);
}

function matchesTitle(candidate, title) {
  return normalizeForPhraseMatch(candidate) === normalizeForPhraseMatch(title);
}

export default function ParentHandbook() {
  const [query, setQuery] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isTocOpen, setIsTocOpen] = useState(false);
  const [hasHydrated, setHasHydrated] = useState(false);

  // Refs for each handbook section
  const sectionRefs = useRef({});
  handbookData.forEach(item => {
    if (!sectionRefs.current[item.id]) {
      sectionRefs.current[item.id] = React.createRef();
    }
  });

  const categories = useMemo(
    () => [
      "All",
      ...Array.from(
        new Set(handbookData.map((item) => item.category).filter(Boolean))
      ),
    ],
    []
  );

  const visibleItems = useMemo(() => {
    if (selectedCategory === "All") {
      return handbookData;
    }
    return handbookData.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  const featuredBlurbs = useMemo(() => {
    const featuredItems = visibleItems.filter((item) => item.featured);
    const trimmedQuery = query.trim().toLowerCase();

    if (!trimmedQuery) {
      return featuredItems;
    }

    const terms = tokenizeSearch(trimmedQuery);
    return featuredItems.filter((item) => {
      const content = item.content.toLowerCase();
      return terms.some((term) => content.includes(term));
    });
  }, [query, visibleItems]);

  const sharedTags = useMemo(() => {
    const counts = new Map();

    visibleItems.forEach((item) => {
      (item.tags || []).forEach((tag) => {
        counts.set(tag, (counts.get(tag) || 0) + 1);
      });
    });

    return new Set(
      Array.from(counts.entries())
        .filter(([, count]) => count >= 2)
        .map(([tag]) => tag)
    );
  }, [visibleItems]);

  const getDisplayTags = (item) => (item.tags || []).filter((tag) => sharedTags.has(tag));

  const { exactResults, maybeInterestedResults } = useMemo(() => {
    const trimmedQuery = query.trim();
    if (!trimmedQuery) {
      return {
        exactResults: visibleItems,
        maybeInterestedResults: [],
      };
    }

    const baseTerms = tokenizeSearch(trimmedQuery);
    const terms = expandQueryTerms(trimmedQuery);
    const uniqueTerms = Array.from(new Set(terms));

    const scoreDirectMatch = (item) => {
      const title = item.title.toLowerCase();
      const content = item.content.toLowerCase();
      const category = (item.category || "").toLowerCase();
      let score = 0;

      baseTerms.forEach((term) => {
        if (title.includes(term)) score += 10;
        if (content.includes(term)) score += 4;
        if (category.includes(term)) score += 3;
      });

      return score;
    };

    const scoreTagMatch = (item) => {
      const tags = getDisplayTags(item).map((tag) => tag.toLowerCase());
      let score = 0;

      baseTerms.forEach((term) => {
        tags.forEach((tag) => {
          if (tag === term) {
            score += 8;
          } else if (tag.includes(term) || term.includes(tag)) {
            score += 4;
          }
        });
      });

      return score;
    };

    const scoreExactPhraseMatch = (item) => {
      const title = item.title;
      const content = item.content;
      const category = item.category || "";

      let score = 0;
      if (containsEquivalentPhrase(title, trimmedQuery)) score += 1000;
      if (containsEquivalentPhrase(content, trimmedQuery)) score += 600;
      if (containsEquivalentPhrase(category, trimmedQuery)) score += 400;
      return score;
    };

    const scored = visibleItems.map((item) => ({
      item,
      phraseScore: scoreExactPhraseMatch(item),
      directScore: scoreDirectMatch(item),
      tagScore: scoreTagMatch(item),
    }));

    const exactMatches = scored
      .filter((entry) => entry.phraseScore > 0)
      .sort((a, b) => {
        if (b.phraseScore !== a.phraseScore) {
          return b.phraseScore - a.phraseScore;
        }
        return b.directScore - a.directScore;
      })
      .map((entry) => entry.item);

    const keywordMatches = scored
      .filter((entry) => entry.phraseScore === 0 && entry.directScore > 0)
      .sort((a, b) => b.directScore - a.directScore)
      .map((entry) => entry.item);

    const tagMatches = scored
      .filter((entry) => entry.directScore === 0 && entry.tagScore > 0)
      .sort((a, b) => b.tagScore - a.tagScore)
      .map((entry) => entry.item);

    const fuse = new Fuse(visibleItems, {
      keys: ["title", "content", "category", "tags"],
      threshold: 0.3,
      ignoreLocation: true,
      minMatchCharLength: 3,
      includeScore: true,
    });

    const bestById = new Map();
    const excludedIds = new Set([
      ...exactMatches.map((item) => item.id),
      ...keywordMatches.map((item) => item.id),
      ...tagMatches.map((item) => item.id),
    ]);

    [trimmedQuery, ...uniqueTerms].forEach((term) => {
      if (term.length < 3) {
        return;
      }

      fuse.search(term).forEach((result) => {
        const existing = bestById.get(result.item.id);
        const score = result.score ?? 1;

        // Keep only reasonably confident suggestions.
        if (score > 0.35 || excludedIds.has(result.item.id)) {
          return;
        }

        if (!existing || score < existing.score) {
          bestById.set(result.item.id, { item: result.item, score });
        }
      });
    });

    const fuzzySuggestions = Array.from(bestById.values())
      .sort((a, b) => a.score - b.score)
      .map((entry) => entry.item)
      .slice(0, 6);

    const keywordReason = (item) => {
      const title = item.title.toLowerCase();
      const content = item.content.toLowerCase();
      const category = (item.category || "").toLowerCase();
      const matchedTerms = baseTerms.filter(
        (term) => title.includes(term) || content.includes(term) || category.includes(term)
      );

      if (matchedTerms.length > 0) {
        return `Contains related keyword(s): ${matchedTerms.slice(0, 3).join(", ")} (not an exact phrase match).`;
      }

      return "Contains related handbook terms, but not your exact phrase.";
    };

    const tagReason = (item) => {
      const matchedTags = getDisplayTags(item).filter((tag) => {
        const lowerTag = tag.toLowerCase();
        return baseTerms.some((term) => lowerTag.includes(term) || term.includes(lowerTag));
      });

      if (matchedTags.length > 0) {
        return `Related shared tag match: ${matchedTags.slice(0, 3).join(", ")}.`;
      }

      return "Related shared tags match your search context.";
    };

    const maybeById = new Map();

    keywordMatches.forEach((item) => {
      maybeById.set(item.id, {
        item,
        reason: keywordReason(item),
      });
    });

    tagMatches.forEach((item) => {
      if (!maybeById.has(item.id)) {
        maybeById.set(item.id, {
          item,
          reason: tagReason(item),
        });
      }
    });

    fuzzySuggestions.forEach((item) => {
      if (!maybeById.has(item.id)) {
        maybeById.set(item.id, {
          item,
          reason: "Suggested based on topic similarity to your search.",
        });
      }
    });

    return {
      exactResults: exactMatches,
      maybeInterestedResults: Array.from(maybeById.values()),
    };
  }, [query, visibleItems, sharedTags]);

  const tocItems = useMemo(
    () => [...exactResults, ...maybeInterestedResults.map(({ item }) => item)],
    [exactResults, maybeInterestedResults]
  );

  const queryTerms = useMemo(() => tokenizeSearch(query), [query]);

  const queryTermsSet = useMemo(() => new Set(queryTerms), [queryTerms]);

  const queryPattern = useMemo(() => {
    if (queryTerms.length === 0) {
      return null;
    }
    return new RegExp(`(${queryTerms.map(escapeRegExp).join("|")})`, "ig");
  }, [queryTerms]);

  const renderHighlightedText = (text) => {
    if (!queryPattern) {
      return text;
    }

    const parts = text.split(queryPattern);
    return parts.map((part, index) => {
      if (queryTermsSet.has(part.toLowerCase())) {
        return (
          <mark key={`${part}-${index}`} className="kb-highlight">
            {part}
          </mark>
        );
      }
      return <React.Fragment key={`${part}-${index}`}>{part}</React.Fragment>;
    });
  };

  const parseTableRow = (line) =>
    line
      .trim()
      .split("|")
      .slice(1, -1)
      .map((cell) => cell.trim());

  const isTableSeparatorRow = (cells) =>
    cells.length > 0 && cells.every((cell) => /^:?-{3,}:?$/.test(cell));

  const renderStructuredContent = (rawContent, itemTitle) => {
    const lines = rawContent.split("\n");
    const blocks = [];
    let i = 0;
    let skippedLeadingDuplicateTitle = false;

    while (i < lines.length) {
      const line = lines[i].trim();

      if (!line) {
        i += 1;
        continue;
      }

      if (!skippedLeadingDuplicateTitle && matchesTitle(line.replace(/^##\s+/, ""), itemTitle)) {
        skippedLeadingDuplicateTitle = true;
        i += 1;
        continue;
      }

      skippedLeadingDuplicateTitle = true;

      if (line.startsWith("## ")) {
        blocks.push(
          <h3 key={`heading-${i}`} className="kb-content-heading">
            {renderHighlightedText(line.replace(/^##\s+/, ""))}
          </h3>
        );
        i += 1;
        continue;
      }

      if (line.startsWith("- ")) {
        const items = [];
        while (i < lines.length && lines[i].trim().startsWith("- ")) {
          items.push(lines[i].trim().replace(/^-\s+/, ""));
          i += 1;
        }

        blocks.push(
          <ul key={`list-${i}`} className="kb-content-list">
            {items.map((item, idx) => (
              <li key={`list-item-${i}-${idx}`}>{renderHighlightedText(item)}</li>
            ))}
          </ul>
        );
        continue;
      }

      if (line.startsWith("|")) {
        const rows = [];
        while (i < lines.length && lines[i].trim().startsWith("|")) {
          rows.push(parseTableRow(lines[i]));
          i += 1;
        }

        const filteredRows = rows.filter((row) => !isTableSeparatorRow(row));
        if (filteredRows.length > 0) {
          const headerRow = filteredRows[0];
          const bodyRows = filteredRows.slice(1);

          blocks.push(
            <div key={`table-${i}`} className="kb-content-table-wrap">
              <table className="kb-content-table">
                <thead>
                  <tr>
                    {headerRow.map((cell, idx) => (
                      <th key={`th-${i}-${idx}`}>{renderHighlightedText(cell)}</th>
                    ))}
                  </tr>
                </thead>
                {bodyRows.length > 0 && (
                  <tbody>
                    {bodyRows.map((row, rowIdx) => (
                      <tr key={`tr-${i}-${rowIdx}`}>
                        {row.map((cell, cellIdx) => (
                          <td key={`td-${i}-${rowIdx}-${cellIdx}`}>{renderHighlightedText(cell)}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                )}
              </table>
            </div>
          );
        }
        continue;
      }

      blocks.push(
        <p key={`paragraph-${i}`} className="kb-content-paragraph">
          {renderHighlightedText(line)}
        </p>
      );
      i += 1;
    }

    return <div className="kb-item-content">{blocks}</div>;
  };

  const scrollToTopic = (id, behavior = "smooth") => {
    const ref = sectionRefs.current[id];
    if (!ref || !ref.current || typeof window === "undefined") {
      return;
    }

    const heading = ref.current.querySelector(".kb-item-title");
    const scrollTarget = heading || ref.current;

    const rootStyles = window.getComputedStyle(document.documentElement);
    const contentOffset = Number.parseFloat(
      rootStyles.getPropertyValue("--kb-content-offset") || "0"
    );

    if (Number.isFinite(contentOffset) && contentOffset > 0) {
      const targetTop =
        window.scrollY + scrollTarget.getBoundingClientRect().top - contentOffset;
      window.scrollTo({ top: Math.max(0, targetTop), behavior });
      return;
    }

    scrollTarget.scrollIntoView({ behavior, block: "start" });
  };

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const params = new URLSearchParams(window.location.search);
    const initialQuery = params.get("q") || "";
    const initialTopic = params.get("topic") || "";
    const initialCategory = params.get("category") || "All";

    setQuery(initialQuery);
    setSelectedTopic(initialTopic);
    setSelectedCategory(
      categories.includes(initialCategory) ? initialCategory : "All"
    );
    setHasHydrated(true);
  }, [categories]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const setNavOffset = () => {
      const navbar = document.querySelector(".navbar");
      const navHeight = navbar?.offsetHeight || 80;
      const navTop = navbar
        ? Number.parseFloat(window.getComputedStyle(navbar).top || "0")
        : 0;
      const resolvedTop = Number.isFinite(navTop) ? navTop : 0;
      const totalOffset = Math.round(navHeight + resolvedTop);
      const isMobile = window.matchMedia("(max-width: 768px)").matches;
      const searchWrap = document.querySelector(".kb-search-wrap");
      const searchWrapHeight = isMobile ? searchWrap?.offsetHeight || 0 : 0;
      const contentOffset = Math.round(
        totalOffset + 16 + (isMobile ? searchWrapHeight + 6 : 0)
      );

      document.documentElement.style.setProperty("--kb-nav-offset", `${totalOffset}px`);
      document.documentElement.style.setProperty("--kb-content-offset", `${contentOffset}px`);
    };

    setNavOffset();
    window.addEventListener("resize", setNavOffset);

    const navbar = document.querySelector(".navbar");
    const searchWrap = document.querySelector(".kb-search-wrap");
    const observer =
      typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(() => setNavOffset())
        : null;

    if (observer && navbar) {
      observer.observe(navbar);
    }
    if (observer && searchWrap) {
      observer.observe(searchWrap);
    }

    return () => {
      window.removeEventListener("resize", setNavOffset);
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    if (!hasHydrated || typeof window === "undefined") {
      return;
    }

    const params = new URLSearchParams(window.location.search);
    if (query.trim()) {
      params.set("q", query.trim());
    } else {
      params.delete("q");
    }

    if (selectedTopic) {
      params.set("topic", selectedTopic);
    } else {
      params.delete("topic");
    }

    if (selectedCategory !== "All") {
      params.set("category", selectedCategory);
    } else {
      params.delete("category");
    }

    const nextUrl = `${window.location.pathname}${
      params.toString() ? `?${params.toString()}` : ""
    }`;
    window.history.replaceState({}, "", nextUrl);
  }, [query, selectedTopic, selectedCategory, hasHydrated]);

  useEffect(() => {
    if (!selectedTopic) {
      return;
    }

    const raf = window.requestAnimationFrame(() => {
      scrollToTopic(selectedTopic, "smooth");
    });

    return () => {
      window.cancelAnimationFrame(raf);
    };
  }, [selectedTopic]);

  // Landing page: show all blurbs as clickable cards
  const handleBlurbClick = (id) => {
    setSelectedTopic(id);
    setQuery("");

    window.requestAnimationFrame(() => {
      scrollToTopic(id, "smooth");
    });
  };

  const handleTocJump = (id) => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    setSelectedTopic(id);
    setQuery("");

    if (isMobile) {
      setIsTocOpen(false);
    }

    window.requestAnimationFrame(() => {
      if (isMobile) {
        window.requestAnimationFrame(() => {
          scrollToTopic(id, "smooth");
        });
        return;
      }

      scrollToTopic(id, "smooth");
    });
  };

  return (
    <Layout
      pageTitle="Parent Handbook"
      titleOverride="Parent Handbook | Columbia Children's Center"
      metaDesc="Searchable parent handbook for Columbia Children's Center."
      pathname="/parents/parent-handbook/"
      schemaType="CollectionPage"
    >
      <div className="kb-fullwidth">
        <div className="kb-search-wrap">
          <input
            className="kb-search kb-search-top"
            type="text"
            placeholder="Search the handbook..."
            aria-label="Search the parent handbook"
            value={query}
            onChange={(e) => {
              const nextValue = e.target.value;
              setQuery(nextValue);
              if (nextValue.trim()) {
                setSelectedTopic("");
              }
            }}
          />
        </div>
        <div className="kb-hero">
          {/* <h1 className="kb-title">Parent Handbook</h1> */}
          <p className="kb-subtitle">Find answers to common questions, policies, and procedures for Columbia Children's Center families.</p>
          <div className="kb-toc-wrap">
            <button
              type="button"
              className="kb-toc-toggle"
              aria-expanded={isTocOpen}
              aria-controls="kb-toc-panel"
              onClick={() => setIsTocOpen((prev) => !prev)}
            >
              {isTocOpen ? "Hide Table of Contents" : "Open Table of Contents"}
            </button>
            {isTocOpen && (
              <div id="kb-toc-panel" className="kb-toc-panel">
                <div className="kb-toc-links">
                  {tocItems.map((item) => (
                    <button
                      key={`toc-${item.id}`}
                      type="button"
                      className="kb-toc-link"
                      onClick={() => handleTocJump(item.id)}
                    >
                      {item.title}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="kb-list">
          {exactResults.length === 0 && maybeInterestedResults.length === 0 && (
            <p>No results found for this search and category.</p>
          )}

          {query.trim() && exactResults.length > 0 && (
            <h3 className="kb-results-heading">Best matches</h3>
          )}

          {exactResults.map((item) => (
            <div
              key={item.id}
              className={`kb-item${selectedTopic === item.id ? " is-active" : ""}`}
              ref={sectionRefs.current[item.id]}
            >
              <h2 className="kb-item-title">{renderHighlightedText(item.title)}</h2>
              {renderStructuredContent(item.content, item.title)}
            </div>
          ))}

          {query.trim() && maybeInterestedResults.length > 0 && (
            <h3 className="kb-results-heading kb-results-heading-secondary">
              Maybe interested in this:
            </h3>
          )}

          {maybeInterestedResults.map(({ item, reason }) => (
            <div
              key={`maybe-${item.id}`}
              className="kb-item kb-item-suggestion"
              ref={sectionRefs.current[item.id]}
            >
              <h2 className="kb-item-title">{renderHighlightedText(item.title)}</h2>
              <p className="kb-item-reason">{reason}</p>
              {renderStructuredContent(item.content, item.title)}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
