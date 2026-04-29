import { createContext, useContext, useState } from 'react';

export type Lang = 'en' | 'pt';

interface LangContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
}

const LanguageContext = createContext<LangContextValue>({ lang: 'en', setLang: () => {} });

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(() => {
    try {
      return (localStorage.getItem('lang') as Lang) || 'en';
    } catch {
      return 'en';
    }
  });

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem('lang', l);
    } catch {}
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => useContext(LanguageContext);
