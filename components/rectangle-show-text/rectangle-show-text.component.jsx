import LanguageDetector from "../lang-detecter/lang-detecter.component";
import styles from './rectangle-show-text.module.scss';
import { useState } from "react";

const RectangleShowText = ({ enText, arText, showTextInitially = false }) => {
    const lang = LanguageDetector();
    const [isTextVisible, setTextVisible] = useState(showTextInitially);

    const handleClick = () => {
        setTextVisible(true);
    };

    const rectangleStyles = isTextVisible ? `${styles.rectangleShowText} ${styles.clickedBackground}` : styles.rectangleShowText;

    return (
        <>
            <div className={rectangleStyles}>
                {isTextVisible && <p aria-live="polite">{lang === 'ar' ? arText : enText}</p>}
                {!isTextVisible && 
                    <button onClick={handleClick} aria-label={lang === 'ar' ? "عرض النص" : "Show Text"}>
                        <img src="/assets/click-icon.svg" alt={lang === 'ar' ? "أيقونة النقر" : "Click icon"} />
                    </button>
                }
            </div>
        </>
    );
}

export default RectangleShowText;
