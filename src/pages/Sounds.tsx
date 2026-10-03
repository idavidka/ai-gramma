import { GrammarTable } from '../components/GrammarTable/GrammarTable';
import { RememberBox } from '../components/RememberBox/RememberBox';
import {
  CONSONANTS,
  SOUND_GUIDE,
  VOWELS,
} from '../data/aigramma/alphabet';
import { useLanguage } from '../i18n/LanguageContext';

export function Sounds() {
  const { lang, pick } = useLanguage();

  return (
    <article>
      <h1>{pick(SOUND_GUIDE.title, SOUND_GUIDE.titleHu)}</h1>
      <p className="lead">{pick(SOUND_GUIDE.lead, SOUND_GUIDE.leadHu)}</p>

      <section className="section">
        <h2 className="section-title">
          {pick('How to read this page', 'Hogyan olvasd ezt az oldalt')}
        </h2>
        <ul>
          {(lang === 'hu' ? SOUND_GUIDE.tipsHu : SOUND_GUIDE.tips).map((tip) => (
            <li key={tip}>{tip}</li>
          ))}
        </ul>
        <div className="rule-block">
          {pick(
            'Letter → IPA → phonetic description → example word',
            'Betű → IPA → fonetikus leírás → példaszó',
          )}
        </div>
      </section>

      <section className="section" id="vowels">
        <h2 className="section-title">{pick('Vowels', 'Magánhangzók')}</h2>
        <p>{pick(SOUND_GUIDE.vowelsIntro, SOUND_GUIDE.vowelsIntroHu)}</p>
        <GrammarTable
          rows={VOWELS}
          columns={[
            {
              key: 'l',
              header: pick('Letter', 'Betű'),
              render: (r) => <strong className="mono">{r.letter}</strong>,
            },
            {
              key: 'ipa',
              header: 'IPA',
              render: (r) => <span className="mono">[{r.ipa}]</span>,
            },
            {
              key: 'ph',
              header: pick('Phonetic description', 'Fonetikus leírás'),
              render: (r) => (lang === 'hu' ? r.phoneticHu : r.phonetic),
            },
            {
              key: 'h',
              header: pick('Harmony', 'Harmónia'),
              render: (r) =>
                r.harmony === 'back'
                  ? pick('back', 'hátsó')
                  : pick('front', 'elülső'),
            },
            {
              key: 'ex',
              header: pick('Example', 'Példa'),
              render: (r) => (
                <>
                  <em>{r.example}</em>
                  {' — '}
                  {lang === 'hu' ? r.exampleMeaningHu : r.exampleMeaning}
                </>
              ),
            },
          ]}
        />
      </section>

      <section className="section" id="consonants">
        <h2 className="section-title">
          {pick('Consonants', 'Mássalhangzók')}
        </h2>
        <p>{pick(SOUND_GUIDE.consonantsIntro, SOUND_GUIDE.consonantsIntroHu)}</p>
        <GrammarTable
          rows={CONSONANTS}
          columns={[
            {
              key: 'l',
              header: pick('Letter', 'Betű'),
              render: (r) => <strong className="mono">{r.letter}</strong>,
            },
            {
              key: 'ipa',
              header: 'IPA',
              render: (r) => <span className="mono">[{r.ipa}]</span>,
            },
            {
              key: 'ph',
              header: pick('Phonetic description', 'Fonetikus leírás'),
              render: (r) => (lang === 'hu' ? r.phoneticHu : r.phonetic),
            },
            {
              key: 'm',
              header: pick('Manner', 'Képzés'),
              render: (r) =>
                (lang === 'hu' ? r.mannerHu : r.manner) ?? '—',
            },
            {
              key: 'ex',
              header: pick('Example', 'Példa'),
              render: (r) => (
                <>
                  <em>{r.example}</em>
                  {' — '}
                  {lang === 'hu' ? r.exampleMeaningHu : r.exampleMeaning}
                </>
              ),
            },
          ]}
        />
      </section>

      <section className="section">
        <h2 className="section-title">
          {pick('Quick pairs to remember', 'Gyors párok')}
        </h2>
        <GrammarTable
          rows={[
            {
              pair: 'c / k',
              note: pick(
                'c = [ts] (cats); k = [k] (kite)',
                'c = [ts] (cica); k = [k] (kert)',
              ),
            },
            {
              pair: 's / z',
              note: pick(
                's = [s] (sun); z = [z] (zoo)',
                's = [s] (száz); z = [z] (zöld)',
              ),
            },
            {
              pair: 'j / y',
              note: pick(
                'Both = [j] as in yes',
                'Mindkettő = [j], mint a jó',
              ),
            },
            {
              pair: 'v / w',
              note: pick(
                'v = [v] (voice); w = [w] (water)',
                'v = [v] (víz); w = [w] (angol water)',
              ),
            },
            {
              pair: 'x',
              note: pick(
                'Always [ks] as in box',
                'Mindig [ks], mint a taxi',
              ),
            },
          ]}
          columns={[
            {
              key: 'p',
              header: pick('Letters', 'Betűk'),
              render: (r) => <strong className="mono">{r.pair}</strong>,
            },
            {
              key: 'n',
              header: pick('Say it like…', 'Így ejtsd…'),
              render: (r) => r.note,
            },
          ]}
        />
      </section>

      <RememberBox>
        {pick(
          'One letter, one sound. Read the phonetic column first; IPA is the precise check.',
          'Egy betű, egy hang. Először a fonetikus oszlopot olvasd; az IPA a pontos ellenőrzés.',
        )}
      </RememberBox>
    </article>
  );
}
