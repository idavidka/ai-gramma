import { ExampleList } from '../components/ExampleSentence/ExampleSentence';
import { GrammarTable } from '../components/GrammarTable/GrammarTable';
import { RememberBox } from '../components/RememberBox/RememberBox';
import { VerbBuilder } from '../components/WordBuilder/VerbBuilder';
import { MODE_VS_OPTATIVE_NOTE, MODES } from '../data/aigramma/modes';
import { INTERROGATIVE_WORDS } from '../data/aigramma/pronouns';
import { dualLabel } from '../data/aigramma/suffixes';
import { useLanguage } from '../i18n/LanguageContext';

export function Modes() {
  const { lang, pick } = useLanguage();

  return (
    <article>
      <h1>{pick('Modes', 'Módok')}</h1>
      <p className="lead">
        {pick(
          'Exactly five modes: indicative, interrogative, negative, optative, conditional.',
          'Pontosan öt mód: kijelentő, kérdő, tagadó, óhajtó, feltételes.',
        )}
      </p>

      <GrammarTable
        rows={MODES}
        columns={[
          {
            key: 'n',
            header: pick('Mode', 'Mód'),
            render: (r) => (lang === 'hu' ? r.nameHu : r.name),
          },
          {
            key: 's',
            header: pick('Suffix', 'Toldalék'),
            render: (r) => dualLabel(r.suffix),
          },
          {
            key: 'f',
            header: pick('Formation', 'Képzés'),
            render: (r) => (lang === 'hu' ? r.formationHu : r.formation),
          },
        ]}
      />

      {MODES.map((mode) => (
        <section className="section" key={mode.id} id={mode.id}>
          <h2 className="section-title">
            {lang === 'hu' ? mode.nameHu : mode.name}
          </h2>
          <p>
            <strong>{pick('What is it?', 'Mi ez?')}</strong>{' '}
            {lang === 'hu' ? mode.explanationHu : mode.explanation}
          </p>
          <div className="rule-block">
            {lang === 'hu' ? mode.formationHu : mode.formation}
          </div>
          <ExampleList examples={mode.examples} />
        </section>
      ))}

      <section className="section">
        <h2 className="section-title">{pick('Question words', 'Kérdőszavak')}</h2>
        <GrammarTable
          rows={INTERROGATIVE_WORDS}
          columns={[
            { key: 'f', header: 'Aigramma', render: (r) => r.form },
            { key: 'e', header: 'English', render: (r) => r.meaning },
            { key: 'h', header: 'Magyar', render: (r) => r.meaningHu },
          ]}
        />
      </section>

      <section className="section">
        <h2 className="section-title">
          {pick('Optative vs conditional', 'Óhajtó vs. feltételes')}
        </h2>
        <p style={{ whiteSpace: 'pre-wrap' }}>
          {pick(MODE_VS_OPTATIVE_NOTE.en, MODE_VS_OPTATIVE_NOTE.hu)}
        </p>
      </section>

      <VerbBuilder />

      <RememberBox>
        {pick(
          'Simple negation uses mode marker -x/-ux|-ix. To negate another mode, put particle na before the verb.',
          'Egyszerű tagadás: módjel -x/-ux|-ix. Más mód tagadásához tedd a na partikulát az ige elé.',
        )}
      </RememberBox>
    </article>
  );
}
