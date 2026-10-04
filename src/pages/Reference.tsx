import { GrammarTable } from '../components/GrammarTable/GrammarTable';
import { RememberBox } from '../components/RememberBox/RememberBox';
import { CASES } from '../data/aigramma/cases';
import { MODES } from '../data/aigramma/modes';
import { PERSONS } from '../data/aigramma/persons';
import { PERSONAL_PRONOUNS } from '../data/aigramma/pronouns';
import {
  CORE_SUFFIX_TABLE,
  dualLabel,
  NOUN_SUFFIX_ORDER,
  VERB_SUFFIX_ORDER,
} from '../data/aigramma/suffixes';
import { TENSES } from '../data/aigramma/tenses';
import { useLanguage } from '../i18n/LanguageContext';
import { BACK_VOWELS, FRONT_VOWELS } from '../utils/vowelHarmony';

export function Reference() {
  const { lang, pick } = useLanguage();

  return (
    <article>
      <h1>{pick('Reference', 'Referencia')}</h1>
      <p className="lead">
        {pick(
          'Quick overview: cases, verbs, persons, suffixes, and harmony.',
          'Gyors áttekintés: esetek, igék, személyek, toldalékok, harmónia.',
        )}
      </p>

      <section className="section">
        <h2 className="section-title">
          {pick('Suffix order', 'Toldaléksorrend')}
        </h2>
        <p>
          {pick('Noun', 'Névszó')}:{' '}
          {NOUN_SUFFIX_ORDER.map((s) =>
            lang === 'hu' ? s.labelHu : s.label,
          ).join(' → ')}
        </p>
        <p>
          {pick('Verb', 'Ige')}:{' '}
          {VERB_SUFFIX_ORDER.map((s) =>
            lang === 'hu' ? s.labelHu : s.label,
          ).join(' → ')}
        </p>
      </section>

      <section className="section">
        <h2 className="section-title">
          {pick('Vowel harmony', 'Magánhangzó-harmónia')}
        </h2>
        <GrammarTable
          rows={[
            {
              k: pick('Back', 'Hátsó'),
              v: BACK_VOWELS.join(' '),
            },
            {
              k: pick('Front', 'Elülső'),
              v: FRONT_VOWELS.join(' '),
            },
          ]}
          columns={[
            {
              key: 'k',
              header: pick('Class', 'Osztály'),
              render: (r) => r.k,
            },
            {
              key: 'v',
              header: pick('Vowels', 'Magánhangzók'),
              render: (r) => r.v,
            },
          ]}
        />
        <p>
          {pick(
            'Every suffix is dual-shaped: consonant-initial after a vowel-final base, vowel-initial (u/i) after a consonant-final base.',
            'Minden toldalék kettős alakú: magánhangzó után mássalhangzóval kezdődik, mássalhangzó után u/i-sorral.',
          )}
        </p>
      </section>

      <section className="section">
        <h2 className="section-title">
          {pick('Case table', 'Esettáblázat')}
        </h2>
        <GrammarTable
          rows={CASES}
          columns={[
            {
              key: 'n',
              header: pick('Case', 'Eset'),
              render: (r) => (lang === 'hu' ? r.nameHu : r.name),
            },
            {
              key: 'm',
              header: pick('Meaning', 'Jelentés'),
              render: (r) => (lang === 'hu' ? r.meaningHu : r.meaning),
            },
            {
              key: 's',
              header: pick('Suffix', 'Toldalék'),
              render: (r) => dualLabel(r.suffix),
            },
          ]}
        />
      </section>

      <section className="section">
        <h2 className="section-title">{pick('Tenses', 'Igeidők')}</h2>
        <GrammarTable
          rows={TENSES}
          columns={[
            {
              key: 'n',
              header: pick('Tense', 'Idő'),
              render: (r) => (lang === 'hu' ? r.nameHu : r.name),
            },
            {
              key: 's',
              header: pick('Suffix', 'Toldalék'),
              render: (r) => dualLabel(r.suffix),
            },
          ]}
        />
      </section>

      <section className="section">
        <h2 className="section-title">{pick('Modes', 'Módok')}</h2>
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
          ]}
        />
      </section>

      <section className="section">
        <h2 className="section-title">{pick('Persons', 'Személyek')}</h2>
        <GrammarTable
          rows={PERSONS}
          columns={[
            {
              key: 'l',
              header: pick('Person', 'Személy'),
              render: (r) => (lang === 'hu' ? r.labelHu : r.label),
            },
            {
              key: 'pr',
              header: pick('Pronoun', 'Névmás'),
              render: (r) => r.pronoun,
            },
            {
              key: 'v',
              header: pick('Verb ending', 'Igei rag'),
              render: (r) => dualLabel(r.verbSuffix),
            },
            {
              key: 'p',
              header: pick('Possessive', 'Birtokos'),
              render: (r) => dualLabel(r.possessiveSuffix),
            },
          ]}
        />
      </section>

      <section className="section">
        <h2 className="section-title">{pick('Pronouns', 'Névmások')}</h2>
        <GrammarTable
          rows={PERSONAL_PRONOUNS}
          columns={[
            {
              key: 'p',
              header: pick('Person', 'Személy'),
              render: (r) => r.person,
            },
            {
              key: 'f',
              header: pick('Form', 'Alak'),
              render: (r) => r.form,
            },
            {
              key: 'm',
              header: pick('Meaning', 'Jelentés'),
              render: (r) => (lang === 'hu' ? r.meaningHu : r.meaning),
            },
          ]}
        />
      </section>

      <section className="section">
        <h2 className="section-title">
          {pick('Suffix inventory', 'Toldaléktár')}
        </h2>
        <GrammarTable
          rows={CORE_SUFFIX_TABLE}
          columns={[
            {
              key: 'c',
              header: pick('Category', 'Kategória'),
              render: (r) => r.category,
            },
            {
              key: 'n',
              header: pick('Name', 'Név'),
              render: (r) => (lang === 'hu' ? r.nameHu : r.name),
            },
            {
              key: 's',
              header: pick('Shapes', 'Alakok'),
              render: (r) => dualLabel(r.suffix),
            },
          ]}
        />
      </section>

      <RememberBox>
        {pick(
          'Single source of truth: the files under src/data/aigramma/. The UI only displays the rules.',
          'Egyetlen igazságforrás: a src/data/aigramma/ fájlok. A UI csak megjeleníti a szabályokat.',
        )}
      </RememberBox>
    </article>
  );
}
