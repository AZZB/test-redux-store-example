import { put, call, takeLatest } from 'redux-saga/effects';

import {
  FETCH_USER_BY_USERNAME,
  fetchUserSuccess,
  fetchUserFailed,
} from '../actions/user';

import * as Api from '../endpoints/api/user';




export default function* userWatch() {
  yield [
    takeLatest(FETCH_USER_BY_USERNAME, requestUserByUsername),
  ]
}


function* requestUserByUsername(action) {
  try {
    const user = yield call(Api.getUserByUsername, action.username);
    yield put(fetchUserSuccess(user));
  } catch (e) {
    console.log(e);
    yield put(fetchUserFailed(action.username, {}));
  }
}
