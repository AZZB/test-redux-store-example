import { takeLatest, put, call, take, fork, cancel, cancelled } from 'redux-saga/effects';

import * as Api from '../endpoints/api/auth';
import {
   LOGIN_REQUEST,
   LOGOUT_REQUEST,
   SIGNUP_REQUEST,
   LOGIN_FAILED,
   loginSuccess,
   loginFailed,
   logoutSuccess,
   logoutRequest,
   signupSuccess,
   signupFailed,
 } from '../actions/auth';




export default function* authWatch() {
  yield [
    fork(signup),
    fork(loginFlow),
  ]
}


function* signup() {
  while(true) {
    try {
      yield put(logoutRequest())
      const action = yield take(SIGNUP_REQUEST);
      const result = yield call(Api.signup, action.payload);
      yield put(signupSuccess());
    } catch (e) {
      console.log(e);
      yield put(signupFailed());
    }
  }
}



function* loginFlow() {
  while(true) {
    let action = yield take(LOGIN_REQUEST);
    const task = yield fork(auth, action.payload);

    action = yield take([LOGOUT_REQUEST, LOGIN_FAILED]);
    if(action.type === LOGOUT_REQUEST) yield cancel(task)
    localStorage.removeItem('token@');
    yield put(logoutSuccess())
  }
}


function* auth(payload) {
  try {
    /**
      we can dispatch here an action for dispaly loading SPINNER
    */
    const { token, user } = yield call(Api.login, payload);
    localStorage.setItem('token@', token);
    yield put(loginSuccess(user))

  } catch (e) {
    console.log(e);
    yield put(loginFailed())
  } finally {
    if(yield cancelled()) {
      console.log('yeeeeeeeeeeeah cancelled');
      /**
        and here we can hide the loading SPINNER
      */
    }
  }

}
