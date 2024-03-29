import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <select
        className='bg-transparent border-0 font-bold'
        onChange={(e) => changeLanguage(e.target.value)}
        defaultValue={i18n.language}>
        <option value='en'>En</option>
        <option value='ke'>KE</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
