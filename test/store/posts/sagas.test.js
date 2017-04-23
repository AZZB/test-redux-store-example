import { assert } from 'chai';
import SagaTester from 'redux-saga-tester';

import { initialState } from '../helpers/state';
import postWatch from '../../../src/store/sagas/post';
import {
  fetchPosts,
  fetchPostsByUsername,
  FETCH_POSTS,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILED,
} from '../../../src/store/actions/post';
import { LOGOUT_REQUEST } from '../../../src/store/actions/auth';



describe('post sagas', () => {
  let sagaTester = null;

  beforeEach(() => {
    sagaTester = new SagaTester(initialState());
    sagaTester.start(postWatch);
  });


  it('handle FETCH_POSTS with valid token', async () => {
    localStorage.setItem('token@', 'valid_token');
    sagaTester.dispatch(fetchPosts());
    await sagaTester.waitFor(FETCH_POSTS_SUCCESS);
  });

  it('handle FETCH_POSTS with wrong token or expired', async () => {
    localStorage.setItem('token@', 'wrong_token');
    sagaTester.dispatch(fetchPosts());
    await sagaTester.waitFor(LOGOUT_REQUEST);
  });


  it('handle FETCH_POSTS_BY_USERNAME action with valid username', async () => {
    sagaTester.dispatch(fetchPostsByUsername('AZZ_B'));
    const action = await sagaTester.waitFor(FETCH_POSTS_SUCCESS);
    assert.typeOf(action.posts, 'array');
  });

  it('handle FETCH_POSTS_BY_USERNAME action with invalid username', async () => {
    sagaTester.dispatch(fetchPostsByUsername('GMA'));
    await sagaTester.waitFor(FETCH_POSTS_FAILED);
  });

});
