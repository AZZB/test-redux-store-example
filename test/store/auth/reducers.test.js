import { Reducer } from 'redux-testkit';
import { assert, expect } from 'chai';

import authReducer from '../../../src/store/reducers/auth';
import {
  loginSuccess,
} from '../../../src/store/actions/auth';
import { user } from './helpers';




describe('auth reducer', () => {

  const initialState = {
    currentUser: null,
  };

  it('should have an initial state', () => {
    const result = authReducer(undefined, {type: ''});
    assert.deepEqual(result, initialState, 'result != initialState');
  });


  it('should handle LOGIN_SUCCESS action with initialState', () => {
    const userData = user();
    const action = loginSuccess(userData);
    const result = {
      currentUser: userData.id,
    };

    Reducer(authReducer)
      .withState(initialState)
      .expect(action)
      .toReturnState(result);
  });



});
