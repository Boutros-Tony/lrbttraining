import { ChaptersPageLayout } from ".";
import LanguageDetector from "../../../../components/lang-detecter/lang-detecter.component";
import HeadingOne from "../../../../components/heading-1/heading-1.component";
import FlagList from "../../../../components/flag-list/flag-list.component";
import ColoredRectangle from "../../../../components/colored-rectangle/colored-rectangle.component";
import HeadingTwo from "../../../../components/heading-2/heading-2.component";
import CompletionButton from "../../../../components/completion-button/completion-button.component";
import Paragraph from "../../../../components/paragraph/paragaraph.component";
import RectangleShowText from "../../../../components/rectangle-show-text/rectangle-show-text.component";
const Question3 = () => {
    const lang = LanguageDetector();
    const enList  = 
    [
    "LRB site operations must be split into single and simple activities.",
    "Each activity is assigned to a separate worker group with its own group Leader.",
    "Worker groups must be balanced in terms of numbers of labourers to ensure that each activity is carried out without interfering with other activities.",
    "Supervisor and group leader must set out and instruct daily tasks (dimension of works, quantity of work to be done, etc.) and at the end of the day approve completed tasks including quality of works"
     ]
     const arList  = 
     [
     "يجب تقسيم عمليات موقع عمل LRB إلى أنشطة بسيطة ومنفصلة.",
     "يتم تخصيص كل نشاط لمجموعة عمال منفصلة مع قائد مجموعة خاص به.",
     "يجب أن تكون مجموعات العمال متوازنة من حيث أعداد العمال لضمان تنفيذ كل نشاط دون التداخل مع الأنشطة الأخرى.",
     "يجب على المشرف وقائد المجموعة تحديد المهام اليومية (مقاسات الأعمال، كمية العمل المطلوبة، إلخ) وفي نهاية اليوم الموافقة على المهام المكتملة بما في ذلك جودة الأعمال."
      ]
    return (
        <div className="main-questions">
       <HeadingOne 
       enText="Logical sequencing of LRB activities" 
       arText="تسلسل منطقي لأنشطة LRB"/>
      
        <FlagList arList={arList} enList={enList}/>
       <HeadingTwo
        enText="The following planning parameters to be considered:"
        arText="يجب النظر في العوامل التالية عند التخطيط:"
       />
            <ColoredRectangle
                textColor='white'
                bgColor="#AB3B77"
                enText="Logical sequence of construction / maintenance activities"
                arText="تسلسل منطقي لأنشطة البناء / الصيانة"
                />
                <ColoredRectangle
                textColor='white'
                bgColor="#AB3B77"
                enText="Volume of work for each activity"
                arText="حجم العمل لكل نشاط"
                />
            <ColoredRectangle
                textColor='white'
                bgColor="#AB3B77"
                enText="Applicable production rates (task rates for labourers, production norms for equipment)"
                arText="معدلات الإنتاج المطبقة (معدلات المهام للعمال، معايير الإنتاج للمعدات)"
                />
                    <ColoredRectangle
                textColor='white'
                bgColor="#AB3B77"
                enText="Time available for the operation"
                arText="الوقت المتاح للعملية"
                />
                  <ColoredRectangle
                textColor='white'
                bgColor="#AB3B77"
                enText="Required and available resources (labour, tools, material and equipment)"
                arText="الموارد المطلوبة والمتاحة (العمال، الأدوات، المواد والمعدات)"
                />
          <CompletionButton chapterNumber="3" questionNumber={3}/>
        </div>
    )
}
Question3.getLayout = (page) => ChaptersPageLayout(page, { currentQuestionId: 3 });
export default Question3;