
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const loginRequest = (payload) => ({
  type: LOGIN_REQUEST,
  payload,
});


export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: {
    user,
  }
});


export const LOGIN_FAILED = 'LOGIN_FAILED';
export const loginFailed = () => ({
  type: LOGIN_FAILED,
})



export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const logoutRequest = () => ({
  type: LOGOUT_REQUEST,
});

export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
});



export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const signupRequest = (payload) => ({
  type: SIGNUP_REQUEST,
  payload,
});

export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const signupSuccess = () => ({
  type: SIGNUP_SUCCESS,
});

export const SIGNUP_FAILED = 'SIGNUP_FAILED';
export const signupFailed = () => ({
  type: SIGNUP_FAILED,
});
