import {
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  USER_LOADED,
} from './types';
import { setAlert } from './alert';

export const loadUser = () => async (dispatch) => {
  try {
    // Essa função tentaria carregar usuário através da API
    //    throw Error();
    // TODO
    dispatch({
      type: USER_LOADED,
    });
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

export const login = (username, password) => async (dispatch) => {
  try {
    if (username !== 'elogroup' && password !== 'elogroup')
      throw Error(JSON.stringify({ msg: 'Credenciais invalidas' }));

    dispatch({
      type: LOGIN_SUCCESS,
    });
  } catch (error) {
    dispatch(setAlert(JSON.parse(error.message).msg, 'danger'));
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

export const logout = () => async (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};
