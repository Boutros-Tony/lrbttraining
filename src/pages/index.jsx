import Head from 'next/head'
import styles from '@/styles/Home.module.scss'
import SignInForm from '../../components/auth-forms/sign-in-form.component'
import Link from 'next/link'
import AuthBanner from '../../components/auth-banner/auth-banner.component'
import LanguageDetector from '../../components/lang-detecter/lang-detecter.component'
const Home = () => {
  const language = LanguageDetector();
  const text = {
    pageTitle: language === 'ar' ? 'تسجيل الدخول' : 'Sign In',
    createAccount: language === 'ar' ? 'مستخدم جديد ؟ إنشاء حساب': 'New User? Create an account',
    forgotPassword: language === 'ar' ? 'هل نسيت كلمة المرور؟' : 'Forgot Password?',
  };     
  return (
    <>
      <Head>
        <title>
          {
            language === 'ar' ? "صفحة تسجيل الدخول - تدريب EIIP للمقاولين" : 'Sign In Page - EIIP Training for Contractors'
          }
        </title>
        <meta name="description" content="EIIP" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.homeWrapper}>
        <AuthBanner language={language} />
        <div className={styles.homeRightColumn}>
          <h1>{text.pageTitle}</h1>
          <Link tabIndex="0"  href="/sign-up" aria-label={text.createAccount}>
            {text.createAccount}
          </Link>
          <SignInForm language={language}/>
          <Link href="/forgot-password" aria-label={text.forgotPassword}>
           {text.forgotPassword}
          </Link>
        </div>
      </div>
    </>
  )
}

export default Home;
