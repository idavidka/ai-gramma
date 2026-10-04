/**
 * Vocabulary is curated in src/data/aigramma/vocabulary.ts.
 * This script only validates accent-free Aigramma word forms.
 */
import { readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const file = resolve(dirname(fileURLToPath(import.meta.url)), '../src/data/aigramma/vocabulary.ts');
const src = readFileSync(file, 'utf8');
const words = [...src.matchAll(/"word":\s*"([^"]+)"/g)].map((m) => m[1]);
const bad = words.filter((w) => /[^a-z]/.test(w));
if (bad.length) {
  console.error('Accented/invalid Aigramma words:', bad);
  process.exit(1);
}
console.log(`OK: ${words.length} accent-free Aigramma words.`);
