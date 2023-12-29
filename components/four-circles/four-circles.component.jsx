import React, { useState } from 'react';
import HeadingTwo from "../heading-2/heading-2.component";
import LanguageDetector from "../lang-detecter/lang-detecter.component";
import styles from './four-circles.module.scss';
import Paragraph from "../paragraph/paragaraph.component";

const FourCircles = () => {
    const lang = LanguageDetector();
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [showAnswer, setShowAnswer] = useState(false);

    const handleAnswerClick = (answer) => {
        setSelectedAnswer(answer);
        setShowAnswer(true);
    };

    const isCorrectAnswer = selectedAnswer === "1919";
    const feedbackMessage = isCorrectAnswer ? (lang === 'ar' ? 'أحسنت!' : 'Well done!') : (lang === 'ar' ? 'للأسف لا!' : 'Well no!');

    const getButtonLabel = (year) => {
        if (selectedAnswer === year) {
            return isCorrectAnswer ? (lang === 'ar' ? 'أحسنت!' : 'Well done!') : (lang === 'ar' ? 'للأسف لا!' : 'Well no!');
        }
        return lang === 'ar' ? year.replace(/\d/g, d => '٠١٢٣٤٥٦٧٨٩'[d]) : year;
    };

    return (
        <>
            <HeadingTwo
                enText="When do you think ILO was created?"
                arText="متى تعتقد تم إنشاء منظمة العمل الدولية (ILO)؟"
            />
            <div className={styles.fourCircles}>
                <div className={styles.circlesWrapper}>
                    {['1923', '1919', '1917', '1925'].map((year, index) => (
                        <button
                            key={index}
                            disabled={showAnswer}
                            aria-hidden={showAnswer && selectedAnswer !== year ? "true" : "false"}
                            style={{ display: showAnswer && selectedAnswer !== year ? 'none' : 'flex' }}
                            onClick={() => handleAnswerClick(year)}
                            className={`${styles.button} ${selectedAnswer === year ? styles.active : ''}`}
                        >
                            {getButtonLabel(year)}
                        </button>
                    ))}
                </div>
                {showAnswer && (
                    <div aria-live="polite" className={`${styles.hiddenAnswer} ${styles.slideIn}`}>
                        <p>{feedbackMessage}</p>
                    <HeadingTwo
    enText="The ILO was created in 1919"
    arText="تأسست منظمة العمل الدولية (ILO) في عام 1919."
/>
<Paragraph
    enText="The ILO is the only UN agency, since 1919, bringing together governments, workers and employers of 187 member states, to set labour standards, develop policies and devise programmes promoting decent work for all. The ILO has extensive experience in implementing employment programmes in the infrastructure sector job creation, decent & productive work, enterprise promotion, & quality infrastructure"
    arText="منظمة العمل الدولية هي الوكالة الوحيدة في الأمم المتحدة منذ عام 1919، التي تجمع بين الحكومات والعمال وأصحاب العمل من 187 دولة عضو، لتعزيز العمل اللائق في جميع أنحاء العالم، وكذلك صياغة معايير وسياسات العمل. لدى منظمة العمل الدولية خبرة واسعة في تنفيذ برامج التوظيف في قطاع البنية التحتية، وخلق فرص العمل، والعمل اللائق والمنتج، وتطوير المنشآت والبنية التحتية العالية الجودة."
/>
                    </div>
                )}
            </div>
        </>
    );
};

export default FourCircles;

