import {createSelector} from 'reselect';

const selectUser = (state) => state.user;

export const selectCurrentUser = createSelector(
    [selectUser],
    user => user.currentUser
)

export const selectCurrentUserContacts = createSelector(
    [selectUser],
    user => user.contact
)