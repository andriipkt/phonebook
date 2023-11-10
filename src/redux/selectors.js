export const selectContacts = state => state.contacts.items;
export const selectFilter = state => state.filter;
export const selectError = state => state.contacts.error;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectUsername = state => state.authentication.user.name;
export const selectIsLoggedIn = state => state.authentication.isLoggedIn;
export const selectIsRefreshing = state => state.authentication.isRefreshing;
export const selectLoadingAuth = state => state.authentication.isLoading;
