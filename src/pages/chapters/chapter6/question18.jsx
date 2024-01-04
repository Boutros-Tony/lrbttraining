import { ChaptersPageLayout } from ".";
import LanguageDetector from "../../../../components/lang-detecter/lang-detecter.component";
import Head from "next/head";
import CompletionButton from "../../../../components/completion-button/completion-button.component";
import HeadingOne from "../../../../components/heading-1/heading-1.component";
import FlagList from "../../../../components/flag-list/flag-list.component";
import CircleDot from "../../../../components/circle-dot/circle-dot.component";
const Question18 = () => {
    const lang = LanguageDetector();
    const enList = [
        "Accident insurance (including 3rd party liability insurance)",
        "Contractors’ staff are well trained on OSH standards",
        "Proper briefing about safe working practices",
        "Provision of adequate safety gear during work",
        "Provision of adequate hand-tools",
        <div className="circles-helper">Provision of first Aid kits on site 
        <CircleDot 
        color="#c0000f" 
        enText="First Aid Kit: At least 2 people onsite should know how to use it, and workers should know where it is located – for large sites more than one kit should be present within easy access to workers at all times"/> 
        </div>,
    
        "Sufficient level of hygiene on-site camp",
     
        <div className="circles-helper">
            Provision of toilets/ mobile toilets
            <CircleDot 
        color="#c0000f" 
        enText="Toilets/Mobile Toilets:Separate toilets to males and females should be provided at all times to all workers, they should be clean and equipped at all times. They should have doors that lock and within an accessible distance to workers at all times"/> 
        </div>,
        "Provision of adequate drinking water",
        "Allowance for adequate rest periods",
        <div className="circles-helper">
       Allowance for adequate rest periods
        <CircleDot 
    color="#c0000f" 
    enText="Rest Periods:Rest periods should be provided to all workers, it should be in a shaded area where they can rest, eat and drink. No worker under any circumstance should be denied a break for resting"/> 
    </div>,
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