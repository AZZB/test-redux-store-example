import { createSelector } from 'reselect'



const userSelectById = (state, props) => state.users[props.username];


export const profileDataSelector = createSelector(
  userSelectById,
  ({id, username, avatar, fullname, bio, followers, following, posts}) => ({
    id,
    username,
    avatar,
    fullname,
    bio,
    followerCount: followers.length,
    followingCount: following.length,
    postsCount: posts.length,
  })
);
