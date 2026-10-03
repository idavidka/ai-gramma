import type { GrammarExample } from '../../types/aigramma';
import { PERSONS } from './persons';

export const PERSONAL_PRONOUNS = PERSONS.map((p) => ({
  person: p.id,
  form: p.pronoun,
  meaning: p.pronounMeaning,
  meaningHu: p.pronounMeaningHu,
}));

export const DEMONSTRATIVES = [
  { form: 'ita', meaning: 'this', meaningHu: 'ez', note: 'near' },
  { form: 'ata', meaning: 'that', meaningHu: 'az', note: 'far' },
  { form: 'itan', meaning: 'these', meaningHu: 'ezek', note: 'near plural' },
  { form: 'atan', meaning: 'those', meaningHu: 'azok', note: 'far plural' },
];

export const INTERROGATIVE_WORDS = [
  { form: 'kiu', meaning: 'who', meaningHu: 'ki' },
  { form: 'kio', meaning: 'what', meaningHu: 'mi' },
  { form: 'kie', meaning: 'where', meaningHu: 'hol' },
  { form: 'kiam', meaning: 'when', meaningHu: 'mikor' },
  { form: 'kial', meaning: 'why', meaningHu: 'miért' },
  { form: 'kiel', meaning: 'how', meaningHu: 'hogyan' },
  { form: 'kifel', meaning: 'which', meaningHu: 'melyik' },
  { form: 'kiom', meaning: 'how many / how much', meaningHu: 'hány / mennyi' },
  { form: 'kies', meaning: 'whose', meaningHu: 'kié' },
];

export const RELATIVE_PRONOUNS = [
  { form: 'kiu', meaning: 'who / that', meaningHu: 'aki' },
  { form: 'kio', meaning: 'which / that', meaningHu: 'ami' },
  { form: 'kie', meaning: 'where', meaningHu: 'ahol' },
];

export const POSSESSIVE_NOTE = {
  en: `Possession is marked on the noun with dual-shaped endings:
tomo-m (my house), tomo-c (your house), tomo-j (his/her house)…
After a consonant: hop-um, hop-uc, hop-uj…
Pronouns stay optional when the ending is clear.`,
  hu: `A birtoklást a főnéven jelöljük kettős alakú ragokkal:
tomo-m (házam), tomo-c (házad), tomo-j (háza)…
Mássalhangzó után: hop-um, hop-uc, hop-uj…
A névmás opcionális, ha a rag egyértelmű.`,
};

export const PRONOUN_EXAMPLES: GrammarExample[] = [
  {
    id: 'pr-1',
    aigramma: 'Kalam.',
    english: 'I walk. (no pronoun — -m marks 1SG)',
    hungarian: 'Járók. (névmás nélkül — a -m jelöli az 1SG-t)',
  },
  {
    id: 'pr-2',
    aigramma: 'Ma kalam, ca kalac.',
    english: 'I walk, you walk. (contrast)',
    hungarian: 'Én járok, te jársz. (szembeállítás)',
  },
  {
    id: 'pr-3',
    aigramma: 'Tomom granda.',
    english: 'My house is big.',
    hungarian: 'A házam nagy.',
  },
  {
    id: 'pr-4',
    aigramma: 'Hopum kogranda.',
    english: 'My tent is small.',
    hungarian: 'A sátram kicsi.',
    gloss: 'hop-um (C-stem + back)',
  },
  {
    id: 'pr-5',
    aigramma: 'Ita kita bona.',
    english: 'This book is good.',
    hungarian: 'Ez a könyv jó.',
  },
  {
    id: 'pr-6',
    aigramma: 'Kiu venad?',
    english: 'Who came?',
    hungarian: 'Ki jött?',
  },
  {
    id: 'pr-7',
    aigramma: 'Homa kiu labora gaja.',
    english: 'The person who works is glad.',
    hungarian: 'Az ember, aki dolgozik, örül.',
  },
];
