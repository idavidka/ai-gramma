import { Link, useParams } from 'react-router-dom';
import { GrammarTable } from '../components/GrammarTable/GrammarTable';
import { getWordById } from '../data/aigramma/vocabulary';
import { PERSONS } from '../data/aigramma/persons';
import { CASES } from '../data/aigramma/cases';
import { buildNoun, buildVerb } from '../utils/morphology';
import { describeHarmony } from '../utils/vowelHarmony';

export function WordDetail() {
  const { id } = useParams();
  const word = id ? getWordById(id) : undefined;

  if (!word) {
    return (
      <article>
        <h1>Szó nem található</h1>
        <Link to="/vocabulary">Vissza a szókincshez</Link>
      </article>
    );
  }

  const isNounLike =
    word.partOfSpeech === 'noun' || word.partOfSpeech === 'adjective';
  const isVerb = word.partOfSpeech === 'verb';

  return (
    <article>
      <p className="lead">
        <Link to="/vocabulary">← Szókincs</Link>
      </p>
      <h1>{word.word}</h1>
      <p className="lead">
        {word.meaningHu} · {word.meaning}
      </p>
      <p>
        Szófaj: <strong>{word.partOfSpeech}</strong> · Kategória:{' '}
        <strong>{word.category}</strong> · Harmónia:{' '}
        <strong>{describeHarmony(word.word)}</strong>
      </p>
      {word.notes ? <p>{word.notes}</p> : null}

      {isNounLike ? (
        <section className="section">
          <h2 className="section-title">Esetminták</h2>
          <GrammarTable
            rows={CASES.slice(0, 8)}
            columns={[
              { key: 'c', header: 'Eset', render: (c) => c.nameHu },
              {
                key: 'f',
                header: 'Alak',
                render: (c) => buildNoun({ stem: word.word, caseId: c.id }),
              },
            ]}
          />
          <h3>Birtokos alakok</h3>
          <GrammarTable
            rows={PERSONS}
            columns={[
              { key: 'p', header: 'Személy', render: (p) => p.labelHu },
              {
                key: 'f',
                header: 'Alak',
                render: (p) => buildNoun({ stem: word.word, person: p.id }),
              },
            ]}
          />
        </section>
      ) : null}

      {isVerb ? (
        <section className="section">
          <h2 className="section-title">Ragozási minták</h2>
          <GrammarTable
            rows={PERSONS}
            columns={[
              { key: 'p', header: 'Személy', render: (p) => p.label },
              {
                key: 'pr',
                header: 'Jelen',
                render: (p) => buildVerb({ stem: word.word, person: p.id }),
              },
              {
                key: 'pa',
                header: 'Múlt',
                render: (p) =>
                  buildVerb({ stem: word.word, tense: 'past', person: p.id }),
              },
              {
                key: 'fu',
                header: 'Jövő',
                render: (p) =>
                  buildVerb({ stem: word.word, tense: 'future', person: p.id }),
              },
            ]}
          />
        </section>
      ) : null}
    </article>
  );
}
