import Link from "next/link";
import styles from './sidenav-sub.module.scss'
import { useRouter } from "next/router";
import { useState } from "react";
const SideNavSub = ({ sections, completedQuestions, lang, chapterLink }) => {
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
            {sections.map((section, index) => (
                <div key={index}>
                    {section.title && <h4>{lang === 'ar' ? section.arTitle : section.title}</h4>}
                    {section.questions.map((question) => {
                        const questionPath = `/chapters/${chapterLink}${question.link}`;
                        const isActive = questionPath === currentPath;

                        return (
                            <Link href={questionPath} key={question.id} className={`${styles.questionItem} ${isActive ? styles.active : ''}`}>
                                <img 
                                    className={styles.iconImg}
                                    src={completedQuestions.includes(question.id) ? '/assets/completed-icon.svg' : question.icon}
                                    role="presentation"
                                />
                                <p>{lang === 'ar' ? question.arTitle : question.title}</p>
                            </Link>
                        );
                    })}
                </div>
            ))}
        </aside>
        </>
       
    );
};

export default SideNavSub;
