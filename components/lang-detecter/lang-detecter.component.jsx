import { useState, useEffect } from 'react';

const LanguageDetector = () => {
    const [language, setLanguage] = useState('en'); // Default to 'en'

    useEffect(() => {
        // Set the initial language based on the document's lang attribute
        setLanguage(document.documentElement.lang || 'en');

        // Use MutationObserver to detect changes in the lang attribute
        const observer = new MutationObserver(mutations => {
            mutations.forEach(mutation => {
                if (mutation.type === 'attributes' && mutation.attributeName === 'lang') {
                    setLanguage(document.documentElement.lang);
                }
            });
        });

        observer.observe(document.documentElement, { attributes: true });

        // Clean up the observer on component unmount
        return () => observer.disconnect();
    }, []);

    return language;
};

export default LanguageDetector;
