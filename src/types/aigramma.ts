/** Core type system for the Aigramma language model. */

export type Tense = 'past' | 'present' | 'future';

export type Mode =
  | 'indicative'
  | 'interrogative'
  | 'negative'
  | 'optative'
  | 'conditional';

export type Person = '1sg' | '2sg' | '3sg' | '1pl' | '2pl' | '3pl';

export type HarmonyClass = 'back' | 'front';

export type AppLanguage = 'en' | 'hu';

export type PartOfSpeech =
  | 'noun'
  | 'verb'
  | 'adjective'
  | 'adverb'
  | 'pronoun'
  | 'numeral'
  | 'conjunction'
  | 'preposition'
  | 'interjection'
  | 'particle'
  | 'question_word';

export type VocabularyCategory =
  | 'people'
  | 'family'
  | 'body'
  | 'everyday'
  | 'nature'
  | 'animals'
  | 'food'
  | 'verbs'
  | 'adjectives'
  | 'time'
  | 'places'
  | 'abstract'
  | 'colors'
  | 'clothes'
  | 'transport'
  | 'work'
  | 'education'
  | 'emotions'
  | 'communication'
  | 'numbers'
  | 'other';

export type CaseId =
  | 'nominative'
  | 'accusative'
  | 'dative'
  | 'genitive'
  | 'inessive'
  | 'illative'
  | 'elative'
  | 'adessive'
  | 'ablative'
  | 'allative'
  | 'instrumental'
  | 'abessive';

/**
 * Dual-shape suffix:
 * - afterVowel: consonant-initial form (attach to vowel-final bases)
 * - afterConsonant: vowel-initial forms with front/back harmony
 */
export interface DualSuffix {
  afterVowel: string;
  afterConsonant: {
    back: string;
    front: string;
  };
}

export interface CaseDefinition {
  id: CaseId;
  name: string;
  nameHu: string;
  meaning: string;
  meaningHu: string;
  suffix: DualSuffix;
  usage: string;
  usageHu: string;
  examples: GrammarExample[];
}

export interface PersonDefinition {
  id: Person;
  label: string;
  labelHu: string;
  pronoun: string;
  pronounMeaning: string;
  pronounMeaningHu: string;
  verbSuffix: DualSuffix;
  possessiveSuffix: DualSuffix;
}

export interface TenseDefinition {
  id: Tense;
  name: string;
  nameHu: string;
  suffix: DualSuffix;
  explanation: string;
  explanationHu: string;
  examples: GrammarExample[];
}

export interface ModeDefinition {
  id: Mode;
  name: string;
  nameHu: string;
  suffix: DualSuffix;
  explanation: string;
  explanationHu: string;
  formation: string;
  formationHu: string;
  examples: GrammarExample[];
}

export interface VocabularyEntry {
  id: string;
  word: string;
  meaning: string;
  meaningHu: string;
  category: VocabularyCategory;
  partOfSpeech: PartOfSpeech;
  notes?: string;
  related?: string[];
}

export interface GrammarExample {
  id: string;
  aigramma: string;
  english: string;
  hungarian: string;
  gloss?: string;
  tense?: Tense;
  mode?: Mode;
  person?: Person;
  tags?: string[];
}

export interface AlphabetLetter {
  letter: string;
  ipa: string;
  /** Plain-language how-to-say it (English UI). */
  phonetic: string;
  /** Plain-language how-to-say it (Hungarian UI). */
  phoneticHu: string;
  example: string;
  exampleMeaning: string;
  exampleMeaningHu: string;
  type: 'vowel' | 'consonant';
  harmony?: HarmonyClass | 'neutral';
  /** Optional articulatory hint for consonants, e.g. "bilabial stop". */
  manner?: string;
  mannerHu?: string;
}

export interface NumberEntry {
  value: number | string;
  word: string;
  kind: 'cardinal' | 'ordinal' | 'fraction' | 'approximate';
  meaning: string;
  meaningHu: string;
}

export interface DerivationalAffix {
  id: string;
  form: DualSuffix | string;
  type: 'prefix' | 'suffix';
  meaning: string;
  meaningHu: string;
  produces: PartOfSpeech | 'same';
  examples: GrammarExample[];
}

export interface GrammarChapter {
  id: string;
  title: string;
  titleHu: string;
  section: string;
  sectionHu: string;
  summary: string;
  summaryHu: string;
  path: string;
  keywords: string[];
}

export interface SearchItem {
  id: string;
  title: string;
  subtitle?: string;
  kind: 'grammar' | 'vocabulary' | 'case' | 'suffix' | 'example' | 'mode' | 'tense';
  path: string;
  keywords: string[];
}

export function formatDualSuffix(suffix: DualSuffix): string {
  const v = suffix.afterVowel || '∅';
  const b = suffix.afterConsonant.back || '∅';
  const f = suffix.afterConsonant.front || '∅';
  return `-${v} / -${b}|-${f}`;
}
