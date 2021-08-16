import {createSelector} from "reselect"

const selectUser = state => state.auth

// most frequently accessed selector in state.auth
export const selectCurrentUser = createSelector(
    [selectUser],
    auth => auth.currentUser
)

export const selectAuthLoadingState = createSelector(
    [selectUser],
    auth => auth.loading
)

export const selectAuthError = createSelector(
    [selectUser],
    auth => auth.error
)
