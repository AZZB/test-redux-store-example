import { createSelector } from 'reselect';



const selectPostById = (state, props) => state.posts[props.id];

const selectUserInfoByUsername = (state, username) => {
  const avatar = state.users[username].avatar;
  return {
    username: username,
    avatar: avatar,
  }
}

const selectPostsByUsername = (state, { username }) => {
  const idsPost = state.users[username].posts;

  const posts = idsPost.map( idPost => {
    const { id, postTime, content, desc, comments, liked_by } = selectPostById(state, {id: idPost});

    return {
      id, postTime, content, desc,
      commentsCount: comments.length,
      likesCount: liked_by.length,
      user: selectUserInfoByUsername(state, username)
    }
  });

  return posts;
}



export const commentsCountSelector = createSelector(
  selectPostById,
  (post) => post.comments.length
);


export const likesCountSelector = createSelector(
  selectPostById,
  (post) => post.liked_by.length
);



export const postsSelector = createSelector(
  selectPostsByUsername,
  (posts) => posts
);
