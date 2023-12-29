import styles from './general-principles.module.scss';
import LanguageDetector from '../lang-detecter/lang-detecter.component';
import { useState } from 'react';
const GeneralPrinciples = () => {
    const lang = LanguageDetector();
    const [clickedBoxes, setClickedBoxes] = useState({ 2: false, 4: false, 6: false,8: false });

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
                        <h4>{lang === 'ar' ? "تجنب المخاطر" : "Avoid Risks"}</h4>
                    </div>
                    <div className={getBoxClass(2)} onClick={() => toggleBox(2)}>
                    <span>2</span>
                    {clickedBoxes[2] ? <h4>{lang === 'ar' ? "تقييم المخاطر التي لا يمكن تجنبها" : "Evaluate the risks that cannot be avoided"}</h4> :
                        <button aria-label={lang === 'ar' ? "أيقونة النقر" : "Click To Read"} onClick={() => toggleBox(2)}>
                            <img src="/assets/click-icon.svg" alt={lang === 'ar' ? "أيقونة النقر" : "Click icon"} />
                        </button>}
                </div>
                    <div className={styles.box}>
                        <span>3</span>
                        <h4>{lang === 'ar' ? "مكافحة المخاطر من المصدر" : "Combat the risks at source"}</h4>
                    </div>
                </div>
                <div className={styles.twoBoxes }>
                <div className={getBoxClass(4)} onClick={() => toggleBox(4)}>
                    <span>4</span>
                    {clickedBoxes[4] ? <h4>{lang === 'ar' ? "استبدال ما هو خطر بما هو غير خطر أو أقل خطورة" : "Replace the dangerous by the non-dangerous or less dangerous"}</h4> :
                        <button aria-label={lang === 'ar' ? "أيقونة النقر" : "Click To Read"} onClick={() => toggleBox(4)}>
                            <img src="/assets/click-icon.svg" alt={lang === 'ar' ? "أيقونة النقر" : "Click icon"} />
                        </button>}
                </div>

                    <div className={styles.box}>
                        <span>5</span>
                        <h4>{lang === 'ar' ? "وضع سياسة وقائية شاملة ومتماسكة" : "Develop a coherent overall prevention policy"}</h4>
                    
                    </div>
                  
                </div>
                <div className={styles.twoBoxes}>
                <div className={getBoxClass(6)} onClick={() => toggleBox(6)}>
                    <span>6</span>
                    {clickedBoxes[6] ? <h4>{lang === 'ar' ? "إعطاء الأولوية للتدابير الوقائية الجماعية على التدابير الوقائية الفردية" : "Give collective protective measures priority over individual protective measure"}</h4> :
                        <button aria-label={lang === 'ar' ? "أيقونة النقر" : "Click To Read"} onClick={() => toggleBox(6)}>
                            <img src="/assets/click-icon.svg" alt={lang === 'ar' ? "أيقونة النقر" : "Click icon"} />
                        </button>}
                </div>
                    <div className={styles.box  + " " + styles.l}>
                        <span>7</span>
                        <h4>{lang === 'ar' ? "إعطاء التعليمات المناسبة للعمال" : "Give appropriate instructions to the workers"}</h4>
                    </div>
                  
                </div>
                <div className={styles.twoBoxes}>
                <div className={getBoxClass(8)} style={{flex:1}} onClick={() => toggleBox(8)}>
                    <span>8</span>
                    {clickedBoxes[8] ? <h4>{lang === 'ar' ? "التواصل باستمرار حول تدابير السلامة والصحة المهنية لجميع المعنيين" : "Continuously communicate about the OSH measures to all those involved"}</h4> :
                        <button aria-label={lang === 'ar' ? "أيقونة النقر" : "Click To Read"} onClick={() => toggleBox(8)}>
                            <img src="/assets/click-icon.svg" alt={lang === 'ar' ? "أيقونة النقر" : "Click icon"} />
                        </button>}
                </div>
                 
                </div>
        </div>
    )
}


export default GeneralPrinciples;