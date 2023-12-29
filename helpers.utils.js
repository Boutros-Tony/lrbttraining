export const getPasswordCriteriaErrorMessage = (language, criteria) => {
    let errorMessageParts = [];

    if (!criteria.length) {
        errorMessageParts.push(language === 'ar' ? '٨ أحرف على الأقل' : 'at least 8 characters');
    }
    if (!criteria.uppercase) {
        errorMessageParts.push(language === 'ar' ? 'حرف كبير' : 'an uppercase letter');
    }
    if (!criteria.lowercase) {
        errorMessageParts.push(language === 'ar' ? 'حرف صغير' : 'a lowercase letter');
    }
    if (!criteria.number) {
        errorMessageParts.push(language === 'ar' ? 'رقم' : 'a number');
    }
    if (!criteria.specialChar) {
        errorMessageParts.push(language === 'ar' ? 'رمز خاص' : 'a special character');
    }

    let baseMessage = language === 'ar' ? 'يجب أن تحتوي كلمة المرور على: ' : 'Your password should contain: ';
    return baseMessage + errorMessageParts.join(', ') + '.';
};

export const checkPasswordCriteria = (password) => {
    return {
        length: password.length >= 8,
        uppercase: /[A-Z]/.test(password),
        lowercase: /[a-z]/.test(password),
        number: /[0-9]/.test(password),
        specialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password)
    };
};

export const checkPasswordStrength = (password) => {
    const criteria = checkPasswordCriteria(password);
    let score = 0;
    Object.values(criteria).forEach(criterion => {
        if (criterion) score++;
    });

    switch (score) {
        case 0:
        case 1:
            return 'Weak';
        case 2:
        case 3:
            return 'Medium';
        case 4:
        case 5:
            return 'Strong';
        default:
            return 'Very Weak';
    }
};

export const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

export const isNotEmpty = (value) => {
    return value.trim().length > 0;
};
