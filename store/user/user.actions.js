import { USER_ACTION_TYPES } from './user.types';
import { signInWithEmail, signUpWithFullInfo,updateUserProgress,getUserProgress,updateUserProfile,getCertificateInfo } from '../../firebase.utils';
export const updateUserProfileAction = (userId, updatedData) => {
    return async (dispatch, getState) => {
        const { user } = getState().user;
        dispatch({ type: USER_ACTION_TYPES.UPDATE_USER_PROFILE_START });

        try {
            const updatedUserData = await updateUserProfile(userId, updatedData);

            // Update the user data in Redux
            dispatch({
                type: USER_ACTION_TYPES.UPDATE_USER_PROFILE_SUCCESS,
                payload: updatedUserData
            });
        } catch (error) {
            dispatch({
                type: USER_ACTION_TYPES.UPDATE_USER_PROFILE_FAILED,
                payload: error.message
            });
        }
    };
};
export const signUpWithEmailStart = (userData) => {
    return async dispatch => {
        dispatch({ type: USER_ACTION_TYPES.USER_SIGNUP_START });

        try {
            // Sign up and get the extended user data (including Firebase user details and additional details)
            const extendedUser = await signUpWithFullInfo(userData.email, userData.password, userData.name, userData.occupation, userData.experienceLevel, userData.company, userData.educationDegree, userData.university, userData.field);
            console.log(extendedUser)
            // Prepare the payload with extended user data
            const payload = {
                uid: extendedUser.uid,
                name: extendedUser.name,
                occupation: extendedUser.occupation,
                experienceLevel: extendedUser.experienceLevel,
                company: extendedUser.company,
                educationDegree: extendedUser.educationDegree,
                university: extendedUser.university,
                field: extendedUser.field,
                email: extendedUser.email,
                isVerified: extendedUser.isVerified,
                created: extendedUser.created,
                progress: extendedUser.progress,
                certification: extendedUser.certification
            };

            dispatch({ type: USER_ACTION_TYPES.USER_SIGNUP_SUCCESS, payload: payload });
            return true;
        } catch (error) {
            dispatch({ type: USER_ACTION_TYPES.USER_SIGNUP_FAILED, payload: error.message });
            return false;
        }
    };
};

export const updateUserProgressAction = (chapterNumber, questionId) => {
    return async (dispatch, getState) => {
        const { user } = getState().user; // Get the current user state
        dispatch({ type: USER_ACTION_TYPES.USER_UPDATE_PROGRESS_START });
        console.log(chapterNumber,questionId)
        try {
            const updatedProgress = await updateUserProgress(chapterNumber, questionId);
            
            // Prepare the updated user data with the new progress
            const updatedUserData = {
                ...user,
                progress: updatedProgress
            };

            dispatch({
                type: USER_ACTION_TYPES.USER_UPDATE_PROGRESS_SUCCESS,
                payload: updatedUserData
            });
        } catch (error) {
            dispatch({
                type: USER_ACTION_TYPES.USER_UPDATE_PROGRESS_FAILED,
                payload: error.message
            });
        }
    };
};

export const fetchCertificateInfoAction = () => {
    return async (dispatch, getState) => {
        const { user } = getState().user; // Get the current user state
        dispatch({ type: USER_ACTION_TYPES.FETCH_CERTIFICATE_INFO_START });

        try {
            const certificateInfo = await getCertificateInfo(user.uid); // Fetch the user's certificate info
            dispatch({
                type: USER_ACTION_TYPES.FETCH_CERTIFICATE_INFO_SUCCESS,
                payload: certificateInfo
            });
        } catch (error) {
            dispatch({
                type: USER_ACTION_TYPES.FETCH_CERTIFICATE_INFO_FAILED,
                payload: error.message
            });
        }
    };
};
export const fetchUserProgressAction = () => {
    return async (dispatch, getState) => {
        const { user } = getState().user; // Get the current user state
        dispatch({ type: USER_ACTION_TYPES.FETCH_USER_PROGRESS_START });

        try {
            const progress = await getUserProgress(user.uid); // Fetch the user's progress

            dispatch({
                type: USER_ACTION_TYPES.FETCH_USER_PROGRESS_SUCCESS,
                payload: progress
            });
        } catch (error) {
            dispatch({
                type: USER_ACTION_TYPES.FETCH_USER_PROGRESS_FAILED,
                payload: error.message
            });
        }
    };
};


export const signInWithEmailAction = (email, password) => {
    return async dispatch => {
        dispatch({ type: USER_ACTION_TYPES.USER_SIGNIN_START });

        try {
            const userData = await signInWithEmail(email, password);
            dispatch({
                type: USER_ACTION_TYPES.USER_SIGNIN_SUCCESS,
                payload: {
                    ...userData, // This includes all user data returned by signInWithEmail
                }
            });
            return true;
        } catch (error) {
            dispatch({
                type: USER_ACTION_TYPES.USER_SIGNIN_FAILED,
                payload: error.message
            });
            return false;
        }
    };
};


// Add other actions like resetAuthError, signOutAction, etc., as needed.
