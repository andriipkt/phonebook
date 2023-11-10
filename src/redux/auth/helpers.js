export const handlePending = (state, action) => {
  return {
    ...state,
    isLoading: true,
  };
};

export const handleRejected = (state, action) => {
  return {
    ...state,
    error: action.payload,
    isLoading: false,
    isRefreshing: false,
  };
};

export const handleFulfilled = (state, action) => {
  return {
    ...state,
    isLoading: false,
    isRefreshing: false,
  };
};

export const handleFulfilledRegister = (state, action) => {
  return {
    ...state,
    user: action.payload.user,
    token: action.payload.token,
    isLoggedIn: true,
  };
};

export const handleFulfilledLogIn = (state, action) => {
  return {
    ...state,
    user: action.payload.user,
    token: action.payload.token,
    isLoggedIn: true,
  };
};

export const handleFulfilledLogOut = (state, action) => {
  return {
    ...state,
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
  };
};

export const handleFulfilledFetchCurrentUser = (state, action) => {
  return {
    ...state,
    user: action.payload,
    isLoggedIn: true,
  };
};
