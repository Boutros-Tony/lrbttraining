import React, { useState, useEffect } from 'react';
import styles from './complete-sentence.module.scss';
import LanguageDetector from '../lang-detecter/lang-detecter.component';
import HeadingTwo from '../heading-2/heading-2.component';
import HeadingThree from '../heading-3/heading-3.component';
const colors = ["rgb(90, 135, 205)", "#c0000f", "rgb(90, 135, 205)","rgb(112, 180, 80)","rgb(250, 180, 40)","rgb(4, 147, 147)","rgb(95, 0, 55)"]; // Add more colors as needed

const shuffleArray = (array) => {
    for (let i = array.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

const CompleteSentence = ({ sentence = "The Volume of work that can be achieved by one work / equipment during one day" }) => {
    const lang = LanguageDetector();
    const [words, setWords] = useState([]);
    const [selectedWords, setSelectedWords] = useState([]);
    const [result, setResult] = useState('');
    const [colorsShuffled, setColorsShuffled] = useState([]);

    useEffect(() => {
        const sentenceWords = sentence.split(' ');
        shuffleArray(sentenceWords);
        shuffleArray(colors);
        setSelectedWords(sentenceWords.slice(0, 2));
        setWords(sentenceWords.slice(2));
        setColorsShuffled(colors.concat(colors)); // Assuming colors array is large enough or duplicates are acceptable
    }, [sentence]);

    const handleWordClick = (word, fromSelected = false) => {
        if (fromSelected) {
            setSelectedWords(selectedWords.filter(w => w !== word));
            setWords([...words, word]);
        } else {
            setWords(words.filter(w => w !== word));
            setSelectedWords([...selectedWords, word]);
        }
    };

    const validateSentence = () => {
        if (selectedWords.join(' ') === sentence) {
            setResult(lang === 'ar' ? "أحسنت" : "Well done");
        } else {
            setResult(lang === 'ar' ? `ليس صحيحا. الجملة الصحيحة هي: ${sentence}` : `Incorrect. The correct sentence is: ${sentence}`);
        }
    };

    return (
        <>
            <HeadingTwo
                enText="Click on the words in order, to continue the sentence"
                arText="انقر على الكلمات بالترتيب، لمتابعة الجملة"
            />
            <div className={styles.wordsHolder}>
                {words.map((word, index) => (
                    <button
                        key={index}
                        onClick={() => handleWordClick(word)}
                        style={{ borderColor: colorsShuffled[index], color: colorsShuffled[index] }}
                    >
                        {word}
                    </button>
                ))}
            </div>
   
            <div className={styles.sentencewordHolder}>
                {selectedWords.map((word, index) => (
                    <button
                        key={index}
                        onClick={() => handleWordClick(word, true)}
                        style={{ borderColor: colorsShuffled[index], color: colorsShuffled[index] }}
                    >
                        {word}
                    </button>
                ))}
            </div>
            <button className='mainButton' onClick={validateSentence}>Validate</button>
            <div aria-live='polite'>{result && <HeadingTwo enText={result} arText={result} />}</div>
            
        </>
    );
}

export default CompleteSentence;
