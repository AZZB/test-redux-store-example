import { combineReducers } from 'redux';
import auth from './auth';
import users from './users';
import posts from './posts';
import comments from './comments';



export default combineReducers({
  auth,
  users,
  posts,
  comments,
});
