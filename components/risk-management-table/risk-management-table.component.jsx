import styles from './risk-management-table.module.scss';
import LanguageDetector from '../lang-detecter/lang-detecter.component';
const RiskManagementTable = () => {
    const lang = LanguageDetector();
    return (
        <table className="contractors-table">
        <tr>
            <th>
                {lang === 'ar' ? " المخاطر المحددة" : "Identified Risk"}
            </th>
            <th >
            {lang === 'ar' ? <>احتمالية <br />(ع/م/ق)</> : <>Likelihood <br /> (H/M/L)</>}
            </th>
            <th>
            {lang === 'ar' ? <>شدة <br />  (ع/م/ق)</> : <>Severity<br /> (H/M/L)</>}
            </th>
            <th>
            {lang === 'ar' ? <>مستوى المخاطرة<br />  (أ/ص/خ)</> : <>Risk level<br /> (R/Y/G)</>}
            </th>
            <th>
            {lang === 'ar' ? <>مستوى المخاطرة <br />  (أ/ص/خ)</> :  <>Risk level<br /> (R/Y/G)</>}
            </th>
        </tr>
        <tr>
            <td>
            {lang === 'ar' ? "اكتب وصف المخاطرة هنا" : "Describe the risk here"}
            </td>
            <td>
            {lang === 'ar' ? "م" : "M"}
            </td>
            <td>
            {lang === 'ar' ?  "م" : "M"}
            </td>
            <td style={{backgroundColor:"rgb(255, 205, 45)"}}>
            {lang === 'ar' ?  "مشفر بالألوان." : "Colour coded"}
            </td>
            <td>
            {lang === 'ar' ?  "وصف التدابير الوقائية، وتدابير التخفيف، والاستجابة في حالة حدوث الحادث." : "Describe preventive measures, mitigation measures and response in the event the accident occur"}
            </td>
        </tr>
        <tr>
            <td>
            {lang === 'ar' ? "الخ." : "etc."}
            </td>
            <td>
            {lang === 'ar' ? "م" : "M"}
            </td>
            <td>
            {lang === 'ar' ? "ع" : "H"}
            </td>
            <td style={{backgroundColor:"red"}}>
          
            </td>
            <td>
           
            </td>
        </tr>
     
       
    </table>
    )
}

export default RiskManagementTable