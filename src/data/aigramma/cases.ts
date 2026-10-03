import type { CaseDefinition } from '../../types/aigramma';

/**
 * Aigramma case system — 12 regular cases.
 * Precision that other languages encode in extra tenses is often expressed here.
 */
export const CASES: CaseDefinition[] = [
  {
    id: 'nominative',
    name: 'Nominative',
    nameHu: 'Alanyeset',
    meaning: 'subject / citation form',
    meaningHu: 'alany, szótári alak',
    suffix: { back: '', front: '' },
    usage: 'Marks the subject of the clause. Zero ending.',
    usageHu: 'Az mondat alanyát jelöli. Nincs toldalék.',
    examples: [
      {
        id: 'c-nom-1',
        aigramma: 'Homa kalam.',
        hungarian: 'Az ember jár.',
        gloss: 'ember jár-PRS-1SG',
      },
      {
        id: 'c-nom-2',
        aigramma: 'Tomo granda.',
        hungarian: 'A ház nagy.',
        gloss: 'ház nagy',
      },
    ],
  },
  {
    id: 'accusative',
    name: 'Accusative',
    nameHu: 'Tárgyeset',
    meaning: 'direct object',
    meaningHu: 'tárgy',
    suffix: { back: 'ta', front: 'te' },
    usage: 'Marks the direct object of a transitive verb.',
    usageHu: 'Az igék közvetlen tárgyát jelöli.',
    examples: [
      {
        id: 'c-acc-1',
        aigramma: 'Mi kitata vidam.',
        hungarian: 'Én a könyvet látom.',
        gloss: 'én könyv-ACC lát-PRS-1SG',
      },
      {
        id: 'c-acc-2',
        aigramma: 'Ti berota edad.',
        hungarian: 'Te a kenyeret eszed.',
        gloss: 'te kenyér-ACC eszik-PRS-2SG',
      },
      {
        id: 'c-acc-3',
        aigramma: 'Si lümete volam.',
        hungarian: 'Ő a fényt akarja.',
        gloss: 'ő fény-ACC akar-…',
      },
    ],
  },
  {
    id: 'dative',
    name: 'Dative',
    nameHu: 'Részeshatározó',
    meaning: 'to / for (recipient, beneficiary)',
    meaningHu: 'nekem/neki; valakinek / valamiért',
    suffix: { back: 'ra', front: 're' },
    usage: 'Recipient, beneficiary, or goal of giving/saying.',
    usageHu: 'Címzett, kedvezményezett, vagy az adás/mondás célja.',
    examples: [
      {
        id: 'c-dat-1',
        aigramma: 'Mi kitata homara donam.',
        hungarian: 'A könyvet az embernek adom.',
        gloss: 'én könyv-ACC ember-DAT ad-PRS-1SG',
      },
      {
        id: 'c-dat-2',
        aigramma: 'Amikora verdota diram.',
        hungarian: 'A barátnak igazat mondok.',
        gloss: 'barát-DAT igazság-ACC mond-PRS-1SG',
      },
    ],
  },
  {
    id: 'genitive',
    name: 'Genitive',
    nameHu: 'Birtokos eset',
    meaning: 'of / belonging to (relational)',
    meaningHu: 'valaminek a…; birtokviszony (relációs)',
    suffix: { back: 'na', front: 'ne' },
    usage: 'Marks relational “of”. Possession on the noun itself uses possessive suffixes.',
    usageHu:
      'A „valaminek a…” viszonyt jelöli. A birtoklást magán a főnéven birtokos személyragokkal fejezzük ki.',
    examples: [
      {
        id: 'c-gen-1',
        aigramma: 'tomona pordo',
        hungarian: 'a ház ajtaja (a házé / házhoz tartozó ajtó)',
        gloss: 'ház-GEN ajtó',
      },
      {
        id: 'c-gen-2',
        aigramma: 'vilana centro',
        hungarian: 'a város központja',
        gloss: 'város-GEN központ',
      },
    ],
  },
  {
    id: 'inessive',
    name: 'Inessive',
    nameHu: 'Belüliség',
    meaning: 'in / inside',
    meaningHu: 'ban/ben; belül',
    suffix: { back: 'ban', front: 'ben' },
    usage: 'Static location inside something.',
    usageHu: 'Statikus hely: valamin belül.',
    examples: [
      {
        id: 'c-ine-1',
        aigramma: 'Mi tomoban lemam.',
        hungarian: 'A házban élek.',
        gloss: 'én ház-INE él-PRS-1SG',
      },
      {
        id: 'c-ine-2',
        aigramma: 'Kita kereben resta.',
        hungarian: 'A könyv a kertben marad.',
        gloss: 'könyv kert-INE marad-PRS-3SG',
      },
    ],
  },
  {
    id: 'illative',
    name: 'Illative',
    nameHu: 'Belé irányuló',
    meaning: 'into',
    meaningHu: 'ba/be; belé',
    suffix: { back: 'ba', front: 'be' },
    usage: 'Motion into an interior.',
    usageHu: 'Mozgás valami belsejébe.',
    examples: [
      {
        id: 'c-ill-1',
        aigramma: 'Mi tomoba iram.',
        hungarian: 'A házba megyek.',
        gloss: 'én ház-ILL megy-PRS-1SG',
      },
      {
        id: 'c-ill-2',
        aigramma: 'Si skolebe venade.',
        hungarian: 'Ő az iskolába jött.',
        gloss: 'ő iskola-ILL jön-PST-3SG',
      },
    ],
  },
  {
    id: 'elative',
    name: 'Elative',
    nameHu: 'Belülről',
    meaning: 'from / out of',
    meaningHu: 'ból/ből; belülről ki',
    suffix: { back: 'bol', front: 'böl' },
    usage: 'Motion out from an interior.',
    usageHu: 'Mozgás valami belsejéből kifelé.',
    examples: [
      {
        id: 'c-ela-1',
        aigramma: 'Mi tomobol venam.',
        hungarian: 'A házból jövök.',
        gloss: 'én ház-ELA jön-PRS-1SG',
      },
      {
        id: 'c-ela-2',
        aigramma: 'Vato marabol flu.',
        hungarian: 'A víz a tengerből folyik.',
        gloss: 'víz tenger-ELA folyik-PRS-3SG',
      },
    ],
  },
  {
    id: 'adessive',
    name: 'Adessive',
    nameHu: 'Közelség',
    meaning: 'at / by / near',
    meaningHu: 'nál/nél; mellett, közel',
    suffix: { back: 'dal', front: 'del' },
    usage: 'Static location at or near something.',
    usageHu: 'Statikus hely: valami mellett / közelében.',
    examples: [
      {
        id: 'c-ade-1',
        aigramma: 'Mi portodal vartam.',
        hungarian: 'Az ajtónál várok.',
        gloss: 'én ajtó-ADE vár-PRS-1SG',
      },
      {
        id: 'c-ade-2',
        aigramma: 'Amiko tabelodal sida.',
        hungarian: 'A barát az asztalnál ül.',
        gloss: 'barát asztal-ADE ül-PRS-3SG',
      },
    ],
  },
  {
    id: 'ablative',
    name: 'Ablative',
    nameHu: 'Távolodás',
    meaning: 'from (away from)',
    meaningHu: 'tól/től; valamitől el',
    suffix: { back: 'tol', front: 'töl' },
    usage: 'Motion or separation away from a point.',
    usageHu: 'Mozgás vagy elválás egy ponttól.',
    examples: [
      {
        id: 'c-abl-1',
        aigramma: 'Mi vilatol venam.',
        hungarian: 'A várostól jövök.',
        gloss: 'én város-ABL jön-PRS-1SG',
      },
      {
        id: 'c-abl-2',
        aigramma: 'Si problematol fuga.',
        hungarian: 'Ő a problémától menekül.',
        gloss: 'ő probléma-ABL menekül-PRS-3SG',
      },
    ],
  },
  {
    id: 'allative',
    name: 'Allative',
    nameHu: 'Irány',
    meaning: 'to / towards',
    meaningHu: 'hoz/hez; felé',
    suffix: { back: 'hoz', front: 'hez' },
    usage: 'Motion toward a point (not necessarily into it).',
    usageHu: 'Mozgás egy pont felé (nem feltétlenül belé).',
    examples: [
      {
        id: 'c-all-1',
        aigramma: 'Mi amikohoz iram.',
        hungarian: 'A baráthoz megyek.',
        gloss: 'én barát-ALL megy-PRS-1SG',
      },
      {
        id: 'c-all-2',
        aigramma: 'Ti skolehez irad.',
        hungarian: 'Az iskolához mész.',
        gloss: 'te iskola-ALL megy-PRS-2SG',
      },
    ],
  },
  {
    id: 'instrumental',
    name: 'Instrumental',
    nameHu: 'Eszközhatározó',
    meaning: 'with / by means of',
    meaningHu: 'val/vel; valamivel',
    suffix: { back: 'val', front: 'vel' },
    usage: 'Instrument, companion, or means.',
    usageHu: 'Eszköz, társ, mód.',
    examples: [
      {
        id: 'c-ins-1',
        aigramma: 'Mi krajoval skribam.',
        hungarian: 'Tollal írok.',
        gloss: 'én toll-INS ír-PRS-1SG',
      },
      {
        id: 'c-ins-2',
        aigramma: 'Si amikovel venade.',
        hungarian: 'Ő a baráttal jött.',
        gloss: 'ő barát-INS jön-PST-3SG',
      },
    ],
  },
  {
    id: 'abessive',
    name: 'Abessive',
    nameHu: 'Nélküliség',
    meaning: 'without',
    meaningHu: 'nélkül',
    suffix: { back: 'tal', front: 'tel' },
    usage: 'Absence of something.',
    usageHu: 'Valaminek a hiánya.',
    examples: [
      {
        id: 'c-abe-1',
        aigramma: 'Mi vatotal lemam.',
        hungarian: 'Víz nélkül élek / vagyok.',
        gloss: 'én víz-ABE él-PRS-1SG',
      },
      {
        id: 'c-abe-2',
        aigramma: 'Problematal labora.',
        hungarian: 'Probléma nélkül dolgozik.',
        gloss: 'probléma-ABE dolgozik-PRS-3SG',
      },
    ],
  },
];

export const CASE_ORDER_NOTE_HU =
  'A névszói szerkezet kötött sorrendje: TŐ + ESET + TÖBBES + BIRTOKOS. Az eset mindig a többes és a birtokos előtt áll.';
