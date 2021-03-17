import { SET_ALERT, REMOVE_ALERT } from './types';

export const setAlert = (msg, alertType) => (dispatch) => {
  const id = Math.random().toString(36).substr(2, 9);

  // Pega id do timeout
  let timeName = setTimeout(() => {
    dispatch({
      type: REMOVE_ALERT,
      payload: { id },
    });
  }, 3000);

  dispatch({
    type: SET_ALERT,
    // Adicionado timeName
    payload: { msg, alertType, id, timeName },
  });

  // Codigo antigo:
  // Isso foi modificado por que mesmo se o usuário
  // removesse o alerta o Timeout era chamado
  // setTimeout(() => {
  //   dispatch({
  //     type: REMOVE_ALERT,
  //     payload: { id },
  //   });
  // }, 3000);
};
export const remAlert = (id, timeName) => (dispatch) => {
  //Remove Timeout
  clearTimeout(timeName);

  dispatch({
    type: REMOVE_ALERT,
    payload: { id },
  });
};
