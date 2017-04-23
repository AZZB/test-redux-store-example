export const FETCH_POSTS = 'FETCH_POSTS';
export const fetchPosts = () => ({
  type: FETCH_POSTS,
});

export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const fetchPostsSuccess = (posts) => ({
  type: FETCH_POSTS_SUCCESS,
  posts,
});

export const FETCH_POSTS_FAILED = 'FETCH_POSTS_FAILED';
export const fetchPostsFailed = (username, errors) => ({
  type: FETCH_POSTS_FAILED,
  payload: {
    username,
    errors,
  },
});

export const FETCH_POSTS_BY_USERNAME = 'FETCH_POSTS_BY_USERNAME';
export const fetchPostsByUsername = (username) => ({
  type: FETCH_POSTS_BY_USERNAME,
  username,
});
