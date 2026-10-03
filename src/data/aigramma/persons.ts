import type { PersonDefinition } from '../../types/aigramma';

/**
 * Six grammatical persons.
 * Verb person and noun possession use parallel, fully regular suffixes.
 */
export const PERSONS: PersonDefinition[] = [
  {
    id: '1sg',
    label: '1SG',
    labelHu: '1. személy egyes szám',
    pronoun: 'mi',
    pronounMeaningHu: 'én',
    verbSuffix: { back: 'm', front: 'm' },
    possessiveSuffix: { back: 'om', front: 'öm' },
  },
  {
    id: '2sg',
    label: '2SG',
    labelHu: '2. személy egyes szám',
    pronoun: 'ti',
    pronounMeaningHu: 'te',
    verbSuffix: { back: 'd', front: 'd' },
    possessiveSuffix: { back: 'od', front: 'öd' },
  },
  {
    id: '3sg',
    label: '3SG',
    labelHu: '3. személy egyes szám',
    pronoun: 'si',
    pronounMeaningHu: 'ő',
    verbSuffix: { back: '', front: '' },
    possessiveSuffix: { back: 'o', front: 'ö' },
  },
  {
    id: '1pl',
    label: '1PL',
    labelHu: '1. személy többes szám',
    pronoun: 'min',
    pronounMeaningHu: 'mi',
    verbSuffix: { back: 'mak', front: 'mek' },
    possessiveSuffix: { back: 'onk', front: 'önk' },
  },
  {
    id: '2pl',
    label: '2PL',
    labelHu: '2. személy többes szám',
    pronoun: 'tin',
    pronounMeaningHu: 'ti',
    verbSuffix: { back: 'tak', front: 'tek' },
    possessiveSuffix: { back: 'otok', front: 'ötök' },
  },
  {
    id: '3pl',
    label: '3PL',
    labelHu: '3. személy többes szám',
    pronoun: 'sin',
    pronounMeaningHu: 'ők',
    verbSuffix: { back: 'nak', front: 'nek' },
    possessiveSuffix: { back: 'ojuk', front: 'öjük' },
  },
];

export const PRONOUN_OPTIONALITY_HU = {
  title: 'A névmások opcionálisak',
  body: `Ha az ige vagy a főnév személyragja egyértelműen jelöli a személyt, a névmás elhagyható.
A névmást akkor használjuk, ha hangsúlyozni, szembeállítani vagy tisztázni akarjuk a személyt.

Példák:
• Kalam. — Járók. (névmás nélkül)
• Mi kalam. — Én járok. (hangsúly: én, nem más)
• Tomoom. — A házam.
• Mi tomoom. — Az én házam. (hangsúlyos birtoklás)`,
};
