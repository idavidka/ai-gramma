import { Link } from 'react-router-dom';
import { RememberBox } from '../components/RememberBox/RememberBox';
import { PRONUNCIATION_NOTES } from '../data/aigramma/alphabet';
import { DESIGN_PRINCIPLES_HU } from '../data/aigramma/phonology';

export function Introduction() {
  return (
    <article>
      <h1>Bevezetés</h1>
      <p className="lead">
        Az <strong>Aigramma</strong> [{PRONUNCIATION_NOTES.spelledOut}] eredeti
        mesterséges nyelv. Célja: maximális tanulhatóság maximális regularitással.
      </p>

      <section className="section">
        <h2 className="section-title">Mi ez?</h2>
        <p>
          Ez a webhely nem kvízalkalmazás, hanem digitális nyelvtankönyv. Lépésről
          lépésre tanítja a nyelvet nulláról: hangtan, toldalékolás, esetek, igék,
          mondatok, majd ezer alapszó.
        </p>
      </section>

      <section className="section">
        <h2 className="section-title">Tervezési elvek</h2>
        {DESIGN_PRINCIPLES_HU.map((p) => (
          <div key={p.title} style={{ marginBottom: '1rem' }}>
            <h3>{p.title}</h3>
            <p>{p.body}</p>
          </div>
        ))}
      </section>

      <section className="section">
        <h2 className="section-title">Hogyan tanulj?</h2>
        <ol>
          <li>Olvasd el a kiejtést és a magánhangzó-harmóniát.</li>
          <li>Értsd meg a kötött toldaléksorrendet.</li>
          <li>Tanuld meg a három igeidőt és az öt módot.</li>
          <li>Építs szavakat a szóépítővel — látni fogod a rendszert.</li>
          <li>Bővítsd a szókincset kategóriánként.</li>
        </ol>
      </section>

      <RememberBox>
        Az Aigramma neve magyarosan olvasandó: A-I-G-R-A-M-M-A. A nyelv maga is
        erre a tisztaságra épül: ami le van írva, az hangzik.
      </RememberBox>

      <div className="cta-row">
        <Link className="btn btn-solid" to="/pronunciation">
          Tovább: Kiejtés
        </Link>
      </div>
    </article>
  );
}
