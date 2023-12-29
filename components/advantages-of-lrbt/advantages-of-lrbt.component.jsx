import styles from './advantages-of-lrbt.module.scss'
import LanguageDetector from '../lang-detecter/lang-detecter.component';
import { useState } from 'react';
const AdvantagesOfLrbt = () => {
    const lang = LanguageDetector();
    const [clickedBoxes, setClickedBoxes] = useState({ 2: false, 4: false, 6: false });

    const toggleBox = (boxNumber) => {
        // Only update if the box hasn't been clicked yet
        if (!clickedBoxes[boxNumber]) {
            setClickedBoxes({ ...clickedBoxes, [boxNumber]: true });
        }
    };

    const getBoxClass = (boxNumber) => {
        // Apply extra class for box 4
        let extraClass = boxNumber === 4 ? styles.l : '';
        return `${styles.box} ${extraClass} ${!clickedBoxes[boxNumber] ? styles.unclickedBox : ''}`;
    };
    return (
        <div className={styles.advantagesWrapper}>
                <div className={styles.threeBoxes}>
                    <div className={styles.box}>
                        <span>1</span>
                        <h4>{lang === 'ar' ? "فرص العمل" : "Employment opportunities"}</h4>
                    </div>
                    <div className={getBoxClass(2)} onClick={() => toggleBox(2)}>
                    <span>2</span>
                    {clickedBoxes[2] ? <h4>{lang === 'ar' ? "التنمية الاقتصادية المحلية" : "Local economic development"}</h4> :
                        <button aria-label={lang === 'ar' ? "عرض التنمية الاقتصادية المحلية" : "Show Local Economic Development"} onClick={() => toggleBox(2)}>
                            <img src="/assets/click-icon.svg" alt={lang === 'ar' ? "أيقونة النقر" : "Click icon"} />
                        </button>}
                </div>
                    <div className={styles.box}>
                        <span>3</span>
                        <h4>{lang === 'ar' ? "الأموال التي يتم ضخها في المجتمعات المحلية" : "Money injected into local communities"}</h4>
                    </div>
                </div>
                <div className={styles.twoBoxes }>
                <div className={getBoxClass(4)} onClick={() => toggleBox(4)}>
                    <span>4</span>
                    {clickedBoxes[4] ? <h4>{lang === 'ar' ? "تطوير المهارات" : "Skills development"}</h4> :
                        <button aria-label={lang === 'ar' ? "عرض تطوير المهارات" : "Show Skills Development"} onClick={() => toggleBox(4)}>
                            <img src="/assets/click-icon.svg" alt={lang === 'ar' ? "أيقونة النقر" : "Click icon"} />
                        </button>}
                </div>

                    <div className={styles.box}>
                        <span>5</span>
                        <h4>{lang === 'ar' ? "التركيز على العمل اللائق" : "Focus on Decent Work"}</h4>
                    
                    </div>
                  
                </div>
                <div className={styles.twoBoxes}>
                <div className={getBoxClass(6)} onClick={() => toggleBox(6)}>
                    <span>6</span>
                    {clickedBoxes[6] ? <h4>{lang === 'ar' ? "الملكية المحلية" : "Little foreign exchange is needed"}</h4> :
                        <button aria-label={lang === 'ar' ? "عرض الملكية المحلية" : "Show Local Ownership"} onClick={() => toggleBox(6)}>
                            <img src="/assets/click-icon.svg" alt={lang === 'ar' ? "أيقونة النقر" : "Click icon"} />
                        </button>}
                </div>
                    <div className={styles.box  + " " + styles.l}>
                        <span>7</span>
                        <h4>{lang === 'ar' ? "حاجة قليلة للعملة الأجنبية" : "Local ownership"}</h4>
                    </div>
                  
                </div>
        </div>
    )
}


export default AdvantagesOfLrbt;