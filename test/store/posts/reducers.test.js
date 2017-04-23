import { Reducer } from 'redux-testkit';
import { assert, expect } from 'chai';
import { posts } from './helpers';
import postsReducer from '../../../src/store/reducers/posts';
import {
  fetchPostsSuccess,
} from '../../../src/store/actions/post';


describe('post reducer', () => {

  const initialState = {

  };

  it('should have an initial state', () => {
    const result = postsReducer(undefined, {type: ''});
    assert.deepEqual(result, initialState, 'result != initialState');
  });


  it('should handle FETCH_POSTS action on initialState', () => {
    const postsData = posts();
    const action = fetchPostsSuccess(postsData);
    const result  = {
      [postsData[0].id]: postsData[0],
      [postsData[1].id]: postsData[1],
    };

    Reducer(postsReducer)
      .withState(initialState)
      .expect(action)
      .toReturnState(result);
  });



});
