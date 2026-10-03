import type { GrammarExample } from '../../types/aigramma';
import { HARMONY_RULES } from '../../utils/vowelHarmony';
import { dualLabel, PLURAL_SUFFIX } from './suffixes';

export { HARMONY_RULES };

export const HARMONY_EXAMPLES: GrammarExample[] = [
  {
    id: 'vh-1',
    aigramma: 'tomo + n → tomon',
    english: 'house + PL (V-final → -n)',
    hungarian: 'ház + többes → házak (tomon)',
  },
  {
    id: 'vh-2',
    aigramma: 'kiv + in → kivin',
    english: 'bicycle + PL (C-final front → -in)',
    hungarian: 'bicikli + többes → biciklik (kivin)',
  },
  {
    id: 'vh-3',
    aigramma: 'hop + un → hopun',
    english: 'tent + PL (C-final back → -un)',
    hungarian: 'sátor + többes → sátorok (hopun)',
  },
  {
    id: 'vh-4',
    aigramma: 'tomo + k → tomok',
    english: 'house + INE (V-final → -k)',
    hungarian: 'ház + belül → házban (tomok)',
  },
  {
    id: 'vh-5',
    aigramma: 'hop + uk → hopuk',
    english: 'tent + INE (C-final back → -uk)',
    hungarian: 'sátor + belül → sátorban (hopuk)',
  },
  {
    id: 'vh-6',
    aigramma: 'kere + k → kerek',
    english: 'garden + INE (V-final → -k; stem stays kere-)',
    hungarian: 'kert + belül → kertben (kerek)',
  },
];

export const COMMON_DUAL_PAIRS = [
  { name: 'Plural', nameHu: 'Többes', suffix: PLURAL_SUFFIX },
  {
    name: 'Accusative',
    nameHu: 'Tárgyeset',
    suffix: { afterVowel: 't', afterConsonant: { back: 'ut', front: 'it' } },
  },
  {
    name: 'Inessive',
    nameHu: 'Belül',
    suffix: { afterVowel: 'k', afterConsonant: { back: 'uk', front: 'ik' } },
  },
  {
    name: 'Past',
    nameHu: 'Múlt',
    suffix: { afterVowel: 'd', afterConsonant: { back: 'ud', front: 'id' } },
  },
  {
    name: 'Future',
    nameHu: 'Jövő',
    suffix: { afterVowel: 'b', afterConsonant: { back: 'ub', front: 'ib' } },
  },
];

export function dualSuffixDisplay(suffix: {
  afterVowel: string;
  afterConsonant: { back: string; front: string };
}): string {
  return dualLabel(suffix);
}
