import { Selector } from 'redux-testkit';

import { permissionSelector } from '../../../src/store/selectors/auth';
import { user } from './helpers';


describe('auth selectors', () => {
  let state;

  beforeEach(() => {
    const userData = user();
    state = {
      auth: {
        currentUser: userData.id,
      },
      users: {
        [userData.id]: user(),
      },
    };
  });


  it('select permission level', () => {
    const result = {
      admin: true,
    };

    Selector(permissionSelector)
      .expect(state)
      .toReturn(result);

  });



});
