import type { TenseDefinition } from '../../types/aigramma';

/**
 * Exactly three tenses. No perfect, continuous, or pluperfect morphology.
 * Finer time is expressed with cases, adverbs, and context.
 */
export const TENSES: TenseDefinition[] = [
  {
    id: 'present',
    name: 'Present',
    nameHu: 'Jelen idő',
    suffix: { back: '', front: '' },
    explanation:
      'Zero tense marker. The bare stem plus person ending denotes present / general / habitual action.',
    explanationHu:
      'Nincs időjel. A tő + személyrag jelenti a jelenbeli, általános vagy szokásos cselekvést.',
    examples: [
      {
        id: 't-prs-1',
        aigramma: 'Kalam.',
        hungarian: 'Járók / Megyek (gyalog).',
        tense: 'present',
        mode: 'indicative',
        person: '1sg',
      },
      {
        id: 't-prs-2',
        aigramma: 'Edam.',
        hungarian: 'Eszem.',
        tense: 'present',
        mode: 'indicative',
        person: '1sg',
      },
      {
        id: 't-prs-3',
        aigramma: 'Vidam.',
        hungarian: 'Látok.',
        tense: 'present',
        mode: 'indicative',
        person: '1sg',
      },
      {
        id: 't-prs-4',
        aigramma: 'Si solata vid.',
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
    suffix: { back: 'da', front: 'de' },
    explanation: 'Past marker -da/-de after the stem, before mode and person.',
    explanationHu: 'A múlt jele -da/-de a tő után, a mód és a személy előtt.',
    examples: [
      {
        id: 't-pst-1',
        aigramma: 'Kaladam.',
        hungarian: 'Jártam.',
        tense: 'past',
        mode: 'indicative',
        person: '1sg',
      },
      {
        id: 't-pst-2',
        aigramma: 'Edadam.',
        hungarian: 'Ettem.',
        tense: 'past',
        mode: 'indicative',
        person: '1sg',
      },
      {
        id: 't-pst-3',
        aigramma: 'Vidadam.',
        hungarian: 'Láttam.',
        tense: 'past',
        mode: 'indicative',
        person: '1sg',
      },
      {
        id: 't-pst-4',
        aigramma: 'Min skolebe iradamak.',
        hungarian: 'Az iskolába mentünk.',
        tense: 'past',
        mode: 'indicative',
        person: '1pl',
      },
    ],
  },
  {
    id: 'future',
    name: 'Future',
    nameHu: 'Jövő idő',
    suffix: { back: 'va', front: 've' },
    explanation: 'Future marker -va/-ve after the stem, before mode and person.',
    explanationHu: 'A jövő jele -va/-ve a tő után, a mód és a személy előtt.',
    examples: [
      {
        id: 't-fut-1',
        aigramma: 'Kalavam.',
        hungarian: 'Járni fogok.',
        tense: 'future',
        mode: 'indicative',
        person: '1sg',
      },
      {
        id: 't-fut-2',
        aigramma: 'Edavam.',
        hungarian: 'Enni fogok.',
        tense: 'future',
        mode: 'indicative',
        person: '1sg',
      },
      {
        id: 't-fut-3',
        aigramma: 'Vidavam.',
        hungarian: 'Látni fogok.',
        tense: 'future',
        mode: 'indicative',
        person: '1sg',
      },
      {
        id: 't-fut-4',
        aigramma: 'Morga si venava.',
        hungarian: 'Holnap ő jönni fog.',
        tense: 'future',
        mode: 'indicative',
        person: '3sg',
      },
    ],
  },
];

export const TENSE_SCOPE_NOTE_HU = `Az Aigrammában pontosan három igeidő van: múlt, jelen, jövő.
Nincs külön befejezett, folyamatos vagy régmúlt alak.
A finomabb időviszonyokat határozókkal (nuna, hiera, morga), esetekkel és kontextussal fejezzük ki.`;
