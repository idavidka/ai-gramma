import type { HarmonicSuffix } from '../../types/aigramma';

/** Fixed noun suffix order — never rearranged. */
export const NOUN_SUFFIX_ORDER = [
  { slot: 'stem', label: 'TŐ', labelEn: 'STEM' },
  { slot: 'case', label: 'ESET', labelEn: 'CASE' },
  { slot: 'plural', label: 'TÖBBES', labelEn: 'PLURAL' },
  { slot: 'possessive', label: 'BIRTOKOS', labelEn: 'POSSESSIVE' },
] as const;

/** Fixed verb suffix order — never rearranged. */
export const VERB_SUFFIX_ORDER = [
  { slot: 'stem', label: 'TŐ', labelEn: 'STEM' },
  { slot: 'tense', label: 'IDŐ', labelEn: 'TENSE' },
  { slot: 'mode', label: 'MÓD', labelEn: 'MODE' },
  { slot: 'person', label: 'SZEMÉLY', labelEn: 'PERSON' },
] as const;

export const PLURAL_SUFFIX: HarmonicSuffix = { back: 'ak', front: 'ek' };

export const PLURAL_RULE_HU = `A többes szám jele -ak/-ek.
A tő soha nem változik (nincs man→men típusú váltakozás).
Sorrend: TŐ + ESET + TÖBBES + BIRTOKOS.
Példa: tomo → tomoak (házak); tomoban + ak + om → tomobanakom (a házaimban).`;

export const CORE_SUFFIX_TABLE: {
  id: string;
  category: string;
  nameHu: string;
  suffix: HarmonicSuffix;
  notes?: string;
}[] = [
  { id: 'pl', category: 'plural', nameHu: 'Többes szám', suffix: PLURAL_SUFFIX },
  { id: 'acc', category: 'case', nameHu: 'Tárgyeset', suffix: { back: 'ta', front: 'te' } },
  { id: 'dat', category: 'case', nameHu: 'Részeshatározó', suffix: { back: 'ra', front: 're' } },
  { id: 'gen', category: 'case', nameHu: 'Birtokos eset', suffix: { back: 'na', front: 'ne' } },
  { id: 'ine', category: 'case', nameHu: 'Belül', suffix: { back: 'ban', front: 'ben' } },
  { id: 'ill', category: 'case', nameHu: 'Belé', suffix: { back: 'ba', front: 'be' } },
  { id: 'ela', category: 'case', nameHu: 'Belülről', suffix: { back: 'bol', front: 'böl' } },
  { id: 'ade', category: 'case', nameHu: 'Nál/nél', suffix: { back: 'dal', front: 'del' } },
  { id: 'abl', category: 'case', nameHu: 'Tól/től', suffix: { back: 'tol', front: 'töl' } },
  { id: 'all', category: 'case', nameHu: 'Hoz/hez', suffix: { back: 'hoz', front: 'hez' } },
  { id: 'ins', category: 'case', nameHu: 'Val/vel', suffix: { back: 'val', front: 'vel' } },
  { id: 'abe', category: 'case', nameHu: 'Nélkül', suffix: { back: 'tal', front: 'tel' } },
  { id: 'pst', category: 'tense', nameHu: 'Múlt', suffix: { back: 'da', front: 'de' } },
  { id: 'fut', category: 'tense', nameHu: 'Jövő', suffix: { back: 'va', front: 've' } },
  { id: 'int', category: 'mode', nameHu: 'Kérdő', suffix: { back: 'ko', front: 'kö' } },
  { id: 'neg', category: 'mode', nameHu: 'Tagadó', suffix: { back: 'la', front: 'le' } },
  { id: 'opt', category: 'mode', nameHu: 'Óhajtó', suffix: { back: 'ho', front: 'hö' } },
  { id: 'cond', category: 'mode', nameHu: 'Feltételes', suffix: { back: 'no', front: 'nö' } },
  { id: 'poss1sg', category: 'possessive', nameHu: 'Enyém', suffix: { back: 'om', front: 'öm' } },
  { id: 'poss2sg', category: 'possessive', nameHu: 'Tied', suffix: { back: 'od', front: 'öd' } },
  { id: 'poss3sg', category: 'possessive', nameHu: 'Övé', suffix: { back: 'o', front: 'ö' } },
  { id: 'poss1pl', category: 'possessive', nameHu: 'Miénk', suffix: { back: 'onk', front: 'önk' } },
  { id: 'poss2pl', category: 'possessive', nameHu: 'Tietek', suffix: { back: 'otok', front: 'ötök' } },
  { id: 'poss3pl', category: 'possessive', nameHu: 'Övék', suffix: { back: 'ojuk', front: 'öjük' } },
];

export const NO_STEM_CHANGE_HU = `Az Aigramma nem ismer tőváltakozást.
A tő mindig változatlan marad: STEM + GRAMMATIKAI ELEM.
Nincs man→men, foot→feet, go→went típusú váltás.`;

export const NO_ASSIMILATION_HU = `Az Aigramma nem alkalmaz mássalhangzó-hasonulást a toldalékolásban.
A toldalékok közvetlenül kapcsolódnak a szabály szerint.
A tanuló mindig láthatja: szó = tő + toldalék — rejtett átalakulás nélkül.`;
