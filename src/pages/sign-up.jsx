import Head from 'next/head'
import styles from '@/styles/Home.module.scss'
import ProfileForm from '../../components/auth-forms/profile-form.component';
import SignUpForm from '../../components/auth-forms/sign-up-form.component';
import Link from 'next/link';
import AuthBanner from '../../components/auth-banner/auth-banner.component';
import LanguageDetector from '../../components/lang-detecter/lang-detecter.component';
const SignUp = () => {
  const language = LanguageDetector();
  const text = {
    pageTitle: language === 'ar' ? 'إنشاء حساب' : 'Create An Account',
    createAccount: language === 'ar' ? "هل لديك حساب بالفعل؟ تسجيل الدخول": 'Already have an account? Log in',
   };     
  return (
    <>
      <Head>
      <title>
          {
            language === 'ar' ? "صفحة إنشاء حساب - تدريب EIIP للمقاولين" : 'Sign Up Page - EIIP Training for Contractors'
          }
        </title>
        <meta name="description" content="EIIP" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.homeWrapper}>
        <AuthBanner language={language} />
        <div className={styles.homeRightColumn}>
          <h1 tabIndex='0'>{text.pageTitle}</h1>
          <Link href="/" aria-label={text.createAccount}>
            {text.createAccount}
          </Link>
          <SignUpForm language={language}/>
        
        </div> 
      </div>
    </>
  )
}

export default SignUp;
