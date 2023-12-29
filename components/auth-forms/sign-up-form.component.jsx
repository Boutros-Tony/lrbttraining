import styles from './sign-in-form.module.scss';
import { useState } from 'react';
import LoadingDots from '../loading-dots/loading-dots.component';
import ProfileForm from './profile-form.component';
import { checkPasswordStrength,getPasswordCriteriaErrorMessage,checkPasswordCriteria,isNotEmpty,isValidEmail } from '../../helpers.utils';
const SignUpForm = ({language}) => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [passwordStrength, setPasswordStrength] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [showProfileForm, setShowProfileForm] = useState(false);
    const [userData, setUserData] = useState({});
    
 
    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        setPasswordStrength(checkPasswordStrength(newPassword));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setLoading(true);

        // Reset error states
        setError('');
        setPasswordError('');

        // Validate full name
        if (!isNotEmpty(name)) {
            setError(language === 'ar' ? 'الاسم مطلوب' : 'Full Name is required');
            setLoading(false);
            return;
        }

        // Validate email
        if (!isValidEmail(email)) {
            setError(language === 'ar' ? 'البريد الإلكتروني غير صالح' : 'Invalid Email Address');
            setLoading(false);
            return;
        }

        // Validate password
        const criteria = checkPasswordCriteria(password);
        if (!Object.values(criteria).every(Boolean)) {
            setPasswordError(getPasswordCriteriaErrorMessage(language, criteria));
            setLoading(false);
            return;
        }

        // Add logic to handle sign up
        // ...

        setUserData({ name, email, password });
        setShowProfileForm(true);
        setLoading(false);
    };
    const text = {
        emailLabel: language === 'ar' ? 'عنوان البريد الإلكتروني' : 'Email Address',
        nameLabel: language === 'ar' ? 'لاسم الكامل' : 'Full Name',
        passwordLabel: language === 'ar' ? 'كلمه السر' : 'Password',
        signInButton: language === 'ar' ? 'إنشاء' : 'Create',
        passwordStrengthWeak: language === 'ar' ? 'ضعيف' : 'Weak',
        passwordStrengthMedium: language === 'ar' ? 'متوسط' : 'Medium',
        passwordStrengthStrong: language === 'ar' ? 'قوي' : 'Strong',
    };
    return (
       
           <>
           {showProfileForm ? (
               <ProfileForm language={language} userData={userData} />
           ) : (
            <form className={styles.signInForm} onSubmit={handleSubmit}>
            <label>{text.nameLabel}</label>
            <input 
                id="name" 
                type="text" 
                placeholder={text.nameLabel}
                aria-label={text.nameLabel}
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="email">{text.emailLabel}</label>
            <input 
                id="email" 
                type="email" 
                placeholder={text.emailLabel}
                aria-label={text.emailLabel}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password">{text.passwordLabel}</label>
            <input 
                id="password" 
                type="password" 
                placeholder={text.passwordLabel}
                aria-label={text.passwordLabel}
                value={password}
                onChange={handlePasswordChange}
            />
         
            {passwordError && <p aria-live='polite' className="error-message">{passwordError}</p>}
            {error && <p className='error-message' aria-live='polite'>{error}</p>}
            <button type="submit" className='mainButton' disabled={loading}>
                {loading ? <LoadingDots/> : text.signInButton}
            </button>
        </form>
           )}
       </>
    )
}

export default SignUpForm;
