import HeadingOne from "../heading-1/heading-1.component";
import HeadingTwo from "../heading-2/heading-2.component";
import LanguageDetector from "../lang-detecter/lang-detecter.component";
import styles from './quiz-question-layout.module.scss';
import Link from "next/link";
const QuizQuestionLayout = ({chapterNumber,gradeToPass,quizLink,grade}) => {
    const lang = LanguageDetector();

    return (
        <>
        <HeadingOne
            enText={`Chapter ${chapterNumber} Quiz`}
            arText={`مسابقة الفصل ${chapterNumber} `}
        />
        <div className={styles.quizQuestionLayout}>
            <div className={styles.rowOne}>
                <HeadingTwo
                    enText="Submit your assignment"
                    arText="أرسل مهمتك"
                />
                <Link className="mainButton" href={quizLink}>
                    {lang === 'ar' ? "ابدأ المهمة" : "Start assignment"}
                </Link>
            </div>
            <div className={styles.rowTwo}>
                <div className={styles.blockOne}>
                    <h3> {lang === 'ar' ? "الحصول على الدرجة" : "Receive grade"}</h3>
                    <h4>
                        {
                            lang === 'ar' ? <>للاجتياز <span>{gradeToPass} أو أعلى</span></> :  <>To Pass <span>{gradeToPass} or higher</span></>
                        }
                        </h4>
                       
                </div>
                <div className={styles.blockTwo}>
                    <h3>{lang ==='ar' ? "درجتك" : "Your Grade"}</h3>
                    <h4>{grade ? grade : "-"}</h4>
                </div>
            </div>
        </div>
        </>
    )
}

export default QuizQuestionLayout;