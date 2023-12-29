import styles from './show-text-square.module.scss';
import { useState } from 'react';
import LanguageDetector from '../lang-detecter/lang-detecter.component';

const ShowTextSquare = () => {
    const lang = LanguageDetector();
    // State to manage the clicked state of boxes
    const [clickedBoxes, setClickedBoxes] = useState({ 2: false, 4: false, 6: false });

    const toggleBox = (boxNumber) => {
        setClickedBoxes({ ...clickedBoxes, [boxNumber]: true });
    };

    return (
        <div className={styles.showTextSquareWrapper}>
            <div className={styles.box}>
                <h3>{lang === 'ar' ? 'الجدوى التقنية' : 'Technical feasibility'}</h3>
            </div>
            <div className={styles.box} onClick={() => toggleBox(2)}>
                {clickedBoxes[2] ? <h3>{lang === 'ar' ? 'الجدوى الاقتصادية' : 'Economic feasibility'}</h3> :
                    <button aria-label={lang === 'ar' ? "عرض الجدوى الاقتصادية" : "Show Economic Feasibility"}>
                        <img src="/assets/click-icon.svg" alt={lang === 'ar' ? "أيقونة النقر" : "Click icon"} />
                    </button>}
            </div>
            <div className={styles.box}>
                <h3>{lang === 'ar' ? "توافر العمالة" : 'Availability of labour'}</h3>
            </div>
            <div className={styles.box} onClick={() => toggleBox(4)}>
                {clickedBoxes[4] ? <h3>{lang === 'ar' ? 'القدرة على تنفيذ المشروع' : 'Project implementation capacity'}</h3> :
                    <button aria-label={lang === 'ar' ? "عرض القدرة على تنفيذ المشروع" : "Show Project Implementation Capacity"}>
                        <img src="/assets/click-icon.svg" alt={lang === 'ar' ? "أيقونة النقر" : "Click icon"} />
                    </button>}
            </div>
            <div className={styles.box}>
                <h3>{lang === 'ar' ? 'المقاولون المختصون' : 'Competent contractors'}</h3>
            </div>
            <div className={styles.box} onClick={() => toggleBox(6)}>
                {clickedBoxes[6] ? <h3>{lang === 'ar' ? "توافر الموارد المحلية" : 'Availability of local resources'}</h3> :
                    <button aria-label={lang === 'ar' ? "عرض توافر الموارد المحلية" : "Show Availability of Local Resources"}>
                        <img src="/assets/click-icon.svg" alt={lang === 'ar' ? "أيقونة النقر" : "Click icon"} />
                    </button>}
            </div>
        </div>
    )
}

export default ShowTextSquare;
