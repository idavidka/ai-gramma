import { useState } from 'react';
import { CASES } from '../../data/aigramma/cases';
import { PERSONS } from '../../data/aigramma/persons';
import { dualLabel } from '../../data/aigramma/suffixes';
import { useLanguage } from '../../i18n/LanguageContext';
import type { CaseId, Person } from '../../types/aigramma';
import { buildNoun, nounBreakdown } from '../../utils/morphology';
import { describeHarmony } from '../../utils/vowelHarmony';

const STEM_OPTIONS = [
  { stem: 'tomo', label: 'tomo (house / ház)' },
  { stem: 'kere', label: 'kere (garden / kert)' },
  { stem: 'kita', label: 'kita (book / könyv)' },
  { stem: 'kiv', label: 'kiv (bicycle / bicikli)' },
  { stem: 'hop', label: 'hop (tent / sátor)' },
  { stem: 'amiko', label: 'amiko (friend / barát)' },
];

export function WordBuilder() {
  const { t, lang } = useLanguage();
  const [stem, setStem] = useState('tomo');
  const [caseId, setCaseId] = useState<CaseId>('inessive');
  const [plural, setPlural] = useState(true);
  const [person, setPerson] = useState<Person | ''>('1sg');

  const personValue = person || null;
  const result = buildNoun({ stem, caseId, plural, person: personValue });
  const parts = nounBreakdown({ stem, caseId, plural, person: personValue });

  return (
    <section className="builder">
      <h3>{t('builder.wordTitle')}</h3>
      <p className="lead">
        {t('builder.wordLead')} {t('builder.harmony')}:{' '}
        <strong>{describeHarmony(stem)}</strong>
      </p>
      <div className="builder-grid">
        <label>
          {t('builder.stem')}
          <select value={stem} onChange={(e) => setStem(e.target.value)}>
            {STEM_OPTIONS.map((o) => (
              <option key={o.stem} value={o.stem}>
                {o.label}
              </option>
            ))}
          </select>
        </label>
        <label>
          {t('builder.case')}
          <select
            value={caseId}
            onChange={(e) => setCaseId(e.target.value as CaseId)}
          >
            {CASES.map((c) => (
              <option key={c.id} value={c.id}>
                {lang === 'hu' ? c.nameHu : c.name} ({dualLabel(c.suffix)})
              </option>
            ))}
          </select>
        </label>
        <label>
          {t('builder.plural')}
          <select
            value={plural ? 'yes' : 'no'}
            onChange={(e) => setPlural(e.target.value === 'yes')}
          >
            <option value="no">{t('builder.singular')}</option>
            <option value="yes">{t('builder.pluralYes')}</option>
          </select>
        </label>
        <label>
          {t('builder.possessive')}
          <select
            value={person}
            onChange={(e) => setPerson(e.target.value as Person | '')}
          >
            <option value="">{t('builder.none')}</option>
            {PERSONS.map((p) => (
              <option key={p.id} value={p.id}>
                {lang === 'hu' ? p.labelHu : p.label} ({dualLabel(p.possessiveSuffix)})
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
