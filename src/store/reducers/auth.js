import { LOGIN_SUCCESS } from '../actions/auth';


const initialState = {
  currentUser: null,
};


export default function auth(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS: {
      return {...state, currentUser: action.payload.user.id}
    }

    default:
      return state;
  }
}
