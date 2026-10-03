import { ExampleList } from '../components/ExampleSentence/ExampleSentence';
import { RememberBox } from '../components/RememberBox/RememberBox';
import { SENTENCE_EXAMPLES } from '../data/aigramma/examples';

export function Sentences() {
  return (
    <article>
      <h1>Mondatszerkezet</h1>
      <p className="lead">
        Az alapértelmezett szórend: ALANY + IGE + TÁRGY (SVO). Más sorrend csak
        egyértelmű grammatikai vagy pragmatikai okból.
      </p>

      <section className="section">
        <h2 className="section-title">Alapmondat</h2>
        <div className="rule-block">SUBJECT + VERB + OBJECT</div>
        <ExampleList
          examples={SENTENCE_EXAMPLES.filter((e) => e.tags?.includes('basic'))}
        />
      </section>

      <section className="section">
        <h2 className="section-title">Melléknevek és határozók</h2>
        <p>
          A melléknév a főnév előtt áll (<em>bona kita</em>). A határozó általában
          az ige után vagy a mondat elején áll időhatározóként (
          <em>morga iram</em>).
        </p>
      </section>

      <section className="section">
        <h2 className="section-title">Kérdések</h2>
        <p>
          Eldöntendő kérdés: kérdő mód (<em>-ko/-kö</em>). Kiegészítendő kérdés:
          kérdőszó a helyén + kijelentő vagy kérdő ige.
        </p>
      </section>

      <section className="section">
        <h2 className="section-title">Tagadás</h2>
        <p>
          Igei tagadás: tagadó mód. Névszói/melléknévi ellentét: <em>mal-</em>{' '}
          előképző. Tagadó válasz: <em>Ne.</em>
        </p>
      </section>

      <section className="section">
        <h2 className="section-title">Összetett mondatok</h2>
        <p>
          Kötőszók: <em>kaj</em> (és), <em>sed</em> (de), <em>au</em> (vagy),{' '}
          <em>se</em> (ha), <em>car</em> (mert), <em>ke</em> (hogy). Vonatkozó
          mellékmondat: <em>kiu / kio / kie</em>.
        </p>
        <ExampleList
          examples={SENTENCE_EXAMPLES.filter(
            (e) =>
              e.tags?.includes('intermediate') || e.tags?.includes('advanced'),
          )}
        />
      </section>

      <section className="section">
        <h2 className="section-title">Összehasonlítás</h2>
        <div className="rule-block">
          X pli ADJ ol Y — X melléknévebb, mint Y
          <br />
          Tomo pli granda ol skole. — A ház nagyobb, mint az iskola.
        </div>
      </section>

      <RememberBox>
        Maradj az SVO-nál, amíg magabiztos nem vagy. A ragok viselik a pontos
        szerepeket — a szórend maradjon egyszerű.
      </RememberBox>
    </article>
  );
}
