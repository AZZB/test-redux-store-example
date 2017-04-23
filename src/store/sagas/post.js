import { put, call, takeLatest } from 'redux-saga/effects';

import * as Api from '../endpoints/api/post';

import {
  FETCH_POSTS,
  FETCH_POSTS_BY_USERNAME,
  fetchPostsSuccess,
  fetchPostsFailed,
} from '../actions/post';

import { logoutRequest } from '../actions/auth';




export default function* postWatch() {
  yield [
    takeLatest(FETCH_POSTS, requestPosts),
    takeLatest(FETCH_POSTS_BY_USERNAME, requestPostsByUsername),
  ]
}


function* requestPosts(action) {
  try {
    const posts = yield call(Api.getPosts);
    yield put(fetchPostsSuccess(posts));
  } catch (e) {
    console.log(e);
    /**
      we're supposing that the problem is the authentification with token wrong or expired
    */
    yield put(logoutRequest());
  }
}


function* requestPostsByUsername(action) {
  try {
    const posts = yield call(Api.getPostsByUsername, action.username);
    yield put(fetchPostsSuccess(posts));
  } catch (e) {
    console.log(e);
    yield put(fetchPostsFailed(action.username, {}))
  }
}
