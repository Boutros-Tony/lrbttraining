import LanguageDetector from "../lang-detecter/lang-detecter.component";
import styles from './flag-heading.module.scss'
const FlagHeading = ({enText,arText}) => {
    const lang = LanguageDetector();
    return (
        <>
        <h2 className={styles.heading}>  <img src="/assets/poly-icon.svg" alt="" role="presentation" /> {lang === 'ar' ? arText : enText}</h2>
        </>
    )
}

export default FlagHeading;