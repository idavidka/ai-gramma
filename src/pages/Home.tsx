import { Link } from 'react-router-dom';
import { PRONUNCIATION_NOTES } from '../data/aigramma/alphabet';
import { GRAMMAR_CHAPTERS } from '../data/aigramma/grammar';
import { DESIGN_PRINCIPLES_HU } from '../data/aigramma/phonology';

export function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-visual" aria-hidden />
        <div className="hero-copy">
          <h1 className="hero-brand">{PRONUNCIATION_NOTES.languageName}</h1>
          <p className="hero-sub">[{PRONUNCIATION_NOTES.spelledOut}]</p>
          <p className="hero-phonetic">{PRONUNCIATION_NOTES.phonetic}</p>
          <p className="hero-lead">
            Interaktív nyelvtankönyv egy teljesen szabályos mesterséges nyelvhez —
            maximális tanulhatóság, minimális kivétel.
          </p>
          <div className="cta-row">
            <Link className="btn btn-primary" to="/introduction">
              Kezdd a tankönyvet
            </Link>
            <Link className="btn btn-ghost" to="/tools">
              Próbáld a szóépítőt
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Miért Aigramma?</h2>
        <p className="lead">
          Ha megérted a szabályokat, új mondatokat tudsz alkotni — memorizált
          kivételek nélkül.
        </p>
        <div className="topic-grid">
          {DESIGN_PRINCIPLES_HU.map((p) => (
            <article className="topic-link" key={p.title}>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Fejezetek</h2>
        <div className="topic-grid">
          {GRAMMAR_CHAPTERS.map((ch) => (
            <Link className="topic-link" to={ch.path} key={ch.id}>
              <h3>{ch.titleHu}</h3>
              <p>{ch.summary}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
