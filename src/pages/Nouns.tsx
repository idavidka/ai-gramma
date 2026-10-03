import { ExampleList } from '../components/ExampleSentence/ExampleSentence';
import { GrammarTable } from '../components/GrammarTable/GrammarTable';
import { RememberBox } from '../components/RememberBox/RememberBox';
import { WordBuilder } from '../components/WordBuilder/WordBuilder';
import { PERSONS, PRONOUN_OPTIONALITY } from '../data/aigramma/persons';
import { dualLabel } from '../data/aigramma/suffixes';
import { useLanguage } from '../i18n/LanguageContext';
import { buildNoun } from '../utils/morphology';

export function Nouns() {
  const { lang, pick } = useLanguage();

  const possRows = PERSONS.map((p) => ({
    person: lang === 'hu' ? p.labelHu : p.label,
    suffix: dualLabel(p.possessiveSuffix),
    exampleV: buildNoun({ stem: 'tomo', person: p.id }),
    exampleC: buildNoun({ stem: 'hop', person: p.id }),
  }));

  return (
    <article>
      <h1>{pick('Nouns', 'Főnevek')}</h1>
      <p className="lead">
        {pick(
          'Noun stems never change. Case, plural, and possessive always follow the same order and dual-shape rule.',
          'A főnévi tő soha nem változik. Az eset, a többes és a birtokos mindig ugyanezt a sorrendet és kettős alak szabályt követi.',
        )}
      </p>

      <section className="section">
        <h2 className="section-title">{pick('Singular and plural', 'Egyes és többes')}</h2>
        <p>
          {pick(
            'Plural: -n after vowels; -un (back) / -in (front) after consonants.',
            'Többes: magánhangzó után -n; mássalhangzó után -un (hátsó) / -in (elülső).',
          )}
        </p>
        <ExampleList
          examples={[
            {
              id: 'n-pl-1',
              aigramma: 'tomo → tomon',
              english: 'house → houses',
              hungarian: 'ház → házak',
            },
            {
              id: 'n-pl-2',
              aigramma: 'kiv → kivin',
              english: 'bicycle → bicycles',
              hungarian: 'bicikli → biciklik',
            },
            {
              id: 'n-pl-3',
              aigramma: 'hop → hopun',
              english: 'tent → tents',
              hungarian: 'sátor → sátorok',
            },
            {
              id: 'n-pl-4',
              aigramma: 'tomokun',
              english: 'in the houses (tomo + k + un)',
              hungarian: 'házakban (tomo + k + un)',
            },
          ]}
        />
      </section>

      <section className="section">
        <h2 className="section-title">{pick('Possessive endings', 'Birtokos személyragok')}</h2>
        <GrammarTable
          rows={possRows}
          columns={[
            { key: 'p', header: pick('Person', 'Személy'), render: (r) => r.person },
            { key: 's', header: pick('Suffix', 'Toldalék'), render: (r) => r.suffix },
            { key: 'v', header: 'tomo…', render: (r) => r.exampleV },
            { key: 'c', header: 'hop…', render: (r) => r.exampleC },
          ]}
        />
        <p style={{ whiteSpace: 'pre-wrap' }}>
          {pick(PRONOUN_OPTIONALITY.body, PRONOUN_OPTIONALITY.bodyHu)}
        </p>
      </section>

      <section className="section">
        <h2 className="section-title">{pick('Combined forms', 'Összetett alakok')}</h2>
        <ExampleList
          examples={[
            {
              id: 'n-c-1',
              aigramma: buildNoun({
                stem: 'tomo',
                caseId: 'inessive',
                plural: true,
                person: '1sg',
              }),
              english: 'in my houses',
              hungarian: 'a házaimban',
              gloss: 'tomo-INE-PL-1SG',
            },
            {
              id: 'n-c-2',
              aigramma: buildNoun({
                stem: 'kita',
                caseId: 'accusative',
                plural: true,
                person: '2sg',
              }),
              english: 'your books (object)',
              hungarian: 'a könyveidet',
              gloss: 'kita-ACC-PL-2SG',
            },
            {
              id: 'n-c-3',
              aigramma: buildNoun({
                stem: 'hop',
                caseId: 'allative',
                plural: true,
                person: '1pl',
              }),
              english: 'toward our tents',
              hungarian: 'a sátorainkhoz',
              gloss: 'hop-ALL-PL-1PL',
            },
          ]}
        />
      </section>

      <WordBuilder />

      <RememberBox>
        {pick(
          'HOUSE + MY always means: stem + (case) + (plural) + possessive — with the dual shape chosen at each step.',
          'HOUSE + MY mindig: tő + (eset) + (többes) + birtokos — minden lépésnél a kettős alak szabályával.',
        )}
      </RememberBox>
    </article>
  );
}
