import { put, call, takeLatest } from 'redux-saga/effects';

import * as Api from '../endpoints/api/comment';

import {
  FETCH_COMMENTS,
  fetchCommentsSuccess,
  fetchCommentsFailed,
} from '../actions/comment';

export default function* commentWatch() {
  yield [
    takeLatest(FETCH_COMMENTS, requestComments),
  ]
}



function* requestComments(action) {
  try {
    const comments = yield call(Api.getComments, action.postId);
    yield put(fetchCommentsSuccess(comments));
  } catch (e) {
    console.log(e);
    yield put(fetchCommentsFailed(action.postId, {}));
  }
}
