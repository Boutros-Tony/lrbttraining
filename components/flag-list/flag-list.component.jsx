import styles from './flag-list.module.scss';
import LanguageDetector from '../lang-detecter/lang-detecter.component';

const FlagList = ({ arList, enList }) => {
    const lang = LanguageDetector();

    // Function to map list items
    const mapListItems = (list) => {
        return list.map((item, index) => (
            <li key={index} >
                <img src="/assets/poly-icon.svg" alt="" role="presentation" />
                <p>{item}</p>
            </li>
        ));
    };

    return (
        <>
            <ul className={styles.flagList} aria-label={lang === 'ar' ? 'Arabic List' : 'English List'}>
                {lang === 'ar' ? mapListItems(arList) : mapListItems(enList)}
            </ul>
        </>
    );
}

export default FlagList;
