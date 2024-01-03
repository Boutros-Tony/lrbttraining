import Navbar from "../../../../components/navbar/navbar.component";
import SideNav from "../../../../components/side-nav/side-nav.component";
import React from "react";
import Breadcrumb from "../../../../components/breadcrumb/breadcrumb.component";
import { useSelector } from "react-redux";
import { selectCurrentUserProgress } from "../../../../store/user/user.selectors";
import LanguageDetector from "../../../../components/lang-detecter/lang-detecter.component";
import styles from '../../../styles/chapters.module.scss'
import HeadingOne from "../../../../components/heading-1/heading-1.component";
import Paragraph from "../../../../components/paragraph/paragaraph.component";
import FlagHeading from "../../../../components/flag-heading/flag-heading.component";
import UlList from "../../../../components/ul-list/ul-list.component";
import CompletionButton from "../../../../components/completion-button/completion-button.component";
const Question1 = () => {
    const enList1 = [
        "Analyse Unit rates for LRB work items",
        "Prices for LRB works (Bill of Quantities with prices)"
    ]
    const arList1 = [
        "تحليل معدلات الوحدة لعناصر عمل LRB",
        "أسعار أعمال LRB (فاتورة الكميات مع الأسعار)"
    ]
    const enList2 = [
        "Client’s engineer estimates bid price when preparing contracts",
        "Bidders to Price work items when bidding for a LRB contract",
        "Detailed Unit Rate Analysis is very important when preparing and submitting a competitive bid"
    ]
    const arList2 = [
        "تقدير المهندس المتعاقد لسعر المناقصة عند إعداد العقود",
        "على المتقدمين بالعروض تسعير مواد العمل عند التقدم لعقد LRB",
        "تحليل الوحدة السعرية بالتفصيل هو أمر مهم جدًا عند إعداد وتقديم عرض تنافسي."
    ]
 return (
        <div className="main-questions">
        <HeadingOne 
        enText="Understanding the costing and detailed Unit Rate Analysis" 
        arText="فهم التكلفة وتحليل الوحدة السعرية بالتفصيل"/>
       <Paragraph
        enText="The understanding of costing and detailed Unit Rate Analysis is essential to ensure a fair competition between bidders, who would therefore price on the same basis"
        arText="فهم التكلفة وتحليل الوحدة السعرية بالتفصيل أمر ضروري لضمان منافسة عادلة بين المتقدمين بالعروض، الذين سيقدمون أسعارهم على هذا الأساس ."
/>
        <FlagHeading
            enText="The purpose of this session is to enable bidders to:"
            arText="الغرض من هذا الفصل هو تمكين مقدمي العروض من:"
        />
        <UlList
            enList={enList1}
            arList={arList1}
        />
        <FlagHeading
            enText="Unit rates are established for:"
            arText="يتم تحديد أسعار الوحدات من أجل:"
        />
         <UlList
            enList={enList2}
            arList={arList2}
        />
        <CompletionButton chapterNumber="5" questionNumber={1}/>
        </div>
    )
}


const NestedLayout = ({ currentQuestionId, children }) => {
    const progress = useSelector(selectCurrentUserProgress);
    const lang = LanguageDetector();
   
    const completedQuestions = progress.completedQuestions[`chapter5`] || [];

    const questions = [
        {
            id:1,
            title:"Understanding the costing and detailed Unit Rate Analysis",
            arTitle:"فهم التكلفة وتحليل الوحدة السعرية بالتفصيل",
            icon:"/assets/reading-icon.png",
            link:""
        },
        {
            id:2,
            title:"Sample of BoQ",
            arTitle:"عينة من BoQ",
            icon:"/assets/reading-icon.png",
            link:"/question2"
        },
        {
            id:3,
            title:"Price components",
            arTitle:"مكونات السعر",
            icon:"/assets/reading-icon.png",
            link:"/question3"
        },
        {
            id:4,
            title:"Unit Rate Composition",
            arTitle:"تكوين معدل الوحدة",
            icon:"/assets/reading-icon.png",
            link:"/question4"
        },
        {
            id:5,
            title:"Exercise 1",
            arTitle:'التمرين 1',
            icon:"/assets/quiz-icon.png",
            link:"/question5"
        },
        {
            id:6,
            title:"Direct Cost",
            arTitle:"التكلفة المباشرة",
            icon:"/assets/reading-icon.png",
            link:"/question6"
        },
        {
            id:7,
            title:"Labour Cost",
            arTitle:"تكلفة العمالة",
            icon:"/assets/reading-icon.png",
            link:"/question7"
        },
        {
            id:8,
            title:"Cost of Equipment and hand tools",
            arTitle:"تكلفة المعدات والأدوات اليدوية",
            icon:"/assets/reading-icon.png",
            link:"/question8"
        },
        {
            id:9,
            title:"Typical hand tools for LRBT works",
            arTitle:"أدوات يدوية نموذجية لأعمال LRB",
            icon:"/assets/reading-icon.png",
            link:"/question9"
        },
        {
            id:10,
            title:"Exercise 2",
            arTitle:"التمرين 2",
            icon:"/assets/quiz-icon.png",
            link:"/question10"
        },
        {
            id:11,
            title:"Material Cost",
            arTitle:"تكلفة المواد",
            icon:"/assets/reading-icon.png",
            link:"/question11"
        },
        {
            id:12,
            title:"Total Direct Cost",
            arTitle:"إجمالي التكلفة المباشرة",
            icon:"/assets/reading-icon.png",
            link:"/question12"
        },
        {
            id:13,
            title:"Exercise 3",
            arTitle:"التمرين 3",
            icon:"/assets/quiz-icon.png",
            link:"/question13"
        },
        {
            id:14,
            title:"Indirect Cost",
            arTitle:"التكاليف غير المباشرة",
            icon:"/assets/reading-icon.png",
            link:"/question14"
        },
        {
            id:15,
            title:"Exercise 4",
            arTitle:"التمرين 4",
            icon:"/assets/quiz-icon.png",
            link:"/question15"
        },
        {
            id:16,
            title:"Unit Rate",
            arTitle:"سعر الوحدة",
            icon:"/assets/reading-icon.png",
            link:"/question16"
        },
        {
            id:17,
            title:"Quiz",
            arTitle:"اختبار",
            icon:"/assets/quiz-icon.png",
            link:"/question17"
        }
    ]
  
    return (
        <>
        <Navbar/>
        <Breadcrumb 
                chapterNumber="5"
                currentQuestionId={currentQuestionId}
                questions={questions}
                chapterLink="chapter5"
                
                chapterTitle={lang==='ar'? "تحليل سعر الوحدة والتسعير/جدول الكميات لأعمال LRB":"5. Unit Rate Analysis and Pricing/BoQ for LRB Works"}
            />
            <div id="wrapper" className={styles.wrapper}>
                <SideNav 
                    chapterNumber="5"
                    questions={questions}
                    completedQuestions={completedQuestions}
                    chapterLink="chapter5"
                    lang={lang}
                    chapterTitle={lang==='ar'? "تحليل سعر الوحدة والتسعير/جدول الكميات لأعمال LRB":"Unit Rate Analysis and Pricing/BoQ for LRB Works"}
                />
                {children}
            </div>

      
      
        </>
    )
}



export const ChaptersPageLayout = (page, layoutProps = {}) => {
    return (
        <NestedLayout {...layoutProps}>
            {page}
        </NestedLayout>
    );
};
Question1.getLayout = (page) => ChaptersPageLayout(page, { currentQuestionId: 1 });
export default Question1;