import React, { useState } from 'react';
import styles from './circle-dot.module.scss';
import LanguageDetector from '../lang-detecter/lang-detecter.component';

const CircleDot = ({ enText, arText, color }) => {
    const lang = LanguageDetector();
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleDot = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <span style={{ position: 'relative', color: color }}>
            <div className={`${styles.dot} ${isExpanded ? styles.expanded : ''}`} style={{backgroundColor:color}} onClick={!isExpanded ? toggleDot : null}>
                {isExpanded && (
                    <>
                        <p style={{ display: 'block' }}>{lang === 'ar' ? arText : enText}</p>
                        <div className={styles.closeButton} onClick={toggleDot}>x</div>
                    </>
                )}
            </div>
        </span>
    );
};

export default CircleDot;
