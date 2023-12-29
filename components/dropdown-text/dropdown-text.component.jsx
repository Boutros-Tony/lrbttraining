
import LanguageDetector from "../lang-detecter/lang-detecter.component";
import styles from './dropdown-text.module.scss'
import { useState, useRef, useEffect } from "react";
const DropDownText = ({ enTitle, enText, arTitle, arText, bgColor, textColor = "white" }) => {
    const [isOpen, setIsOpen] = useState(false);
    const lang = LanguageDetector();
    const dropDownContentRef = useRef(null);
    const dropDownButtonRef = useRef(null);

    useEffect(() => {
        if (!isOpen) {
            // When dropdown closes, focus the dropdown button
            dropDownButtonRef.current?.focus();
        }
    }, [isOpen]);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
        if (!isOpen) {
            // Focus the first focusable element in dropdown content when it opens
            // Timeout is to wait for the content to become visible
            setTimeout(() => {
                dropDownContentRef.current?.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')?.focus();
            }, 0);
        }
    };
    const dropDownContentStyle = {
        maxHeight: isOpen ? '1000px' : '0', // Adjust 1000px as needed
        opacity: isOpen ? 1 : 0,
        overflow: 'hidden',
      
    };

    const arrowStyle = {
        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
   
    };

    return (
        <div className={styles.dropDown} style={{ backgroundColor: bgColor }}>
        <button 
            className={styles.dropDownButton} 
            onClick={toggleDropdown}
            aria-expanded={isOpen}
            aria-controls="dropdown-content"
            ref={dropDownButtonRef}
        >
            <h3 style={{ color: textColor }}>{lang === 'ar' ? arTitle : enTitle}</h3>
            <div className={styles.arrow} style={arrowStyle}>
                <img src="/assets/dropdown-arrow.svg" alt="Toggle dropdown" role="presentation" />
            </div>
        </button>
        <div 
            className={styles.dropDownContent} 
            style={dropDownContentStyle}
            id="dropdown-content"
            ref={dropDownContentRef}
            aria-hidden={!isOpen}
        >
            <p aria-live="polite" style={{ color: textColor }}>{lang === 'ar' ? arText : enText}</p>
        </div>
    </div>
    )
}

export default DropDownText;
