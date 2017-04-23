import { FETCH_POSTS_SUCCESS } from '../actions/post';

const initialState = {

};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS_SUCCESS: {
      const nextState = {...state };
      action.posts.forEach((post) => {
        nextState[post.id] = post;
      });
      
      return nextState;
    }

    default:
      return state;
  }
}
