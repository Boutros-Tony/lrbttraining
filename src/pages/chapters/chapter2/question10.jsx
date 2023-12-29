import { ChaptersPageLayout } from ".";
import LanguageDetector from "../../../../components/lang-detecter/lang-detecter.component";
import HeadingOne from "../../../../components/heading-1/heading-1.component";
import CompletionButton from "../../../../components/completion-button/completion-button.component";
const Question10 = () => {
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
                        {lang === 'ar' ? "نوع البنية التحتية" : "Type of infrastructure"}
                    </th>
                    <th >
                    {lang === 'ar' ? "الأنشطة المناسبة لطرق LRBT" : "Activities suitable for LRBT"}
                    </th>
                    <th>
                    {lang === 'ar' ? "دعم المعدات الخفيفة" : "Supporting light equipment"}
                    </th>
                </tr>
                <tr>
                    <td>
                        <ul>
                            <li>{lang === 'ar' ? "طرق زراعية" : "Agricultural roads"}</li>
                            <li>{lang === 'ar' ? "قنوات الري" : "Irrigation canals"}</li>
                            <li>{lang === 'ar' ? "صيانة الطرق" : "Road maintenance"}</li>
                        </ul>
                   </td>
                    <td>
                    <ul>
                            <li>{lang === 'ar' ? "إزالة الأشجار والعشب" : "Bush and grass clearing"}</li>
                            <li>{lang === 'ar' ? "أعمال الحفر (تصريف جانبي أو قناة)" : "Excavation work(side drain or canal)"}</li>
                            <li>{lang === 'ar' ? "ملء تجاويف الطرق وتسوية الشقلة" : "Filling embankment and levelling"}</li>
                            <li>{lang === 'ar' ? "فلش طبقة ما تحت الاساس للطريق و طبقة الاساس الحصوية" : "Spreading road sub-base and base course"}</li>
                            <li>{lang === 'ar' ? "أعمال الخرسانة لبنية التصريف" : "Concrete work for drainage structure"}</li>
                           
                        </ul>
                    </td>
                    <td>
                        <ul>
                            <li>{lang === 'ar' ? "شاحنة" : "Truck"}</li>
                            <li>{lang === 'ar' ? "مدحلة" : "Roller"}</li>
                            <li>{lang === 'ar' ? "شاحنة مياه" : "Water truck"}</li>
                        </ul>
                   </td>
                </tr>
                <tr>
                    <td rowSpan={2} >
                    {lang === 'ar' ? "أعمال هيكلية" : "Structural works"}
                    </td>
                    <td>
                    <ul>
                            <li>{lang === 'ar' ? "حفر للأساس" : "Excavation for foundation"}</li>
                            <li>{lang === 'ar' ? "مزج ووضع الخرسانة" : "Mixing and placing concrete work"}</li>
                            <li>{lang === 'ar' ? "أعمال البناء بالحجارة الأسمنتية (جدران الدعم، المصارف المبطنة للطرق الزراعية)" : "Cement stone masonry work (retaining walls, lined drains for agricultural roads)"}</li>
                        </ul>
                    
                    </td>
                   
                    <td>
                    <ul>
                            <li>{lang === 'ar' ? "خلاطة الخرسانة" : "Concrete mixer"}</li>
                            <li>{lang === 'ar' ? "هزاز الخرسانة" : "Vibrator"}</li>
                           
                        </ul>
                    </td>
                </tr>
                <tr>
                 
                    <td>
                    <ul>
                            <li>{lang === 'ar' ? "أعمال البناء بالحجارة الجافة" : "Dry stone masonry work"}</li>
                            <li>{lang === 'ar' ? "اعمال جدران أقفاص حجارة استنادية لحماية المنحدرات ومنع تاكل التربة" : "Gabion work (slope and erosion protection)"}</li>
                            <li>{lang === 'ar' ?"ثني وتثبيت ووضع القضبان الحديدية" : "Bending, fixing and placing steel bars"}</li>
                            <li>{lang === 'ar' ? "قص، وضع وتثبيت القوالب" : "Cutting, placing and fixing formwork"}</li>
                            <li>{lang === 'ar' ? "ردم و دمك(رصَ) خلف الهيكل" : "Back filling and compaction of the structure"}</li>
                        </ul>
                    
                    </td>
                   
                    <td>
                    <ul>
                            <li>{lang === 'ar' ? "مدق يدوي" : "Hand Temper"}</li>
                            
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td rowSpan={2} >
                    {lang === 'ar' ? "صيانة البنية التحتية العامة" : "Public infrastructure maintenance"}
                    </td>
                    <td>
                    <ul>
                            <li>{lang === 'ar' ? "الصيانة الروتينية للطرق (الأشجار والعشب، وإصلاح الكتف والمنحدرات، وترقيع الحفر، وإصلاح السطح ...)" : "Road routine maintenance ( bush and grass, shoulder and slope repair, patching pothole, repair surface…)"}</li>
                          
                        </ul>
                    
                    </td>
                   
                    <td>
                    <ul>
                            <li>{lang === 'ar' ? "شاحنة" : "Truck"}</li>
                            <li>{lang === 'ar' ? "مدحلة الأسفلت الصغيرة" : "Pedestrian roller"}</li>
                           
                        </ul>
                    </td>
                </tr>
                <tr>
                 
                    <td>
                    <ul>
                            <li>{lang === 'ar' ? "إصلاح قاع النهر" : "River bed repair"}</li>
                            <li>{lang === 'ar' ? "صيانة قنوات الري" : "Irrigation canal maintenance"}</li>
                            <li>{lang === 'ar' ? "إصلاح المباني وما إلى ذلك" : "Building repair  etc"}</li>
                    </ul>
                    
                    </td>
                   
                    <td>
                    <ul>
                            <li>{lang === 'ar' ? "شاحنة" : "Truck"}</li>
                            <li>{lang === 'ar' ? "خلاطة الخرسانة" : "Concrete Mixer"}</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>
                        <ul>
                            <li>{lang === 'ar' ? "أعمال الهندسة البيولوجية" : "Bio-engineering works"}</li>
                           
                        </ul>
                   </td>
                    <td>
                    <ul>
                            <li>{lang === 'ar' ? "تقليم المنحدر" : "Slope trimming"}</li>
                            <li>{lang === 'ar' ? "زراعة العشب والأشجار والشجيرات" : "Grass, tree and shrub planting"}</li>
                            <li>{lang === 'ar' ? "الزراعة على المنحدرات" : "Plantation on slopes"}</li>
                            <li>{lang === 'ar' ? "إنشاء مجاري تحت التربة" : "Sub soil drain construction"}</li>
                            <li>{lang === 'ar' ?"السدود الحية" : "Live check-dam"}</li>
                            <li>{lang === 'ar' ?"فرش الحجارة" : "Stone soling"}</li>
                        </ul>
                    </td>
                    <td>
                        <ul>
                            <li>{lang === 'ar' ? "شاحنة" : "Truck"}</li>
                          
                        </ul>
                   </td>
                </tr>
            </table>
            <CompletionButton chapterNumber="2" questionNumber={10}/>
        </div>
    )
}

Question10.getLayout = (page) => ChaptersPageLayout(page, { currentQuestionId: 10 });
export default Question10;