import { ChaptersPageLayout } from ".";
import LanguageDetector from "../../../../components/lang-detecter/lang-detecter.component";
import HeadingOne from "../../../../components/heading-1/heading-1.component";
import CompletionButton from "../../../../components/completion-button/completion-button.component";
const Question6 = () => {
    const lang = LanguageDetector();

    return (
        <div className="main-questions">
            <HeadingOne 
                enText="Contractor Obligations"
                arText="التزامات المقاول"
            />
            <table className="contractors-table">
                <tr>
                    <th>
                        {lang === 'ar' ? "النتيجة" : "Outcome"}
                    </th>
                    <th >
                    {lang === 'ar' ? "وفقا مع" : "In accordance with"}
                    </th>
                    <th>
                    {lang === 'ar' ? "يقاس من خلال" : "Measured by"}
                    </th>
                </tr>
                <tr>
                    <td>
                    {lang === 'ar' ? "توفير فرص عمل لائقة للاجئين السوريين والمواطنين اللبنانيين المستضعفين والنساء والأشخاص ذوي الإعاقة" : "Provide decent work opportunities to Syrian refugees, vulnerable Lebanese citizens, for Women and PWD"}
                    </td>
                    <td>
                    {lang === 'ar' ? "أهداف المشروع والضمانات الاجتماعية والبيئية.استراتيجية المساواة بين الجنسين في EIIP" : "Project Targets Social and Environmental Safeguard Framework. EIIP gender Strategy"}
                    </td>
                    <td>
                    {lang === 'ar' ? "مسؤولو الضمانات الاجتماعية، موظف الرصد والتقييم، مستشار العمل اللائق والمساواة بين الجنسين" : "Social Safeguard Officers M&E Officer Decent Work & Gender Advisor"}
                    </td>
                </tr>
                <tr>
                    <td>
                    {lang === 'ar' ? "إنشاء بنية تحتية عالية الجودة في الوقت المحدد وفي حدود الميزانية" : "Construct a quality infrastructure on time and to budget"}
                    </td>
                    <td>
                    {lang === 'ar' ? "العقد" : "Contract"}
                    </td>
                    <td>
                    {lang === 'ar' ? "مسؤولو الضمانات الاجتماعية،المهندسين" : "Social Safeguard Officers Engineers"}
                    </td>
                </tr>
                <tr>
                    <td>
                    {lang === 'ar' ? "الحفاظ على تدابير السلامة والصحة المهنية الكافية" : "Maintain adequate OSH and Covid-19 measures"}
                    </td>
                    <td>
                    {lang === 'ar' ? "عقد، معايير منظمة العمل الدولية للسلامة والصحة المهنية" : "Contract, ILO OSH standards ILO Covid-19 measures"}
                    </td>
                    <td>
                    {lang === 'ar' ? "مسؤولو الضمانات الاجتماعية،المهندسين مستشار العمل اللائق والمساواة بين الجنسين" : "Social Safeguard Officers Engineers Decent Work & Gender Advisor"}
                    </td>
                </tr>
                <tr>
                    <td>
                    {lang === 'ar' ? "تقديم التدريب أثناء العمل" : "Provide On the Job Training"}
                    </td>
                    <td>
                    {lang === 'ar' ? "متطلبات منظمة العمل الدولية" : "ILO requirements"}
                    </td>
                    <td>
                    {lang === 'ar' ? "مسؤولو الضمانات الاجتماعية" : "Social Safeguard Officers"}
                    </td>
                </tr>
            </table>
            <CompletionButton chapterNumber="1" questionNumber={6}/>
        </div>
    )
}

Question6.getLayout = (page) => ChaptersPageLayout(page, { currentQuestionId: 6 });
export default Question6;