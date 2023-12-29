import Navbar from "../../../../components/navbar/navbar.component";
import SideNav from "../../../../components/side-nav/side-nav.component";
import React from "react";
import Breadcrumb from "../../../../components/breadcrumb/breadcrumb.component";
import { useSelector } from "react-redux";
import { selectCurrentUserProgress } from "../../../../store/user/user.selectors";
import LanguageDetector from "../../../../components/lang-detecter/lang-detecter.component";
import styles from '../../../styles/chapters.module.scss'
import HeadingOne from "../../../../components/heading-1/heading-1.component";
import CompletionButton from "../../../../components/completion-button/completion-button.component";
import ImageComponent from "../../../../components/image-component/image-component";
import FlagList from "../../../../components/flag-list/flag-list.component";
import HeadingTwo from "../../../../components/heading-2/heading-2.component";
const Question1 = () => {
    const lang = LanguageDetector()
    const enList= [
        'This Site organization Chart should be submitted in the tender and must present the dedicated personnel that will be responsible on site for this specific project/lot.',
        "Group leader can be employed as casual skilled worker, and should be trained/coached by the contractor.",
        "Supervisors and engineer should attend the LRB training before commencing the works."
    ]
    const arList = [
        'يجب تقديم هذا الرسم التنظيمي للموقع في المناقصة ويجب أن يُظهر الأفراد المكرسين الذين سيكونون مسؤولين عن الموقع لهذا المشروع / القطعة الخاصة.',
        'يمكن توظيف قائد المجموعة كعامل ماهر عرضي، ويجب تدريبه/توجيهه من قبل المقاول.',
        'يجب على المشرفين والمهندس حضور التدريب الخاص بـ LRB قبل بدء الأعمال.'
    ]
 return (
        <div className="main-questions">
        <HeadingOne enText="Typical site organization for LRB works" arText="تنظيم الموقع النموذجي لأعمال LRB"/>
      
            <ImageComponent
            width="60%"
                enSrc="/assets/chapter3-1.jpg"
                enAlt="Organizational chart for LRB works showing the structure and reporting relationships. At the top is the 'Company director,' directly followed by the 'Site engineer/Site manager.' Two 'Supervisors,' each capable of supervising up to 3 groups, are shown below the site manager. Parallel to the supervisors is a 'Company Staff' section that includes skilled laborers, plan operators, and drivers. At the bottom are two 'Worker groups,' each led by a group leader and consisting of 10 unskilled workers."
                arSrc="/assets/chapter3-1-ar.jpg"
                arAlt="تنظيم الموقع النموذجي لأعمال LRB يظهر الهيكل وعلاقات التقارير. في الأعلى 'مدير الشركة'، يليه مباشرة 'مهندس الموقع/مدير الموقع'. أسفل منه يوجد 'مشرف 1' و'مشرف 2'، كل منهما قادر على الإشراف على ما يصل إلى 3 مجموعات. بالموازاة مع المشرفين يوجد قسم 'موظفي الشركة الذي يشمل العمال ذو مهارة ومشغلي الخطط والسائقين. في الأسفل يوجد مجموعتين 'مجموعة العمال'، كل منهما يترأسها قائد المجموعة وتتألف من 10 عمال بدون مهارة."
            />
            <HeadingTwo
                enText="Note:"
                arText="ملاحظة:"
            />
            <FlagList enList={enList} arList={arList}/>
        <CompletionButton chapterNumber="3" questionNumber={1} />
        </div>
    )
}


const NestedLayout = ({ currentQuestionId, children }) => {
    const progress = useSelector(selectCurrentUserProgress);
    const lang = LanguageDetector();
   
    const completedQuestions = progress.completedQuestions[`chapter3`] || [];

    const questions = [
        {
            id:1,
            title:"Typical site organization for LRB works",
            arTitle:"تنظيم الموقع النموذجي لأعمال LRB",
            icon:"/assets/video-icon.png",
            link:""
        },
        {
            id:2,
            title:"Recruitment of Labour",
            arTitle:"توظيف العمالة",
            icon:"/assets/video-icon.png",
            link:"/question2"
        },
        {
            id:3,
            title:"Logical sequencing of LRB activities",
            arTitle:"التسلسل المنطقي لأنشطة LRB",
            icon:"/assets/video-icon.png",
            link:"/question3"
        },
        {
            id:4,
            title:"Importance of a well-developed Work Plan",
            arTitle:"أهمية خطة عمل متطورة",
            icon:"/assets/video-icon.png",
            link:"/question4"
        },
        {
            id:5,
            title:"Exercise",
            arTitle:"تمرين",
            icon:"/assets/video-icon.png",
            link:"/question5"
        },
        {
            id:6,
            title:"Work Plan Considerations",
            arTitle:"اعتبارات خطة العمل",
            icon:"/assets/video-icon.png",
            link:"/question6"
        },
        {
            id:7,
            title:"Work Plan",
            arTitle:"خطة عمل",
            icon:"/assets/video-icon.png",
            link:"/question7"
        },
        {
            id:8,
            title:"Sample of BoQ",
            arTitle:"عينة من BoQ",
            icon:"/assets/video-icon.png",
            link:"/question8"
        },
        {
            id:9,
            title:"Preparing a Work Plan",
            arTitle:"إعداد خطة العمل",
            icon:"/assets/video-icon.png",
            link:"/question9"
        },
        {
            id:10,
            title:"Overall planning, reporting and monitoring system",
            arTitle:"نظام التخطيط الشامل وإعداد التقارير والرصد",
            icon:"/assets/video-icon.png",
            link:"/question10"
        },
        {
            id:11,
            title:"Quiz",
            arTitle:'اختبار',
            icon:"/assets/video-icon.png",
            link:"/question11"
        }
    ]
  
    return (
        <>
        <Navbar/>
        <Breadcrumb 
                chapterNumber="3"
                currentQuestionId={currentQuestionId}
                questions={questions}
                chapterLink="chapter3"
                
                chapterTitle={lang==='ar'? "إدارة العمالة وخطة العمل":"3. Labour Management and Work Plan "}
            />
            <div id="wrapper" className={styles.wrapper}>
                <SideNav 
                    chapterNumber="3"
                    questions={questions}
                    completedQuestions={completedQuestions}
                    chapterLink="chapter3"
                    lang={lang}
                    chapterTitle={lang==='ar'? "إدارة العمالة وخطة العمل":"Labour Management and Work Plan"}
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