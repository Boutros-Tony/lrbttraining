import React, { useState } from 'react';
import styles from './quiz.template.module.scss';
import LanguageDetector from '../lang-detecter/lang-detecter.component';
import { validateQuizAnswers ,updateChapterProgress,updateCertificateInfo} from '../../firebase.utils';
import { useDispatch } from 'react-redux';
import { fetchUserProgressAction,fetchCertificateInfoAction } from '../../store/user/user.actions';
import { updateUserProgressAction } from "../../store/user/user.actions";
import HeadingTwo from '../heading-2/heading-2.component';
import Link from 'next/link';
const QuizTemplate = ({ questions,gradeToPass,chapterNumber,lastQuestion,quizTitle }) => {
    const lang = LanguageDetector();
    const [answers, setAnswers] = useState({});
    const [results,setResults] = useState([]);
    const dispatch = useDispatch();
    const resetQuiz = () => {
        setAnswers({});
        setResults([]);
        setIsSubmitted(false);
        setIsPassed(false);
        setGrade(0);
    };
    const handleAnswerChange = (event, questionId, multiple, englishOption) => {
        if (multiple) {
            // For multiple answers, store them in an array
            setAnswers(prev => ({
                ...prev,
                [questionId]: { 
                    ...prev[questionId], 
                    [englishOption]: event.target.checked 
                }
            }));
        } else {
            // For single answer, store it directly
            setAnswers(prev => ({
                ...prev,
                [questionId]: englishOption
            }));
        }
    };

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isPassed, setIsPassed] = useState(false);
    const [grade, setGrade] = useState(0);
    console.log(chapterNumber)
    const handleSubmit = async (event) => {
        event.preventDefault();
        
        // Validate answers
        const results = await validateQuizAnswers(answers, questions,quizTitle);
        setResults(results);
      
        // Calculate score
   
        const score = results.filter(result => result.isCorrect).length / questions.length;
    const percentage = Math.round(score * 100);  // round to nearest integer
     
        // Check if passed
        const passed = percentage >= gradeToPass;
        setIsPassed(passed);
        setGrade(percentage);

        // Handle passing scenario
        if (passed) {
            // Update Firebase progress
            await updateChapterProgress(chapterNumber, percentage);
            dispatch(fetchUserProgressAction());
            dispatch(updateUserProgressAction(chapterNumber,lastQuestion))
        }
        if (passed && chapterNumber === '8') {
            // Update Firebase progress
            await updateChapterProgress(chapterNumber, percentage);
           await dispatch(fetchCertificateInfoAction());
            // Update certificate info
            await updateCertificateInfo();
    
            dispatch(fetchUserProgressAction()); // Fetch updated user progress
            dispatch(updateUserProgressAction(chapterNumber, lastQuestion)); // Update user progress
        }
    
   
        setIsSubmitted(true); // Mark the quiz as submitted to show results
    };
const resultBoxStyle = {
    backgroundColor: isPassed ? 'rgba(209,243,193,.204)' : '#fed8db',
}
const getResultsStyle = (questionId) => {
    const isCorrect = results.find(res => res.questionId === questionId).isCorrect;
    return {
        backgroundColor: isCorrect ? 'rgba(209,243,193,.204)' : '#fed8db',
     
    };
};
    return (
        <>
        <div className={styles.quizTemplate}>
            <div className={styles.quizNav}>
            <Link className={styles.backLink} href="/chapters">
                   
                        {lang === 'ar' ? "العودة" : "Back"}
                
                </Link>
                <HeadingTwo 
                        enText={`Chapter ${chapterNumber} Quiz`}
                        arText={`اختبار ${chapterNumber} الفصل`}
                    />
                </div>
                {isSubmitted && (
                    <div style={resultBoxStyle} className={styles.resultBox} aria-live="polite">
                        <HeadingTwo
                        enText={isPassed ? "Congratulations, you passed!" : "Try again once you are ready"}
                        arText={isPassed ? "مبروك، لقد نجحت!" : "حاول مرة أخرى عندما تكون جاهزًا"}
                        
                        />
                        
                        <p aria-aria-live='polite'>{lang === 'ar' ? `الدرجة المتحصل عليها: ${grade.toFixed(2)}%` : `Grade received: ${grade.toFixed(2)}%`}</p>
                        {!isPassed && <p>{lang === 'ar' ? `للنجاح يلزم: ${gradeToPass}%` : `To pass: ${gradeToPass}%`}</p>}
                        {isPassed ? <Link href="/chapters" className='mainButton'>{lang === 'ar' ? "اذهب إلى الفصول" : "Go To Chapters"}</Link> :    
                            !isPassed && (
                            <button className='mainButton' onClick={resetQuiz}>
                                {lang === 'ar' ? "حاول مرة أخرى" : "Try Again"}
                            </button>
                        )}
                    </div>
                )}
        <form className={styles.quizForm} onSubmit={handleSubmit}>
            {questions.map(question => (
                <div  key={question.id} className={styles.question}>
                    <label className={styles.questionLabel}>{lang === 'ar' ? question.arQuestion : question.enQuestion}</label>
                    <div>
                        {question.enPossibilities.map((option, index) => {
                            const displayOption = lang === 'ar' ? question.arPossibilities[index] : option;
                            return (
                                <div key={index}>
                                    <input 
                                        id={`question_${question.id}_option_${index}`}
                                        type={question.multipleAnswer ? "checkbox" : "radio"}
                                        name={`answer_${question.id}`}
                                        value={option}
                                        className={styles.answerInput}
                                        checked={question.multipleAnswer ? answers[question.id]?.[option] : answers[question.id] === option}
                                        onChange={(e) => handleAnswerChange(e, question.id, question.multipleAnswer, option)}
                                    />
                                    <label className={styles.answerLabel} htmlFor={`question_${question.id}_option_${index}`}>{displayOption}</label>
                                </div>
                            );
                        })}
                    </div>
                    {results && results.find(res => res.questionId === question.id) && (
                                <p className={styles.resultMsg} style={getResultsStyle(question.id)}>
                                    {results.find(res => res.questionId === question.id).isCorrect 
                                        ? (lang === 'ar' ? "صحيح" : "Correct")
                                        : (lang === 'ar' ? "غير صحيح" : "Incorrect")}
                                </p>
                            )}
                </div>
            ))}
        
                    {!isSubmitted && (
                        <button className="mainButton" type="submit">
                            {lang === 'ar' ? "إرسال" : "Submit"}
                        </button>
                    )}
        </form>
        </div>
        </>
       
    );
};

export default QuizTemplate;
