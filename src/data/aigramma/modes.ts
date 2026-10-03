import type { ModeDefinition } from '../../types/aigramma';

/**
 * Exactly five grammatical modes.
 * Verb template: STEM + TENSE + MODE + PERSON
 */
export const MODES: ModeDefinition[] = [
  {
    id: 'indicative',
    name: 'Indicative',
    nameHu: 'Kijelentő mód',
    suffix: { back: '', front: '' },
    explanation: 'Neutral factual statements. Zero mode marker.',
    explanationHu: 'Tényszerű kijelentés. Nincs módjel.',
    formation: 'STEM + TENSE + ∅ + PERSON',
    formationHu: 'TŐ + IDŐ + ∅ + SZEMÉLY',
    examples: [
      {
        id: 'm-ind-1',
        aigramma: 'Mi tomoban lemam.',
        hungarian: 'A házban élek.',
        mode: 'indicative',
        tense: 'present',
        person: '1sg',
      },
      {
        id: 'm-ind-2',
        aigramma: 'Si berota edada.',
        hungarian: 'Ő kenyeret evett.',
        mode: 'indicative',
        tense: 'past',
        person: '3sg',
      },
      {
        id: 'm-ind-3',
        aigramma: 'Min laboravamak.',
        hungarian: 'Dolgozni fogunk.',
        mode: 'indicative',
        tense: 'future',
        person: '1pl',
      },
    ],
  },
  {
    id: 'interrogative',
    name: 'Interrogative',
    nameHu: 'Kérdő mód',
    suffix: { back: 'ko', front: 'kö' },
    explanation:
      'Yes/no questions use mode marker -ko/-kö. Question words stay in situ; no stem change.',
    explanationHu:
      'Az eldöntendő kérdések módjele -ko/-kö. A kérdőszavak a helyükön maradnak; a tő nem változik.',
    formation: 'STEM + TENSE + -ko/-kö + PERSON',
    formationHu: 'TŐ + IDŐ + -ko/-kö + SZEMÉLY',
    examples: [
      {
        id: 'm-int-1',
        aigramma: 'Kalakom?',
        hungarian: 'Járók-e? / Megyek?',
        mode: 'interrogative',
        tense: 'present',
        person: '1sg',
      },
      {
        id: 'm-int-2',
        aigramma: 'Ti edakod?',
        hungarian: 'Eszel?',
        mode: 'interrogative',
        tense: 'present',
        person: '2sg',
      },
      {
        id: 'm-int-3',
        aigramma: 'Si venadako?',
        hungarian: 'Eljött?',
        mode: 'interrogative',
        tense: 'past',
        person: '3sg',
      },
      {
        id: 'm-int-4',
        aigramma: 'Kiu tomoba irava?',
        hungarian: 'Ki fog a házba menni?',
        mode: 'interrogative',
        tense: 'future',
        person: '3sg',
      },
      {
        id: 'm-int-5',
        aigramma: 'Kio ti volad?',
        hungarian: 'Mit akarsz?',
        mode: 'interrogative',
        tense: 'present',
        person: '2sg',
      },
    ],
  },
  {
    id: 'negative',
    name: 'Negative',
    nameHu: 'Tagadó mód',
    suffix: { back: 'la', front: 'le' },
    explanation:
      'Simple verbal negation uses -la/-le. For negating other modes, place the particle ala before the verb.',
    explanationHu:
      'Az egyszerű igei tagadás módjele -la/-le. Más módok tagadásához az ala partikulát tesszük az ige elé.',
    formation: 'STEM + TENSE + -la/-le + PERSON  |  ala + [other mode]',
    formationHu: 'TŐ + IDŐ + -la/-le + SZEMÉLY  |  ala + [más mód]',
    examples: [
      {
        id: 'm-neg-1',
        aigramma: 'Kalalam.',
        hungarian: 'Nem járok.',
        mode: 'negative',
        tense: 'present',
        person: '1sg',
      },
      {
        id: 'm-neg-2',
        aigramma: 'Edalam.',
        hungarian: 'Nem eszem.',
        mode: 'negative',
        tense: 'present',
        person: '1sg',
      },
      {
        id: 'm-neg-3',
        aigramma: 'Si vidadala.',
        hungarian: 'Ő nem látott.',
        mode: 'negative',
        tense: 'past',
        person: '3sg',
      },
      {
        id: 'm-neg-4',
        aigramma: 'Ala irahom!',
        hungarian: 'Bárcsak ne mennék! / Ne menjek csak!',
        mode: 'optative',
        tense: 'present',
        person: '1sg',
        tags: ['combined-negation'],
      },
      {
        id: 'm-neg-5',
        aigramma: 'Ne, mi volalam.',
        hungarian: 'Nem, nem akarom.',
        mode: 'negative',
        tense: 'present',
        person: '1sg',
      },
    ],
  },
  {
    id: 'optative',
    name: 'Optative / Desiderative',
    nameHu: 'Óhajtó / kívánó mód',
    suffix: { back: 'ho', front: 'hö' },
    explanation:
      'Wishes, hopes, soft requests: “may…”, “let…”, “I wish…”. Distinct from conditional.',
    explanationHu:
      'Óhaj, remény, lágy kérés: „bárcsak…”, „hadd…”, „szeretném…”. Elkülönül a feltételes módtól.',
    formation: 'STEM + TENSE + -ho/-hö + PERSON',
    formationHu: 'TŐ + IDŐ + -ho/-hö + SZEMÉLY',
    examples: [
      {
        id: 'm-opt-1',
        aigramma: 'Paco venaho!',
        hungarian: 'Bárcsak eljönne a béke! / Jöjjön el a béke!',
        mode: 'optative',
        tense: 'present',
        person: '3sg',
      },
      {
        id: 'm-opt-2',
        aigramma: 'Mi edahom.',
        hungarian: 'Bárcsak ennék. / Szeretnék enni.',
        mode: 'optative',
        tense: 'present',
        person: '1sg',
      },
      {
        id: 'm-opt-3',
        aigramma: 'Sin lemahónak.',
        hungarian: 'Bárcsak élnének. / Hadd éljenek.',
        mode: 'optative',
        tense: 'present',
        person: '3pl',
      },
      {
        id: 'm-opt-4',
        aigramma: 'Ti vidahod!',
        hungarian: 'Bárcsak látnál!',
        mode: 'optative',
        tense: 'present',
        person: '2sg',
      },
      {
        id: 'm-opt-5',
        aigramma: 'Morga sola brilavaho.',
        hungarian: 'Bárcsak holnap ragyogna a nap.',
        mode: 'optative',
        tense: 'future',
        person: '3sg',
      },
    ],
  },
  {
    id: 'conditional',
    name: 'Conditional',
    nameHu: 'Feltételes mód',
    suffix: { back: 'no', front: 'nö' },
    explanation:
      'Hypothetical and “if… then…” situations. Use tense markers for past/present/future hypotheses; no extra tenses.',
    explanationHu:
      'Hipotetikus és „ha… akkor…” helyzetek. A múlt/jelen/jövő hipotéziseket a három meglévő idővel fejezzük ki; nincs újabb igeidő.',
    formation: 'STEM + TENSE + -no/-nö + PERSON; se… (if) + conditional',
    formationHu: 'TŐ + IDŐ + -no/-nö + SZEMÉLY; se… (ha) + feltételes',
    examples: [
      {
        id: 'm-cond-1',
        aigramma: 'Se mi tempo havanom, mi iranom.',
        hungarian: 'Ha lenne időm, mennék.',
        mode: 'conditional',
        tense: 'present',
        person: '1sg',
      },
      {
        id: 'm-cond-2',
        aigramma: 'Se ti venadanod, mi gajadanom.',
        hungarian: 'Ha eljöttél volna, örültem volna.',
        mode: 'conditional',
        tense: 'past',
        person: '2sg',
      },
      {
        id: 'm-cond-3',
        aigramma: 'Se pluva, min restanomak.',
        hungarian: 'Ha esik az eső, maradnánk.',
        mode: 'conditional',
        tense: 'present',
        person: '1pl',
      },
      {
        id: 'm-cond-4',
        aigramma: 'Mi edanom.',
        hungarian: 'Ennék. (feltételes)',
        mode: 'conditional',
        tense: 'present',
        person: '1sg',
      },
      {
        id: 'm-cond-5',
        aigramma: 'Se si laboravano, si mono havavano.',
        hungarian: 'Ha dolgozna (majd), pénze lenne.',
        mode: 'conditional',
        tense: 'future',
        person: '3sg',
      },
    ],
  },
];

export const MODE_VS_OPTATIVE_NOTE_HU = `Az óhajtó mód (-ho/-hö) kívánságot, reményt fejez ki.
A feltételes mód (-no/-nö) hipotézist és feltételt fejez ki.
„Bárcsak jönne!” → óhajtó.  „Ha jönne, örülnék.” → feltételes.`;
