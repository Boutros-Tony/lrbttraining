import { createUserWithEmailAndPassword, sendEmailVerification,sendPasswordResetEmail } from 'firebase/auth';

import { signInWithEmailAndPassword } from 'firebase/auth';
import { ref, get,set,update } from 'firebase/database';
import { auth, db } from './firebase.config'; // Adjust this import according to your setup
const defaultProgress = {
    lastAccessedChapter: 0,
    lastAccessedQuestion: 0,
    completedChapters: [0], // Assuming placeholder
    completedQuestions: {
        // Assuming initialization for each chapter
    },
    chapterGrades: {}
};


const defaultCertification = {
    certificate: false,
    certificateDate: "",
    certificateDateEnd: ""
};
export const signInWithEmail = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const firebaseUser = userCredential.user;

        // Fetching the user's profile from Realtime Database
        const userRef = ref(db, 'users/' + firebaseUser.uid);
        const userSnapshot = await get(userRef);

        if (!userSnapshot.exists()) {
            throw new Error("User not found. Please sign up first.");
        }

        const additionalUserData = userSnapshot.val();

        return {
            uid: firebaseUser.uid,
            email: firebaseUser.email,
            isVerified: firebaseUser.emailVerified,
            name: additionalUserData.name,
            occupation: additionalUserData.occupation,
            experienceLevel: additionalUserData.experienceLevel,
            company: additionalUserData.company,
            educationDegree: additionalUserData.educationDegree,
            university: additionalUserData.university,
            field: additionalUserData.field,
            provider: 'email',
            created: additionalUserData.created,
            progress: additionalUserData.progress,
            certification: additionalUserData.certification
            // Add other fields as needed
        };

    } catch (error) {
        console.error("Error signing in with email and password: ", error);
        throw error;
    }
};


export const signUpWithFullInfo = async (email, password, name, occupation, experienceLevel, company, educationDegree, university, field) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const firebaseUser = userCredential.user;

        // Send email verification (optional but recommended)
        await sendEmailVerification(firebaseUser);

        // Initialize default progress and certification
        const defaultProgress = {
            lastAccessedChapter: 0,
            lastAccessedQuestion: 0,
            completedChapters: [0], // Placeholder
            completedQuestions: {},
            chapterGrades: {}
        };

        for (let i = 1; i <= 8; i++) {
            defaultProgress.completedQuestions[`chapter${i}`] = [0]; // Placeholder for questions
            defaultProgress.chapterGrades[`chapter${i}`] = -1; // Placeholder for grades
        }

        const defaultCertification = {
            certificate: false,
            certificateDate: "",
            certificateDateEnd: ""
        };

        const clientDate = new Date();
        const formattedDate = `${clientDate.toLocaleString('default', { month: 'long' })} ${clientDate.getDate()}, ${clientDate.getFullYear()} ${clientDate.getHours()}:${clientDate.getMinutes()}`;

        const userRef = ref(db, 'users/' + firebaseUser.uid);
        const userData = {
            name,
            email: firebaseUser.email,
            uid: firebaseUser.uid,
            occupation,
            experienceLevel,
            company,
            educationDegree,
            university,
            field,
            isVerified: firebaseUser.emailVerified,
            created: formattedDate,
            provider: "email",
            progress: defaultProgress,
            certification: defaultCertification,
        };

        await set(userRef, userData);
        return userData;
    } catch (error) {
        console.error("Error during full sign-up: ", error);
        throw error;
    }
};


export const updateUserProgress = async (chapterNumber, questionNumber) => {
    
    const user = auth.currentUser;
  
    if (!user) {
      throw new Error("User not authenticated");
    }
  
    const userProgressRef = ref(db, `users/${user.uid}/progress`);
  
    // Get current progress from Firebase
    const snapshot = await get(userProgressRef);
    if (!snapshot.exists()) {
      throw new Error("User progress not found.");
    }
  
    const userProgress = snapshot.val();
    const chapterKey = `chapter${chapterNumber}`;
  
    // Check if the question number already exists in the array
    const updatedCompletedQuestions = userProgress.completedQuestions[chapterKey] || [];
    if (!updatedCompletedQuestions.includes(questionNumber)) {
      updatedCompletedQuestions.push(questionNumber);
    }
  
    // Prepare the update object
    const updates = {};
    updates[`completedQuestions/${chapterKey}`] = updatedCompletedQuestions;
  
    // Update Firebase and fetch updated progress
    await update(userProgressRef, updates);
  
    const updatedSnapshot = await get(userProgressRef);
    if (!updatedSnapshot.exists()) {
      throw new Error("Error fetching updated progress.");
    }
  
    return updatedSnapshot.val();
  };


  export const validateQuizAnswers = async (userAnswers, questionList, quizTitle) => {
    // Fetch the correct answers from Firebase
    const correctAnswersRef = ref(db, `/quizzes/${quizTitle}`);
    const snapshot = await get(correctAnswersRef);
    if (!snapshot.exists()) {
        throw new Error('Quiz data not found');
    }
    const correctAnswersData = snapshot.val();

    // Compare user answers with correct answers and prepare the results
    const results = questionList.map(question => {
        const userAnswer = userAnswers[question.id];
        const correctAnswer = correctAnswersData[question.id].answers;
        let isCorrect;

        if (Array.isArray(correctAnswer)) {
            // Handle multiple-choice questions
            // Extract only selected answers (true values) from userAnswer object
            const userSelectedAnswers = userAnswer ? Object.keys(userAnswer).filter(option => userAnswer[option]) : [];
            const correctAnswersSet = new Set(correctAnswer);
            isCorrect = userSelectedAnswers.length === correctAnswersSet.size &&
                        userSelectedAnswers.every(answer => correctAnswersSet.has(answer));
        } else {
            // Handle single-choice questions
            isCorrect = userAnswer === correctAnswer;
        }

        return {
            questionId: question.id,
            isCorrect
        };
    });

    return results;
};

export const updateUserProfile = async (userId, updatedData) => {
  const userRef = ref(db, `users/${userId}`);

  try {
      // Prepare the data to be updated
      const updates = {};
      if (updatedData.occupation) updates['occupation'] = updatedData.occupation;
      if (updatedData.experienceLevel) updates['experienceLevel'] = updatedData.experienceLevel;
      if (updatedData.company) updates['company'] = updatedData.company;
      if (updatedData.educationDegree) updates['educationDegree'] = updatedData.educationDegree;
      if (updatedData.university) updates['university'] = updatedData.university;
      if (updatedData.field) updates['field'] = updatedData.field;

      // Update the user's profile
      await update(userRef, updates);

      // Fetch and return the updated user data
      const updatedSnapshot = await get(userRef);
      return updatedSnapshot.val();
  } catch (error) {
      console.error("Error updating user profile:", error);
      throw error;
  }
};
export const updateCertificateInfo = async () => {
  const user = auth.currentUser;

  if (!user) {
      throw new Error("User not authenticated");
  }

  const currentDate = new Date();
  const certificateDate = currentDate.toISOString().split('T')[0]; // Format: YYYY-MM-DD
  const nextYear = new Date(currentDate.setFullYear(currentDate.getFullYear() + 1));
  const certificateDateEnd = nextYear.toISOString().split('T')[0];

  const certificateInfo = {
      certificate: true,
      certificateDate,
      certificateDateEnd,
  };

  const userCertificationRef = ref(db, `users/${user.uid}/certification`);
  await update(userCertificationRef, certificateInfo);

  return certificateInfo;
};

export const getCertificateInfo = async (userId) => {
  const certificateRef = ref(db, `users/${userId}/certification`);
  const snapshot = await get(certificateRef);
  
  if (!snapshot.exists()) {
      throw new Error("Certificate information not found.");
  }
  
  return snapshot.val();
};

export const updateChapterProgress = async (chapterNumber, grade) => {
  const user = auth.currentUser;

  if (!user) {
    throw new Error("User not authenticated");
  }

  const userProgressRef = ref(db, `users/${user.uid}/progress`);
  const snapshot = await get(userProgressRef);
  
  if (!snapshot.exists()) {
    throw new Error("User progress not found.");
  }

  const userProgress = snapshot.val();

  // Update chapter grade
  const updates = {};
  updates[`chapterGrades/chapter${chapterNumber}`] = grade;

  // Convert chapterNumber to a Number if it's not already
  const chapterNum = Number(chapterNumber);

  // Check if the chapter is already completed, and update completed chapters if not
  if (!userProgress.completedChapters.includes(chapterNum)) {
    updates['completedChapters'] = [...userProgress.completedChapters, chapterNum];
  }

  // Update Firebase
  await update(userProgressRef, updates);

  // Fetch and return updated progress (optional)
  const updatedSnapshot = await get(userProgressRef);
  return updatedSnapshot.val() ? updatedSnapshot.val() : null;
};


export const getUserProgress = async () => {
  const user = auth.currentUser;

  if (!user) {
    throw new Error("No authenticated user found");
  }

  try {
    const progressRef = ref(db, `users/${user.uid}/progress`);
    const snapshot = await get(progressRef);

    if (!snapshot.exists()) {
      throw new Error("User progress not found.");
    }

    return snapshot.val();
  } catch (error) {
    console.error("Error fetching user progress:", error.message);
    throw error;
  }
};
const updateProgress = async (userId, chapterId, questionId) => {
    const userRef = ref(db, `users/${userId}/progress`);

    try {
        const userProgressSnapshot = await get(userRef);
        let progress = userProgressSnapshot.exists() ? userProgressSnapshot.val() : {};

        // Update last accessed chapter and question
        progress.lastAccessedChapter = chapterId;
        progress.lastAccessedQuestion = questionId;

        // Add question to completedQuestions for the chapter
        if (!progress.completedQuestions[`chapter${chapterId}`].includes(questionId)) {
            progress.completedQuestions[`chapter${chapterId}`].push(questionId);
        }

        // Update Firebase
        await set(userRef, progress);

    } catch (error) {
        console.error("Error updating progress:", error);
    }
};
const markChapterAsCompleted = async (userId, chapterId) => {
    const userRef = ref(db, `users/${userId}/progress`);

    try {
        const userProgressSnapshot = await get(userRef);
        let progress = userProgressSnapshot.exists() ? userProgressSnapshot.val() : {};

        // Add chapter to completedChapters if not already included
        if (!progress.completedChapters.includes(chapterId)) {
            progress.completedChapters.push(chapterId);
        }

        // Update Firebase
        await set(userRef, progress);

    } catch (error) {
        console.error("Error marking chapter as completed:", error);
    }
};
export const signOutFromFirebase = async () => {
    try {
        await auth.signOut();
    } catch (error) {
        console.error("Error signing out:", error);
        throw error;
    }
};

export const resetPassword = async (email) => {
  try {
    await sendPasswordResetEmail(auth,email);
    console.log("Password reset email sent.");
    // You can add your own code here, such as displaying a success message to the user
  } catch (error) {
    console.log("Error sending password reset email:", error.message);
    return error.message
    // You can add your own code here to handle the error, such as displaying an error message to the user
  }
};

export const passwordReset = async (oobCode,newPassword) => {
  try {
    await confirmPasswordReset(auth,oobCode,newPassword);
 
    return true
  } catch (error){
    
    return false
  }

}
export const verifyEmail = async (oobCode) => {
  try {
    await applyActionCode(auth, oobCode);
    // Email successfully verified
    return true;
  } catch (error) {
    // Handle or throw error based on your error handling strategy
    console.error("Error verifying email: ", error);
    throw error;
  }
}
export const sendVerificationEmail = async () =>{
    try{
      
     await sendEmailVerification(auth.currentUser)
      return true
    }catch(error){
      return error.message
    }
  
  }