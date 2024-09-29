import React from 'react';
import styles from './LanguageDropDown.module.scss';
import usa from '../../../../assets/images/usa.avif';

const LanguageDropDown = (props) => {
  const { languages, selectedLanguage, handleLanguageChange } = props;

  return (
    <div className={styles.dropDown}>
      <div className={styles.changeLanguage}>
        <h4>Change language</h4>
        {languages.map((lang) => (
          <div key={lang.code}>
            <input
              type="radio"
              id={lang.code}
              name="language"
              value={lang.code}
              checked={selectedLanguage === lang.code}
              onChange={handleLanguageChange}
            />
            <label htmlFor={lang.code}>{lang.label} - {lang.code}</label>
          </div>
        ))}
      </div>

      <div className={styles.currencyBox}>
        <h6>
          Change currency <a href="" style={{ color: 'blue' }}>Learn more</a>
        </h6>
        <div className={styles.currencies}>
          <a href="">$ - USD - US Dollar</a>
          <div><a href="">Change</a></div>
        </div>
      </div>

      <div className={styles.amazon}>
        <div className={styles.goToAmazon}>
          <div>
            <img src={usa} alt="" />
          </div>
          You are shopping on Amazon.com
        </div>
        <a href="" style={{ color: 'blue' }}>
          Change country/region
        </a>
      </div>
    </div>
  );
};

export default LanguageDropDown;
