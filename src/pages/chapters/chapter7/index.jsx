import Navbar from "../../../../components/navbar/navbar.component";
import SideNav from "../../../../components/side-nav/side-nav.component";
import React from "react";
import Breadcrumb from "../../../../components/breadcrumb/breadcrumb.component";
import { useSelector } from "react-redux";
import { selectCurrentUserProgress } from "../../../../store/user/user.selectors";
import LanguageDetector from "../../../../components/lang-detecter/lang-detecter.component";
import styles from '../../../styles/chapters.module.scss'
import DropDownText from "../../../../components/dropdown-text/dropdown-text.component";
import HeadingOne from "../../../../components/heading-1/heading-1.component";
import CompletionButton from "../../../../components/completion-button/completion-button.component";
const Question1 = () => {
 return (
        <div className="main-questions">
        <HeadingOne 
                enText="Contract Administration" 
                arText="إدارة العقد"/>
        <DropDownText
            enTitle="Initiation"
            arTitle="المبادرة"
            bgColor="rgb(171, 59, 119)"
            textColor="white"
            enText={<>
            • Contract Award  <br />• Upstart meeting <br />• Work Plan
            </>}
              arText={<>
                •  منح العقد <br />
                • الإجتماع الأولي<br />
                 • خطة العمل
                </>}
        />  
         <DropDownText
            enTitle="Implementation"
            arTitle="تطبيق"
            bgColor="rgb(250, 180, 40)"
            textColor="rgb(35, 0, 80)"
            enText={<>
           • All contractual communication bey-procurement@ilo.org  <br />
            • Performance monitoring <br />
            • Adherence to contract conditions <br />
            • Verification of IPCs <br />
            • Checking Variation Orders & Preparation of Amendments <br />
                • Monitoring complaints and managing disputes
            </>}
              arText={<>
                • جميع الاتصالات التعاقدية bey-procurement@ilo.org <br />
                • مراقبة الاداء <br />
                • الالتزام بشروط العقد <br />
                • التحقق من التصنيف الدولي للبراءات <br />
                • التحقق من أوامر التغيير وإعداد التعديلات <br />
                • مراقبة الشكاوى وإدارة النزاعات
                 </>}
        /> 
         <DropDownText
            enTitle="Close out"
            arTitle="إغلاق"
            bgColor="rgb(105, 228, 228)"
            textColor="rgb(35, 0, 80)"
            enText={<>
            • Verify deliverables, Final Payment <br />
            • Contract Evaluation KPI
            </>}
              arText={<>
                •  التحقق من النتائج، الدفع النهائي <br />
                • تقييم العقد KPI
                </>}
        />  
        <CompletionButton chapterNumber="7" questionNumber={1}/>
        </div>
    )
}


const NestedLayout = ({ currentQuestionId, children }) => {
    const progress = useSelector(selectCurrentUserProgress);
    const lang = LanguageDetector();
   
    const completedQuestions = progress.completedQuestions[`chapter7`] || [];

    const questions = [
        {
            id:1,
            title:"Contract Administration",
            arTitle:"إدارة العقد",
            icon:"/assets/video-icon.png",
            link:""
        },
        {
            id:2,
            title:"Key Contract Documents",
            arTitle:"وثائق العقد الرئيسية",
            icon:"/assets/video-icon.png",
            link:"/question2"
        },
        {
            id:3,
            title:"Particular Conditions - highlights - please see Annex 4b!",
            arTitle:"الشروط الخاصة - النقاط البارزة - يرجى الاطلاع على الملحق 4 ب!",
            icon:"/assets/video-icon.png",
            link:"/question3"
        },
        {
            id:4,
            title:"Bid Clarification and Submission: ITB 36-2022",
            arTitle:"توضيح المناقصة وتقديمها: ITB 36-2022",
            icon:"/assets/video-icon.png",
            link:"/question4"
        }
    ]
  
    return (
        <>
        <Navbar/>
        <Breadcrumb 
                chapterNumber="7"
                currentQuestionId={currentQuestionId}
                questions={questions}
                chapterLink="chapter7"
                
                chapterTitle={lang==='ar'? "إدارة العقد والشروط الخاصة":"7. Contract Administration & Particular Conditions"}
            />
            <div id="wrapper" className={styles.wrapper}>
                <SideNav 
                    chapterNumber="7"
                    questions={questions}
                    completedQuestions={completedQuestions}
                    chapterLink="chapter7"
                    lang={lang}
                    chapterTitle={lang==='ar'?"إدارة العقد والشروط الخاصة":"Contract Administration & Particular Conditions"}
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