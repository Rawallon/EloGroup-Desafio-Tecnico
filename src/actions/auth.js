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
    // dispatch({
    //   type: USER_LOADED,
    // });

    throw Error(); //Isso não deveria estar aqui, apenas para demonstração!
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

export const register = ({ email, password }) => async (dispatch) => {
  try {
    // const config = { headers: { 'Content-Type': 'application/json' } };
    // const body = JSON.stringify({ name, email, password });
    // const res = await axios.post('/api/users', body, config);
    // dispatch({
    //   type: REGISTER_SUCCESS,
    //   payload: res.data,
    // });
    // dispatch(loadUser());

    //Isso não deveria estar aqui, apenas para demonstração!
    dispatch({
      type: USER_LOADED,
    });
    //
  } catch (error) {
    const errors = error.response.data.errors;
    if (errors) {
      errors.forEach((err) => dispatch(setAlert(err.msg, 'danger')));
    }
    // dispatch({
    //   type: REGISTER_FAIL,
    // });
  }
};
