import { useTranslation } from 'react-i18next';
import './languageToggle.css';

const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const languages = [
    { code: 'en', name: 'EN', flag: '🇺🇸' },
    { code: 'zh', name: '中', flag: '🇨🇳' }
  ];

  const toggleLanguage = () => {
    const currentLang = i18n.language;
    const newLang = currentLang === 'en' ? 'zh' : 'en';
    i18n.changeLanguage(newLang);
  };

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  return (
    <button 
      className="language-toggle" 
      onClick={toggleLanguage}
      aria-label={`Switch to ${currentLanguage.code === 'en' ? 'Chinese' : 'English'}`}
      title={`Switch to ${currentLanguage.code === 'en' ? 'Chinese' : 'English'}`}
    >
      <span className="language-flag">{currentLanguage.flag}</span>
      <span className="language-code">{currentLanguage.name}</span>
    </button>
  );
};

export default LanguageToggle;
