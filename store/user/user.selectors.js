import { createSelector } from 'reselect';

const selectUserState = state => state.user;

// Selector for current user
export const selectCurrentUser = createSelector(
    [selectUserState],
    userState => userState.user
);

// Selector for sign-in status
export const selectIsSignedIn = createSelector(
    [selectUserState],
    userState => userState.isSignedIn
);

// Selector for email sign-up loading state
export const selectEmailSignUpLoading = createSelector(
    [selectUserState],
    userState => userState.loading.emailSignUp
);

// Selector for email sign-in loading state
export const selectEmailSignInLoading = createSelector(
    [selectUserState],
    userState => userState.loading.emailSignIn
);

// Selector for email sign-up error
export const selectEmailSignUpError = createSelector(
    [selectUserState],
    userState => userState.error.emailSignUp
);

// Selector for email sign-in error
export const selectEmailSignInError = createSelector(
    [selectUserState],
    userState => userState.error.emailSignIn
);
export const selectIsUserVerified = createSelector(
    [selectCurrentUser],
    currentUser => currentUser?.isVerified
);
export const selectCurrentUserProgress = createSelector(
    [selectCurrentUser],
    currentUser => currentUser.progress
)
// Add other selectors as needed based on your application's requirements
