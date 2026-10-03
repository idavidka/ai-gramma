import { CASES } from '../data/aigramma/cases';
import { MODES } from '../data/aigramma/modes';
import { PERSONS } from '../data/aigramma/persons';
import { PLURAL_SUFFIX } from '../data/aigramma/suffixes';
import { TENSES } from '../data/aigramma/tenses';
import type {
  CaseId,
  HarmonicSuffix,
  Mode,
  Person,
  Tense,
} from '../types/aigramma';
import { pickSuffix } from './vowelHarmony';

function attach(stem: string, piece: string): string {
  return piece ? `${stem}${piece}` : stem;
}

function harmonic(stem: string, suffix: HarmonicSuffix): string {
  return pickSuffix(stem, suffix);
}

/**
 * Noun: STEM + CASE + PLURAL + POSSESSIVE
 * Harmony is always computed from the original stem.
 */
export function buildNoun(options: {
  stem: string;
  caseId?: CaseId;
  plural?: boolean;
  person?: Person | null;
}): string {
  const { stem, caseId = 'nominative', plural = false, person = null } = options;
  let word = stem;

  const caseDef = CASES.find((c) => c.id === caseId);
  if (caseDef) {
    word = attach(word, harmonic(stem, caseDef.suffix));
  }

  if (plural) {
    word = attach(word, harmonic(stem, PLURAL_SUFFIX));
  }

  if (person) {
    const personDef = PERSONS.find((p) => p.id === person);
    if (personDef) {
      word = attach(word, harmonic(stem, personDef.possessiveSuffix));
    }
  }

  return word;
}

/**
 * Verb: STEM + TENSE + MODE + PERSON
 * Harmony is always computed from the original stem.
 */
export function buildVerb(options: {
  stem: string;
  tense?: Tense;
  mode?: Mode;
  person?: Person;
}): string {
  const {
    stem,
    tense = 'present',
    mode = 'indicative',
    person = '1sg',
  } = options;

  let word = stem;

  const tenseDef = TENSES.find((t) => t.id === tense);
  if (tenseDef) {
    word = attach(word, harmonic(stem, tenseDef.suffix));
  }

  const modeDef = MODES.find((m) => m.id === mode);
  if (modeDef) {
    word = attach(word, harmonic(stem, modeDef.suffix));
  }

  const personDef = PERSONS.find((p) => p.id === person);
  if (personDef) {
    word = attach(word, harmonic(stem, personDef.verbSuffix));
  }

  return word;
}

export function nounBreakdown(options: {
  stem: string;
  caseId?: CaseId;
  plural?: boolean;
  person?: Person | null;
}): { label: string; value: string }[] {
  const { stem, caseId = 'nominative', plural = false, person = null } = options;
  const caseDef = CASES.find((c) => c.id === caseId)!;
  const parts: { label: string; value: string }[] = [
    { label: 'TŐ', value: stem },
    {
      label: 'ESET',
      value: harmonic(stem, caseDef.suffix) || '∅',
    },
  ];
  if (plural) {
    parts.push({ label: 'TÖBBES', value: harmonic(stem, PLURAL_SUFFIX) });
  }
  if (person) {
    const personDef = PERSONS.find((p) => p.id === person)!;
    parts.push({
      label: 'BIRTOKOS',
      value: harmonic(stem, personDef.possessiveSuffix),
    });
  }
  return parts;
}

export function verbBreakdown(options: {
  stem: string;
  tense?: Tense;
  mode?: Mode;
  person?: Person;
}): { label: string; value: string }[] {
  const {
    stem,
    tense = 'present',
    mode = 'indicative',
    person = '1sg',
  } = options;
  const tenseDef = TENSES.find((t) => t.id === tense)!;
  const modeDef = MODES.find((m) => m.id === mode)!;
  const personDef = PERSONS.find((p) => p.id === person)!;
  return [
    { label: 'TŐ', value: stem },
    { label: 'IDŐ', value: harmonic(stem, tenseDef.suffix) || '∅' },
    { label: 'MÓD', value: harmonic(stem, modeDef.suffix) || '∅' },
    { label: 'SZEMÉLY', value: harmonic(stem, personDef.verbSuffix) || '∅' },
  ];
}
