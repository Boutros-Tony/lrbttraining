import Link from "next/link";
import LanguageDetector from "../lang-detecter/lang-detecter.component";
import styles from './breadcrumb.module.scss';

const Breadcrumb = ({ chapterLink, chapterTitle, currentQuestionId, questions }) => {
    const lang = LanguageDetector();
    const currentQuestionIndex = currentQuestionId ? questions.findIndex(question => question.id === currentQuestionId) : -1;
    const prevQuestion = currentQuestionIndex > 0 ? questions[currentQuestionIndex - 1] : null;
    const nextQuestion = currentQuestionIndex >= 0 && currentQuestionIndex < questions.length - 1 ? questions[currentQuestionIndex + 1] : null;

    return (
        <div className={styles.breadcrumb}>
            <div className={styles.leftColumn}>
                <Link href="/chapters">{lang === 'ar' ? "الفصول" : "Chapters"}  <img className={styles.arrow} src="/assets/right-angle.png" role="presentation" />  </Link>
                
                <Link href={`/chapters/${chapterLink}`}>{chapterTitle} <img className={styles.arrow} src="/assets/right-angle.png" role="presentation" /></Link>
                {currentQuestionIndex >= 0 && <Link href={`/chapters/${chapterLink}${questions[currentQuestionIndex].link}`}>{lang === 'ar' ? questions[currentQuestionIndex].arTitle : questions[currentQuestionIndex].title} </Link>}
            </div>
            <div className={styles.rightColumn}>
                {prevQuestion && <Link href={`/chapters/${chapterLink}${prevQuestion.link}`}><img style={{rotate:'180deg'}} className={styles.arrow} src="/assets/right-angle.png" role="presentation" />{lang === 'ar' ? "السابق" : "Previous"} </Link>}
                {nextQuestion && <Link href={`/chapters/${chapterLink}${nextQuestion.link}`}>{lang === 'ar' ? "التالي" : "Next"} <img className={styles.arrow} src="/assets/right-angle.png" role="presentation" /></Link>}
            </div>
        </div>
    );
};

export default Breadcrumb;
