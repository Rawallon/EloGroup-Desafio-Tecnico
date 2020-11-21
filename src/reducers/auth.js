import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  AUTH_ERROR,
  USER_LOADED,
} from '../actions/types';

const initialState = {
  isAuthenticated: null,
  loading: true,
};

export default function Auth(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    // case REGISTER_SUCCESS:
    case USER_LOADED:
    case LOGIN_SUCCESS:
      return { ...state, ...payload, isAuthenticated: true, loading: false };
    // case REGISTER_FAIL:
    case LOGIN_FAIL:
    case LOGOUT:
    case AUTH_ERROR:
      return { ...state, isAuthenticated: false, loading: false };
    default:
      return state;
  }
}
