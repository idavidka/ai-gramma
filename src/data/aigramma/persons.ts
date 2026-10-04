import type { PersonDefinition } from '../../types/aigramma';

/**
 * Six grammatical persons.
 * Possessive / verb endings are dual-shaped (C-initial after V, V-initial after C).
 */
export const PERSONS: PersonDefinition[] = [
  {
    id: '1sg',
    label: '1SG',
    labelHu: '1. személy eg.',
    pronoun: 'ma',
    pronounMeaning: 'I',
    pronounMeaningHu: 'én',
    verbSuffix: { afterVowel: 'm', afterConsonant: { back: 'um', front: 'im' } },
    possessiveSuffix: { afterVowel: 'm', afterConsonant: { back: 'um', front: 'im' } },
  },
  {
    id: '2sg',
    label: '2SG',
    labelHu: '2. személy eg.',
    pronoun: 'ca',
    pronounMeaning: 'you (sg)',
    pronounMeaningHu: 'te',
    verbSuffix: { afterVowel: 'c', afterConsonant: { back: 'uc', front: 'ic' } },
    possessiveSuffix: { afterVowel: 'c', afterConsonant: { back: 'uc', front: 'ic' } },
  },
  {
    id: '3sg',
    label: '3SG',
    labelHu: '3. személy eg.',
    pronoun: 'sa',
    pronounMeaning: 'he / she',
    pronounMeaningHu: 'ő',
    verbSuffix: { afterVowel: '', afterConsonant: { back: '', front: '' } },
    possessiveSuffix: { afterVowel: 'j', afterConsonant: { back: 'uj', front: 'ij' } },
  },
  {
    id: '1pl',
    label: '1PL',
    labelHu: '1. személy tb.',
    pronoun: 'man',
    pronounMeaning: 'we',
    pronounMeaningHu: 'mi',
    verbSuffix: { afterVowel: 'min', afterConsonant: { back: 'umin', front: 'imin' } },
    possessiveSuffix: { afterVowel: 'min', afterConsonant: { back: 'umin', front: 'imin' } },
  },
  {
    id: '2pl',
    label: '2PL',
    labelHu: '2. személy tb.',
    pronoun: 'can',
    pronounMeaning: 'you (pl)',
    pronounMeaningHu: 'ti',
    verbSuffix: { afterVowel: 'cin', afterConsonant: { back: 'ucin', front: 'icin' } },
    possessiveSuffix: { afterVowel: 'cin', afterConsonant: { back: 'ucin', front: 'icin' } },
  },
  {
    id: '3pl',
    label: '3PL',
    labelHu: '3. személy tb.',
    pronoun: 'san',
    pronounMeaning: 'they',
    pronounMeaningHu: 'ők',
    verbSuffix: { afterVowel: 'nin', afterConsonant: { back: 'unin', front: 'inin' } },
    possessiveSuffix: { afterVowel: 'jin', afterConsonant: { back: 'ujin', front: 'ijin' } },
  },
];

export const PRONOUN_OPTIONALITY = {
  title: 'Pronouns are optional',
  titleHu: 'A névmások opcionálisak',
  body: `If the verb or noun ending already marks person, drop the pronoun.
Use pronouns for emphasis or contrast.

Examples:
• Kalam. — I walk. (no pronoun; -m marks 1SG)
• Ma kalam. — I walk. (emphasis: I, not someone else)
• Tomom. — my house
• Ma tomom. — my house (emphasized possession)`,
  bodyHu: `Ha az ige vagy a főnév személyragja már jelöli a személyt, a névmás elhagyható.
A névmást hangsúlyra vagy szembeállításra használd.

Példák:
• Kalam. — Járók. (névmás nélkül; a -m jelöli az 1SG-t)
• Ma kalam. — Én járok. (hangsúly)
• Tomom. — a házam
• Ma tomom. — az én házam`,
};
