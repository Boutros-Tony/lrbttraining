import LanguageDetector from "../lang-detecter/lang-detecter.component";
import styles from './paragraph.module.scss';
const Paragraph = ({enText,arText}) => {
    const lang = LanguageDetector();
    return (
        <>
        <p className={styles.heading}>{lang === 'ar' ? arText : enText}</p>
        </>
    )
}

export default Paragraph;