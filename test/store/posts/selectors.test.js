import { Selector } from 'redux-testkit';
import { assert } from 'chai';

import {
  commentsCountSelector,
  likesCountSelector,
  postsSelector,
} from '../../../src/store/selectors/post';

import state from '../helpers/state';


describe('post selectors', () => {

  it('select count of commments', () => {
    Selector(commentsCountSelector)
    .expect(state(), {id: 'podlkfldkfjfjs'})
    .toReturn(2);
  });


  it('select count of likes', () => {
    Selector(likesCountSelector)
    .expect(state(), { id: 'podlkfldkfjfjs' })
    .toReturn(1);
  });

  it('select posts by username', () => {
    const result = Selector(postsSelector).execute(state(), {username: 'AZZ_B'})
    //console.log(result);
    assert.typeOf(result, 'array');
    assert.lengthOf(result, 2);
  });


});
