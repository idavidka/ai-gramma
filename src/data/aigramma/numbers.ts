import type { GrammarExample, NumberEntry } from '../../types/aigramma';

/** Compositional decimal number system. */
export const CARDINALS: NumberEntry[] = [
  { value: 0, word: 'nulo', kind: 'cardinal', meaningHu: 'nulla' },
  { value: 1, word: 'uni', kind: 'cardinal', meaningHu: 'egy' },
  { value: 2, word: 'dua', kind: 'cardinal', meaningHu: 'kettő' },
  { value: 3, word: 'tri', kind: 'cardinal', meaningHu: 'három' },
  { value: 4, word: 'kvar', kind: 'cardinal', meaningHu: 'négy' },
  { value: 5, word: 'kvin', kind: 'cardinal', meaningHu: 'öt' },
  { value: 6, word: 'ses', kind: 'cardinal', meaningHu: 'hat' },
  { value: 7, word: 'sep', kind: 'cardinal', meaningHu: 'hét' },
  { value: 8, word: 'ok', kind: 'cardinal', meaningHu: 'nyolc' },
  { value: 9, word: 'nau', kind: 'cardinal', meaningHu: 'kilenc' },
  { value: 10, word: 'dek', kind: 'cardinal', meaningHu: 'tíz' },
  { value: 11, word: 'dekuni', kind: 'cardinal', meaningHu: 'tizenegy' },
  { value: 12, word: 'dekdua', kind: 'cardinal', meaningHu: 'tizenkettő' },
  { value: 20, word: 'duadek', kind: 'cardinal', meaningHu: 'húsz' },
  { value: 21, word: 'duadekuni', kind: 'cardinal', meaningHu: 'huszonegy' },
  { value: 30, word: 'tridek', kind: 'cardinal', meaningHu: 'harminc' },
  { value: 100, word: 'sent', kind: 'cardinal', meaningHu: 'száz' },
  { value: 101, word: 'sentuni', kind: 'cardinal', meaningHu: 'százegy' },
  { value: 200, word: 'duasent', kind: 'cardinal', meaningHu: 'kétszáz' },
  { value: 1000, word: 'mil', kind: 'cardinal', meaningHu: 'ezer' },
];

export const ORDINALS: NumberEntry[] = CARDINALS.filter(
  (n) => typeof n.value === 'number' && n.value >= 1 && n.value <= 10,
).map((n) => ({
  value: n.value,
  word: `${n.word}a`,
  kind: 'ordinal' as const,
  meaningHu: `${n.meaningHu}. (sorrendi)`,
}));

export const FRACTIONS: NumberEntry[] = [
  { value: '1/2', word: 'duono', kind: 'fraction', meaningHu: 'fél' },
  { value: '1/3', word: 'triono', kind: 'fraction', meaningHu: 'harmad' },
  { value: '1/4', word: 'kvarono', kind: 'fraction', meaningHu: 'negyed' },
];

export const APPROXIMATES: NumberEntry[] = [
  { value: 'some', word: 'kelke', kind: 'approximate', meaningHu: 'néhány' },
  { value: 'many', word: 'multe', kind: 'approximate', meaningHu: 'sok' },
  { value: 'few', word: 'poche', kind: 'approximate', meaningHu: 'kevés' },
  { value: 'all', word: 'ĉio-avoid', kind: 'approximate', meaningHu: 'mind' },
];

// Fix ĉio - use proper alphabet word
APPROXIMATES[3] = { value: 'all', word: 'omne', kind: 'approximate', meaningHu: 'mind / minden' };

export const NUMBER_RULES_HU = {
  singular: 'Egyes szám: alaptő, többes jel nélkül.',
  plural: 'Többes: -ak/-ek a kötött sorrendben (eset után).',
  composition:
    'A számok összetétele: száz + tizes + egyes (sent-dua-dek-tri = 123). Nincs rendhagyó „eleven/twelve” típus.',
  ordinal: 'Sorszám: tőszám + -a (unia, dua, tria…).',
  fraction: 'Tört: tőszám + -ono (duono, triono).',
  date: 'Dátum: jaro + monato + tago — pl. jaro milokdua, monato tria, tago kvin.',
  time: 'Idő: horo + minuto — pl. horo dua, minuto dek.',
};

export const TIME_WORDS = [
  { word: 'nuna', meaningHu: 'most' },
  { word: 'hiera', meaningHu: 'tegnap' },
  { word: 'hodie', meaningHu: 'ma' },
  { word: 'morga', meaningHu: 'holnap' },
  { word: 'poste', meaningHu: 'később' },
  { word: 'ante', meaningHu: 'előbb / előtt' },
  { word: 'mateno', meaningHu: 'reggel' },
  { word: 'tago', meaningHu: 'nap (időegység)' },
  { word: 'vespero', meaningHu: 'este' },
  { word: 'nokto', meaningHu: 'éjszaka' },
  { word: 'semajno', meaningHu: 'hét (idő)' },
  { word: 'monato', meaningHu: 'hónap' },
  { word: 'jaro', meaningHu: 'év' },
  { word: 'horo', meaningHu: 'óra' },
  { word: 'minuto', meaningHu: 'perc' },
];

export const NUMBER_EXAMPLES: GrammarExample[] = [
  {
    id: 'num-1',
    aigramma: 'Mi havam tri kitak.',
    hungarian: 'Három könyvem van.',
  },
  {
    id: 'num-2',
    aigramma: 'Ita unia tago.',
    hungarian: 'Ez az első nap.',
  },
  {
    id: 'num-3',
    aigramma: 'Horo dua minuto dek.',
    hungarian: 'Két óra tíz perc.',
  },
  {
    id: 'num-4',
    aigramma: 'Morga mateno laboravam.',
    hungarian: 'Holnap reggel dolgozni fogok.',
  },
];
