import React, { useState, useRef, useEffect } from 'react';
import styles from './circle-dot.module.scss';
import LanguageDetector from '../lang-detecter/lang-detecter.component';
import gsap from 'gsap';

const CircleDot = ({ enText, arText, color }) => {
    const lang = LanguageDetector();
    const [isExpanded, setIsExpanded] = useState(false);
    const dotRef = useRef(null);
    const infoHolderRef = useRef(null);
    const initialRect = useRef({ top: 0, left: 0 });

    useEffect(() => {
        // Initially hide the infoHolder
        gsap.set(infoHolderRef.current, { display: 'none', opacity: 0 });
    }, []);

    const toggleDot = () => {
        const dot = dotRef.current;
        const infoHolder = infoHolderRef.current;

        if (!isExpanded) {
            const rect = dot.getBoundingClientRect();
            initialRect.current = { top: rect.top, left: rect.left };

            dot.style.position = 'fixed';
            dot.style.left = `${rect.left}px`;
            dot.style.top = `${rect.top}px`;

            const animationProps = window.innerWidth <= 700 ? {
                width: '200vw',
                height: '200vw',
                top: '0',
                left: '50%',
                xPercent: -50,
            } : {
                width: '100vw',
                height: '100vw',
                top: '0',
                left: '0'
            };

            gsap.to(dot, {
                duration: 0.5,
                ...animationProps,
                onComplete: () => {
                    // Show the infoHolder
                    gsap.set(infoHolder, { display: 'flex' });
                    gsap.to(infoHolder, {
                        duration: 0.5,
                        opacity: 1,
                        translateY: '0px',
                        onComplete: () => {
                            // Set focus to the infoHolder
                            infoHolder.focus();
                        }
                    });
                }
            });
        } else {
            // Animate the infoHolder to fade out without moving
            gsap.to(infoHolder, {
                duration: 0.3,
                opacity: 0,
               
                onComplete: () => {
                    gsap.set(infoHolder, { display: 'none' });
                    // After infoHolder is hidden, shrink the dot
                    gsap.to(dot, {
                        duration: 0.5,
                        width: '1em',
                        height: '1em',
                        top: `${initialRect.current.top}px`,
                        left: `${initialRect.current.left}px`,
                        xPercent: 0,
                        onComplete: () => {
                            dot.style.position = 'relative';
                            dot.style.top = '0';
                            dot.style.left = '0';
                        }
                    });
                }
            });
        }
        setIsExpanded(!isExpanded);
    };

    return (
        <button
            ref={dotRef}
            aria-label='Show Text'
            className={`${styles.dot} ${isExpanded ? styles.expanded : ''}`}
            onClick={toggleDot}
            style={{ backgroundColor: color }}
        >
            <div ref={infoHolderRef}   aria-live='polite'  className={styles.infoHolder}>
                <p aria-live='polite'>{lang === 'ar' ? arText : enText}</p>
                <button aria-label={lang === 'ar' ? arText : "Hide Text"} onClick={toggleDot}>x</button>
            </div>
        </button>
    );
};

export default CircleDot;
