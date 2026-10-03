import { ExampleList } from '../components/ExampleSentence/ExampleSentence';
import { GrammarTable } from '../components/GrammarTable/GrammarTable';
import { RememberBox } from '../components/RememberBox/RememberBox';
import { WordBuilder } from '../components/WordBuilder/WordBuilder';
import { CASE_ORDER_NOTE_HU, CASES } from '../data/aigramma/cases';

export function Cases() {
  return (
    <article>
      <h1>Esetek</h1>
      <p className="lead">
        Mivel csak három igeidő van, a pontosabb viszonyokat gyakran az esetek
        fejezik ki — szabályosan, két harmóniaváltozattal.
      </p>

      <section className="section">
        <h2 className="section-title">Áttekintő táblázat</h2>
        <GrammarTable
          rows={CASES}
          columns={[
            { key: 'n', header: 'Eset', render: (r) => r.nameHu },
            { key: 'm', header: 'Jelentés', render: (r) => r.meaningHu },
            {
              key: 's',
              header: 'Toldalék',
              render: (r) =>
                r.suffix.back || r.suffix.front
                  ? `-${r.suffix.back}/-${r.suffix.front}`
                  : '∅',
            },
            { key: 'u', header: 'Használat', render: (r) => r.usageHu },
          ]}
        />
        <p>{CASE_ORDER_NOTE_HU}</p>
      </section>

      {CASES.map((c) => (
        <section className="section" key={c.id} id={c.id}>
          <h2 className="section-title">{c.nameHu}</h2>
          <p>
            <strong>Jelentés:</strong> {c.meaningHu} ({c.meaning})
          </p>
          <div className="rule-block">
            toldalék: -{c.suffix.back || '∅'} / -{c.suffix.front || '∅'}
          </div>
          <p>{c.usageHu}</p>
          <ExampleList examples={c.examples} />
        </section>
      ))}

      <WordBuilder />

      <RememberBox>
        Tizenkét eset, mindegyiknek pontosan két (vagy nulla) alakja van. Nincs
        rendhagyó esetvégződés.
      </RememberBox>
    </article>
  );
}
