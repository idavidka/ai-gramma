import type { GrammarExample, HarmonicSuffix } from '../../types/aigramma';

/** Back vowels trigger back-harmony suffixes. */
export const BACK_VOWELS = ['a', 'á', 'o', 'ó', 'u', 'ú'] as const;

/** Front vowels trigger front-harmony suffixes. */
export const FRONT_VOWELS = ['e', 'é', 'ö', 'ő', 'ü', 'ű'] as const;

/**
 * Neutral vowels do not decide harmony.
 * If a stem has only neutral vowels, front harmony is used by default.
 */
export const NEUTRAL_VOWELS = ['i', 'í'] as const;

export const HARMONY_RULES = {
  titleHu: 'Magánhangzó-harmónia',
  principleHu:
    'A magánhangzó-harmónia a toldalékot választja meg — a tő soha nem változik.',
  stepsHu: [
    'Nézd meg a szó tövét.',
    'Keresd az utolsó nem semleges (nem i/í) magánhangzót.',
    'Ha az hátsó (a á o ó u ú) → hátsó toldalékot választasz.',
    'Ha az elülső (e é ö ő ü ű) → elülső toldalékot választasz.',
    'Ha a tő csak i/í magánhangzót tartalmaz → elülső toldalékot használunk.',
    'A tő betűi változatlanok maradnak.',
  ],
  pairs: [
    { role: 'alapesetű magánhangzó', back: 'a', front: 'e' },
    { role: 'középső magánhangzó', back: 'o', front: 'ö' },
    { role: 'magas magánhangzó', back: 'u', front: 'ü' },
    { role: 'hosszú pár', back: 'á/ó/ú', front: 'é/ő/ű' },
  ] as const,
};

export const HARMONY_EXAMPLES: GrammarExample[] = [
  {
    id: 'vh-1',
    aigramma: 'tomo + ban → tomoban',
    hungarian: 'ház + -ban → házban (a tő hátsó)',
    gloss: 'ház-INE',
    tags: ['harmony'],
  },
  {
    id: 'vh-2',
    aigramma: 'kere + ben → kereben',
    hungarian: 'kert + -ben → kertben (a tő elülső)',
    gloss: 'kert-INE',
    tags: ['harmony'],
  },
  {
    id: 'vh-3',
    aigramma: 'sola + ta → solata',
    hungarian: 'nap + tárgyeset → a napot',
    gloss: 'nap-ACC',
    tags: ['harmony'],
  },
  {
    id: 'vh-4',
    aigramma: 'lüme + te → lümete',
    hungarian: 'fény + tárgyeset → a fényt',
    gloss: 'fény-ACC',
    tags: ['harmony'],
  },
  {
    id: 'vh-5',
    aigramma: 'kisi + ben → kisiben',
    hungarian: 'kis + -ben (csak semleges magánhangzó → elülső)',
    gloss: 'kis-INE',
    tags: ['harmony', 'neutral'],
  },
];

/** Helper table of common harmonic suffix pairs used across the grammar. */
export const COMMON_HARMONIC_PAIRS: { name: string; suffix: HarmonicSuffix }[] = [
  { name: 'Belső helyhatározó (inessivus)', suffix: { back: 'ban', front: 'ben' } },
  { name: 'Tárgyeset', suffix: { back: 'ta', front: 'te' } },
  { name: 'Többes szám', suffix: { back: 'ak', front: 'ek' } },
  { name: 'Múlt idő', suffix: { back: 'da', front: 'de' } },
  { name: 'Jövő idő', suffix: { back: 'va', front: 've' } },
];
