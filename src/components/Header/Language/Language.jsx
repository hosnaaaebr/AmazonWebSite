import styles from './Language.module.scss';
import usa from '../../../assets/images/usa.avif';
import { IoMdArrowDropdown } from 'react-icons/io';
import { useState } from 'react';
import LanguageDropDown from './LanguageDropDown/LanguageDropDown';

const Language = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('EN');
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const languages = [
    { code: 'EN', label: 'English' },
    { code: 'ES', label: 'Español' },
    { code: 'AR', label: 'العربية' },
    { code: 'DE', label: 'Deutsch' },
    { code: 'HE', label: 'עברית' },
    { code: 'KO', label: '한국어' },
    { code: 'PT', label: 'português' },
    { code: 'ZH', label: '中文 (简体)' },
  ];

  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
    setDropdownVisible(false); // Hide dropdown after selection
  };

  const handleMouseEnter = () => setDropdownVisible(true);
  const handleMouseLeave = () => setDropdownVisible(false);

  return (
    <div
      className={styles.languageDropdown}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.language}>
        <div className={styles.imgContainer}>
          <img src={usa} alt="Flag" />
        </div>
        <p>{selectedLanguage}</p>
        <div><IoMdArrowDropdown /></div>
        {isDropdownVisible && (
          <LanguageDropDown
            languages={languages}
            selectedLanguage={selectedLanguage}
            handleLanguageChange={handleLanguageChange}
          />
        )}
      </div>
    </div>
  );
};

export default Language;
