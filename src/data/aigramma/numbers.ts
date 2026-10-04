import type { GrammarExample, NumberEntry } from '../../types/aigramma';

export const CARDINALS: NumberEntry[] = [
  { value: 0, word: 'nulo', kind: 'cardinal', meaning: 'zero', meaningHu: 'nulla' },
  { value: 1, word: 'uni', kind: 'cardinal', meaning: 'one', meaningHu: 'egy' },
  { value: 2, word: 'dua', kind: 'cardinal', meaning: 'two', meaningHu: 'kettő' },
  { value: 3, word: 'tri', kind: 'cardinal', meaning: 'three', meaningHu: 'három' },
  { value: 4, word: 'kvar', kind: 'cardinal', meaning: 'four', meaningHu: 'négy' },
  { value: 5, word: 'kvin', kind: 'cardinal', meaning: 'five', meaningHu: 'öt' },
  { value: 6, word: 'ses', kind: 'cardinal', meaning: 'six', meaningHu: 'hat' },
  { value: 7, word: 'sep', kind: 'cardinal', meaning: 'seven', meaningHu: 'hét' },
  { value: 8, word: 'ok', kind: 'cardinal', meaning: 'eight', meaningHu: 'nyolc' },
  { value: 9, word: 'nau', kind: 'cardinal', meaning: 'nine', meaningHu: 'kilenc' },
  { value: 10, word: 'dek', kind: 'cardinal', meaning: 'ten', meaningHu: 'tíz' },
  { value: 11, word: 'dekuni', kind: 'cardinal', meaning: 'eleven', meaningHu: 'tizenegy' },
  { value: 12, word: 'dekdua', kind: 'cardinal', meaning: 'twelve', meaningHu: 'tizenkettő' },
  { value: 20, word: 'duadek', kind: 'cardinal', meaning: 'twenty', meaningHu: 'húsz' },
  { value: 21, word: 'duadekuni', kind: 'cardinal', meaning: 'twenty-one', meaningHu: 'huszonegy' },
  { value: 30, word: 'tridek', kind: 'cardinal', meaning: 'thirty', meaningHu: 'harminc' },
  { value: 100, word: 'sent', kind: 'cardinal', meaning: 'hundred', meaningHu: 'száz' },
  { value: 101, word: 'sentuni', kind: 'cardinal', meaning: 'one hundred one', meaningHu: 'százegy' },
  { value: 200, word: 'duasent', kind: 'cardinal', meaning: 'two hundred', meaningHu: 'kétszáz' },
  { value: 1000, word: 'mil', kind: 'cardinal', meaning: 'thousand', meaningHu: 'ezer' },
];

export const ORDINALS: NumberEntry[] = CARDINALS.filter(
  (n) => typeof n.value === 'number' && n.value >= 1 && n.value <= 10,
).map((n) => ({
  value: n.value,
  word: `${n.word}a`,
  kind: 'ordinal' as const,
  meaning: `${n.meaning} (ordinal)`,
  meaningHu: `${n.meaningHu}. (sorrendi)`,
}));

export const FRACTIONS: NumberEntry[] = [
  { value: '1/2', word: 'duono', kind: 'fraction', meaning: 'half', meaningHu: 'fél' },
  { value: '1/3', word: 'triono', kind: 'fraction', meaning: 'third', meaningHu: 'harmad' },
  { value: '1/4', word: 'kvarono', kind: 'fraction', meaning: 'quarter', meaningHu: 'negyed' },
];

export const APPROXIMATES: NumberEntry[] = [
  { value: 'some', word: 'kelke', kind: 'approximate', meaning: 'some', meaningHu: 'néhány' },
  { value: 'many', word: 'multe', kind: 'approximate', meaning: 'many', meaningHu: 'sok' },
  { value: 'few', word: 'poche', kind: 'approximate', meaning: 'few', meaningHu: 'kevés' },
  { value: 'all', word: 'omne', kind: 'approximate', meaning: 'all', meaningHu: 'mind' },
];

export const NUMBER_RULES = {
  singular: {
    en: 'Singular: bare stem, no plural marker.',
    hu: 'Egyes szám: alaptő, többes jel nélkül.',
  },
  plural: {
    en: 'Plural: -n after vowels; -un/-in after consonants (fixed order: after case).',
    hu: 'Többes: magánhangzó után -n; mássalhangzó után -un/-in (az eset után).',
  },
  composition: {
    en: 'Numbers compose: hundred + tens + ones (sent-dua-dek-tri = 123). No irregular teens.',
    hu: 'A számok összetétele: száz + tizes + egyes. Nincs rendhagyó „eleven” típus.',
  },
  ordinal: {
    en: 'Ordinal: cardinal + -a (unia, dua, tria…).',
    hu: 'Sorszám: tőszám + -a.',
  },
  fraction: {
    en: 'Fraction: cardinal + -ono (duono, triono).',
    hu: 'Tört: tőszám + -ono.',
  },
  date: {
    en: 'Date: jaro + monato + tago — e.g. jaro milokdua, monato tria, tago kvin.',
    hu: 'Dátum: jaro + monato + tago.',
  },
  time: {
    en: 'Clock time: horo + minuto — e.g. horo dua, minuto dek.',
    hu: 'Óra: horo + minuto.',
  },
};

export const TIME_WORDS = [
  { word: 'nuna', meaning: 'now', meaningHu: 'most' },
  { word: 'hiera', meaning: 'yesterday', meaningHu: 'tegnap' },
  { word: 'hodie', meaning: 'today', meaningHu: 'ma' },
  { word: 'morga', meaning: 'tomorrow', meaningHu: 'holnap' },
  { word: 'poste', meaning: 'later', meaningHu: 'később' },
  { word: 'ante', meaning: 'before / earlier', meaningHu: 'előbb / előtt' },
  { word: 'mateno', meaning: 'morning', meaningHu: 'reggel' },
  { word: 'tago', meaning: 'day', meaningHu: 'nap (idő)' },
  { word: 'vespero', meaning: 'evening', meaningHu: 'este' },
  { word: 'nokto', meaning: 'night', meaningHu: 'éjszaka' },
  { word: 'semajno', meaning: 'week', meaningHu: 'hét' },
  { word: 'monato', meaning: 'month', meaningHu: 'hónap' },
  { word: 'jaro', meaning: 'year', meaningHu: 'év' },
  { word: 'horo', meaning: 'hour', meaningHu: 'óra' },
  { word: 'minuto', meaning: 'minute', meaningHu: 'perc' },
];

export const NUMBER_EXAMPLES: GrammarExample[] = [
  {
    id: 'num-1',
    aigramma: 'Ma havam tri kitan.',
    english: 'I have three books.',
    hungarian: 'Három könyvem van.',
    gloss: 'kita-n (V-stem plural)',
  },
  {
    id: 'num-2',
    aigramma: 'Ita unia tago.',
    english: 'This is the first day.',
    hungarian: 'Ez az első nap.',
  },
  {
    id: 'num-3',
    aigramma: 'Horo dua minuto dek.',
    english: 'Two hours and ten minutes.',
    hungarian: 'Két óra tíz perc.',
  },
  {
    id: 'num-4',
    aigramma: 'Morga mateno laborabum.',
    english: 'Tomorrow morning I will work.',
    hungarian: 'Holnap reggel dolgozni fogok.',
  },
  {
    id: 'num-5',
    aigramma: 'Ma havam dua kivin.',
    english: 'I have two bicycles.',
    hungarian: 'Két biciklim van.',
    gloss: 'kiv-in (C-stem front plural)',
  },
];
