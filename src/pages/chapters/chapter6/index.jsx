import Navbar from "../../../../components/navbar/navbar.component";
import Paragraph from "../../../../components/paragraph/paragaraph.component";
import SideNavSub from "../../../../components/sidenav-sub/sidenav-sub.component";
import React from "react";
import Breadcrumb from "../../../../components/breadcrumb/breadcrumb.component";
import { useSelector } from "react-redux";
import { selectCurrentUserProgress } from "../../../../store/user/user.selectors";
import LanguageDetector from "../../../../components/lang-detecter/lang-detecter.component";
import styles from '../../../styles/chapters.module.scss'
import HeadingOne from "../../../../components/heading-1/heading-1.component";
import HeadingTwo from "../../../../components/heading-2/heading-2.component";
import CompletionButton from "../../../../components/completion-button/completion-button.component";
import ShowTextSquareTwo from "../../../../components/show-text-square-2/show-text-square.component";
const Question1 = () => {
 return (
        <div className="main-questions">
        <HeadingOne 
            enText="What is the Environment and Social Safeguard Framework (ESSF)?" 
            arText="ما هو إطار الضمانات الاجتماعية والبيئية  (ESSF)؟"/>
        <Paragraph
            enText='The ESSF is based on Laws and regulations of the Government of Lebanon, together with policies and guidelines of the International Labour Organization (ILO) related to social and environmental safeguards as well as relevant International Conventions of the ILO and the United Nations. The ESSF is developed for guidance to be used by Contractors and Contracts Supervisors, as well as by designated Social & Environmental Safeguards Officers (SSOs) on employment intensive projects.'
            arText="الـ ESSF مبني على القوانين واللوائح الخاصة بحكومة لبنان، بالإضافة إلى السياسات والإرشادات الخاصة بمنظمة العمل الدولية (ILO) المتعلقة بالضمانات الاجتماعية والبيئية وكذلك الاتفاقيات الدولية المعنية للـ ILO والأمم المتحدة.
            تم تطوير الـ ESSF كإرشاد يستخدم من قبل المقاولين ومشرفي العقود، وكذلك من قبل
            مسؤولي الضمانات الاجتماعية (SSOs) على المشاريع ذات الكثافة الوظيفية."
        />
        <Paragraph
            enText="The ESSF is designed to guide implementation of inclusive and rights-based practices in infrastructure & mitigate negative social & environmental impacts. The ESSF governs all EIIP Projects, it is contractually binding, and mandatory for the contractors to work on its basis."
            arText="تم تصميم الـ ESSF لإرشاد تنفيذ الممارسات الشاملة والمبنية على الحقوق في البنية التحتية وللتقليل من التأثيرات الاجتماعية والبيئية السلبية. يحكم الـ ESSF جميع مشاريع EIIP، وهو ملزم عقديًا، والعمل على اساسه الزامي للمقاولين."
        />
        <HeadingTwo
            enText="The ESSF:"
            arText="الـ ESSF:"
        />
        <ShowTextSquareTwo/>
        <CompletionButton chapterNumber="6" questionNumber={1}/>
        </div>
    )
}


const NestedLayout = ({ currentQuestionId, children }) => {
    const progress = useSelector(selectCurrentUserProgress);
    const lang = LanguageDetector();
   
    const completedQuestions = progress.completedQuestions[`chapter6`] || [];

    const questions = [
        {
            id:1,
            title:"Video : EIIP",
            arTitle:'فيديو: EIIP',
            icon:"/assets/video-icon.png",
            link:""
        },
        {
            id:2,
            title:"What is the International Labour Organization?",
            arTitle:"ما هي منظمة العمل الدولية؟",
            icon:"/assets/video-icon.png",
            link:"/question2"
        },
        {
            id:3,
            title:"The Employment Intensive Infrastructure Programme (EIIP)",
            arTitle:"برنامج البنية التحتية المكثفة للتوظيف (EIIP)",
            icon:"/assets/video-icon.png",
            link:"/question3"
        },
        {
            id:4,
            title:"EIIP In Lebanon",
            arTitle:'(EIIP) في لبنان',
            icon:"/assets/video-icon.png",
            link:"/question4"
        },
        {
            id:5,
            title:"EIIP Strategy",
            arTitle:'استراتيجية EIIP',
            icon:"/assets/video-icon.png",
            link:"/question5"
        },
        {
            id:6,
            title:"Contractor Obligations",
            arTitle:"التزامات المقاول",
            icon:"/assets/video-icon.png",
            link:"/question6"
        },
        {
            id:7,
            title:"EIIP Contractor Training Strategy",
            arTitle:'استراتيجية EIIP لتدريب المقاولين',
            icon:"/assets/video-icon.png",
            link:"/question7"
        },
        {
            id:8,
            title:"Quiz",
            arTitle:'اختبار',
            icon:"/assets/video-icon.png",
            link:"/question8"
        }
    ]
    const sections = [
        {
            title:"Environment and Social Safeguard Framework and Social Safeguard Officer",
            arTitle:"إطار الضمانات الاجتماعية والبيئية ومسؤول الضمانات الاجتماعية",
            questions: [
                {
                    id:1,
                    title:"Overview",
                    arTitle:'ملخص',
                    icon:"/assets/reading-icon.png",
                    link:""
                },
                {
                    id:2,
                    title:"Legal Context",
                    arTitle:'سياق قانوني',
                    icon:"/assets/reading-icon.png",
                    link:"/question2"
                },
                {
                    id:3,
                    title:"ESSF Articles in the Contract Terms & Conditions",
                    arTitle:"مقالات ESSF في شروط وأحكام العقد",
                    icon:"/assets/reading-icon.png",
                    link:"/question3"
                },
            ]
        },
        {
            title:"Decent Work",
            arTitle:"عمل لائق",
            questions: [
                {
                    id:4,
                    title:"What is Decent Work",
                    arTitle:'ملخص',
                    icon:"/assets/reading-icon.png",
                    link:"/question4"
                },
                {
                    id:5,
                    title:"Exercise 1",
                    arTitle:"التمرين 1",
                    icon:"/assets/quiz-icon.png",
                    link:"/question5"
                },
                {
                    id:6,
                    title:"Decent Work Conditions",
                    arTitle:"ظروف العمل اللائقة",
                    icon:"/assets/reading-icon.png",
                    link:"/question6"
                },
            ]
        },
        {
            title:"Role of the Social Safeguard Officer",
            arTitle:"دور مسؤول الضمانات الاجتماعية",
            questions: [
                {
                    id:7,
                    title:"SSO Video",
                    arTitle:'فيديو مسؤول الضمانات الاجتماعية والبيئية (SSO)',
                    icon:"/assets/video-icon.png",
                    link:"/question7"
                },
                {
                    id:8,
                    title:"Role of ILO’s Social Safeguard Officer",
                    arTitle:"دور مسؤولي الضمانات الاجتماعية البيئية في منظمة العمل الدولية",
                    icon:"/assets/reading-icon.png",
                    link:"/question8"
                }
            ]
        },
        {
            title:"Outreach Mechanism",
            arTitle:"آلية التوعية",
            questions: [
                {
                    id:9,
                    title:"Approach & Steps",
                    arTitle:"النهج والخطوات",
                    icon:"/assets/reading-icon.png",
                    link:"/question9"
                },
                {
                    id:10,
                    title:"Standard advertisement template",
                    arTitle:"نموذج إعلان معتمد",
                    icon:"/assets/reading-icon.png",
                    link:"/question10"
                },
                {
                    id:11,
                    title:"Referrals",
                    arTitle:"الإحالات",
                    icon:"/assets/reading-icon.png",
                    link:"/question11"
                },
            ]
        },
        {
            title:"Occupational Safety & Health",
            arTitle:"السلامة والصحة المهنية",
            questions: [
                {
                    id:12,
                    title:"OSH Video",
                    arTitle:"فيديو الصحة والسلامة المهنية",
                    icon:"/assets/video-icon.png",
                    link:"/question12"
                },
                {
                    id:13,
                    title:"General Principles",
                    arTitle:"المبادئ العامة",
                    icon:"/assets/reading-icon.png",
                    link:"/question13"
                },
                {
                    id:14,
                    title:"Personal Protective Equipment (PPE)",
                    arTitle:"معدات الحماية الشخصية (PPE)",
                    icon:"/assets/reading-icon.png",
                    link:"/question14"
                },
                {
                    id:15,
                    title:"Risk Assessment",
                    arTitle:"تقييم المخاطر",
                    icon:"/assets/reading-icon.png",
                    link:"/question15"
                },
                {
                    id:16,
                    title:"Determing the Risk",
                    arTitle:"مصفوفة إدارة المخاطر",
                    icon:"/assets/reading-icon.png",
                    link:"/question16"
                },
                {
                    id:17,
                    title:"Risk Management Matrix",
                    arTitle:"تنفيذ السلامة والصحة المهنية",
                    icon:"/assets/reading-icon.png",
                    link:"/question17"
                },
                {
                    id:18,
                    title:"Implementation of Occupational Safety & Health",
                    arTitle:"تنفيذ السلامة والصحة المهنية",
                    icon:"/assets/reading-icon.png",
                    link:"/question18"
                },
                {
                    id:19,
                    title:"Workers' Responsibility",
                    arTitle:"مسؤولية العمال",
                    icon:"/assets/reading-icon.png",
                    link:"/question19"
                },
                {
                    id:20,
                    title:"Reporting Accidents on-Site",
                    arTitle:"الإبلاغ عن الحوادث في الموقع",
                    icon:"/assets/reading-icon.png",
                    link:"/question20"
                }
            ]
        },
        {
            title:"Effective Inclusion",
            arTitle:"الإدماج الفعال",
            questions: [
                {
                    id:21,
                    title:"Women's participation video",
                    arTitle:"فيديو المشاركة النسائية",
                    icon:"/assets/video-icon.png",
                    link:"/question21"
                },
                {
                    id:22,
                    title:"What can be done ?",
                    arTitle:"ماذا يمكن فعله؟",
                    icon:"/assets/reading-icon.png",
                    link:"/question22"
                },
                {
                    id:23,
                    title:"Promoting Inclusive Participation",
                    arTitle:"تعزيز المشاركة الشاملة",
                    icon:"/assets/reading-icon.png",
                    link:"/question23"
                },
            ]
        },
        {
            title:"Grievance Mechanism",
            arTitle:"آلية الشكاوى",
            questions: [
                {
                    id:24,
                    title:"Why a Grievance Mechanism?",
                    arTitle:"لماذا آلية الشكاوى؟",
                    icon:"/assets/reading-icon.png",
                    link:"/question24"
                },
                {
                    id:25,
                    title:"Grievance Channels",
                    arTitle:"قنوات الشكاوى",
                    icon:"/assets/reading-icon.png",
                    link:"/question25"
                },
                {
                    id:26,
                    title:"Grievance Procedure",
                    arTitle:"إجراءات الشكاوى",
                    icon:"/assets/reading-icon.png",
                    link:"/question26"
                },
            ]
        },
        {
            title:"Environmental Safeguarding",
            arTitle:"حماية البيئة",
            questions: [
                {
                    id:27,
                    title:"Exercise 2",
                    arTitle:"تمرين 2",
                    icon:"/assets/quiz-icon.png",
                    link:"/question27"
                },
                {
                    id:28,
                    title:"Environmental Safeguards Provisions",
                    arTitle:"أحكام الضمانات البيئية",
                    icon:"/assets/reading-icon.png",
                    link:"/question28"
                },
                {
                    id:29,
                    title:"Social and Environmental Safeguards",
                    arTitle:"الضمانات الاجتماعية والبيئية",
                    icon:"/assets/reading-icon.png",
                    link:"/question29"
                },
                {
                    id:30,
                    title:"Screening and Analysis",
                    arTitle:"التقييم والتحليل",
                    icon:"/assets/reading-icon.png",
                    link:"/question30"
                },
                {
                    id:31,
                    title:"Screening and Analysis- Social Feasibility",
                    arTitle:"التقييم والتحليل-الجدوى الاجتماعية",
                    icon:"/assets/reading-icon.png",
                    link:"/question31"
                },
                {
                    id:32,
                    title:"Screening and Analysis - Environmental Screening",
                    arTitle:"التقييم والتحليل – التقييم البيئي",
                    icon:"/assets/reading-icon.png",
                    link:"/question32"
                },
                {
                    id:33,
                    title:"Facilitation through training",
                    arTitle:"تسهيل من خلال التدريب",
                    icon:"/assets/reading-icon.png",
                    link:"/question33"
                },
                {
                    id:34,
                    title:"Compliance",
                    arTitle:"الامتثال",
                    icon:"/assets/reading-icon.png",
                    link:"/question34"
                },
                {
                    id:35,
                    title:"Quiz",
                    arTitle:"اختبار",
                    icon:"/assets/quiz-icon.png",
                    link:"/question35"
                },
            ]
        },

    ]
    const allQuestions = sections.reduce((questions, section) => {
        return questions.concat(section.questions);
    }, []);
    
    return (
        <>
        <Navbar/>
        <Breadcrumb 
                chapterNumber="6"
                currentQuestionId={currentQuestionId}
                questions={allQuestions}
                chapterLink="chapter6"
                
                chapterTitle={lang==='ar'?"إطار الضمانات الاجتماعية والبيئية ومسؤول الضمانات الاجتماعية":"6. Environment and Social Safeguard Framework and Social Safeguard Officer"}
            />
            <div id="wrapper" className={styles.wrapper}>
                <SideNavSub 
                    chapterNumber="6"
                    sections={sections}
                    completedQuestions={completedQuestions}
                    chapterLink="chapter6"
                    lang={lang}
                    chapterTitle={lang==='ar'? "إطار الضمانات الاجتماعية والبيئية ومسؤول الضمانات الاجتماعية":"Environment and Social Safeguard Framework and Social Safeguard Officer"}
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