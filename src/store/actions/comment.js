export const POST_COMMENT = 'POST_COMMENT';
export const postComment = (comment) => ({
  type: POST_COMMENT,
  comment,
});

export const POST_COMMENT_SUCCESS = 'POST_COMMENT_SUCCESS';
export const postCommentSuccess = (comment) => ({
  type: POST_COMMENT_SUCCESS,
  comment,
});

export const FETCH_COMMENTS = 'FETCH_COMMENTS';
export const fetchComments = (postId) => ({
  type: FETCH_COMMENTS,
  postId,
});

export const FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS';
export const fetchCommentsSuccess = comments => ({
  type: FETCH_COMMENTS_SUCCESS,
  comments,
});

export const FETCH_COMMENTS_FAILED = 'FETCH_COMMENTS_FAILED';
export const fetchCommentsFailed = (postId, errors) => ({
  type: FETCH_COMMENTS_FAILED,
  payload: {
    postId,
    errors,
  },
});
