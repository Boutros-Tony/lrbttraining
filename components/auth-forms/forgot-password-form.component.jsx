import { resetPassword } from "../../firebase.utils";
import { useState } from "react";
import styles from './sign-in-form.module.scss';
import LoadingDots from "../loading-dots/loading-dots.component";
import { isValidEmail } from "../../helpers.utils";
const ForgotPasswordForm = ({language}) => {
    const [email, setEmail] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleResetPassword = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        setSuccessMessage('');
        setErrorMessage('');
        if (!isValidEmail(email)) {
            setErrorMessage(language === 'ar' ? 'البريد الإلكتروني غير صالح' : 'Invalid Email Address');
            setIsLoading(false);
            return;
        }

        const result = await resetPassword(email);
        if (result === true || result === undefined) {
            // Assuming the function returns true or undefined on success
            setSuccessMessage(language === 'ar' ? 'تم إرسال رابط إعادة تعيين كلمة المرور إلى بريدك الإلكتروني.' : 'A password reset link has been sent to your email.');
            setIsButtonDisabled(true);
            localStorage.setItem('resendDisabledTime', new Date().getTime() + 4 * 60 * 1000);
        } else {
            // Assuming the function returns an error message string on failure
            setErrorMessage(result);
        }
    
        setIsLoading(false);
    };
    

    const text = {
        pageTitle: language === 'ar' ? 'نسيت كلمة المرور' : 'Forgot Password',
        pageText: language === 'ar' ? 
                  "ادخل بريدك الإلكتروني لإعادة تعيين كلمة المرور." : 
                  "Enter your email to reset your password.",
        buttonText: language === 'ar' ? "إرسال رابط إعادة التعيين" : "Send Reset Link"
    };
    return (
        <form className={styles.signInForm} onSubmit={handleResetPassword}>
        <label  htmlFor="email">{text.pageText}</label>
        <input 
            id="email" 
            type="email" 
            placeholder={text.pageText}
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            aria-required="true" // Indicates that the field is required
        />
        {successMessage && 
            <p 
                aria-live="polite" // Announces the message when it changes
                tabIndex="0" // Makes it focusable for keyboard navigation
            >
                {successMessage}
            </p>}
        {errorMessage && 
            <p 
                aria-live="assertive" // Announces important message immediately
                tabIndex="0" // Makes it focusable for keyboard navigation
                className='error-message'
            >
                {errorMessage}
            </p>}
        <button 
            className='mainButton' 
            disabled={isButtonDisabled || isLoading}
            aria-disabled={isButtonDisabled || isLoading} // Reflects disabled state for screen readers
        >
            {isLoading ? <LoadingDots/> : text.buttonText}
        </button>
    </form>
    )
}

export default ForgotPasswordForm;