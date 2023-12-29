import styles from './colored-rectangle.module.scss';
import LanguageDetector from '../lang-detecter/lang-detecter.component';
const ColoredRectangle = ({enText,arText,bgColor,textColor}) => {
    const lang = LanguageDetector();
    return (
        <>
        <p style={{backgroundColor:bgColor,color:textColor}} className={styles.paragraph}>
            {lang === 'ar' ? arText : enText}
        </p>
        </>
    )
}

export default ColoredRectangle;