import React, { useState } from 'react';
import styles from './click-circles.module.scss';
import LanguageDetector from '../lang-detecter/lang-detecter.component';

const ClickCircles = () => {
    const lang = LanguageDetector();
    const [visibility, setVisibility] = useState({});

    const handleClick = (index) => {
        setVisibility(prev => ({ ...prev, [index]: true }));
    };

    const buttonContents = [
        { ar: "خلق فرص عمل", en: "Employment Creation" },
        { ar: "تطوير البنية التحتية", en: "Infrastructure development" },
        { ar: "التنمية الاقتصادية والاجتماعية المحلية", en: "Local Economic & Social Development" },
        { ar: "الحد من الفقر", en: "Poverty Reduction" }
    ];

    return (
        <div className={styles.clickCircles}>
            <div className={styles.circleSolo}>
                EIIP
            </div>
            <img className={styles.blueAngle} src="/assets/blue-angle.svg" role="presentation" alt="" />
            <div className={styles.circlesHolder}>
                {buttonContents.map((content, index) => (
                    <button 
                        key={index} 
                        onClick={() => handleClick(index)}
                        disabled={visibility[index]}
                    >
                        {visibility[index] ? (
                            <span aria-live="polite">
                                {lang === 'ar' ? content.ar : content.en}
                            </span>
                        ) : (
                            <img
                                className={styles.clickIcon}
                                src="/assets/click-icon.svg"
                                alt={lang === 'ar' ? "انقر للقراءة" : "Click to read"}
                            />
                        )}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ClickCircles;
