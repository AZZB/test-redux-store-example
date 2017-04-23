export const FETCH_USER_BY_USERNAME = 'FETCH_USER_BY_USERNAME';
export const fetchUserByUsername = username => ({
  type: FETCH_USER_BY_USERNAME,
  username,
});


export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const fetchUserSuccess = (user) => ({
  type: FETCH_USER_SUCCESS,
  user,
});

export const FETCH_USER_FAILED = 'FETCH_USER_FAILED';
export const fetchUserFailed = (username, errors) => ({
  type: FETCH_USER_FAILED,
  payload: {
    username,
    errors,
  },
});
