import { ChaptersPageLayout } from ".";
import Paragraph from "../../../../components/paragraph/paragaraph.component";
import HeadingOne from "../../../../components/heading-1/heading-1.component";
import FlagList from "../../../../components/flag-list/flag-list.component";
import HeadingTwo from "../../../../components/heading-2/heading-2.component";
import CompletionButton from "../../../../components/completion-button/completion-button.component";
import ClickCircles from "../../../../components/click-circles/click-circles.component";
const Question3 = () => {
    const arListt = [
    "بنية تحتية عالية الجودة تحظى بالأولوية من قبل البلديات ",
    "توليد فرص العمل",
    "استهداف الفئات الأكثر ضعفاً في المجتمعات",
    "دمج النساء والأشخاص ذوي الإعاقة",
    "خلق فرص عمل لأعضاء المجتمع اللبناني واللاجئين السوريين (النسبة المثالية للسوريين ",
    "غير المهرة / العمال اللبنانيين 50:50)"
    ]
    const arList = [
        "ضمان ظروف عمل لائقة",
        "تعزيز الشمولية وتكافؤ الفرص",
        "العمل وفقاً لتكنولوجيا الموارد المحلية",
        "العمل تحت مظلة إطار الضمانات البيئية والاجتماعية"

    ]
    const enList = [
        "Ensuring Decent Working Conditions",
        "Promoting inclusion and equal opportunities",
        "Operating under the Local Resource Based Technology",
        "Working under the umbrella of the Environmental & Social Safeguard Framework"
    ]
    return (
        <div className="main-questions">
       <HeadingOne enText="The Employment Intensive Infrastructure Programme (EIIP)" arText="برنامج التوظيف المكثّف والبنى التحتية (EIIP)"/>
       <HeadingTwo
       enText="What is the EIIP"
       arText="ما هو برنامج التوظيف المكثّف والبنى التحتية (EIIP)"
       />
        <Paragraph 
        enText="The EIIP is a global programme under the ILO, implemented in more than 70 low to middle income countries. Linking together the following:"
        arText="ما هو برنامج التوظيف المكثّف والبنى التحتية (EIIP)
        الـ EIIP هو برنامج عالمي ينفذ عالمياً من قبل منظمة العمل الدولية، تم تنفيذه في أكثر من 70 دولة ذات دخل منخفض إلى متوسط. ويقوم بربط ما يلي:"
        />
        <ClickCircles/>
        <FlagList arList={arList} enList={enList}/>
        <CompletionButton chapterNumber="1" questionNumber={3}/>
        </div>
    )
}
Question3.getLayout = (page) => ChaptersPageLayout(page, { currentQuestionId: 3 });
export default Question3;