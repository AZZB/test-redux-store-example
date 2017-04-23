import { assert } from 'chai';
import SagaTester from 'redux-saga-tester';

import { initialState } from '../helpers/state';
import commentWatch from '../../../src/store/sagas/comment';
import {
  fetchComments,
  FETCH_COMMENTS_SUCCESS,
} from '../../../src/store/actions/comment';



describe('comment sagas', () => {
  let sagaTester = null;

  beforeEach(() => {
    sagaTester = new SagaTester(initialState());
    sagaTester.start(commentWatch);
  });


  it('handle FETCH_COMMENTS action with valid id post', async () => {
    sagaTester.dispatch(fetchComments('valid_post_id'));
    const action = await sagaTester.waitFor(FETCH_COMMENTS_SUCCESS);
    assert.typeOf(action.comments, 'array');
  });


});
