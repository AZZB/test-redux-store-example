import { Reducer } from 'redux-testkit';
import { assert, expect } from 'chai';

import commentsReducer from '../../../src/store/reducers/comments';
import { postCommentSuccess, fetchCommentsSuccess } from '../../../src/store/actions/comment';
import { comment, comments } from './helpers';

describe('comments reducer', () => {
  const initialState = {

  };

  it('should have an initialState', () => {
    const result = commentsReducer(undefined, { type: ''});
    assert.deepEqual(result, initialState, 'result != initialState');
  });


  it('should handle POST_COMMENT_SUCCESS action', () => {
    const commentData = comment();
    const action = postCommentSuccess(commentData);
    const result = {
      [commentData.id]: commentData,
    };

    Reducer(commentsReducer)
      .withState(initialState)
      .expect(action)
      .toReturnState(result);
  });

  it('sould handle FETCH_COMMENTS_SUCCESS action ', () => {
    const commentsData = comments();
    const action = fetchCommentsSuccess(commentsData);
    const result = {
      [commentsData[0].id]: commentsData[0],
      [commentsData[1].id]: commentsData[1],
    };

    Reducer(commentsReducer)
      .withState(initialState)
      .expect(action)
      .toReturnState(result);
  })

});
