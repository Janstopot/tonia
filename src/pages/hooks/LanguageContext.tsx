import React, { createContext, useContext, useState, ReactNode } from 'react';

const LanguageContext = createContext({
  currentLanguage: 'ENG',
  handleEngClick: () => { },
  handleFrClick: () => { },
});

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [currentLanguage, setCurrentLanguage] = useState('ENG');

  const handleEngClick = () => {
    setCurrentLanguage('ENG');
  };

  const handleFrClick = () => {
    setCurrentLanguage('FR');
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, handleEngClick, handleFrClick }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
