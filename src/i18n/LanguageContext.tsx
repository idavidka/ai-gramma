import {
  createContext,
  createElement,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import type { AppLanguage } from '../types/aigramma';
import { messages, type MessageKey } from './messages';

interface LanguageContextValue {
  lang: AppLanguage;
  setLang: (lang: AppLanguage) => void;
  t: (key: MessageKey) => string;
  pick: <T extends { en: string; hu: string } | string>(
    enOrPair: T,
    hu?: string,
  ) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = 'aigramma-lang';

function readInitialLang(): AppLanguage {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'en' || saved === 'hu') return saved;
  } catch {
    /* ignore */
  }
  return 'en';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<AppLanguage>(readInitialLang);

  const value = useMemo<LanguageContextValue>(() => {
    const setLang = (next: AppLanguage) => {
      setLangState(next);
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        /* ignore */
      }
    };

    const t = (key: MessageKey) => messages[lang][key] ?? messages.en[key];

    const pick = <T extends { en: string; hu: string } | string>(
      enOrPair: T,
      hu?: string,
    ) => {
      if (typeof enOrPair === 'string') {
        return lang === 'hu' ? (hu ?? enOrPair) : enOrPair;
      }
      return lang === 'hu' ? enOrPair.hu : enOrPair.en;
    };

    return { lang, setLang, t, pick };
  }, [lang]);

  return createElement(LanguageContext.Provider, { value }, children);
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return ctx;
}
