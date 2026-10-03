import type { GrammarExample } from '../../types/aigramma';
import { PERSONS } from './persons';

export const PERSONAL_PRONOUNS = PERSONS.map((p) => ({
  person: p.id,
  form: p.pronoun,
  meaningHu: p.pronounMeaningHu,
}));

export const DEMONSTRATIVES = [
  { form: 'ita', meaningHu: 'ez', note: 'közeli' },
  { form: 'ta', meaningHu: 'az', note: 'távoli' },
  { form: 'itak', meaningHu: 'ezek', note: 'közeli többes' },
  { form: 'tak', meaningHu: 'azok', note: 'távoli többes' },
];

export const INTERROGATIVE_WORDS = [
  { form: 'kiu', meaningHu: 'ki', meaningEn: 'who' },
  { form: 'kio', meaningHu: 'mi', meaningEn: 'what' },
  { form: 'kie', meaningHu: 'hol', meaningEn: 'where' },
  { form: 'kiam', meaningHu: 'mikor', meaningEn: 'when' },
  { form: 'kial', meaningHu: 'miért', meaningEn: 'why' },
  { form: 'kiel', meaningHu: 'hogyan', meaningEn: 'how' },
  { form: 'kiu-el', meaningHu: 'melyik', meaningEn: 'which' },
  { form: 'kiom', meaningHu: 'hány / mennyi', meaningEn: 'how many / how much' },
  { form: 'kies', meaningHu: 'kié', meaningEn: 'whose' },
];

export const RELATIVE_PRONOUNS = [
  { form: 'kiu', meaningHu: 'aki' },
  { form: 'kio', meaningHu: 'ami' },
  { form: 'kie', meaningHu: 'ahol' },
];

export const POSSESSIVE_NOTE_HU = `A birtoklást elsősorban főnévi birtokos személyragokkal fejezzük ki:
tomo-om (házam), tomo-od (házad), tomo-o (háza)…
A birtokos névmások (mia, tia…) ritkák és hangsúlyosak; a rendszer a ragozott főnevet részesíti előnyben.`;

export const PRONOUN_EXAMPLES: GrammarExample[] = [
  {
    id: 'pr-1',
    aigramma: 'Kalam.',
    hungarian: 'Járók. (névmás nélkül — a -m jelöli az 1SG-t)',
  },
  {
    id: 'pr-2',
    aigramma: 'Mi kalam, ti kalad.',
    hungarian: 'Én járok, te jársz. (szembeállítás)',
  },
  {
    id: 'pr-3',
    aigramma: 'Tomoom granda.',
    hungarian: 'A házam nagy.',
  },
  {
    id: 'pr-4',
    aigramma: 'Ita kita bona.',
    hungarian: 'Ez a könyv jó.',
  },
  {
    id: 'pr-5',
    aigramma: 'Kiu venade?',
    hungarian: 'Ki jött?',
  },
  {
    id: 'pr-6',
    aigramma: 'Homa kiu labora gaja.',
    hungarian: 'Az ember, aki dolgozik, örül.',
  },
];
