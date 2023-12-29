import LanguageDetector from "../lang-detecter/lang-detecter.component";
import styles from './heading-3.module.scss'
const HeadingThree = ({enText,arText}) => {
    const lang = LanguageDetector();
    return (
        <>
        <h3 className={styles.heading}>{lang === 'ar' ? arText : enText}</h3>
        </>
    )
}

export default HeadingThree;