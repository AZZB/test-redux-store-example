import { assert } from 'chai';
import SagaTester from 'redux-saga-tester';

import {
  validSignupData,
  invalidSignupData,
  validLoginData,
  invalidLoginData,
  promiseDelay,
} from './helpers';

import authWatch, { login } from '../../../src/store/sagas/auth';

import {
  loginRequest,
  logoutRequest,
  signupRequest,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT_SUCCESS,
  SIGNUP_SUCCESS,
  SIGNUP_FAILED,
} from '../../../src/store/actions/auth';

import { initialState } from '../helpers/state';




describe('saga user', () => {
  let sagaTester = null;

  beforeEach(() => {
    sagaTester = new SagaTester(initialState());
    sagaTester.start(authWatch);
  });


  it('handle SIGNUP_REQUEST action with valid data', async () => {
    sagaTester.dispatch(signupRequest(validSignupData()));
    await sagaTester.waitFor(SIGNUP_SUCCESS);

  });


  it('handle SIGNUP_REQUEST action with invalid data', async () => {
    sagaTester.dispatch(signupRequest(invalidSignupData()));
    await sagaTester.waitFor(SIGNUP_FAILED);
  });

  it('handle SIGNUP_REQUEST action with user are logged before', async () => {
    /**
      this just for if there is pitfall on workflow
    */

    sagaTester.dispatch(loginRequest(validLoginData()));
    sagaTester.dispatch(signupRequest(validSignupData()));
    await sagaTester.waitFor(LOGOUT_SUCCESS);
    await sagaTester.waitFor(SIGNUP_SUCCESS);

  });


  it('handle login flow : flow 1', async () => {
    sagaTester.dispatch(loginRequest(validLoginData()));
    await sagaTester.waitFor(LOGIN_SUCCESS);

    assert.notEqual(localStorage.getItem('token@'), undefined);

    sagaTester.dispatch(logoutRequest());
    await sagaTester.waitFor(LOGOUT_SUCCESS);

    assert.equal(localStorage.getItem('token@'), undefined);
  });



  it('handle login flow : flow 2', async () => {
    sagaTester.dispatch(logoutRequest());

    const action = await Promise.race([
      promiseDelay(true, 'ok'),
      sagaTester.waitFor(LOGOUT_SUCCESS),
    ]);

    assert.notEqual(action.type, LOGOUT_SUCCESS);
  });


  it('handle login flow: flow 3', async () => {
    sagaTester.dispatch(loginRequest(validLoginData()))
    sagaTester.dispatch(loginRequest(validLoginData()))

    await sagaTester.waitFor(LOGIN_SUCCESS)

    const action = await Promise.race([
      promiseDelay(true, 'ok'),
      sagaTester.waitFor(LOGIN_SUCCESS, true),
    ]);

    assert.notEqual(action.type, LOGIN_SUCCESS)
  });



  it('handle login flow: flow 4', async () => {
    sagaTester.dispatch(loginRequest(validLoginData()));
    sagaTester.dispatch(logoutRequest());

    await sagaTester.waitFor(LOGOUT_SUCCESS);

    const action = await Promise.race([
      promiseDelay(true, 'ok'),
      sagaTester.waitFor(LOGIN_SUCCESS, true),
    ]);

    assert.notEqual(action.type, LOGIN_SUCCESS)
  });


  it('handle login flow: flow 5', async () => {
    sagaTester.dispatch(loginRequest(invalidLoginData()))
    await sagaTester.waitFor(LOGIN_FAILED);
  });



});
