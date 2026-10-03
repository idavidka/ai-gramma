import {
  BACK_VOWELS,
  FRONT_VOWELS,
  NEUTRAL_VOWELS,
} from '../data/aigramma/vowelHarmony';
import type { HarmonicSuffix, HarmonyClass } from '../types/aigramma';

const BACK_SET = new Set<string>(BACK_VOWELS);
const FRONT_SET = new Set<string>(FRONT_VOWELS);
const NEUTRAL_SET = new Set<string>(NEUTRAL_VOWELS);

/** Determine harmony class from a stem. Neutral-only stems default to front. */
export function getHarmony(stem: string): HarmonyClass {
  const chars = [...stem.toLowerCase()];
  for (let i = chars.length - 1; i >= 0; i -= 1) {
    const ch = chars[i];
    if (BACK_SET.has(ch)) return 'back';
    if (FRONT_SET.has(ch)) return 'front';
    if (NEUTRAL_SET.has(ch)) continue;
  }
  return 'front';
}

export function pickSuffix(stem: string, suffix: HarmonicSuffix): string {
  return getHarmony(stem) === 'back' ? suffix.back : suffix.front;
}

export function describeHarmony(stem: string): string {
  const harmony = getHarmony(stem);
  return harmony === 'back' ? 'hátsó (a/o/u)' : 'elülső (e/ö/ü vagy csak i/í)';
}
