import { ChaptersPageLayout } from ".";
import LanguageDetector from "../../../../components/lang-detecter/lang-detecter.component";
import Head from "next/head";
import CompletionButton from "../../../../components/completion-button/completion-button.component";
import HeadingOne from "../../../../components/heading-1/heading-1.component";
import DropDownText from "../../../../components/dropdown-text/dropdown-text.component";

const Question25 = () => {
    const lang = LanguageDetector();
 
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
         <div className="main-questions">
       <HeadingOne 
       enText="Grievance Channels" 
       arText="تعزيز المشاركة الشاملة"/>
        <DropDownText
            enTitle="Hotline"
            enText="A WhatsApp number is available to the project and general public in each project location. Anyone can contact the ILO on this number, including workers on the project, contractor’s staff or the community at large. The information will be strictly confidential and only shared on a needs basis. The Hotline will be managed by the ILO EIIP team centrally and monitored daily. Complaints that need an action will be logged and forwarded to the relevant official for action. The action taken and outcome will be listed against the complaint ticket"
            arTitle="الخط الساخن"
            arText="هناك رقم WhatsApp متاح للمشروع والجمهور العام في كل موقع مشروع. يمكن لأي شخص الاتصال بامنظمة العمل الدولية على هذا الرقم، بما في ذلك العمال في المشروع، وموظفي المقاول أو المجتمع بشكل عام. سيتم الحفاظ على المعلومات بشكل صارم والمشاركة فقط عند الحاجة. سيتم إدارة الخط الساخن من قبل فريق الEIIP المختص ويتم مراقبته يومياً. سيتم تسجيل الشكاوى التي تحتاج إلى إجراء وإعادتها إلى المسؤول المعني لاتخاذ الإجراءات المناسبة لحل الشكوى. سيتم سرد الإجراء المتخذ والنتيجة ضد تذكرة الشكوى."
            bgColor="rgb(119, 20, 73)"
            textColor="white"
        
        />
          <DropDownText
            enTitle="Social Safeguard Officer"
            enText="The SSOs build a relation of trust and confidence between them and the project beneficiaries. Project beneficiaries are advised to approach the SSO and inform them in case of any grievance or issue on site they might be facing (female beneficiaries will be given the option to talk to a female SSO). The SSO will then proceed to fill out a standardized grievance form, and send it to the EIIP M&E Officer, who will in turn take the necessary measures to address the issue promptly and confidentially."
            arTitle="مسؤول  الضمانات الاجتماعية"
            arText="يقوم المسؤولون ببناء علاقة من الثقة والاعتماد بينهم وبين المستفيدين من المشروع. يُنصح المستفيدين من المشروع بالاقتراب من الSSO وإبلاغهم في حالة وجود أي شكوى أو مشكلة في الموقع قد يواجهونها (سيتم منح المستفيدين الإناث الخيار للتحدث إلى SSO من الإناث). ثم سيقوم المسؤول بملء نموذج شكوى موحد، وإرساله إلى مسؤول الرصد والتقييم، الذي بدوره سيتخذ التدابير اللازمة لمعالجة المشكلة بسرية تامة."
            bgColor="rgb(250, 180, 40)"
            textColor="rgb(35, 0, 80)"
        
        />
           <DropDownText
            enTitle="Complaint Box On Site"
            enText="Workers and contractor’s staff are made aware of the onsite complaints’ mechanism at the start of the project (or start of employment). Anyone who has a complaint can fill out a grievance form and anonymously drop it into the complaints box placed in a strategic location. The EIIP SSO, will forwarded all grievances submitted to the central ILO team which will follow up and take the necessary actions."
            arTitle="صندوق الشكاوى في الموقع"
            arText="يتم توعية العمال وموظفي المقاول بآلية تقديم الشكاوى في الموقع في بداية المشروع (أو بداية التوظيف). يمكن لأي شخص لديه شكوى ملء نموذج شكوى وإسقاطه بشكل مجهول في صندوق الشكاوى الموضوع في موقع المشروع. سيقوم مالSSO بإعادة جميع الشكاوى المقدمة إلى الفريق المختص للEIIP الذي سيراقب ويتخذ الإجراءات اللازمة."
            bgColor="rgb(105, 228, 228)"
            textColor="rgb(35, 0, 80)"
        
        />
          
     <CompletionButton chapterNumber="6" questionNumber={25}/>
        </div>
        </>
       
    )
}
Question25.getLayout = (page) => ChaptersPageLayout(page, { currentQuestionId:25 });
export default Question25;