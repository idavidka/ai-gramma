import type { DerivationalAffix, GrammarExample } from '../../types/aigramma';

/**
 * Derivational morphology — dual suffixes or fixed prefixes.
 * All forms are fictional and accent-free.
 */
export const DERIVATIONAL_AFFIXES: DerivationalAffix[] = [
  {
    id: 'agent',
    form: { afterVowel: 'ro', afterConsonant: { back: 'uro', front: 'iro' } },
    type: 'suffix',
    meaning: 'agent / doer',
    meaningHu: 'cselekvő / foglalkozás',
    produces: 'noun',
    examples: [
      {
        id: 'wf-ag-1',
        aigramma: 'instru + ro → instruro',
        english: 'teach → teacher',
        hungarian: 'tanít → tanár',
      },
      {
        id: 'wf-ag-2',
        aigramma: 'labor + uro → laboruro',
        english: 'work → worker',
        hungarian: 'dolgozik → munkás',
      },
    ],
  },
  {
    id: 'abstract',
    form: { afterVowel: 'so', afterConsonant: { back: 'uso', front: 'iso' } },
    type: 'suffix',
    meaning: 'abstract noun',
    meaningHu: 'elvont főnév',
    produces: 'noun',
    examples: [
      {
        id: 'wf-ab-1',
        aigramma: 'bona → strip -a root bon + so?  Use: bon + uso → bonuso',
        english: 'good → goodness',
        hungarian: 'jó → jóság',
      },
      {
        id: 'wf-ab-2',
        aigramma: 'liber + uso → liberuso',
        english: 'free → freedom',
        hungarian: 'szabad → szabadság',
      },
    ],
  },
  {
    id: 'place',
    form: { afterVowel: 'jo', afterConsonant: { back: 'ujo', front: 'ijo' } },
    type: 'suffix',
    meaning: 'place',
    meaningHu: 'hely',
    produces: 'noun',
    examples: [
      {
        id: 'wf-pl-1',
        aigramma: 'lern + ujo → lernujo',
        english: 'learn → learning place / school',
        hungarian: 'tanul → tanulóhely',
      },
    ],
  },
  {
    id: 'adjective',
    form: { afterVowel: 'na', afterConsonant: { back: 'una', front: 'ina' } },
    type: 'suffix',
    meaning: 'adjective from noun/verb',
    meaningHu: 'melléknévképző',
    produces: 'adjective',
    examples: [
      {
        id: 'wf-adj-1',
        aigramma: 'oro + na → orona',
        english: 'gold → golden',
        hungarian: 'arany → arany (melléknév)',
      },
    ],
  },
  {
    id: 'adverb',
    form: { afterVowel: 'ne', afterConsonant: { back: 'une', front: 'ine' } },
    type: 'suffix',
    meaning: 'adverb from adjective root',
    meaningHu: 'határozóképző',
    produces: 'adverb',
    examples: [
      {
        id: 'wf-adv-1',
        aigramma: 'rapid + une → rapidune',
        english: 'fast → quickly',
        hungarian: 'gyors → gyorsan',
      },
      {
        id: 'wf-adv-2',
        aigramma: 'bona → bone (lexical adverb pair)',
        english: 'good → well',
        hungarian: 'jó → jól',
      },
    ],
  },
  {
    id: 'verbal_noun',
    form: { afterVowel: 'do', afterConsonant: { back: 'udo', front: 'ido' } },
    type: 'suffix',
    meaning: 'verbal noun / process',
    meaningHu: 'igenév / folyamat',
    produces: 'noun',
    examples: [
      {
        id: 'wf-vn-1',
        aigramma: 'instru + do → instrudo',
        english: 'teach → teaching',
        hungarian: 'tanít → tanítás',
      },
    ],
  },
  {
    id: 'patient',
    form: { afterVowel: 'to', afterConsonant: { back: 'uto', front: 'ito' } },
    type: 'suffix',
    meaning: 'patient / result',
    meaningHu: 'elszenvedő / eredmény',
    produces: 'noun',
    examples: [
      {
        id: 'wf-pt-1',
        aigramma: 'instru + to → instruto',
        english: 'teach → student / pupil',
        hungarian: 'tanít → tanítvány',
      },
    ],
  },
  {
    id: 'causative',
    form: { afterVowel: 'ig', afterConsonant: { back: 'uig', front: 'iig' } },
    type: 'suffix',
    meaning: 'causative verb',
    meaningHu: 'műveltető ige',
    produces: 'verb',
    examples: [
      {
        id: 'wf-cau-1',
        aigramma: 'lern + uig → lernuig',
        english: 'learn → make learn / teach',
        hungarian: 'tanul → megtanít',
      },
    ],
  },
  {
    id: 'negation_prefix',
    form: 'ko',
    type: 'prefix',
    meaning: 'opposite / quality negation',
    meaningHu: 'ellentét / minőség tagadása',
    produces: 'same',
    examples: [
      {
        id: 'wf-neg-1',
        aigramma: 'ko + bona → kobona',
        english: 'good → bad',
        hungarian: 'jó → rossz',
      },
      {
        id: 'wf-neg-2',
        aigramma: 'ko + granda → kogranda',
        english: 'big → small',
        hungarian: 'nagy → kicsi',
      },
    ],
  },
];

// Clean awkward abstract example
DERIVATIONAL_AFFIXES[1]!.examples[0] = {
  id: 'wf-ab-1',
  aigramma: 'bon + uso → bonuso',
  english: 'good → goodness',
  hungarian: 'jó → jóság',
};

export const WORD_FAMILY_EXAMPLE: GrammarExample[] = [
  { id: 'fam-1', aigramma: 'instru', english: 'teach (verb stem)', hungarian: 'tanít (igei tő)' },
  { id: 'fam-2', aigramma: 'instruro', english: 'teacher', hungarian: 'tanár' },
  { id: 'fam-3', aigramma: 'instrudo', english: 'teaching', hungarian: 'tanítás' },
  { id: 'fam-4', aigramma: 'instruto', english: 'pupil / student', hungarian: 'tanítvány' },
  { id: 'fam-5', aigramma: 'instruna', english: 'instructive', hungarian: 'oktató jellegű' },
  { id: 'fam-6', aigramma: 'instrujo', english: 'teaching place', hungarian: 'oktatóhely' },
];

export const COMPOUND_RULE = {
  en: `Compounds are stem + stem. The second stem is the head.
No stem change inside compounds. Example: vapor + navo → vapornavo (steamship).`,
  hu: `Az összetételek tő + tő. A második tag a fej.
Nincs tőváltozás. Példa: vapor + navo → vapornavo (gőzhajó).`,
};

export const COMPOUND_EXAMPLES: GrammarExample[] = [
  {
    id: 'cmp-1',
    aigramma: 'kita + tomo → kitatomo',
    english: 'book-house / library',
    hungarian: 'könyvtár (könyv+ház)',
  },
  {
    id: 'cmp-2',
    aigramma: 'sola + lumo → solalumo',
    english: 'sunlight',
    hungarian: 'napfény',
  },
];
