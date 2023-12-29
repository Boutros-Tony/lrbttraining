import LanguageDetector from "../lang-detecter/lang-detecter.component";
import styles from './heading-1.module.scss'
const HeadingOne = ({enText,arText}) => {
    const lang = LanguageDetector();
    return (
        <>
        <h1 className={styles.heading}>{lang === 'ar' ? arText : enText}</h1>
        </>
    )
}

export default HeadingOne;