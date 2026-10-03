import type { AlphabetLetter } from '../../types/aigramma';

/**
 * Aigramma alphabet — Latin-based, readable as a Hungarian speaker would expect.
 * Pronunciation of the language name: A-I-G-R-A-M-M-A
 */
export const ALPHABET: AlphabetLetter[] = [
  { letter: 'a', ipa: 'ɒ', example: 'kala', exampleMeaningHu: 'jár', type: 'vowel', harmony: 'back' },
  { letter: 'á', ipa: 'aː', example: 'háza', exampleMeaningHu: 'ház', type: 'vowel', harmony: 'back' },
  { letter: 'b', ipa: 'b', example: 'bero', exampleMeaningHu: 'kenyér', type: 'consonant' },
  { letter: 'd', ipa: 'd', example: 'dona', exampleMeaningHu: 'ad', type: 'consonant' },
  { letter: 'e', ipa: 'ɛ', example: 'lemi', exampleMeaningHu: 'él', type: 'vowel', harmony: 'front' },
  { letter: 'é', ipa: 'eː', example: 'réte', exampleMeaningHu: 'rét', type: 'vowel', harmony: 'front' },
  { letter: 'f', ipa: 'f', example: 'faro', exampleMeaningHu: 'fény', type: 'consonant' },
  { letter: 'g', ipa: 'ɡ', example: 'gora', exampleMeaningHu: 'hegy', type: 'consonant' },
  { letter: 'h', ipa: 'h', example: 'homa', exampleMeaningHu: 'ember', type: 'consonant' },
  { letter: 'i', ipa: 'i', example: 'vila', exampleMeaningHu: 'város', type: 'vowel', harmony: 'neutral' },
  { letter: 'í', ipa: 'iː', example: 'líra', exampleMeaningHu: 'dal', type: 'vowel', harmony: 'neutral' },
  { letter: 'j', ipa: 'j', example: 'jaro', exampleMeaningHu: 'év', type: 'consonant' },
  { letter: 'k', ipa: 'k', example: 'kita', exampleMeaningHu: 'könyv', type: 'consonant' },
  { letter: 'l', ipa: 'l', example: 'luma', exampleMeaningHu: 'hold', type: 'consonant' },
  { letter: 'm', ipa: 'm', example: 'mara', exampleMeaningHu: 'tenger', type: 'consonant' },
  { letter: 'n', ipa: 'n', example: 'nami', exampleMeaningHu: 'név', type: 'consonant' },
  { letter: 'o', ipa: 'o', example: 'sono', exampleMeaningHu: 'hang', type: 'vowel', harmony: 'back' },
  { letter: 'ó', ipa: 'oː', example: 'lóma', exampleMeaningHu: 'álom', type: 'vowel', harmony: 'back' },
  { letter: 'ö', ipa: 'ø', example: 'möte', exampleMeaningHu: 'találkozik', type: 'vowel', harmony: 'front' },
  { letter: 'ő', ipa: 'øː', example: 'tőr', exampleMeaningHu: 'tőr (példa)', type: 'vowel', harmony: 'front' },
  { letter: 'p', ipa: 'p', example: 'pano', exampleMeaningHu: 'kenyérféle', type: 'consonant' },
  { letter: 'r', ipa: 'r', example: 'ramo', exampleMeaningHu: 'ág', type: 'consonant' },
  { letter: 's', ipa: 'ʃ', example: 'sola', exampleMeaningHu: 'nap', type: 'consonant' },
  { letter: 'š', ipa: 'ʃː', example: 'šafo', exampleMeaningHu: 'juh', type: 'consonant' },
  { letter: 't', ipa: 't', example: 'tomo', exampleMeaningHu: 'ház', type: 'consonant' },
  { letter: 'u', ipa: 'u', example: 'luma', exampleMeaningHu: 'hold', type: 'vowel', harmony: 'back' },
  { letter: 'ú', ipa: 'uː', example: 'túra', exampleMeaningHu: 'út', type: 'vowel', harmony: 'back' },
  { letter: 'ü', ipa: 'y', example: 'lüme', exampleMeaningHu: 'fény', type: 'vowel', harmony: 'front' },
  { letter: 'ű', ipa: 'yː', example: 'tűke', exampleMeaningHu: 'tűz', type: 'vowel', harmony: 'front' },
  { letter: 'v', ipa: 'v', example: 'varo', exampleMeaningHu: 'igaz', type: 'consonant' },
  { letter: 'z', ipa: 'z', example: 'zono', exampleMeaningHu: 'zóna', type: 'consonant' },
  { letter: 'ž', ipa: 'ʒ', example: 'želo', exampleMeaningHu: 'kívánság', type: 'consonant' },
];

export const VOWELS = ALPHABET.filter((l) => l.type === 'vowel');
export const CONSONANTS = ALPHABET.filter((l) => l.type === 'consonant');

export const PRONUNCIATION_NOTES = {
  languageName: 'Aigramma',
  spelledOut: 'A-I-G-R-A-M-M-A',
  phonetic: '[ˈɒiɡrɒmːɒ]',
  noteHu:
    'Az Aigramma nevet pontosan úgy ejtsd, ahogy egy magyar beszélő természetesen kiolvasná: A-I-G-R-A-M-M-A. A magánhangzók és a mássalhangzók a magyar kiejtéshez igazodnak; az s mindig [ʃ] (mint a „só”), a š hosszabb [ʃː].',
  stressHu:
    'A hangsúly mindig az első szótagon van. A toldalékok soha nem mozdítják el a hangsúlyt.',
};
