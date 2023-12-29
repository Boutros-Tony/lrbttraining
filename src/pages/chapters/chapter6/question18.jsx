import { ChaptersPageLayout } from ".";
import LanguageDetector from "../../../../components/lang-detecter/lang-detecter.component";
import Head from "next/head";
import CompletionButton from "../../../../components/completion-button/completion-button.component";
import HeadingOne from "../../../../components/heading-1/heading-1.component";
import FlagList from "../../../../components/flag-list/flag-list.component";
const Question18 = () => {
    const lang = LanguageDetector();
    const enList = [
        "Accident insurance (including 3rd party liability insurance)",
        "Contractors’ staff are well trained on OSH standards",
        "Proper briefing about safe working practices",
        "Provision of adequate safety gear during work",
        "Provision of adequate hand-tools",
        "Provision of first Aid kits on site",
        "Sufficient level of hygiene on-site camp",
        "Provision of toilets/ mobile toilets",
        "Provision of adequate drinking water",
        "Allowance for adequate rest periods",
        "Prohibition of alcohol and drugs on the worksite",
       

    ]
    const arList = [
        "تأمين ضد الحوادث (بما في ذلك تأمين المسؤولية تجاه الغير)",
        "تم تدريب موظفي المقاولين جيدًا على معايير السلامة والصحة المهنية",
        "تدريب موجز حول ممارسات العمل الآمنة",
        "توفير معدات السلامة المناسبة أثناء العمل",
        "توفير أدوات يدوية مناسبة",
        "توفير عدة الإسعافات الأولية في الموقع",
        "مستوى كافٍ من النظافة في الموقع",
        "توفير المراحيض/ المراحيض المتنقلة",
        "توفير مياه شرب مناسبة",
        "السماح بفترات راحة كافية",
        "منع الكحول والمخدرات في موقع العمل.",
       

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
       enText="Implementation of Occupational Safety & Health" 
       arText="تنفيذ السلامة والصحة المهنية"/>
     <FlagList
        enList={enList}
        arList={arList}
     />
 
     <CompletionButton chapterNumber="6" questionNumber={18}/>
        </div>
        </>
       
    )
}
Question18.getLayout = (page) => ChaptersPageLayout(page, { currentQuestionId:18 });
export default Question18;