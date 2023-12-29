import { ChaptersPageLayout } from ".";
import Paragraph from "../../../../components/paragraph/paragaraph.component";
import HeadingOne from "../../../../components/heading-1/heading-1.component";
import CompletionButton from "../../../../components/completion-button/completion-button.component";
import DropDownText from "../../../../components/dropdown-text/dropdown-text.component";
const Question3 = () => {
  
    return (
        <div className="main-questions">
       <HeadingOne 
        enText="LRBT vs Cash-for-Work" 
        arText="LRBT تجاه الأجر مقابل العمل "/>
      
        <Paragraph 
        enText="At the centre of the EIIP is local resource based technology, which favours and optimises the use of local resources in delivering and maintaining infrastructure. Local labour and materials are used to the greatest possible extent, but without adversely affecting the costs or duration of the specified works. Appropriate (light) equipment is used for support activities for the sake of time or quality. Labour on site is effectively organised, supervised and motivated, including fair and transparent recruitment and payment procedures. LRBT method can, if well organised be a cost-effective, viable and sustainable delivery means for infrastructure. LRBT aims to optimize the employment content, meaning the labour content is usually lower than in the Cash-for-Work approach, but significantly higher than for conventional construction. The key differences between LRBT vs CfW are:"
        arText="في قلب EIIP توجد التكنولوجيا القائمة على الموارد المحلية، والتي تفضل وتحسن استخدام الموارد المحلية في تقديم وصيانة البنية التحتية. يتم استخدام العمالة والمواد المحلية إلى أقصى حد ممكن، ولكن دون التأثير سلبًا على تكاليف أو مدة الأعمال المحددة. يتم استخدام المعدات (الخفيفة) المناسبة لأنشطة الدعم من أجل الوقت أو الجودة. يتم تنظيم العمل في الموقع والإشراف عليه وتحفيزه بشكل فعال، بما في ذلك إجراءات التوظيف والدفع العادلة والشفافة. يمكن لأساليب LRBT إذا تم تنظيمها بشكل جيد أن تكون وسيلة توصيل فعالة من حيث التكلفة وقابلة للحياة ومستدامة للبنية التحتية. تهدف LRBT إلى تحسين محتوى التوظيف، مما يعني أن محتوى العمالة عادة ما يكون أقل مما هو عليه في نهج النقد مقابل العمل، ولكنه أعلى بكثير من البناء التقليدي. الاختلافات الرئيسية بين LRBT و CfW هي:"
        />
        <DropDownText 
            bgColor="rgb(171, 59, 119)"
            enTitle="Employment optimization"
            enText="Optimise employment rather than maximise to avoid non-productive labour"
            arTitle="تحسين العمالة"
            arText="تحسين العمالة بدلاً من زيادتها لتجنب العمالة غير المنتجة"
            />
             <DropDownText 
            bgColor="#c0000f"
            enTitle="Quality of work"
            enText="Focus on Quality of construction works and importance of assets, we want to have a more sustainable impact on public infrastructure - Quality of work (and duration), to avoid disturbing the neighbourhoods for example during road maintenance projects where there might be some reroutes during the works which might result in temporary congestion and traffic"
            arTitle="جودة العمل"
            arText="- التركيز على جودة أعمال البناء وأهمية الأصول، نريد أن يكون لدينا تأثير أكثر استدامة على البنية التحتية العامة 
            - جودة العمل (والمدة)، لتجنب إزعاج الأحياء على سبيل المثال أثناء مشاريع صيانة الطرق حيث قد يكون هناك بعض إعادة التوجيه خلال الأعمال التي قد تؤدي إلى ازدحام وحركة مرورية مؤقتة"
            />
                <DropDownText 
            bgColor="rgb(50, 100, 200)"
            enTitle="Productivity and task rates"
            enText="Productivity and task rates and output based pay become more important in EIIP"
            arTitle="الإنتاجية ومعدلات المهام"
            arText="تصبح الإنتاجية ومعدلات المهام والأجر المبني على الإنتاج أكثر أهمية في EIIP."
            />
              <DropDownText 
            bgColor="rgb(250, 180, 40)"
            textColor="rgb(35, 0, 80)"
            enTitle="Skills development"
            enText="Skills development and employability objectives "
            arTitle="تطوير المهارات"
            arText="تنمية المهارات وأهداف التوظيف"
            />
      
      <DropDownText 
            bgColor="rgb(112, 180, 80)"
           
            enTitle="Private sector engagement"
            enText="Private sector engagement through contracting the projects."
            arTitle="مشاركة القطاع الخاص"
            arText="إشراك القطاع الخاص من خلال التعاقد على المشاريع."
            />
        <CompletionButton chapterNumber="2" questionNumber={3}/>
        </div>
    )
}
Question3.getLayout = (page) => ChaptersPageLayout(page, { currentQuestionId: 3 });
export default Question3;