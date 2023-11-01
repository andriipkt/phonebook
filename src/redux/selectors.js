export const selectContacts = state => state.contacts.items;
export const selectFilter = state => state.filter;
export const selectError = state => state.contacts.error;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectUsername = state => state.auth.user.name;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
