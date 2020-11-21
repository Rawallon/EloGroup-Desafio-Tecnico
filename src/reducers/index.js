import { combineReducers } from 'redux';
import lists from './lists';
import cards from './cards';
import alert from './alert';
import auth from './auth';
import modal from './modal';

export default combineReducers({
  alert,
  modal,
  auth,
  lists,
  cards,
});
