import LanguageDetector from "../lang-detecter/lang-detecter.component";
import styles from './heading-2.module.scss'
const HeadingTwo = ({enText,arText}) => {
    const lang = LanguageDetector();
    return (
        <>
        <h2 className={styles.heading}>{lang === 'ar' ? arText : enText}</h2>
        </>
    )
}

export default HeadingTwo;