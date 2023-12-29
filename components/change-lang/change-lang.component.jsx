import React, { useState, useEffect } from 'react';
import styles from './change-lang.module.scss';

const ChangeLang = () => {
    const [currentLang, setCurrentLang] = useState(document.documentElement.lang);

    const changeLanguage = (lang) => {
        document.documentElement.lang = lang;
        setCurrentLang(lang);
    };

    useEffect(() => {
        // Update the current language based on the document's lang attribute on component mount
        setCurrentLang(document.documentElement.lang);
    }, []);

    return (
        <div className={styles.changeLang}>
            <button
                onClick={() => changeLanguage('en')}
                aria-pressed={currentLang === 'en'}
                aria-label="Switch to English"
            >
                English
            </button>
            <button
                onClick={() => changeLanguage('ar')}
                aria-pressed={currentLang === 'ar'}
                aria-label="Switch to Arabic"
            >
                عربي
            </button>
        </div>
    );
}

export default ChangeLang;
