import { USER_ACTION_TYPES } from "./user.types";

const INITIAL_STATE = {
    user: null,
    isSignedIn: false,
    loading: {
        emailSignUp: false,
        emailSignIn: false,
        signOut: false,
        updateUserProgress: false,
        fetchProgress: false,
        updateUserProfile: false, // Add this line
        fetchCertificateInfo:false
    },
    error: {
        emailSignUp: null,
        emailSignIn: null,
        signOut: null,
        updateUserProgress: null,
        fetchProgress: null,
        updateUserProfile: null, // Add this line
        fetchCertificateInfo:null
    },
};


export const userReducer = (state = INITIAL_STATE, action) => {
    
    switch (action.type) {
        case USER_ACTION_TYPES.FETCH_CERTIFICATE_INFO_START:
            return {
                ...state,
                loading: { ...state.loading, fetchCertificateInfo: true },
                error: { ...state.error, fetchCertificateInfo: null },
            };
        case USER_ACTION_TYPES.FETCH_CERTIFICATE_INFO_SUCCESS:
            return {
                ...state,
                user: {
                    ...state.user,
                    certification: action.payload // Update certification info
                },
                loading: { ...state.loading, fetchCertificateInfo: false },
            };
        case USER_ACTION_TYPES.FETCH_CERTIFICATE_INFO_FAILED:
            return {
                ...state,
                loading: { ...state.loading, fetchCertificateInfo: false },
                error: { ...state.error, fetchCertificateInfo: action.payload },
            };
        case USER_ACTION_TYPES.UPDATE_USER_PROFILE_START:
            return {
                ...state,
                loading: { ...state.loading, updateUserProfile: true },
                error: { ...state.error, updateUserProfile: null },
            };

        case USER_ACTION_TYPES.UPDATE_USER_PROFILE_SUCCESS:
            return {
                ...state,
                user: {
                    ...state.user,
                    ...action.payload, // Merge updated user data
                },
                loading: { ...state.loading, updateUserProfile: false },
                error: { ...state.error, updateUserProfile: null },
            };

        case USER_ACTION_TYPES.UPDATE_USER_PROFILE_FAILED:
            return {
                ...state,
                loading: { ...state.loading, updateUserProfile: false },
                error: { ...state.error, updateUserProfile: action.payload },
            };
        case USER_ACTION_TYPES.FETCH_USER_PROGRESS_START:
            return {
                ...state,
                loading: { ...state.loading, fetchProgress: true },
                error: { ...state.error, fetchProgress: null }
            };

        case USER_ACTION_TYPES.FETCH_USER_PROGRESS_SUCCESS:
            // Update progress within the user object
            const updatedUser = state.user ? { ...state.user, progress: action.payload } : null;
            return {
                ...state,
                user: updatedUser,
                loading: { ...state.loading, fetchProgress: false }
            };

        case USER_ACTION_TYPES.FETCH_USER_PROGRESS_FAILED:
            return {
                ...state,
                loading: { ...state.loading, fetchProgress: false },
                error: { ...state.error, fetchProgress: action.payload }
            };
        case USER_ACTION_TYPES.USER_SIGNUP_START:
            return {
                ...state,
                loading: { ...state.loading, emailSignUp: true },
                error: { ...state.error, emailSignUp: null },
            };
        case USER_ACTION_TYPES.USER_SIGNUP_SUCCESS:
            return {
                ...state,
                user: {
                    ...state.user,
                    ...action.payload
                },
                
                isSignedIn: true,
                loading: { ...state.loading, emailSignUp: false },
                error: { ...state.error, emailSignUp: null },
            };
        case USER_ACTION_TYPES.USER_SIGNUP_FAILED:
            return {
                ...state,
                loading: { ...state.loading, emailSignUp: false },
                error: { ...state.error, emailSignUp: action.payload },
            };
        case USER_ACTION_TYPES.USER_SIGNIN_START:
            return {
                ...state,
                loading: { ...state.loading, emailSignIn: true },
                error: { ...state.error, emailSignIn: null },
            };
            case USER_ACTION_TYPES.USER_SIGNIN_SUCCESS:
                return {
                    ...state,
                    user: action.payload, // Updates the state with the user data received from signInWithEmail
                    isSignedIn: true, // Marks the user as signed in
                    loading: { ...state.loading, emailSignIn: false }, // Resets the loading state for email sign-in
                    error: { ...state.error, emailSignIn: null }, // Clears any sign-in related errors
                };
            
        case USER_ACTION_TYPES.USER_SIGNIN_FAILED:
            return {
                ...state,
                loading: { ...state.loading, emailSignIn: false },
                error: { ...state.error, emailSignIn: action.payload },
            };
        case USER_ACTION_TYPES.USER_SIGNOUT_START:
            return {
                ...state,
                loading: { ...state.loading, signOut: true },
                error: { ...state.error, signOut: null },
            };
        case USER_ACTION_TYPES.USER_SIGNOUT_SUCCESS:
            return {
                ...INITIAL_STATE
            };
        case USER_ACTION_TYPES.USER_SIGNOUT_FAILED:
            return {
                ...state,
                loading: { ...state.loading, signOut: false },
                error: { ...state.error, signOut: action.payload },
            };
        case USER_ACTION_TYPES.RESET_AUTH_ERROR:
            return {
                ...state,
                error: { ...state.error, emailSignUp: null, emailSignIn: null, signOut: null },
            };
            case USER_ACTION_TYPES.USER_UPDATE_PROGRESS_START:
                return {
                    ...state,
                    loading: { ...state.loading, updateUserProgress: true },
                    error: { ...state.error, updateUserProgress: null },
                };
                case USER_ACTION_TYPES.USER_UPDATE_PROGRESS_SUCCESS:
                    return {
                        ...state,
                        user: action.payload, // Replace with the updated user data
                        loading: { ...state.loading, updateUserProgress: false },
                        error: { ...state.error, updateUserProgress: null },
                    };
            case USER_ACTION_TYPES.USER_UPDATE_PROGRESS_FAILED:
                return {
                    ...state,
                    loading: { ...state.loading, updateUserProgress: false },
                    error: { ...state.error, updateUserProgress: action.payload },
                };
        // Add cases for other actions as needed
        default:
            return state;
    }
};
