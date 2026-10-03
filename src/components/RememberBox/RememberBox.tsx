import type { ReactNode } from 'react';
import { useLanguage } from '../../i18n/LanguageContext';

export function RememberBox({ children }: { children: ReactNode }) {
  const { t } = useLanguage();
  return (
    <aside className="remember">
      <strong>{t('ui.remember')}</strong>
      <div>{children}</div>
    </aside>
  );
}
