import {
  FETCH_USER_SUCCESS,
} from '../actions/user';

import {
  LOGIN_SUCCESS,
} from '../actions/auth';


const initialState = {

};


export default function users(state = initialState, action = { type: ''}) {
  switch (action.type) {

    case FETCH_USER_SUCCESS: {
      return {...state, [action.user.username]: action.user}
    }

    case LOGIN_SUCCESS: {
      return {...state, [action.payload.user.username]: action.payload.user}
    }

    default:
      return state;
  }
}
