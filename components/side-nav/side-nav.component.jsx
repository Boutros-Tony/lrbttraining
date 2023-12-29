import React, { useState } from 'react';
import Link from "next/link";
import styles from './side-nav.module.scss'
import { useRouter } from "next/router";

const SideNav = ({ chapterNumber, questions, chapterTitle, completedQuestions, lang, chapterLink }) => {
    const router = useRouter();
    const currentPath = router.asPath;
    const [isActive, setIsActive] = useState(false);

    const toggleNav = () => {
        setIsActive(!isActive);
    };

    return (
        <>
            <button className={styles.phoneButton} onClick={toggleNav}>
                <div>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                Menu
            </button>
        
            <aside id="side-nav" className={`${styles.sideNav} ${isActive ? styles.active : ''}`}>
                <button className={styles.close} onClick={toggleNav}>Close</button>
                <h3>{chapterTitle}</h3>
                {questions.map((question) => {
                    const questionPath = `/chapters/${chapterLink}${question.link}`;
                    const isActiveQuestion = questionPath === currentPath;
                    
                    return (
                        <Link href={questionPath} key={question.id} className={`${styles.questionItem} ${isActiveQuestion ? styles.active : ''}`}>
                            <img 
                                className={styles.iconImg}
                                src={completedQuestions.includes(question.id) ? '/assets/completed-icon.svg' : question.icon}
                                role="presentation"
                            />
                            <p>{lang === 'ar' ? question.arTitle : question.title}</p>
                        </Link>
                    );
                })}
            </aside>
        </>
    );
};

export default SideNav;
