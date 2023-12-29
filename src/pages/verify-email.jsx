import Head from 'next/head'
import { useState,useEffect } from 'react';
import styles from '@/styles/Home.module.scss';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { selectCurrentUser } from '../../store/user/user.selectors';
import { sendVerificationEmail } from '../../firebase.utils';
import LoadingDots from '../../components/loading-dots/loading-dots.component';
import AuthBanner from '../../components/auth-banner/auth-banner.component';
import LanguageDetector from '../../components/lang-detecter/lang-detecter.component';
const VerifyEmail = () => {
    const language = LanguageDetector();
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const currentUser = useSelector(selectCurrentUser); // Use selector to get the current user
    const router = useRouter(); // useRouter from Next.js for redirection

    useEffect(() => {
        if (!currentUser) {
            router.push('/'); // Redirect to sign-in page if no user is signed in
        }
    }, [currentUser, router]);
    useEffect(() => {
        const disabledTime = localStorage.getItem('resendDisabledTime');
        if (disabledTime && new Date().getTime() < disabledTime) {
            setIsButtonDisabled(true);
            setTimeout(() => {
                setIsButtonDisabled(false);
                localStorage.removeItem('resendDisabledTime');
            }, disabledTime - new Date().getTime());
        }
    }, []);

    const handleSendVerification = async () => {
      setIsLoading(true);
      setSuccessMessage('');
      setErrorMessage('');
      
      const result = await sendVerificationEmail();
      if (result === true) {
          setSuccessMessage(language === 'ar' ? 'تم إرسال رسالة التحقق إلى بريدك الإلكتروني. يرجى التحقق منها.' : 'A verification email has been sent to your inbox. Please check it.');
          setIsButtonDisabled(true);
          localStorage.setItem('resendDisabledTime', new Date().getTime() + 4 * 60 * 1000);
      } else if (typeof result === 'string') {
          setErrorMessage(result);
      }

      setIsLoading(false);
  };


    const text = {
        pageTitle: language === 'ar' ? 'إنشاء حساب' : 'Verify Your Email',
        pageText: language === 'ar' ? 
                  "لقد أوشكت على الانتهاء! يرجى تأكيد بريدك الإلكتروني لتفعيل حسابك والوصول إلى جميع الميزات." : 
                  "You're almost there! Please verify your email address to activate your account and access all features.",
        buttonText: language === 'ar' ? "إرسال التحقق" : "Send Verification"
    };
       
  return (
    <>
      <Head>
      <title>
    {language === 'ar' ? "تأكيد البريد الإلكتروني - تدريب EIIP للمقاولين" : "Email Verification - EIIP Training for Contractors"}
</title>

        <meta name="description" content="EIIP" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.homeWrapper}>
                <AuthBanner language={language} />
                <div className={styles.homeRightColumn}>
                    <h1 tabIndex="0">{text.pageTitle}</h1>
                    <p tabIndex="0">{text.pageText}</p>
                    <button 
                        className='mainButton' 
                        onClick={handleSendVerification} 
                        disabled={isButtonDisabled || isLoading}
                        aria-disabled={isButtonDisabled || isLoading}
                    >
                        {isLoading ? <LoadingDots/> : text.buttonText}
                    </button>
                    {successMessage && 
                        <p 
                            className='success-message' 
                            aria-live="polite" // Announces the message when it changes
                        >
                            {successMessage}
                        </p>}
                    {errorMessage && 
                        <p 
                            className='error-message' 
                            aria-live="assertive" // Announces important message immediately
                        >
                            {errorMessage}
                        </p>}
                </div> 
            </div>
    </>
  )
}

export default VerifyEmail;
