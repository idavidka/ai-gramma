import type { GrammarExample } from '../../types/aigramma';
import { CASES } from './cases';
import { MODES } from './modes';
import { NUMBER_EXAMPLES } from './numbers';
import { PRONOUN_EXAMPLES } from './pronouns';
import { TENSES } from './tenses';
import { HARMONY_EXAMPLES } from './vowelHarmony';
import { COMPOUND_EXAMPLES, WORD_FAMILY_EXAMPLE } from './wordFormation';

export const SENTENCE_EXAMPLES: GrammarExample[] = [
  // Basic
  {
    id: 'ex-b1',
    aigramma: 'Homa lema.',
    hungarian: 'Az ember él.',
    tags: ['basic', 'svo'],
  },
  {
    id: 'ex-b2',
    aigramma: 'Mi berota edam.',
    hungarian: 'Kenyeret eszem.',
    tags: ['basic', 'accusative'],
  },
  {
    id: 'ex-b3',
    aigramma: 'Tomo granda.',
    hungarian: 'A ház nagy.',
    tags: ['basic', 'adjective'],
  },
  {
    id: 'ex-b4',
    aigramma: 'Bona amiko venade.',
    hungarian: 'Egy jó barát jött.',
    tags: ['basic', 'past'],
  },
  {
    id: 'ex-b5',
    aigramma: 'Solata vidam.',
    hungarian: 'Látom a napot.',
    tags: ['basic'],
  },
  // Intermediate
  {
    id: 'ex-i1',
    aigramma: 'Mi tomoban kitata legam.',
    hungarian: 'A házban könyvet olvasok.',
    tags: ['intermediate'],
  },
  {
    id: 'ex-i2',
    aigramma: 'Amikoom skolebe irava.',
    hungarian: 'A barátom az iskolába fog menni.',
    tags: ['intermediate', 'future', 'possession'],
  },
  {
    id: 'ex-i3',
    aigramma: 'Krajoval skribamak.',
    hungarian: 'Tollal írunk.',
    tags: ['intermediate', 'instrumental'],
  },
  {
    id: 'ex-i4',
    aigramma: 'Vatotal lemalam.',
    hungarian: 'Víz nélkül nem élek.',
    tags: ['intermediate', 'negative', 'abessive'],
  },
  {
    id: 'ex-i5',
    aigramma: 'Kie ti hejmoban lemad?',
    hungarian: 'Hol élsz otthon / a házadban? (Hol laksz?)',
    tags: ['intermediate', 'question'],
  },
  // Advanced
  {
    id: 'ex-a1',
    aigramma: 'Se mi tempo havanom, mi kitata leganom.',
    hungarian: 'Ha lenne időm, könyvet olvasnék.',
    tags: ['advanced', 'conditional'],
  },
  {
    id: 'ex-a2',
    aigramma: 'Homa kiu labora gaja, sed homa kiu dormadala malgaja.',
    hungarian: 'Az ember, aki dolgozik, örül, de aki nem aludt, szomorú.',
    tags: ['advanced', 'relative'],
  },
  {
    id: 'ex-a3',
    aigramma: 'Morga mateno min vilaba iravamak, car amikoonk vartanak.',
    hungarian: 'Holnap reggel a városba megyünk, mert a barátaink várnak.',
    tags: ['advanced', 'future'],
  },
  {
    id: 'ex-a4',
    aigramma: 'Instruaro volaho ke lernantoak komprennenek.',
    hungarian: 'A tanár azt kívánja, hogy a diákok értsenek.',
    tags: ['advanced', 'optative'],
  },
  {
    id: 'ex-a5',
    aigramma: 'Tomobanakom belak, kaj fenestroakom klarak.',
    hungarian: 'A házaimban szépek (a házaim szépek belül), és az ablakaaim tiszták.',
    tags: ['advanced', 'plural', 'possession'],
  },
];

export const ALL_EXAMPLES: GrammarExample[] = [
  ...SENTENCE_EXAMPLES,
  ...HARMONY_EXAMPLES,
  ...TENSES.flatMap((t) => t.examples),
  ...MODES.flatMap((m) => m.examples),
  ...CASES.flatMap((c) => c.examples),
  ...PRONOUN_EXAMPLES,
  ...NUMBER_EXAMPLES,
  ...WORD_FAMILY_EXAMPLE,
  ...COMPOUND_EXAMPLES,
];
