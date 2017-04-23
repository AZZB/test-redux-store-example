import { Reducer } from 'redux-testkit';
import { assert, expect } from 'chai';

import usersReducer from '../../../src/store/reducers/users';

import {
  fetchUserSuccess,
} from '../../../src/store/actions/user';

import {
  loginSuccess,
} from '../../../src/store/actions/auth';

import { user } from './helpers';




describe('users reducer', () => {

  const initialState = {};


  it('should have an initial state', () => {
    const result = usersReducer();
    assert.deepEqual(result, initialState, 'result != initialState');
  });


  it('should handle ADD_USER action on initialState', () => {
    const userData = user();
    const action = fetchUserSuccess(userData);
    const result = {
      [userData.username]: user(),
    };

    Reducer(usersReducer)
      .withState(initialState)
      .expect(action)
      .toReturnState(result);

  });

  it('should handle LOGIN_SUCCESS action ', () => {
    const userData = user();
    const action = loginSuccess(userData);
    const result = {
      [userData.username]: user(),
    };

    Reducer(usersReducer)
      .withState(initialState)
      .expect(action)
      .toReturnState(result);
  });


});
