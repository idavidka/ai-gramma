import type { TenseDefinition } from '../../types/aigramma';

/**
 * Exactly three tenses. Dual-shaped tense markers.
 * Present = zero. Past = -d / -ud|-id. Future = -b / -ub|-ib.
 */
export const TENSES: TenseDefinition[] = [
  {
    id: 'present',
    name: 'Present',
    nameHu: 'Jelen idő',
    suffix: { afterVowel: '', afterConsonant: { back: '', front: '' } },
    explanation:
      'Zero tense marker. Stem + mode + person = present / habitual action.',
    explanationHu:
      'Nincs időjel. Tő + mód + személy = jelenbeli / szokásos cselekvés.',
    examples: [
      {
        id: 't-prs-1',
        aigramma: 'Kalam.',
        english: 'I walk.',
        hungarian: 'Járók.',
        tense: 'present',
        mode: 'indicative',
        person: '1sg',
      },
      {
        id: 't-prs-2',
        aigramma: 'Edam.',
        english: 'I eat.',
        hungarian: 'Eszem.',
        tense: 'present',
        mode: 'indicative',
        person: '1sg',
      },
      {
        id: 't-prs-3',
        aigramma: 'Vidam.',
        english: 'I see.',
        hungarian: 'Látok.',
        tense: 'present',
        mode: 'indicative',
        person: '1sg',
      },
      {
        id: 't-prs-4',
        aigramma: 'Sa solat vida.',
        english: 'He/she sees the sun.',
        hungarian: 'Ő látja a napot.',
        tense: 'present',
        mode: 'indicative',
        person: '3sg',
      },
    ],
  },
  {
    id: 'past',
    name: 'Past',
    nameHu: 'Múlt idő',
    suffix: { afterVowel: 'd', afterConsonant: { back: 'ud', front: 'id' } },
    explanation: 'Past marker -d after vowels; -ud/-id after consonants.',
    explanationHu: 'Múlt jel: magánhangzó után -d; mássalhangzó után -ud/-id.',
    examples: [
      {
        id: 't-pst-1',
        aigramma: 'Kaladum.',
        english: 'I walked.',
        hungarian: 'Jártam.',
        tense: 'past',
        mode: 'indicative',
        person: '1sg',
        gloss: 'kala-d-um',
      },
      {
        id: 't-pst-2',
        aigramma: 'Edadum.',
        english: 'I ate.',
        hungarian: 'Ettem.',
        tense: 'past',
        mode: 'indicative',
        person: '1sg',
      },
      {
        id: 't-pst-3',
        aigramma: 'Vidadum.',
        english: 'I saw.',
        hungarian: 'Láttam.',
        tense: 'past',
        mode: 'indicative',
        person: '1sg',
      },
      {
        id: 't-pst-4',
        aigramma: 'Man skolep iradumin.',
        english: 'We went into the school.',
        hungarian: 'Az iskolába mentünk.',
        tense: 'past',
        mode: 'indicative',
        person: '1pl',
        gloss: 'ira-d-umin',
      },
    ],
  },
  {
    id: 'future',
    name: 'Future',
    nameHu: 'Jövő idő',
    suffix: { afterVowel: 'b', afterConsonant: { back: 'ub', front: 'ib' } },
    explanation: 'Future marker -b after vowels; -ub/-ib after consonants.',
    explanationHu: 'Jövő jel: magánhangzó után -b; mássalhangzó után -ub/-ib.',
    examples: [
      {
        id: 't-fut-1',
        aigramma: 'Kalabum.',
        english: 'I will walk.',
        hungarian: 'Járni fogok.',
        tense: 'future',
        mode: 'indicative',
        person: '1sg',
        gloss: 'kala-b-um',
      },
      {
        id: 't-fut-2',
        aigramma: 'Edabum.',
        english: 'I will eat.',
        hungarian: 'Enni fogok.',
        tense: 'future',
        mode: 'indicative',
        person: '1sg',
      },
      {
        id: 't-fut-3',
        aigramma: 'Vidabum.',
        english: 'I will see.',
        hungarian: 'Látni fogok.',
        tense: 'future',
        mode: 'indicative',
        person: '1sg',
      },
      {
        id: 't-fut-4',
        aigramma: 'Morga sa venab.',
        english: 'Tomorrow he/she will come.',
        hungarian: 'Holnap ő jönni fog.',
        tense: 'future',
        mode: 'indicative',
        person: '3sg',
      },
    ],
  },
];

export const TENSE_SCOPE_NOTE = {
  en: `Aigramma has exactly three tenses: past, present, future.
There is no perfect, progressive, or pluperfect morphology.
Finer time uses adverbs (nuna, hiera, morga), cases, and context.`,
  hu: `Az Aigrammában pontosan három igeidő van: múlt, jelen, jövő.
Nincs befejezett, folyamatos vagy régmúlt alak.
A finomabb időt határozók (nuna, hiera, morga), esetek és kontextus fejezik ki.`,
};
