import { useState } from 'react';
import { MODES } from '../../data/aigramma/modes';
import { PERSONS } from '../../data/aigramma/persons';
import { TENSES } from '../../data/aigramma/tenses';
import { dualLabel } from '../../data/aigramma/suffixes';
import { useLanguage } from '../../i18n/LanguageContext';
import type { Mode, Person, Tense } from '../../types/aigramma';
import { buildVerb, verbBreakdown } from '../../utils/morphology';
import { describeHarmony } from '../../utils/vowelHarmony';

const STEMS = [
  { stem: 'kala', label: 'kala (walk / jár)' },
  { stem: 'eda', label: 'eda (eat / eszik)' },
  { stem: 'vida', label: 'vida (see / lát)' },
  { stem: 'labora', label: 'labora (work / dolgozik)' },
  { stem: 'flu', label: 'flu (flow / folyik) — C-final' },
  { stem: 'kompren', label: 'kompren (understand / ért) — C-final' },
];

export function VerbBuilder() {
  const { t, lang } = useLanguage();
  const [stem, setStem] = useState('kala');
  const [tense, setTense] = useState<Tense>('present');
  const [mode, setMode] = useState<Mode>('indicative');
  const [person, setPerson] = useState<Person>('1sg');

  const result = buildVerb({ stem, tense, mode, person });
  const parts = verbBreakdown({ stem, tense, mode, person });

  return (
    <section className="builder">
      <h3>{t('builder.verbTitle')}</h3>
      <p className="lead">
        {t('builder.verbLead')} {t('builder.harmony')}:{' '}
        <strong>{describeHarmony(stem)}</strong>
      </p>
      <div className="builder-grid">
        <label>
          {t('builder.verbStem')}
          <select value={stem} onChange={(e) => setStem(e.target.value)}>
            {STEMS.map((s) => (
              <option key={s.stem} value={s.stem}>
                {s.label}
              </option>
            ))}
          </select>
        </label>
        <label>
          {t('builder.tense')}
          <select value={tense} onChange={(e) => setTense(e.target.value as Tense)}>
            {TENSES.map((tenseItem) => (
              <option key={tenseItem.id} value={tenseItem.id}>
                {lang === 'hu' ? tenseItem.nameHu : tenseItem.name} (
                {dualLabel(tenseItem.suffix)})
              </option>
            ))}
          </select>
        </label>
        <label>
          {t('builder.mode')}
          <select value={mode} onChange={(e) => setMode(e.target.value as Mode)}>
            {MODES.map((modeItem) => (
              <option key={modeItem.id} value={modeItem.id}>
                {lang === 'hu' ? modeItem.nameHu : modeItem.name} (
                {dualLabel(modeItem.suffix)})
              </option>
            ))}
          </select>
        </label>
        <label>
          {t('builder.person')}
          <select
            value={person}
            onChange={(e) => setPerson(e.target.value as Person)}
          >
            {PERSONS.map((p) => (
              <option key={p.id} value={p.id}>
                {p.label} — {lang === 'hu' ? p.labelHu : p.pronounMeaning}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="builder-flow">
        {parts.map((part, index) => (
          <span key={part.label} style={{ display: 'contents' }}>
            {index > 0 ? <span className="arrow">→</span> : null}
            <span className="chip">
              <small>{lang === 'hu' ? part.labelHu : part.label}</small> {part.value}
            </span>
          </span>
        ))}
        <span className="arrow">=</span>
      </div>
      <p className="final-word">{result}</p>
    </section>
  );
}
