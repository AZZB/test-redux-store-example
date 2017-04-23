import { assert, expect } from 'chai';
import setupStore from '../../src/store';


describe('store', () => {

  let store;

  beforeEach(() => {
    store = setupStore();
  });

  it('should have an initialState', () => {
    const initialState = {
      auth: {
        currentUser: null,
      },
      users: {},
      posts: {},
      comments: {},
    };

    assert.deepEqual(store.getState(), initialState, 'different shape');
  });



});
