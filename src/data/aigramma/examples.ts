import type { GrammarExample } from '../../types/aigramma';
import { CASES } from './cases';
import { MODES } from './modes';
import { NUMBER_EXAMPLES } from './numbers';
import { PRONOUN_EXAMPLES } from './pronouns';
import { TENSES } from './tenses';
import { HARMONY_EXAMPLES } from './vowelHarmony';
import { COMPOUND_EXAMPLES, WORD_FAMILY_EXAMPLE } from './wordFormation';

export const SENTENCE_EXAMPLES: GrammarExample[] = [
  {
    id: 'ex-b1',
    aigramma: 'Homa lema.',
    english: 'A person lives.',
    hungarian: 'Az ember él.',
    tags: ['basic', 'svo'],
  },
  {
    id: 'ex-b2',
    aigramma: 'Ma berot edam.',
    english: 'I eat bread.',
    hungarian: 'Kenyeret eszem.',
    tags: ['basic', 'accusative'],
  },
  {
    id: 'ex-b3',
    aigramma: 'Tomo granda.',
    english: 'The house is big.',
    hungarian: 'A ház nagy.',
    tags: ['basic', 'adjective'],
  },
  {
    id: 'ex-b4',
    aigramma: 'Bona amiko venad.',
    english: 'A good friend came.',
    hungarian: 'Egy jó barát jött.',
    tags: ['basic', 'past'],
  },
  {
    id: 'ex-b5',
    aigramma: 'Solat vidam.',
    english: 'I see the sun.',
    hungarian: 'Látom a napot.',
    tags: ['basic'],
  },
  {
    id: 'ex-b6',
    aigramma: 'Tomon granda.',
    english: 'The houses are big.',
    hungarian: 'A házak nagyok.',
    tags: ['basic', 'plural'],
    gloss: 'tomo-n',
  },
  {
    id: 'ex-b7',
    aigramma: 'Hopun kogranda.',
    english: 'The tents are small.',
    hungarian: 'A sátorok kicsik.',
    tags: ['basic', 'plural'],
    gloss: 'hop-un',
  },
  {
    id: 'ex-i1',
    aigramma: 'Ma tomok kitat legam.',
    english: 'I read a book in the house.',
    hungarian: 'A házban könyvet olvasok.',
    tags: ['intermediate'],
  },
  {
    id: 'ex-i2',
    aigramma: 'Amikom skolep irab.',
    english: 'My friend will go into the school.',
    hungarian: 'A barátom az iskolába fog menni.',
    tags: ['intermediate', 'future', 'possession'],
  },
  {
    id: 'ex-i3',
    aigramma: 'Krajov skribamin.',
    english: 'We write with a pen.',
    hungarian: 'Tollal írunk.',
    tags: ['intermediate', 'instrumental'],
  },
  {
    id: 'ex-i4',
    aigramma: 'Vatoz lemaxum.',
    english: 'I do not live without water.',
    hungarian: 'Víz nélkül nem élek.',
    tags: ['intermediate', 'negative', 'abessive'],
  },
  {
    id: 'ex-i5',
    aigramma: 'Kie ca hejmok lemac?',
    english: 'Where do you live at home?',
    hungarian: 'Hol laksz otthon?',
    tags: ['intermediate', 'question'],
  },
  {
    id: 'ex-a1',
    aigramma: 'Ke ma tempo havayum, ma kitat legayum.',
    english: 'If I had time, I would read a book.',
    hungarian: 'Ha lenne időm, könyvet olvasnék.',
    tags: ['advanced', 'conditional'],
  },
  {
    id: 'ex-a2',
    aigramma: 'Homa kiu labora gaja, sed homa kiu dormadux kogaja.',
    english: 'A person who works is glad, but one who did not sleep is unhappy.',
    hungarian: 'Az ember, aki dolgozik, örül, de aki nem aludt, boldogtalan.',
    tags: ['advanced', 'relative'],
  },
  {
    id: 'ex-a3',
    aigramma: 'Morga mateno man vilap irabumin, car amikomin vartanin.',
    english: 'Tomorrow morning we will go into the city, because our friends are waiting.',
    hungarian: 'Holnap reggel a városba megyünk, mert a barátaink várnak.',
    tags: ['advanced', 'future'],
  },
  {
    id: 'ex-a4',
    aigramma: 'Instruro volaw ke lernanton komprennin.',
    english: 'The teacher wishes that the students understand.',
    hungarian: 'A tanár azt kívánja, hogy a diákok értsenek.',
    tags: ['advanced', 'optative'],
  },
  {
    id: 'ex-a5',
    aigramma: 'Tomokunum belan, kaj fenestronum klaran.',
    english: 'In my houses (they are) beautiful, and my windows are clear.',
    hungarian: 'A házaimban szépek, és az ablakaaim tiszták.',
    tags: ['advanced', 'plural', 'possession'],
    gloss: 'tomo-k-un-um',
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
