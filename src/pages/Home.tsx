import { Link } from 'react-router-dom';
import { PRONUNCIATION_NOTES } from '../data/aigramma/alphabet';
import { GRAMMAR_CHAPTERS } from '../data/aigramma/grammar';
import { DESIGN_PRINCIPLES } from '../data/aigramma/phonology';
import { useLanguage } from '../i18n/LanguageContext';

export function Home() {
  const { t, lang } = useLanguage();

  return (
    <>
      <section className="hero">
        <div className="hero-visual" aria-hidden />
        <div className="hero-copy">
          <h1 className="hero-brand">{PRONUNCIATION_NOTES.languageName}</h1>
          <p className="hero-sub">[{PRONUNCIATION_NOTES.spelledOut}]</p>
          <p className="hero-phonetic">{PRONUNCIATION_NOTES.phonetic}</p>
          <p className="hero-lead">{t('home.lead')}</p>
          <div className="cta-row">
            <Link className="btn btn-primary" to="/introduction">
              {t('home.start')}
            </Link>
            <Link className="btn btn-ghost" to="/tools">
              {t('home.tools')}
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">{t('home.why')}</h2>
        <p className="lead">{t('home.whyLead')}</p>
        <div className="topic-grid">
          {DESIGN_PRINCIPLES.map((p) => (
            <article className="topic-link" key={p.title}>
              <h3>{lang === 'hu' ? p.titleHu : p.title}</h3>
              <p>{lang === 'hu' ? p.bodyHu : p.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">{t('home.chapters')}</h2>
        <div className="topic-grid">
          {GRAMMAR_CHAPTERS.map((ch) => (
            <Link className="topic-link" to={ch.path} key={ch.id}>
              <h3>{lang === 'hu' ? ch.titleHu : ch.title}</h3>
              <p>{lang === 'hu' ? ch.summaryHu : ch.summary}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
