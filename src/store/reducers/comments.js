import { POST_COMMENT_SUCCESS, FETCH_COMMENTS_SUCCESS } from '../actions/comment';


const initialState = {

};

export default function comments(state = initialState, action) {
  switch (action.type) {

    case POST_COMMENT_SUCCESS: {
      return { ...state, [action.comment.id]: action.comment }
    }

    case FETCH_COMMENTS_SUCCESS: {
      const nextState = { ...state };
      action.comments.forEach(comment => {
        nextState[comment.id] = comment;
      });

      return nextState;
    }

    default:
      return state;
  }
}
