import { CASES } from '../data/aigramma/cases';
import { MODES } from '../data/aigramma/modes';
import { PERSONS } from '../data/aigramma/persons';
import { PLURAL_SUFFIX } from '../data/aigramma/suffixes';
import { TENSES } from '../data/aigramma/tenses';
import type { CaseId, DualSuffix, Mode, Person, Tense } from '../types/aigramma';
import { resolveDualSuffix } from './vowelHarmony';

function attach(base: string, piece: string): string {
  return piece ? `${base}${piece}` : base;
}

function nextPiece(
  originalStem: string,
  currentForm: string,
  suffix: DualSuffix,
): string {
  return resolveDualSuffix(originalStem, currentForm, suffix);
}

/**
 * Noun: STEM + CASE + PLURAL + POSSESSIVE
 * Each step chooses C- vs V-initial shape from the current ending.
 * Harmony for V-initial shapes follows the original stem.
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
    word = attach(word, nextPiece(stem, word, caseDef.suffix));
  }

  if (plural) {
    word = attach(word, nextPiece(stem, word, PLURAL_SUFFIX));
  }

  if (person) {
    const personDef = PERSONS.find((p) => p.id === person);
    if (personDef) {
      word = attach(word, nextPiece(stem, word, personDef.possessiveSuffix));
    }
  }

  return word;
}

/**
 * Verb: STEM + TENSE + MODE + PERSON
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
    word = attach(word, nextPiece(stem, word, tenseDef.suffix));
  }

  const modeDef = MODES.find((m) => m.id === mode);
  if (modeDef) {
    word = attach(word, nextPiece(stem, word, modeDef.suffix));
  }

  const personDef = PERSONS.find((p) => p.id === person);
  if (personDef) {
    word = attach(word, nextPiece(stem, word, personDef.verbSuffix));
  }

  return word;
}

export function nounBreakdown(options: {
  stem: string;
  caseId?: CaseId;
  plural?: boolean;
  person?: Person | null;
}): { label: string; labelHu: string; value: string }[] {
  const { stem, caseId = 'nominative', plural = false, person = null } = options;
  const caseDef = CASES.find((c) => c.id === caseId)!;
  let word = stem;
  const parts: { label: string; labelHu: string; value: string }[] = [
    { label: 'STEM', labelHu: 'TŐ', value: stem },
  ];

  const casePiece = nextPiece(stem, word, caseDef.suffix);
  parts.push({ label: 'CASE', labelHu: 'ESET', value: casePiece || '∅' });
  word = attach(word, casePiece);

  if (plural) {
    const pl = nextPiece(stem, word, PLURAL_SUFFIX);
    parts.push({ label: 'PLURAL', labelHu: 'TÖBBES', value: pl });
    word = attach(word, pl);
  }

  if (person) {
    const personDef = PERSONS.find((p) => p.id === person)!;
    const poss = nextPiece(stem, word, personDef.possessiveSuffix);
    parts.push({ label: 'POSSESSIVE', labelHu: 'BIRTOKOS', value: poss });
  }

  return parts;
}

export function verbBreakdown(options: {
  stem: string;
  tense?: Tense;
  mode?: Mode;
  person?: Person;
}): { label: string; labelHu: string; value: string }[] {
  const {
    stem,
    tense = 'present',
    mode = 'indicative',
    person = '1sg',
  } = options;
  const tenseDef = TENSES.find((t) => t.id === tense)!;
  const modeDef = MODES.find((m) => m.id === mode)!;
  const personDef = PERSONS.find((p) => p.id === person)!;

  let word = stem;
  const tensePiece = nextPiece(stem, word, tenseDef.suffix);
  word = attach(word, tensePiece);
  const modePiece = nextPiece(stem, word, modeDef.suffix);
  word = attach(word, modePiece);
  const personPiece = nextPiece(stem, word, personDef.verbSuffix);

  return [
    { label: 'STEM', labelHu: 'TŐ', value: stem },
    { label: 'TENSE', labelHu: 'IDŐ', value: tensePiece || '∅' },
    { label: 'MODE', labelHu: 'MÓD', value: modePiece || '∅' },
    { label: 'PERSON', labelHu: 'SZEMÉLY', value: personPiece || '∅' },
  ];
}
