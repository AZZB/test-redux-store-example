import { Selector } from 'redux-testkit';

import { profileDataSelector } from '../../../src/store/selectors/user';
import { user } from './helpers';
import state from '../helpers/state';




describe('user selectors', () => {


  it(' select profile data by username', () => {
    const result = {
      id: 'usfdlkfjfdf',
      username: 'AZZ_B',
      avatar: 'avatar-azz-b',
      fullname: 'BENEKA AZZEDDINE',
      bio: 'I like programming',
      followerCount: 0,
      followingCount: 0,
      postsCount: 2,
    }

    Selector(profileDataSelector)
      .expect(state(), { username: 'AZZ_B'})
      .toReturn(result);

  });



});
