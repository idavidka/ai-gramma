import type { DualSuffix, HarmonyClass } from '../types/aigramma';

/** Back vowels — no accented letters in Aigramma. */
export const BACK_VOWELS = ['a', 'o', 'u'] as const;

/** Front vowels. */
export const FRONT_VOWELS = ['e', 'i'] as const;

export const ALL_VOWELS = [...BACK_VOWELS, ...FRONT_VOWELS] as const;

const BACK_SET = new Set<string>(BACK_VOWELS);
const FRONT_SET = new Set<string>(FRONT_VOWELS);
const VOWEL_SET = new Set<string>(ALL_VOWELS);

export function isVowelChar(ch: string): boolean {
  return VOWEL_SET.has(ch.toLowerCase());
}

export function endsWithVowel(form: string): boolean {
  if (!form) return false;
  return isVowelChar(form[form.length - 1]!);
}

/** Harmony from the original stem (last vowel wins). */
export function getHarmony(stem: string): HarmonyClass {
  const chars = [...stem.toLowerCase()];
  for (let i = chars.length - 1; i >= 0; i -= 1) {
    const ch = chars[i]!;
    if (BACK_SET.has(ch)) return 'back';
    if (FRONT_SET.has(ch)) return 'front';
  }
  return 'front';
}

/**
 * Pick the correct dual-suffix shape for the current base form.
 * Vowel-final base → consonant-initial variant.
 * Consonant-final base → vowel-initial harmonic variant.
 * Harmony always follows the original stem.
 */
export function resolveDualSuffix(
  originalStem: string,
  currentForm: string,
  suffix: DualSuffix,
): string {
  if (endsWithVowel(currentForm)) {
    return suffix.afterVowel;
  }
  const harmony = getHarmony(originalStem);
  return harmony === 'back'
    ? suffix.afterConsonant.back
    : suffix.afterConsonant.front;
}

export function describeHarmony(stem: string): string {
  return getHarmony(stem) === 'back'
    ? 'back (a/o/u)'
    : 'front (e/i)';
}

export const HARMONY_RULES = {
  principle:
    'Vowel harmony chooses the vowel inside a consonant-attaching suffix. The stem itself never changes.',
  principleHu:
    'A magánhangzó-harmónia a mássalhangzóra tapadó (magánhangzóval kezdődő) toldalék belsejét választja meg. A tő soha nem változik.',
  dualRule:
    'Every suffix has two shapes: consonant-initial after a vowel-final base, vowel-initial after a consonant-final base.',
  dualRuleHu:
    'Minden toldaléknak két alakja van: magánhangzóra végződő tő után mássalhangzóval kezdődik, mássalhangzóra végződő tő után magánhangzóval.',
  steps: [
    'Look at the current base (stem + already attached suffixes).',
    'If it ends in a vowel → use the consonant-initial suffix shape.',
    'If it ends in a consonant → use the vowel-initial shape.',
    'For vowel-initial shapes, read the last vowel of the original stem: a/o/u → back (u-series), e/i → front (i-series).',
    'Never change letters inside the stem.',
  ],
  stepsHu: [
    'Nézd a jelenlegi tövet (tő + már felvett toldalékok).',
    'Ha magánhangzóra végződik → mássalhangzóval kezdődő alak.',
    'Ha mássalhangzóra végződik → magánhangzóval kezdődő alak.',
    'A magánhangzós alaknál az eredeti tő utolsó magánhangzója dönt: a/o/u → hátsó (u-sor), e/i → elülső (i-sor).',
    'A tő betűit soha ne változtasd.',
  ],
};
