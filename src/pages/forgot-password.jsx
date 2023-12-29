import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '@/styles/Home.module.scss';
import { resetPassword } from '../../firebase.utils'; // Ensure this function is correctly implemented
import LoadingDots from '../../components/loading-dots/loading-dots.component';
import AuthBanner from '../../components/auth-banner/auth-banner.component';
import LanguageDetector from '../../components/lang-detecter/lang-detecter.component';
import ForgotPasswordForm from '../../components/auth-forms/forgot-password-form.component';
const ForgotPassword = () => {
    const language = LanguageDetector();
    
    const text = {
        pageTitle: language === 'ar' ? 'نسيت كلمة المرور' : 'Forgot Password',
        pageText: language === 'ar' ? 
                  "ادخل بريدك الإلكتروني لإعادة تعيين كلمة المرور." : 
                  "Enter your email to reset your password.",
        buttonText: language === 'ar' ? "إرسال رابط إعادة التعيين" : "Send Reset Link",
        backLink : language === 'ar' ? "عودة" : "Go Back"
    };

    return (
        <>
            <Head>
                <title>{language === 'ar' ? "نسيت كلمة المرور - تدريب EIIP للمقاولين" : "Forgot Password - EIIP Training for Contractors"}</title>
                {/* Other meta tags */}
            </Head>
            <div className={styles.homeWrapper}>
                <AuthBanner language={language} />
                <div className={styles.homeRightColumn}>
                <Link href="/" aria-label={text.back}>
            {text.backLink}
          </Link>
                    <h1 tabIndex="0">{text.pageTitle}</h1>
                    <h2 tabIndex="0">{text.pageText}</h2>
                    
                   <ForgotPasswordForm language={language}/>
                </div> 
            </div>
        </>
    );
};

export default ForgotPassword;
