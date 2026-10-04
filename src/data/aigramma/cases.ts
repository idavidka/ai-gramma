import type { CaseDefinition } from '../../types/aigramma';
import { dualLabel } from './suffixes';

/**
 * 12 cases — fully fictional dual suffixes (C-initial after V, V-initial after C).
 */
export const CASES: CaseDefinition[] = [
  {
    id: 'nominative',
    name: 'Nominative',
    nameHu: 'Alanyeset',
    meaning: 'subject / citation form',
    meaningHu: 'alany, szótári alak',
    suffix: { afterVowel: '', afterConsonant: { back: '', front: '' } },
    usage: 'Marks the subject. Zero ending.',
    usageHu: 'Az alanyt jelöli. Nincs toldalék.',
    examples: [
      {
        id: 'c-nom-1',
        aigramma: 'Homa kalam.',
        english: 'A person walks. / The person walks.',
        hungarian: 'Az ember jár.',
        gloss: 'person walk-PRS-1SG',
      },
      {
        id: 'c-nom-2',
        aigramma: 'Tomo granda.',
        english: 'The house is big.',
        hungarian: 'A ház nagy.',
      },
    ],
  },
  {
    id: 'accusative',
    name: 'Accusative',
    nameHu: 'Tárgyeset',
    meaning: 'direct object',
    meaningHu: 'tárgy',
    suffix: { afterVowel: 't', afterConsonant: { back: 'ut', front: 'it' } },
    usage: 'Marks the direct object.',
    usageHu: 'A közvetlen tárgyat jelöli.',
    examples: [
      {
        id: 'c-acc-1',
        aigramma: 'Ma kitat vidam.',
        english: 'I see the book.',
        hungarian: 'Látom a könyvet.',
        gloss: 'I book-ACC see-PRS-1SG',
      },
      {
        id: 'c-acc-2',
        aigramma: 'Ca berot edac.',
        english: 'You eat the bread.',
        hungarian: 'Eszed a kenyeret.',
      },
      {
        id: 'c-acc-3',
        aigramma: 'Sa kivit prena.',
        english: 'He/she takes the bicycle.',
        hungarian: 'Ő elveszi / fogja a biciklit.',
        gloss: 'kiv-ACC (front C-stem → -it)',
      },
      {
        id: 'c-acc-4',
        aigramma: 'Ma hoput vidam.',
        english: 'I see the tent.',
        hungarian: 'Látom a sátrat.',
        gloss: 'hop-ACC (back C-stem → -ut)',
      },
    ],
  },
  {
    id: 'dative',
    name: 'Dative',
    nameHu: 'Részeshatározó',
    meaning: 'to / for (recipient)',
    meaningHu: 'nekem/neki; valakinek',
    suffix: { afterVowel: 'r', afterConsonant: { back: 'ur', front: 'ir' } },
    usage: 'Recipient or beneficiary.',
    usageHu: 'Címzett vagy kedvezményezett.',
    examples: [
      {
        id: 'c-dat-1',
        aigramma: 'Ma kitat homar donam.',
        english: 'I give the book to the person.',
        hungarian: 'A könyvet az embernek adom.',
      },
      {
        id: 'c-dat-2',
        aigramma: 'Amikor verdor diram.',
        english: 'I tell the truth to the friend.',
        hungarian: 'A barátnak igazat mondok.',
      },
    ],
  },
  {
    id: 'genitive',
    name: 'Genitive',
    nameHu: 'Birtokos eset',
    meaning: 'of / belonging to',
    meaningHu: 'valaminek a…',
    suffix: { afterVowel: 's', afterConsonant: { back: 'us', front: 'is' } },
    usage: 'Relational “of”. Possession on the noun uses possessive suffixes.',
    usageHu: 'A „valaminek a…” viszony. A birtoklást birtokos személyrag jelöli.',
    examples: [
      {
        id: 'c-gen-1',
        aigramma: 'tomos pordo',
        english: 'the door of the house',
        hungarian: 'a ház ajtaja',
      },
      {
        id: 'c-gen-2',
        aigramma: 'vilas centro',
        english: 'the center of the city',
        hungarian: 'a város központja',
      },
    ],
  },
  {
    id: 'inessive',
    name: 'Inessive',
    nameHu: 'Belüliség',
    meaning: 'in / inside',
    meaningHu: 'belül',
    suffix: { afterVowel: 'k', afterConsonant: { back: 'uk', front: 'ik' } },
    usage: 'Static location inside.',
    usageHu: 'Statikus hely: belül.',
    examples: [
      {
        id: 'c-ine-1',
        aigramma: 'Ma tomok lemam.',
        english: 'I live in the house.',
        hungarian: 'A házban élek.',
      },
      {
        id: 'c-ine-2',
        aigramma: 'Kita kerek resta.',
        english: 'The book stays in the garden.',
        hungarian: 'A könyv a kertben marad.',
      },
      {
        id: 'c-ine-3',
        aigramma: 'Sa hopuk dorma.',
        english: 'He/she sleeps in the tent.',
        hungarian: 'Ő a sátorban alszik.',
        gloss: 'hop-INE (-uk)',
      },
    ],
  },
  {
    id: 'illative',
    name: 'Illative',
    nameHu: 'Belé irányuló',
    meaning: 'into',
    meaningHu: 'belé',
    suffix: { afterVowel: 'p', afterConsonant: { back: 'up', front: 'ip' } },
    usage: 'Motion into an interior.',
    usageHu: 'Mozgás valami belsejébe.',
    examples: [
      {
        id: 'c-ill-1',
        aigramma: 'Ma tomop iram.',
        english: 'I go into the house.',
        hungarian: 'A házba megyek.',
      },
      {
        id: 'c-ill-2',
        aigramma: 'Sa skolep venad.',
        english: 'He/she came into the school.',
        hungarian: 'Ő az iskolába jött.',
      },
    ],
  },
  {
    id: 'elative',
    name: 'Elative',
    nameHu: 'Belülről',
    meaning: 'out of / from inside',
    meaningHu: 'belülről ki',
    suffix: { afterVowel: 'f', afterConsonant: { back: 'uf', front: 'if' } },
    usage: 'Motion out from an interior.',
    usageHu: 'Mozgás belülről kifelé.',
    examples: [
      {
        id: 'c-ela-1',
        aigramma: 'Ma tomof venam.',
        english: 'I come out of the house.',
        hungarian: 'A házból jövök.',
      },
      {
        id: 'c-ela-2',
        aigramma: 'Vato maraf flu.',
        english: 'Water flows out of the sea.',
        hungarian: 'A víz a tengerből folyik.',
      },
    ],
  },
  {
    id: 'adessive',
    name: 'Adessive',
    nameHu: 'Közelség',
    meaning: 'at / by / near',
    meaningHu: 'nál; mellett',
    suffix: { afterVowel: 'l', afterConsonant: { back: 'ul', front: 'il' } },
    usage: 'Static location at or near.',
    usageHu: 'Statikus hely: mellett / közelében.',
    examples: [
      {
        id: 'c-ade-1',
        aigramma: 'Ma pordol vartam.',
        english: 'I wait at the door.',
        hungarian: 'Az ajtónál várok.',
      },
      {
        id: 'c-ade-2',
        aigramma: 'Amiko tabelol sida.',
        english: 'The friend sits at the table.',
        hungarian: 'A barát az asztalnál ül.',
      },
    ],
  },
  {
    id: 'ablative',
    name: 'Ablative',
    nameHu: 'Távolodás',
    meaning: 'from / away from',
    meaningHu: 'tól; el',
    suffix: { afterVowel: 'm', afterConsonant: { back: 'um', front: 'im' } },
    usage: 'Motion or separation away from a point.',
    usageHu: 'Mozgás vagy elválás egy ponttól.',
    examples: [
      {
        id: 'c-abl-1',
        aigramma: 'Ma vilam venam.',
        english: 'I come from the city.',
        hungarian: 'A várostól / városból jövök.',
      },
      {
        id: 'c-abl-2',
        aigramma: 'Sa problemom fuga.',
        english: 'He/she flees from the problem.',
        hungarian: 'Ő a problémától menekül.',
      },
    ],
  },
  {
    id: 'allative',
    name: 'Allative',
    nameHu: 'Irány',
    meaning: 'to / towards',
    meaningHu: 'felé',
    suffix: { afterVowel: 'g', afterConsonant: { back: 'ug', front: 'ig' } },
    usage: 'Motion toward a point (not necessarily into it).',
    usageHu: 'Mozgás egy pont felé.',
    examples: [
      {
        id: 'c-all-1',
        aigramma: 'Ma amikog iram.',
        english: 'I go toward the friend.',
        hungarian: 'A baráthoz megyek.',
      },
      {
        id: 'c-all-2',
        aigramma: 'Ca skolg irac.',
        english: 'You go toward the school.',
        hungarian: 'Az iskolához mész.',
        gloss: 'skole ends in e → -g; wait skole is V-final → skolg? skole+g = skolg — no skole+g = skoleg',
      },
    ],
  },
  {
    id: 'instrumental',
    name: 'Instrumental',
    nameHu: 'Eszközhatározó',
    meaning: 'with / by means of',
    meaningHu: 'valamivel',
    suffix: { afterVowel: 'v', afterConsonant: { back: 'uv', front: 'iv' } },
    usage: 'Instrument, companion, or means.',
    usageHu: 'Eszköz, társ, mód.',
    examples: [
      {
        id: 'c-ins-1',
        aigramma: 'Ma krajov skribam.',
        english: 'I write with a pen.',
        hungarian: 'Tollal írok.',
      },
      {
        id: 'c-ins-2',
        aigramma: 'Sa amikov venad.',
        english: 'He/she came with a friend.',
        hungarian: 'Ő a baráttal jött.',
      },
    ],
  },
  {
    id: 'abessive',
    name: 'Abessive',
    nameHu: 'Nélküliség',
    meaning: 'without',
    meaningHu: 'nélkül',
    suffix: { afterVowel: 'z', afterConsonant: { back: 'uz', front: 'iz' } },
    usage: 'Absence of something.',
    usageHu: 'Valaminek a hiánya.',
    examples: [
      {
        id: 'c-abe-1',
        aigramma: 'Ma vatoz lemam.',
        english: 'I live without water.',
        hungarian: 'Víz nélkül élek.',
      },
      {
        id: 'c-abe-2',
        aigramma: 'Problemz labora.',
        english: 'He/she works without a problem.',
        hungarian: 'Probléma nélkül dolgozik.',
        gloss: 'problemo-ABE → problemoz',
      },
    ],
  },
];

// Fix accidental bad examples
CASES.find((c) => c.id === 'allative')!.examples[1] = {
  id: 'c-all-2',
  aigramma: 'Ca skoleg irac.',
  english: 'You go toward the school.',
  hungarian: 'Az iskolához mész.',
};

CASES.find((c) => c.id === 'abessive')!.examples[1] = {
  id: 'c-abe-2',
  aigramma: 'Problemoz labora.',
  english: 'He/she works without a problem.',
  hungarian: 'Probléma nélkül dolgozik.',
};

export const CASE_ORDER_NOTE = {
  en: `Noun order is fixed: STEM + CASE + PLURAL + POSSESSIVE.
Each suffix chooses its shape from the current ending. Example: tomo → tomok (in) → tomokun (in-PL) → tomokunum (in-PL-my).`,
  hu: `A névszói sorrend kötött: TŐ + ESET + TÖBBES + BIRTOKOS.
Minden toldalék a jelenlegi végződéshez igazodik. Példa: tomo → tomok (ban) → tomokun (házakban) → tomokunum (házaimban).`,
};

export const CASE_SUFFIX_HELP = CASES.map((c) => ({
  id: c.id,
  label: dualLabel(c.suffix),
}));
