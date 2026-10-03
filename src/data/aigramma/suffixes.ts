import type { DualSuffix } from '../../types/aigramma';

/** Fixed noun suffix order — never rearranged. */
export const NOUN_SUFFIX_ORDER = [
  { slot: 'stem', label: 'STEM', labelHu: 'TŐ' },
  { slot: 'case', label: 'CASE', labelHu: 'ESET' },
  { slot: 'plural', label: 'PLURAL', labelHu: 'TÖBBES' },
  { slot: 'possessive', label: 'POSSESSIVE', labelHu: 'BIRTOKOS' },
] as const;

/** Fixed verb suffix order — never rearranged. */
export const VERB_SUFFIX_ORDER = [
  { slot: 'stem', label: 'STEM', labelHu: 'TŐ' },
  { slot: 'tense', label: 'TENSE', labelHu: 'IDŐ' },
  { slot: 'mode', label: 'MODE', labelHu: 'MÓD' },
  { slot: 'person', label: 'PERSON', labelHu: 'SZEMÉLY' },
] as const;

/**
 * Plural: -n after vowel; -un/-in after consonant.
 * tomo → tomon | kiv → kivin | hop → hopun
 */
export const PLURAL_SUFFIX: DualSuffix = {
  afterVowel: 'n',
  afterConsonant: { back: 'un', front: 'in' },
};

export function dualLabel(suffix: DualSuffix): string {
  return `-${suffix.afterVowel || '∅'} / -${suffix.afterConsonant.back}|-${suffix.afterConsonant.front}`;
}

export const CORE_SUFFIX_TABLE: {
  id: string;
  category: string;
  name: string;
  nameHu: string;
  suffix: DualSuffix;
}[] = [
  { id: 'pl', category: 'plural', name: 'Plural', nameHu: 'Többes szám', suffix: PLURAL_SUFFIX },
  { id: 'acc', category: 'case', name: 'Accusative', nameHu: 'Tárgyeset', suffix: { afterVowel: 't', afterConsonant: { back: 'ut', front: 'it' } } },
  { id: 'dat', category: 'case', name: 'Dative', nameHu: 'Részeshatározó', suffix: { afterVowel: 'r', afterConsonant: { back: 'ur', front: 'ir' } } },
  { id: 'gen', category: 'case', name: 'Genitive', nameHu: 'Birtokos eset', suffix: { afterVowel: 's', afterConsonant: { back: 'us', front: 'is' } } },
  { id: 'ine', category: 'case', name: 'Inessive', nameHu: 'Belül', suffix: { afterVowel: 'k', afterConsonant: { back: 'uk', front: 'ik' } } },
  { id: 'ill', category: 'case', name: 'Illative', nameHu: 'Belé', suffix: { afterVowel: 'p', afterConsonant: { back: 'up', front: 'ip' } } },
  { id: 'ela', category: 'case', name: 'Elative', nameHu: 'Belülről', suffix: { afterVowel: 'f', afterConsonant: { back: 'uf', front: 'if' } } },
  { id: 'ade', category: 'case', name: 'Adessive', nameHu: 'Nál/közel', suffix: { afterVowel: 'l', afterConsonant: { back: 'ul', front: 'il' } } },
  { id: 'abl', category: 'case', name: 'Ablative', nameHu: 'Tól', suffix: { afterVowel: 'm', afterConsonant: { back: 'um', front: 'im' } } },
  { id: 'all', category: 'case', name: 'Allative', nameHu: 'Felé', suffix: { afterVowel: 'g', afterConsonant: { back: 'ug', front: 'ig' } } },
  { id: 'ins', category: 'case', name: 'Instrumental', nameHu: 'Eszköz', suffix: { afterVowel: 'v', afterConsonant: { back: 'uv', front: 'iv' } } },
  { id: 'abe', category: 'case', name: 'Abessive', nameHu: 'Nélkül', suffix: { afterVowel: 'z', afterConsonant: { back: 'uz', front: 'iz' } } },
  { id: 'pst', category: 'tense', name: 'Past', nameHu: 'Múlt', suffix: { afterVowel: 'd', afterConsonant: { back: 'ud', front: 'id' } } },
  { id: 'fut', category: 'tense', name: 'Future', nameHu: 'Jövő', suffix: { afterVowel: 'b', afterConsonant: { back: 'ub', front: 'ib' } } },
  { id: 'int', category: 'mode', name: 'Interrogative', nameHu: 'Kérdő', suffix: { afterVowel: 'h', afterConsonant: { back: 'uh', front: 'ih' } } },
  { id: 'neg', category: 'mode', name: 'Negative', nameHu: 'Tagadó', suffix: { afterVowel: 'x', afterConsonant: { back: 'ux', front: 'ix' } } },
  { id: 'opt', category: 'mode', name: 'Optative', nameHu: 'Óhajtó', suffix: { afterVowel: 'w', afterConsonant: { back: 'uw', front: 'iw' } } },
  { id: 'cond', category: 'mode', name: 'Conditional', nameHu: 'Feltételes', suffix: { afterVowel: 'y', afterConsonant: { back: 'uy', front: 'iy' } } },
  { id: 'poss1sg', category: 'possessive', name: 'My', nameHu: 'Enyém', suffix: { afterVowel: 'm', afterConsonant: { back: 'um', front: 'im' } } },
  { id: 'poss2sg', category: 'possessive', name: 'Your', nameHu: 'Tied', suffix: { afterVowel: 'c', afterConsonant: { back: 'uc', front: 'ic' } } },
  { id: 'poss3sg', category: 'possessive', name: 'His/Her', nameHu: 'Övé', suffix: { afterVowel: 'j', afterConsonant: { back: 'uj', front: 'ij' } } },
  { id: 'poss1pl', category: 'possessive', name: 'Our', nameHu: 'Miénk', suffix: { afterVowel: 'min', afterConsonant: { back: 'umin', front: 'imin' } } },
  { id: 'poss2pl', category: 'possessive', name: 'Your (pl)', nameHu: 'Tietek', suffix: { afterVowel: 'cin', afterConsonant: { back: 'ucin', front: 'icin' } } },
  { id: 'poss3pl', category: 'possessive', name: 'Their', nameHu: 'Övék', suffix: { afterVowel: 'jin', afterConsonant: { back: 'ujin', front: 'ijin' } } },
];

export const NO_STEM_CHANGE = {
  en: 'Aigramma never changes stems. Always STEM + grammatical element — no man→men, go→went.',
  hu: 'Az Aigramma soha nem változtatja a tövet. Mindig TŐ + nyelvtani elem — nincs man→men, go→went.',
};

export const NO_ASSIMILATION = {
  en: 'No consonant assimilation. What you write is what you attach: word = stem + chosen suffix shape.',
  hu: 'Nincs mássalhangzó-hasonulás. Amit leírsz, azt toldod: szó = tő + választott toldalékalak.',
};

export const DUAL_SUFFIX_RULE = {
  en: 'Every suffix has a consonant-initial shape (after vowels) and a vowel-initial shape (after consonants), with u/i harmony.',
  hu: 'Minden toldaléknak van mássalhangzóval kezdődő alakja (magánhangzó után) és magánhangzóval kezdődő alakja (mássalhangzó után), u/i harmóniával.',
};
