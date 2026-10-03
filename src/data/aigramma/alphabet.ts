import type { AlphabetLetter } from '../../types/aigramma';

/**
 * Aigramma alphabet — Latin only, no accented letters.
 * Language name is still read aloud as A-I-G-R-A-M-M-A.
 */
export const ALPHABET: AlphabetLetter[] = [
  { letter: 'a', ipa: 'a', example: 'tomo', exampleMeaning: 'house', exampleMeaningHu: 'ház', type: 'vowel', harmony: 'back' },
  { letter: 'b', ipa: 'b', example: 'bero', exampleMeaning: 'bread', exampleMeaningHu: 'kenyér', type: 'consonant' },
  { letter: 'c', ipa: 'ts', example: 'calo', exampleMeaning: 'warm', exampleMeaningHu: 'meleg', type: 'consonant' },
  { letter: 'd', ipa: 'd', example: 'dona', exampleMeaning: 'give', exampleMeaningHu: 'ad', type: 'consonant' },
  { letter: 'e', ipa: 'e', example: 'kere', exampleMeaning: 'garden', exampleMeaningHu: 'kert', type: 'vowel', harmony: 'front' },
  { letter: 'f', ipa: 'f', example: 'faro', exampleMeaning: 'light', exampleMeaningHu: 'fény', type: 'consonant' },
  { letter: 'g', ipa: 'g', example: 'gora', exampleMeaning: 'mountain', exampleMeaningHu: 'hegy', type: 'consonant' },
  { letter: 'h', ipa: 'h', example: 'homa', exampleMeaning: 'person', exampleMeaningHu: 'ember', type: 'consonant' },
  { letter: 'i', ipa: 'i', example: 'kiv', exampleMeaning: 'bicycle', exampleMeaningHu: 'bicikli', type: 'vowel', harmony: 'front' },
  { letter: 'j', ipa: 'j', example: 'jaro', exampleMeaning: 'year', exampleMeaningHu: 'év', type: 'consonant' },
  { letter: 'k', ipa: 'k', example: 'kita', exampleMeaning: 'book', exampleMeaningHu: 'könyv', type: 'consonant' },
  { letter: 'l', ipa: 'l', example: 'lumo', exampleMeaning: 'moon', exampleMeaningHu: 'hold', type: 'consonant' },
  { letter: 'm', ipa: 'm', example: 'mara', exampleMeaning: 'sea', exampleMeaningHu: 'tenger', type: 'consonant' },
  { letter: 'n', ipa: 'n', example: 'nami', exampleMeaning: 'name', exampleMeaningHu: 'név', type: 'consonant' },
  { letter: 'o', ipa: 'o', example: 'hop', exampleMeaning: 'tent', exampleMeaningHu: 'sátor', type: 'vowel', harmony: 'back' },
  { letter: 'p', ipa: 'p', example: 'pano', exampleMeaning: 'bread loaf', exampleMeaningHu: 'cipó', type: 'consonant' },
  { letter: 'r', ipa: 'r', example: 'ramo', exampleMeaning: 'branch', exampleMeaningHu: 'ág', type: 'consonant' },
  { letter: 's', ipa: 's', example: 'sola', exampleMeaning: 'sun', exampleMeaningHu: 'nap', type: 'consonant' },
  { letter: 't', ipa: 't', example: 'tomo', exampleMeaning: 'house', exampleMeaningHu: 'ház', type: 'consonant' },
  { letter: 'u', ipa: 'u', example: 'lumo', exampleMeaning: 'moon', exampleMeaningHu: 'hold', type: 'vowel', harmony: 'back' },
  { letter: 'v', ipa: 'v', example: 'vato', exampleMeaning: 'water', exampleMeaningHu: 'víz', type: 'consonant' },
  { letter: 'w', ipa: 'w', example: 'walo', exampleMeaning: 'valley', exampleMeaningHu: 'völgy', type: 'consonant' },
  { letter: 'x', ipa: 'ks', example: 'nexa', exampleMeaning: 'link', exampleMeaningHu: 'kapcsolat', type: 'consonant' },
  { letter: 'y', ipa: 'j', example: 'yuno', exampleMeaning: 'young one', exampleMeaningHu: 'fiatal', type: 'consonant' },
  { letter: 'z', ipa: 'z', example: 'zono', exampleMeaning: 'zone', exampleMeaningHu: 'zóna', type: 'consonant' },
];

export const VOWELS = ALPHABET.filter((l) => l.type === 'vowel');
export const CONSONANTS = ALPHABET.filter((l) => l.type === 'consonant');

export const PRONUNCIATION_NOTES = {
  languageName: 'Aigramma',
  spelledOut: 'A-I-G-R-A-M-M-A',
  phonetic: '[aiˈgramma]',
  note: 'Aigramma uses only plain Latin letters — no accented characters. Read every vowel as written. The language name is pronounced letter by letter as A-I-G-R-A-M-M-A.',
  noteHu:
    'Az Aigramma csak ékezet nélküli latin betűket használ. Minden magánhangzót úgy ejts, ahogy írva van. A nyelv nevét betűzve ejtsd: A-I-G-R-A-M-M-A.',
  stress:
    'Stress always falls on the first syllable. Suffixes never move the stress.',
  stressHu:
    'A hangsúly mindig az első szótagon van. A toldalékok soha nem mozdítják el.',
};
