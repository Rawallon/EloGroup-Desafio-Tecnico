import { SHOW_MODAL, HIDE_MODAL } from './types';

export const showModal = (id) => (dispatch) => {
  dispatch({
    type: SHOW_MODAL,
    payload: { id },
  });
};

export const hideModal = () => (dispatch) => {
  dispatch({
    type: HIDE_MODAL,
  });
};
