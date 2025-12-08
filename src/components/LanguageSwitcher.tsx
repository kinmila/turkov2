import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  
  const toggleLanguage = () => {
    const newLang = i18n.language === 'uk' ? 'en' : 'uk';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="w-9 h-9 flex items-center justify-center bg-white/10 rounded hover:bg-white/20 transition-all text-white text-sm font-medium"
      aria-label="Switch language"
    >
      {i18n.language === 'uk' ? 'EN' : 'UA'}
    </button>
  );
};

export default LanguageSwitcher;
