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

export interface HarmonicSuffix {
  back: string;
  front: string;
}

export interface CaseDefinition {
  id: CaseId;
  name: string;
  nameHu: string;
  meaning: string;
  meaningHu: string;
  suffix: HarmonicSuffix;
  usage: string;
  usageHu: string;
  examples: GrammarExample[];
}

export interface PersonDefinition {
  id: Person;
  label: string;
  labelHu: string;
  pronoun: string;
  pronounMeaningHu: string;
  verbSuffix: HarmonicSuffix;
  possessiveSuffix: HarmonicSuffix;
}

export interface TenseDefinition {
  id: Tense;
  name: string;
  nameHu: string;
  suffix: HarmonicSuffix | { back: string; front: string };
  explanation: string;
  explanationHu: string;
  examples: GrammarExample[];
}

export interface ModeDefinition {
  id: Mode;
  name: string;
  nameHu: string;
  suffix: HarmonicSuffix;
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
  hungarian: string;
  english?: string;
  gloss?: string;
  tense?: Tense;
  mode?: Mode;
  person?: Person;
  tags?: string[];
}

export interface AlphabetLetter {
  letter: string;
  ipa: string;
  example: string;
  exampleMeaningHu: string;
  type: 'vowel' | 'consonant';
  harmony?: HarmonyClass | 'neutral';
}

export interface NumberEntry {
  value: number | string;
  word: string;
  kind: 'cardinal' | 'ordinal' | 'fraction' | 'approximate';
  meaningHu: string;
}

export interface DerivationalAffix {
  id: string;
  form: HarmonicSuffix | string;
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
  summary: string;
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
