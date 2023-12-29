import { ChaptersPageLayout } from ".";
import LanguageDetector from "../../../../components/lang-detecter/lang-detecter.component";
import Head from "next/head";
import CompletionButton from "../../../../components/completion-button/completion-button.component";
import HeadingOne from "../../../../components/heading-1/heading-1.component";
import HeadingTwo from "../../../../components/heading-2/heading-2.component";
import Paragraph from "../../../../components/paragraph/paragaraph.component";
import UlList from "../../../../components/ul-list/ul-list.component";
import ProtectiveSlider from "../../../../components/protective-slider/protective-slider.component";
const Question14 = () => {
    const lang = LanguageDetector();
    const enList = [
        "plasters",
        "bandages",
        "disinfectant",
        "antiseptic cream",
        "clean fresh water for washing eyes",
        "saline",
        "sterile dressings",
        "adhesive tape",
        "disposable gloves",
        "irrigation syringe",
        "scissors",
        "tweezers",
    ]
    const arList = [
        "اللاصق الطبي",
        "الضمادات",
        "المطهر",
        "كريم مطهر",
        "ماء نقي لغسل العيون",
        "محلول ملحي",
        "ضمادات معقمة",
        "شريط لاصق",
        "قفازات طبية للإستعمال مرة واحدة",
        "حقنة للغسيل",
        "مقص",
        "ملقط",
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
         <div className="main-questions">
       <HeadingOne 
       enText="Personal Protective Equipment (PPE)" 
       arText="وسائل الحماية الشخصية (PPE)"/>
      <Paragraph
        enText="Personal protection and safety equipment for one Maintenance Group"
        arText="وسائل الحماية والأمان الشخصي لمجموعة صيانة واحدة"
        />
        <HeadingTwo
            enText="Select the right risk factor of each item"
            arText="حدد عامل الخطر المناسب لكل عنصر"
        />
        <ProtectiveSlider/>
        <Paragraph
            enText="In addition to all the above safety equipment, the First aid kit, plus replenishment is a must, containing:"
            arText="بالإضافة إلى جميع معدات الأمان المذكورة أعلاه، من الضروري توفير صندوق الإسعافات الأولية، بالإضافة إلى مستلزماته الإضافية، والذي يحتوي على:"
        />
        <UlList
            enList={enList}
            arList={arList}
        />
     <CompletionButton chapterNumber="6" questionNumber={14}/>
        </div>
        </>
       
    )
}
Question14.getLayout = (page) => ChaptersPageLayout(page, { currentQuestionId:14 });
export default Question14;