import { assert } from 'chai';
import SagaTester from 'redux-saga-tester';

import { initialState } from '../helpers/state';
import userWatch from '../../../src/store/sagas/user';
import {
  fetchUserByUsername,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILED,
} from '../../../src/store/actions/user';

describe('user sagas', () => {
  let sagaTester = null;

  beforeEach(() => {
    sagaTester = new SagaTester(initialState());
    sagaTester.start(userWatch);
  });


  it('handle USER_REQUEST_BY_USERNAME action with valid username', async () => {
    sagaTester.dispatch(fetchUserByUsername('AZZ_B'));
    await sagaTester.waitFor(FETCH_USER_SUCCESS);
  });

  it('handle USER_REQUEST_BY_USERNAME action with invalid username', async () => {
    sagaTester.dispatch(fetchUserByUsername('GMA'));
    await sagaTester.waitFor(FETCH_USER_FAILED);
  });

});
