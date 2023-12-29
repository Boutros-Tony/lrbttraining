import LanguageDetector from "../lang-detecter/lang-detecter.component";
import styles from './circles-question.module.scss';
const CirclesQuestions = ({enQuestion,arQuestion}) => {
    const lang = LanguageDetector();
    return (
        <>
        <h2>
            {lang === 'ar' ? arQuestion : enQuestion}
        </h2>
        <div>
            <button>{lang === 'ar' ? "" : "True"}</button>
            <button>{lang === 'ar' ? "" : "False"}</button>
        </div>
        </>
    )
}

export default CirclesQuestions