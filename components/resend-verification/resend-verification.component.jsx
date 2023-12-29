import React, { useState, useEffect } from 'react';

const ResendVerification = ({ email, onResendClick }) => {
    const [canResend, setCanResend] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setCanResend(true), 4 * 60 * 1000); // 4 minutes
        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            <p tabIndex='0'>Verification email sent to {email}. Please check your inbox.</p>
            <button onClick={onResendClick} disabled={!canResend}>
                {canResend ? "Resend Verification Email" : "Resend Available in 4 minutes"}
            </button>
        </div>
    );
};

export default ResendVerification;
