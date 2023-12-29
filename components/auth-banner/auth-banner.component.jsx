import styles from './auth-banner.module.scss';
import ChangeLang from '../change-lang/change-lang.component';
const AuthBanner = ({language}) => {
    const text = {
       title: language === 'ar' ? 'تدريب المقاولين في إطار برنامج التوظيف والبنية التحتية' : 'EIIP Training for Contractors',
        subtitle : language === 'ar' ? "تدريب قبل المناقصة" : "Prebid Training",
        paragraph : language === 'ar' ? "تدريب إلزامي للتأهيل المسبق للمقاولين الراغبين في المنافسة على مشاريع برنامج التوظيف والبنية التحتية" : "Mandatory pre-qualification training for contractors wishing to bid on ILO EIIP projects"
      }; 
    return (
        <div className={styles.authBannerWrapper}>
          <div className={styles.langHold}>
          <ChangeLang/>
          </div>
         
        <img className={styles.backgroundImg} src="/assets/auth-banner.jpg" alt="EIIP Training Banner"/>
        <div className={styles.infoHolder}>
       
          {
            language === 'ar' ?  <picture aria-label='شعار منظمة العمل الدولية'>
            <img aria-hidden={true} src="/assets/white-logo-arabic.png" alt=""/>
          </picture> :
            <img src="/assets/white-logo.svg" alt="ILO Logo"/>
          }

          <h1>{text.title}</h1>
          <h2>{text.subtitle}</h2>
          <p>{text.paragraph}</p>
      
        
        </div>
      </div>
    )
}
export default AuthBanner;