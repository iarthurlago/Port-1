import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import brFlag from '../assets/flag-br.svg';
import usFlag from '../assets/flag-us.svg';

export default function LanguageToggle() {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language || 'pt');

  function switchTo(newLang) {
    i18n.changeLanguage(newLang);
    setLang(newLang);
  }

  return (
    <div className="lang-toggle" role="group" aria-label="Language switch">
      <button
        className={`lang-btn ${lang === 'pt' ? 'active' : ''}`}
        onClick={() => switchTo('pt')}
        aria-label="Português"
      >
        <img src={brFlag} alt="PT-BR" className="flag" />
        <span className="lang-code">PT-BR</span>
      </button>

      <div className="divider" aria-hidden="true">↔</div>

      <button
        className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
        onClick={() => switchTo('en')}
        aria-label="English"
      >
        <span className="lang-code">EN</span>
        <img src={usFlag} alt="EN" className="flag" />
      </button>
    </div>
  );
}
