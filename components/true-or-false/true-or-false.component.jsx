import React, { useState } from 'react';
import HeadingTwo from "../heading-2/heading-2.component";
import LanguageDetector from "../lang-detecter/lang-detecter.component";
import styles from './true-or-false.module.scss';
import Paragraph from "../paragraph/paragaraph.component";

const TrueOrFalse = ({ enQuestion, arQuestion, enAnswer, arAnswer, correctAnswer }) => {
    const lang = LanguageDetector();
    const [userAnswer, setUserAnswer] = useState(null);
    const [showHiddenAnswer, setShowHiddenAnswer] = useState(false);
    const [answerSelected, setAnswerSelected] = useState(false);

    const handleAnswerClick = (answer) => {
        setUserAnswer(answer);
        setAnswerSelected(true);
        setTimeout(() => {
            setShowHiddenAnswer(true);
        }, 320); // adjust the timing to match your animation duration
    };
    const isCorrect = userAnswer === correctAnswer;
    const feedbackText = isCorrect ? (lang === 'ar' ? "أحسنت!" : "Well done!") : (lang === 'ar' ? "للأسف لا!" : "Well no!");
    const feedbackColor = isCorrect ? 'rgb(112, 180, 80)' : 'red';

    return (
        <>
            <HeadingTwo enText={enQuestion} arText={arQuestion} />
            <div className={styles.trueOrFalse}>
                {!showHiddenAnswer && (
                    <div className={`${styles.circleHolder} ${answerSelected ? styles.hide : ''}`}>
                        <button onClick={() => handleAnswerClick(true)}>{lang === 'ar' ? "صح" : "True"}</button>
                        <img src="/assets/separator.svg" role="presentation" />
                        <button onClick={() => handleAnswerClick(false)}>{lang === 'ar' ? "خطأ" : "False"}</button>
                    </div>
                )}
                
                {showHiddenAnswer && (
                    <div aria-live="polite" className={`${styles.hiddenAnswer} ${styles.show}`}>
                        <h3 style={{ color: feedbackColor }}>{feedbackText}</h3>
                        <Paragraph
                            enText={enAnswer}
                            arText={arAnswer}
                        />
                    </div>
                )}
            </div>
        </>
    );
};

export default TrueOrFalse;
