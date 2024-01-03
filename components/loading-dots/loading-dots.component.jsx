import React from 'react';
import styles from './loading-dots.module.scss';

const LoadingDots = () => {
    return (
        <div className={styles.loadingDots} aria-label='Loading' aria-live="assertive" aria-busy="true">
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
         
        </div>
    );
};

export default LoadingDots;
