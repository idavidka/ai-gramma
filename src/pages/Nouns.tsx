import { ExampleList } from '../components/ExampleSentence/ExampleSentence';
import { GrammarTable } from '../components/GrammarTable/GrammarTable';
import { RememberBox } from '../components/RememberBox/RememberBox';
import { WordBuilder } from '../components/WordBuilder/WordBuilder';
import { PERSONS, PRONOUN_OPTIONALITY_HU } from '../data/aigramma/persons';
import { PLURAL_RULE_HU } from '../data/aigramma/suffixes';
import { buildNoun } from '../utils/morphology';

const possRows = PERSONS.map((p) => ({
  person: p.labelHu,
  suffix: `-${p.possessiveSuffix.back}/-${p.possessiveSuffix.front}`,
  exampleBack: buildNoun({ stem: 'tomo', person: p.id }),
  exampleFront: buildNoun({ stem: 'kere', person: p.id }),
  meaning: `${p.pronounMeaningHu} …-ja/je`,
}));

export function Nouns() {
  return (
    <article>
      <h1>Főnevek</h1>
      <p className="lead">
        A főnév töve soha nem változik. Az eset, a többes és a birtokos mindig
        ugyanezt a sorrendet követi.
      </p>

      <section className="section">
        <h2 className="section-title">Egyes és többes</h2>
        <p style={{ whiteSpace: 'pre-wrap' }}>{PLURAL_RULE_HU}</p>
        <ExampleList
          examples={[
            {
              id: 'n-pl-1',
              aigramma: 'tomo → tomoak',
              hungarian: 'ház → házak',
            },
            {
              id: 'n-pl-2',
              aigramma: 'kere → kerek',
              hungarian: 'kert → kertek',
            },
            {
              id: 'n-pl-3',
              aigramma: 'tomobanak',
              hungarian: 'házakban (tomo + ban + ak)',
            },
          ]}
        />
      </section>

      <section className="section">
        <h2 className="section-title">Birtokos személyragok</h2>
        <p>
          A birtoklást a főnéven jelöljük. A névmás opcionális, ha a rag egyértelmű.
        </p>
        <GrammarTable
          rows={possRows}
          columns={[
            { key: 'p', header: 'Személy', render: (r) => r.person },
            { key: 's', header: 'Toldalék', render: (r) => r.suffix },
            { key: 'b', header: 'tomo…', render: (r) => r.exampleBack },
            { key: 'f', header: 'kere…', render: (r) => r.exampleFront },
          ]}
        />
        <p style={{ whiteSpace: 'pre-wrap' }}>{PRONOUN_OPTIONALITY_HU.body}</p>
      </section>

      <section className="section">
        <h2 className="section-title">Összetett alakok</h2>
        <ExampleList
          examples={[
            {
              id: 'n-c-1',
              aigramma: 'tomobanakom',
              hungarian: 'a házaimban',
              gloss: 'ház-INE-PL-1SG.POSS',
            },
            {
              id: 'n-c-2',
              aigramma: buildNoun({
                stem: 'kita',
                caseId: 'accusative',
                plural: true,
                person: '2sg',
              }),
              hungarian: 'a könyveidet',
              gloss: 'kita-ACC-PL-2SG',
            },
            {
              id: 'n-c-3',
              aigramma: buildNoun({
                stem: 'amiko',
                caseId: 'allative',
                plural: true,
                person: '1pl',
              }),
              hungarian: 'a barátainkhoz',
              gloss: 'amiko-ALL-PL-1PL',
            },
          ]}
        />
      </section>

      <WordBuilder />

      <RememberBox>
        HOUSE + MY / YOUR / HIS… mindig: tő + (eset) + (többes) + birtokos rag.
      </RememberBox>
    </article>
  );
}
