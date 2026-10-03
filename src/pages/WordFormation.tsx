import { ExampleList } from '../components/ExampleSentence/ExampleSentence';
import { GrammarTable } from '../components/GrammarTable/GrammarTable';
import { RememberBox } from '../components/RememberBox/RememberBox';
import {
  COMPOUND_EXAMPLES,
  COMPOUND_RULE_HU,
  DERIVATIONAL_AFFIXES,
  WORD_FAMILY_EXAMPLE,
} from '../data/aigramma/wordFormation';

export function WordFormation() {
  return (
    <article>
      <h1>Szóképzés</h1>
      <p className="lead">
        A rokon szavak közös tőből épülnek szabályos képzőkkel — nem külön
        memorizálandó gyökökkel.
      </p>

      <section className="section">
        <h2 className="section-title">Képzők</h2>
        <GrammarTable
          rows={DERIVATIONAL_AFFIXES}
          columns={[
            { key: 'n', header: 'Jelentés', render: (r) => r.meaningHu },
            {
              key: 'f',
              header: 'Alak',
              render: (r) =>
                typeof r.form === 'string'
                  ? r.form
                  : `-${r.form.back}/-${r.form.front}`,
            },
            { key: 't', header: 'Típus', render: (r) => r.type },
            { key: 'p', header: 'Eredmény', render: (r) => r.produces },
          ]}
        />
      </section>

      {DERIVATIONAL_AFFIXES.map((affix) => (
        <section className="section" key={affix.id}>
          <h2 className="section-title">{affix.meaningHu}</h2>
          <p>{affix.meaning}</p>
          <ExampleList examples={affix.examples} />
        </section>
      ))}

      <section className="section">
        <h2 className="section-title">Szócsalád: instru-</h2>
        <ExampleList examples={WORD_FAMILY_EXAMPLE} />
      </section>

      <section className="section">
        <h2 className="section-title">Összetételek</h2>
        <p style={{ whiteSpace: 'pre-wrap' }}>{COMPOUND_RULE_HU}</p>
        <ExampleList examples={COMPOUND_EXAMPLES} />
      </section>

      <RememberBox>
        teach → teacher → teaching → student: instru → instruaro → instruado →
        instruato. Ugyanaz a tő, különböző képzők.
      </RememberBox>
    </article>
  );
}
