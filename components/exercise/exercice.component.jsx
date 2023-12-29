import styles from './exercise.module.scss';
import HeadingTwo from '../heading-2/heading-2.component';
import LanguageDetector from '../lang-detecter/lang-detecter.component';
import { useState } from 'react';

const Exercise = ({ enQuestion, arQuestion, enOptions, arOptions, isMultiple, enAnswer, arAnswer, enResult, arResult }) => {
    const lang = LanguageDetector();
    const options = lang === 'ar' ? arOptions : enOptions;
    const correctAnswer = lang === 'ar' ? arAnswer : enAnswer;
    const resultText = lang === 'ar' ? arResult : enResult;

    // State to store user's selections, result, and submission status
    const [userSelections, setUserSelections] = useState(isMultiple ? [] : '');
    const [result, setResult] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Handle changes in checkbox or radio button
    const handleChange = (e) => {
        if (isMultiple) {
            if (e.target.checked) {
                setUserSelections([...userSelections, e.target.value]);
            } else {
                setUserSelections(userSelections.filter(item => item !== e.target.value));
            }
        } else {
            setUserSelections(e.target.value);
        }
    };

    // Check if the user's answer(s) is/are correct
    const isCorrect = () => {
        if (isMultiple) {
            return userSelections.every(val => correctAnswer.includes(val)) && correctAnswer.every(val => userSelections.includes(val));
        } else {
            return userSelections === correctAnswer;
        }
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        const successMessage = lang === 'ar' ? "أحسنت" : "Well done";
        const failureMessage = lang === 'ar' ? "ليس صحيحا" : "Well NO";
        setResult(isCorrect() ? successMessage : failureMessage);
    };

    return (
        <>
            <form className={styles.form} onSubmit={handleSubmit}>
                <HeadingTwo enText={enQuestion} arText={arQuestion} />
                {options.map((option, index) => (
                    <label key={index}>
                        <input 
                            type={isMultiple ? 'checkbox' : 'radio'}
                            name="answers"
                            value={option}
                            onChange={handleChange}
                            checked={isMultiple ? userSelections.includes(option) : userSelections === option}
                        />
                        {option}
                    </label>
                ))}
                <button className='mainButton' type="submit">{lang === 'ar' ? "إرسال" : "Submit"}</button>
            </form>
            <div aria-live='polite'>
                {isSubmitted && (
                    result === (lang === 'ar' ? "أحسنت" : "Well done") ?
                    <HeadingTwo enText={result} arText={result} /> :
                    <HeadingTwo enText={`${result} ${enResult}`} arText={`${result} ${arResult}`} />
                )}
            </div>
        </>
    );
}

export default Exercise;
