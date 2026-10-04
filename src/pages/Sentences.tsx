import { ExampleList } from '../components/ExampleSentence/ExampleSentence';
import { RememberBox } from '../components/RememberBox/RememberBox';
import { SENTENCE_EXAMPLES } from '../data/aigramma/examples';
import { useLanguage } from '../i18n/LanguageContext';

export function Sentences() {
  const { pick } = useLanguage();

  return (
    <article>
      <h1>{pick('Sentence structure', 'Mondatszerkezet')}</h1>
      <p className="lead">
        {pick(
          'Default word order: SUBJECT + VERB + OBJECT (SVO). Other orders only for clear grammatical or pragmatic reasons.',
          'Az alapértelmezett szórend: ALANY + IGE + TÁRGY (SVO). Más sorrend csak egyértelmű grammatikai vagy pragmatikai okból.',
        )}
      </p>

      <section className="section">
        <h2 className="section-title">
          {pick('Basic sentence', 'Alapmondat')}
        </h2>
        <div className="rule-block">SUBJECT + VERB + OBJECT</div>
        <ExampleList
          examples={SENTENCE_EXAMPLES.filter((e) => e.tags?.includes('basic'))}
        />
      </section>

      <section className="section">
        <h2 className="section-title">
          {pick('Adjectives and adverbs', 'Melléknevek és határozók')}
        </h2>
        <p>
          {pick(
            'Adjectives stand before the noun (bona kita). Adverbs usually follow the verb, or open the sentence as time markers (morga iram).',
            'A melléknév a főnév előtt áll (bona kita). A határozó általában az ige után vagy a mondat elején áll időhatározóként (morga iram).',
          )}
        </p>
      </section>

      <section className="section">
        <h2 className="section-title">{pick('Questions', 'Kérdések')}</h2>
        <p>
          {pick(
            'Yes/no questions use interrogative mode (-h / -uh|-ih). Content questions keep the question word in place plus indicative or interrogative verb.',
            'Eldöntendő kérdés: kérdő mód (-h / -uh|-ih). Kiegészítendő kérdés: kérdőszó a helyén + kijelentő vagy kérdő ige.',
          )}
        </p>
      </section>

      <section className="section">
        <h2 className="section-title">{pick('Negation', 'Tagadás')}</h2>
        <p>
          {pick(
            'Verbal negation: negative mode (-x / -ux|-ix). Nominal/adjectival opposite: mal- prefix. Negative answer: Ne.',
            'Igei tagadás: tagadó mód (-x / -ux|-ix). Névszói/melléknévi ellentét: mal- előképző. Tagadó válasz: Ne.',
          )}
        </p>
      </section>

      <section className="section">
        <h2 className="section-title">
          {pick('Complex sentences', 'Összetett mondatok')}
        </h2>
        <p>
          {pick(
            'Conjunctions: kaj (and), sed (but), au (or), se (if), car (because), ke (that). Relative clause: kiu / kio / kie.',
            'Kötőszók: kaj (és), sed (de), au (vagy), se (ha), car (mert), ke (hogy). Vonatkozó mellékmondat: kiu / kio / kie.',
          )}
        </p>
        <ExampleList
          examples={SENTENCE_EXAMPLES.filter(
            (e) =>
              e.tags?.includes('intermediate') || e.tags?.includes('advanced'),
          )}
        />
      </section>

      <section className="section">
        <h2 className="section-title">
          {pick('Comparison', 'Összehasonlítás')}
        </h2>
        <div className="rule-block">
          X pli ADJ ol Y — {pick('X is more ADJ than Y', 'X melléknévebb, mint Y')}
          <br />
          Tomo pli granda ol skole. —{' '}
          {pick(
            'The house is bigger than the school.',
            'A ház nagyobb, mint az iskola.',
          )}
        </div>
      </section>

      <RememberBox>
        {pick(
          'Stay with SVO until you feel confident. Suffixes carry the precise roles — keep word order simple.',
          'Maradj az SVO-nál, amíg magabiztos nem vagy. A ragok viselik a pontos szerepeket — a szórend maradjon egyszerű.',
        )}
      </RememberBox>
    </article>
  );
}
