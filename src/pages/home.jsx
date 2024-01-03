import Navbar from "../../components/navbar/navbar.component";
import Link from "next/link";
import styles from '../styles/HomePage.module.scss';
import LanguageDetector from "../../components/lang-detecter/lang-detecter.component";
import Head from "next/head";
const HomePage = () => {
    const lang = LanguageDetector();
    return (
        <>
          <Head>
          <title>
    {lang === 'ar' ? "الصفحة الرئيسية - تدريب EIIP للمقاولين" : "Home Page - EIIP Training for Contractors"}
</title>

        <meta name="description" content="EIIP" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
            <Navbar/>
            <div className={styles.homeWrapper}>
                <div className={styles.homeInfoHolder}>
                    <h1>{lang === 'ar' ? "تدريب برنامج التوظيف المكثف والبنية التحتية في لبنان (EIIP) للمقاولين" : "EIIP TRAINING FOR CONTRACTORS"}</h1>
                    <h2>{lang === 'ar' ? "تدريب إلزامي للتأهيل المسبق للمقاولين الراغبين في تقديم مناقصات لمشاريع برنامج التوظيف المكثف والبنية التحتية (EIIP) لمنظمة العمل الدولية (ILO)" : "Mandatory pre-qualification training for contractors wishing to bid on ILO EIIP projects"}</h2>
                    <Link href="/chapters">
                    {lang === 'ar' ? "ابدأ تدريبك" : "Begin Your Training"}
                    </Link>
                </div>
                <img className={styles.mainImg} src="/assets/home-banner.png" alt="" srcset="" />
            </div>
        </>
    )
}

export default HomePage;