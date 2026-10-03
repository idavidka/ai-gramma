import { Link } from 'react-router-dom';
import { RememberBox } from '../components/RememberBox/RememberBox';
import { PRONUNCIATION_NOTES } from '../data/aigramma/alphabet';
import { DESIGN_PRINCIPLES } from '../data/aigramma/phonology';
import { useLanguage } from '../i18n/LanguageContext';

export function Introduction() {
  const { lang, pick } = useLanguage();

  return (
    <article>
      <h1>{pick('Introduction', 'Bevezetés')}</h1>
      <p className="lead">
        <strong>Aigramma</strong> [{PRONUNCIATION_NOTES.spelledOut}]{' '}
        {pick(
          'is an original constructed language designed for maximum learnability with maximum regularity.',
          'egy eredeti mesterséges nyelv, amelynek célja a maximális tanulhatóság maximális regularitással.',
        )}
      </p>

      <section className="section">
        <h2 className="section-title">{pick('What is it?', 'Mi ez?')}</h2>
        <p>
          {pick(
            'This site is not a quiz app. It is a digital grammar book that teaches Aigramma from zero: sounds, dual suffixes, cases, verbs, sentences, then 1000 basic words.',
            'Ez a webhely nem kvízalkalmazás, hanem digitális nyelvtankönyv. Nulláról tanítja az Aigrammát: hangok, kettős toldalékok, esetek, igék, mondatok, majd ezer alapszó.',
          )}
        </p>
      </section>

      <section className="section">
        <h2 className="section-title">{pick('Design principles', 'Tervezési elvek')}</h2>
        {DESIGN_PRINCIPLES.map((p) => (
          <div key={p.title} style={{ marginBottom: '1rem' }}>
            <h3>{lang === 'hu' ? p.titleHu : p.title}</h3>
            <p>{lang === 'hu' ? p.bodyHu : p.body}</p>
          </div>
        ))}
      </section>

      <section className="section">
        <h2 className="section-title">{pick('How to learn', 'Hogyan tanulj?')}</h2>
        <ol>
          <li>
            {pick(
              'Read pronunciation and the dual-suffix / harmony rules.',
              'Olvasd el a kiejtést és a kettős toldalék / harmónia szabályait.',
            )}
          </li>
          <li>
            {pick(
              'Learn the fixed suffix order.',
              'Értsd meg a kötött toldaléksorrendet.',
            )}
          </li>
          <li>
            {pick(
              'Study the three tenses and five modes.',
              'Tanuld meg a három igeidőt és az öt módot.',
            )}
          </li>
          <li>
            {pick(
              'Build words with the interactive tools.',
              'Építs szavakat az interaktív eszközökkel.',
            )}
          </li>
          <li>
            {pick(
              'Grow vocabulary by category.',
              'Bővítsd a szókincset kategóriánként.',
            )}
          </li>
        </ol>
      </section>

      <RememberBox>
        {pick(PRONUNCIATION_NOTES.note, PRONUNCIATION_NOTES.noteHu)}
      </RememberBox>

      <div className="cta-row">
        <Link className="btn btn-solid" to="/pronunciation">
          {pick('Next: Pronunciation', 'Tovább: Kiejtés')}
        </Link>
      </div>
    </article>
  );
}
