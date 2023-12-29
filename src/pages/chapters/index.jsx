import styles from '../../styles/chapters.module.scss';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import Navbar from '../../../components/navbar/navbar.component';
import { selectCurrentUserProgress } from '../../../store/user/user.selectors';
import LanguageDetector from '../../../components/lang-detecter/lang-detecter.component';
import Head from 'next/head';
const Chapters = () => {
    const progress = useSelector(selectCurrentUserProgress);
  
    const lang = LanguageDetector()
    const isChapterAccessible = (chapterId) => {
        if (chapterId === 1) {
            return true; // Chapter 1 is always accessible
        }
        return progress?.completedChapters?.includes(chapterId - 1);
    };

    const getButtonLabel = (chapterId) => {
        if (progress?.completedChapters?.includes(chapterId)) {
            return lang === 'ar' ? 'مكتمل' : 'Completed';
        }
        if (isChapterAccessible(chapterId)) {
            return lang === 'ar' ? 'ابدأ' : 'Get Started';
        }
        return lang === 'ar' ? 'مغلق' : 'Locked';
    };
    const chapters = [
        {
            id:1,
            englishTitle:"Introduction To EIIP & LRBT",
            arabicTitle:"مقدمة عن مشاريع برنامج التوظيف المكثف والبنية التحتية (EIIP) والتكنولوجيا المعتمدة على الموارد المحلية (LRBT).",
            chapterNumber:"1",
            link:"chapter1"
        },
        {
            id:2,
            englishTitle:"Local Resource Based Technology",
            arabicTitle:"التكنولوجيا المعتمدة على الموارد المحلية (LRBT).",
            chapterNumber:"2",
            link:"chapter2"
        },
        {
            id:3,
            englishTitle:"Labour Management And Work Plan",
            arabicTitle:"إدارة اليد العاملة وخطة العمل",
            chapterNumber:"3",
            link:"chapter3"
        },
        {
            id:4,
            englishTitle:"Task Rates And Productivity Norms",
            arabicTitle:"معدلات المهام والمعايير الإنتاجية",
            chapterNumber:"4",
            link:"chapter4"
        },
        {
            id:5,
            englishTitle:"Unit Rate Analysis And Pricing BoQ For LRB Works",
            arabicTitle:"تحليل معدل الوحدة وتسعير كمية العمل لأعمال LRB",
            chapterNumber:"5",
            link:"chapter5"
        },
        {
            id:6,
            englishTitle:"Environment And Social Safeguard Framework And Social Safeguard Officer",
            arabicTitle:"إطار الضمانات الاجتماعية والبيئية ومسؤول الضمانات الاجتماعية",
            chapterNumber:"6",
            link:"chapter6"
        },
        {
            id:7,
            englishTitle:"Contract Administration & Particular Conditions",
            arabicTitle:"إدارة العقود والشروط الخاصة",
            chapterNumber:"7",
            link:"chapter7"
        }, {
            id:8,
            englishTitle:"Final Quiz",
            arabicTitle:"الاختبار النهائي",
            chapterNumber:"8",
            link:"chapter8"
        }
    ]
    return (
        <>
        <Head>
        <title>
    {lang === 'ar' ? "الفصول التدريبية - تدريب EIIP للمقاولين" : "Training Chapters - EIIP Training for Contractors"}
</title>


        <meta name="description" content="EIIP" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Navbar/>
           <div className={styles.chaptersWrapper}>
           <ul>
                {chapters.map(chapter => (
                    <li key={chapter.id}>
                        <Link aria-disabled={!isChapterAccessible(chapter.id)} href={isChapterAccessible(chapter.id) ? `/chapters/${chapter.link}` : '#'}>
                            <div className={styles.nameHolder}>
                            <span>{chapter.chapterNumber}</span>
                                <h2>{lang === 'ar' ? chapter.arabicTitle : chapter.englishTitle}</h2>
                            </div>
                                
                                <button className='mainButton' disabled={!isChapterAccessible(chapter.id)}>
                                    {getButtonLabel(chapter.id)}
                                </button>
                        
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
        </>
     
    )
}

export default Chapters;