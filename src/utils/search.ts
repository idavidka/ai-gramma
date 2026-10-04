import { CASES } from '../data/aigramma/cases';
import { ALL_EXAMPLES } from '../data/aigramma/examples';
import { GRAMMAR_CHAPTERS } from '../data/aigramma/grammar';
import { MODES } from '../data/aigramma/modes';
import { CORE_SUFFIX_TABLE, dualLabel } from '../data/aigramma/suffixes';
import { TENSES } from '../data/aigramma/tenses';
import { VOCABULARY } from '../data/aigramma/vocabulary';
import type { SearchItem } from '../types/aigramma';

function normalize(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{M}/gu, '');
}

export function buildSearchIndex(): SearchItem[] {
  const items: SearchItem[] = [];

  for (const chapter of GRAMMAR_CHAPTERS) {
    items.push({
      id: `grammar-${chapter.id}`,
      title: chapter.title,
      subtitle: chapter.summary,
      kind: 'grammar',
      path: chapter.path,
      keywords: [
        chapter.title,
        chapter.titleHu,
        chapter.summary,
        chapter.summaryHu,
        ...chapter.keywords,
      ],
    });
  }

  for (const word of VOCABULARY) {
    items.push({
      id: `vocab-${word.id}`,
      title: word.word,
      subtitle: `${word.meaning} · ${word.meaningHu}`,
      kind: 'vocabulary',
      path: `/vocabulary/${word.id}`,
      keywords: [
        word.word,
        word.meaning,
        word.meaningHu,
        word.category,
        word.partOfSpeech,
      ],
    });
  }

  for (const c of CASES) {
    items.push({
      id: `case-${c.id}`,
      title: c.name,
      subtitle: `${c.meaning} · ${dualLabel(c.suffix)}`,
      kind: 'case',
      path: '/cases',
      keywords: [
        c.name,
        c.nameHu,
        c.meaning,
        c.meaningHu,
        c.suffix.afterVowel,
        c.suffix.afterConsonant.back,
        c.suffix.afterConsonant.front,
      ],
    });
  }

  for (const s of CORE_SUFFIX_TABLE) {
    items.push({
      id: `suffix-${s.id}`,
      title: s.name,
      subtitle: dualLabel(s.suffix),
      kind: 'suffix',
      path: '/reference',
      keywords: [
        s.name,
        s.nameHu,
        s.category,
        s.suffix.afterVowel,
        s.suffix.afterConsonant.back,
        s.suffix.afterConsonant.front,
      ],
    });
  }

  for (const tense of TENSES) {
    items.push({
      id: `tense-${tense.id}`,
      title: tense.name,
      subtitle: tense.explanation,
      kind: 'tense',
      path: '/verbs',
      keywords: [tense.name, tense.nameHu, tense.explanation, tense.explanationHu],
    });
  }

  for (const mode of MODES) {
    items.push({
      id: `mode-${mode.id}`,
      title: mode.name,
      subtitle: mode.explanation,
      kind: 'mode',
      path: '/modes',
      keywords: [
        mode.name,
        mode.nameHu,
        mode.explanation,
        mode.explanationHu,
        mode.formation,
        mode.formationHu,
      ],
    });
  }

  for (const ex of ALL_EXAMPLES) {
    items.push({
      id: `example-${ex.id}`,
      title: ex.aigramma,
      subtitle: ex.english,
      kind: 'example',
      path: '/examples',
      keywords: [
        ex.aigramma,
        ex.english,
        ex.hungarian,
        ...(ex.tags ?? []),
      ],
    });
  }

  return items;
}

let cachedIndex: SearchItem[] | null = null;

export function getSearchIndex(): SearchItem[] {
  if (!cachedIndex) cachedIndex = buildSearchIndex();
  return cachedIndex;
}

export function searchAll(query: string, limit = 40): SearchItem[] {
  const q = normalize(query.trim());
  if (!q) return [];

  const scored = getSearchIndex()
    .map((item) => {
      const hay = normalize(
        [item.title, item.subtitle ?? '', ...item.keywords].join(' '),
      );
      let score = 0;
      if (normalize(item.title).startsWith(q)) score += 50;
      if (normalize(item.title).includes(q)) score += 30;
      if (hay.includes(q)) score += 10;
      for (const kw of item.keywords) {
        if (normalize(kw).startsWith(q)) score += 5;
      }
      return { item, score };
    })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score);

  return scored.slice(0, limit).map((x) => x.item);
}
