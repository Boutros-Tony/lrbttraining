import { ChaptersPageLayout } from ".";
import FlagHeading from "../../../../components/flag-heading/flag-heading.component";
import Paragraph from "../../../../components/paragraph/paragaraph.component";
import LanguageDetector from "../../../../components/lang-detecter/lang-detecter.component";
import HeadingOne from "../../../../components/heading-1/heading-1.component";
import CompletionButton from "../../../../components/completion-button/completion-button.component";
import UlList from "../../../../components/ul-list/ul-list.component";
import ImageComponent from "../../../../components/image-component/image-component";
const Question4 = () => {
    const lang = LanguageDetector();
    const enList1 = [
        <> <b>Labour/equipment Task Rate:</b>  The amount of work that can be completed by one labourer/equipment in a standard working day.</>,
        <> <b>Task rate example 1:</b>If 1 unskilled labourer can complete the excavation of 2 m3 of soil in one day, so the Labour task rate for the excavation is: 2 m3 / Wd (Work-day)</>
    ]
    const arList1 = [
       <><b>معدل مهمة العمالة/المعدات: </b>مقدار العمل الذي يمكن لعامل/معدات إنجازه في يوم عمل نموذجي.</>,
        <><b>مثال معدل المهمة 1:</b>إذا كان بإمكان عامل واحد بدون مهارة إكمال حفر 2 م3 من التربة في يوم واحد، فإن معدل مهمة العمل للحفر هو: 2 م3 / يوم (يوم عمل) </>
    ]
    const enList2 = [
        "1 Wd = 1 worker working for 1 day",
        <>10 Wds = 1 worker working for 10 days <b>OR </b> <br />
        10 Workers working for 1 day <b>OR </b> <br />
        5 workers working for 2 days</>
    ]
    const arList2 = [
        "1 Wd = عامل واحد يعمل لمدة يوم واحد",
        <>
        10 أيام = عامل واحد يعمل لمدة 10 أيام
        <b> أو</b> <br />
        10 عمال يعملون لمدة يوم واحد 
        <b> أو</b> <br />
        5 عمال يعملون لمدة يومين
        </>
    ]
    const enList3 = [
        <> <b>Labour/equipment Productivity</b>The number of labour/equipment Work-day (Wd) required to complete 1 unit of work in a standard working day. </>
    ]
    const arList3 = [
        <>
        <b>إنتاجية العمل/المعدات:</b>
        عدد يوم العمل/المعدات المطلوب لإكمال وحدة عمل واحدة في يوم عمل نموذجي.
        </>
    ]
    return (
        <div className="main-questions">
       <HeadingOne 
       enText="Task rates and Productivity" 
       arText="معدلات المهام والإنتاجية "/>
        <Paragraph
            enText="Task rates are the essential foundation that allows for an accurate pricing and planning"
            arText="معدلات المهام هي المعيار الأساسي الذي يسمح بتسعير دقيق وتخطيط فعّال."
        />
       
       <ImageComponent
       width="60%"
        enSrc="/assets/taskratesproductivity-ch4.png"
        enAlt="Task rates and Productivity,' explaining the use of task rates. It states that task rates are foundational for accurate pricing and planning. From the central concept 'Task rates & Productivity,' two outcomes are described: 'To calculate labour or equipment cost for bidding' and 'To manage labour and equipment for construction works,' indicating that task rates serve two main purposes in project management"
        arSrc="/assets/taskratesproductivity-ch4-ar.png"
        arAlt="مخطط تدفق بعنوان 'معدلات المهام والإنتاجية'، يشرح استخدام معدلات المهام. يذكر أن معدلات المهام أساسية لتسعير دقيق وتخطيط. من المفهوم المركزي 'معدلات المهام والإنتاجية'، هناك نتيجتان موصوفتان: 'لحساب تكلفة العمالة أو المعدات للمناقصات' و 'لإدارة العمالة والمعدات لأعمال البناء'، مما يشير إلى أن معدلات المهام تخدم غرضين رئيسيين في إدارة المشروع"
       />
       <Paragraph
        enText="It is fundamental to understand the difference between:"
        arText="من الضروري فهم الفرق بين:"
       />
       <Paragraph
        enText="Day: time reference of a day on a schedule"
        arText="اليوم: مرجع زمني ليوم واحد في جدول زمني"
       />
       <Paragraph
        enText="Working Day (WD): Quantitative reference of a Worker that has performed 1 full Day of Work"
        arText="يوم العمل (WD): مرجع كمي للعامل الذي قام بأداء يوم عمل كامل"
       />
       <FlagHeading
            enText="Definition of Task rate:"
            arText="تعريف معدل المهمة:"
       />
       <UlList enList={enList1} arList={arList1}/>
       <FlagHeading
            enText="Work-day (Wd) Example"
            arText="مثال يوم العمل (Wd) "
       />
       <UlList enList={enList2} arList={arList2}/>
       <FlagHeading
            enText="Definition of Productivity:"
            arText="تعريف الإنتاجية:"
       />
       <UlList enList={enList3} arList={arList3}/>
       <div className='red-border'>
        <Paragraph
        enText="EXAMPLE 1: If 1 unskilled labourer can complete the excavation of 2 m3 of soft soil in one day → So the Labour task rate for the excavation is: 2 m3 /Wd (Work-day)"
        arText="مثال 1: إذا كان بإمكان عامل واحد بدون مهارة إكمال حفر 2 م٣ من التربة الناعمة في يوم واحد ← لذا فإن معدل مهمة العمل للحفر هو: 2 م3 / يوم (يوم عمل)"
        />
        <span></span>
        <Paragraph
        enText="In the EXAMPLE 1, Labour task rate for the excavation is: 2 m3 /Wd → So labour productivity for the excavation is = 1/2 Wd / m3 (or 0.5 Wd/m3)"
        arText="في المثال 1، معدل مهمة العمل للحفر هو: 2 م٣ /Wd ← وبالتالي فإن إنتاجية العمالة للحفر هي = 1/2 Wd /m3 (أو 0.5 Wd/m3)"
        />
       </div>
          <CompletionButton chapterNumber="4" questionNumber={4}/>
        </div>
    )
}
Question4.getLayout = (page) => ChaptersPageLayout(page, { currentQuestionId: 4 });
export default Question4;