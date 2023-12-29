import styles from './big-rectangle.module.scss';
import LanguageDetector from '../lang-detecter/lang-detecter.component';

const BigRectangle = ({enText,num,arText,bgColor,textColor="white"}) => {
    const lang = LanguageDetector();
    return (
        <div className={styles.bigRectangle} style={{backgroundColor:bgColor}}>
            <span style={{color:bgColor}}>
                {num}
            </span>
            <h1 style={{color:textColor}}>
                {lang === 'ar' ? arText : enText}
            </h1>
        </div>
    )
}

export default BigRectangle;