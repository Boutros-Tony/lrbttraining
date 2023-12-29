import styles from './show-text-square.module.scss';
import { useState } from 'react';
import LanguageDetector from '../lang-detecter/lang-detecter.component';

const ShowTextSquareTwo = () => {
    const lang = LanguageDetector();
    // State to manage the clicked state of boxes
    const [clickedBoxes, setClickedBoxes] = useState({ 2: false, 4: false, 6: false });

    const toggleBox = (boxNumber) => {
        setClickedBoxes({ ...clickedBoxes, [boxNumber]: true });
    };

    return (
        <div className={styles.showTextSquareWrapper}>
           
            <div className={styles.box} onClick={() => toggleBox(2)}>
                {clickedBoxes[2] ? <h3>{lang === 'ar' ? "يزيد من احتمال أن تكون نتائج مشاريع البنية التحتية شاملة ومنصفة قدر الإمكان" : 'Increases the likelihood that outcomes of the infrastructure projects are as inclusive & equitable as possible'}</h3> :
                    <button aria-label={lang === 'ar' ? "عرض الجدوى الاقتصادية" : "Show Economic Feasibility"}>
                        <img src="/assets/click-icon.svg" alt={lang === 'ar' ? "أيقونة النقر" : "Click icon"} />
                    </button>}
            </div>
           
            <div className={styles.box} onClick={() => toggleBox(4)}>
                {clickedBoxes[4] ? <h3>{lang === 'ar' ? 'يضمن أن تتم معالجة مخاوف أصحاب المصلحة المختلفين بشكل مناسب في مشاريع EIPs.' : 'Project implementation capacity'}</h3> :
                    <button aria-label={lang === 'ar' ? "عرض القدرة على تنفيذ المشروع" : "Show Project Implementation Capacity"}>
                        <img src="/assets/click-icon.svg" alt={lang === 'ar' ? "أيقونة النقر" : "Click icon"} />
                    </button>}
            </div>
          
            <div className={styles.box} onClick={() => toggleBox(6)}>
                {clickedBoxes[6] ? <h3>{lang === 'ar' ? "ينشئ ممارسات وسياسات التخفيف للمخاطر الاجتماعية والبيئية التي قد تعيق تنفيذ مشاريع EIPs." : 'Availability of local resources'}</h3> :
                    <button aria-label={lang === 'ar' ? "عرض توافر الموارد المحلية" : "Show Availability of Local Resources"}>
                        <img src="/assets/click-icon.svg" alt={lang === 'ar' ? "أيقونة النقر" : "Click icon"} />
                    </button>}
            </div>
        </div>
    )
}

export default ShowTextSquareTwo;
