import type { DerivationalAffix, GrammarExample } from '../../types/aigramma';

/**
 * Regular derivational morphology.
 * Related words share a predictable root; suffixes never alter the stem.
 */
export const DERIVATIONAL_AFFIXES: DerivationalAffix[] = [
  {
    id: 'agent',
    form: { back: 'aro', front: 'ero' },
    type: 'suffix',
    meaning: 'agent / doer',
    meaningHu: 'cselekvő / foglalkozás',
    produces: 'noun',
    examples: [
      {
        id: 'wf-ag-1',
        aigramma: 'instru + aro → instruaro',
        hungarian: 'tanít → tanár',
      },
      {
        id: 'wf-ag-2',
        aigramma: 'labor + aro → laboraro',
        hungarian: 'dolgozik → munkás',
      },
    ],
  },
  {
    id: 'abstract',
    form: { back: 'aso', front: 'eso' },
    type: 'suffix',
    meaning: 'abstract noun',
    meaningHu: 'elvont főnév',
    produces: 'noun',
    examples: [
      {
        id: 'wf-ab-1',
        aigramma: 'bona + aso → bonaso',
        hungarian: 'jó → jóság',
      },
      {
        id: 'wf-ab-2',
        aigramma: 'liber + aso → liberaso',
        hungarian: 'szabad → szabadság',
      },
    ],
  },
  {
    id: 'place',
    form: { back: 'ejo', front: 'ejö' },
    type: 'suffix',
    meaning: 'place',
    meaningHu: 'hely',
    produces: 'noun',
    examples: [
      {
        id: 'wf-pl-1',
        aigramma: 'lern + ejo → lernejo',
        hungarian: 'tanul → iskola / tanulóhely',
      },
    ],
  },
  {
    id: 'adjective',
    form: { back: 'a', front: 'e' },
    type: 'suffix',
    meaning: 'adjective from noun/verb',
    meaningHu: 'melléknévképző',
    produces: 'adjective',
    examples: [
      {
        id: 'wf-adj-1',
        aigramma: 'oro + a → oroa',
        hungarian: 'arany → arany (melléknév)',
      },
    ],
  },
  {
    id: 'adverb',
    form: { back: 'e', front: 'e' },
    type: 'suffix',
    meaning: 'adverb from adjective',
    meaningHu: 'határozó a melléknévből',
    produces: 'adverb',
    examples: [
      {
        id: 'wf-adv-1',
        aigramma: 'rapida → rapide',
        hungarian: 'gyors → gyorsan',
      },
      {
        id: 'wf-adv-2',
        aigramma: 'bona → bone',
        hungarian: 'jó → jól',
      },
    ],
  },
  {
    id: 'verbal_noun',
    form: { back: 'ado', front: 'edo' },
    type: 'suffix',
    meaning: 'verbal noun / process',
    meaningHu: 'igenév / folyamat',
    produces: 'noun',
    examples: [
      {
        id: 'wf-vn-1',
        aigramma: 'instru + ado → instruado',
        hungarian: 'tanít → tanítás',
      },
    ],
  },
  {
    id: 'patient',
    form: { back: 'ato', front: 'eto' },
    type: 'suffix',
    meaning: 'patient / result',
    meaningHu: 'elszenvedő / eredmény',
    produces: 'noun',
    examples: [
      {
        id: 'wf-pt-1',
        aigramma: 'instru + ato → instruato',
        hungarian: 'tanít → tanítvány',
      },
    ],
  },
  {
    id: 'causative',
    form: { back: 'ig', front: 'ig' },
    type: 'suffix',
    meaning: 'causative verb',
    meaningHu: 'műveltető ige',
    produces: 'verb',
    examples: [
      {
        id: 'wf-cau-1',
        aigramma: 'lern + ig → lernig',
        hungarian: 'tanul → taníttat / megtanít',
      },
    ],
  },
  {
    id: 'negation_prefix',
    form: 'mal',
    type: 'prefix',
    meaning: 'opposite / negation of quality',
    meaningHu: 'ellentét / minőség tagadása',
    produces: 'same',
    examples: [
      {
        id: 'wf-neg-1',
        aigramma: 'mal + bona → malbona',
        hungarian: 'jó → rossz',
      },
      {
        id: 'wf-neg-2',
        aigramma: 'mal + granda → malgranda',
        hungarian: 'nagy → kicsi',
      },
    ],
  },
];

export const WORD_FAMILY_EXAMPLE: GrammarExample[] = [
  { id: 'fam-1', aigramma: 'instru', hungarian: 'tanít (igei tő)' },
  { id: 'fam-2', aigramma: 'instruaro', hungarian: 'tanár' },
  { id: 'fam-3', aigramma: 'instruado', hungarian: 'tanítás' },
  { id: 'fam-4', aigramma: 'instruato', hungarian: 'tanítvány' },
  { id: 'fam-5', aigramma: 'instrua', hungarian: 'oktató jellegű' },
  { id: 'fam-6', aigramma: 'instruejo', hungarian: 'oktatóhely' },
];

export const COMPOUND_RULE_HU = `Az összetett szavak tövek egymásutánja: főnév/ige + főnév.
A második tag a fej. Példa: vapor + navo → vapornavo (gőzhajó).
Nincs tőváltozás az összetételben sem.`;

export const COMPOUND_EXAMPLES: GrammarExample[] = [
  {
    id: 'cmp-1',
    aigramma: 'kita + tomo → kitatomo',
    hungarian: 'könyvtár (szó szerint: könyv+ház)',
  },
  {
    id: 'cmp-2',
    aigramma: 'sola + lumo → solalumo',
    hungarian: 'napfény',
  },
];
