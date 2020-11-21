import { setAlert } from './alert';
import { ADD_LEAD, MOVE_LEAD, UPDATE_LEAD } from './types';

export const addCard = (formData) => (dispatch) => {
  const id = Math.random().toString(36).substr(2, 9);
  dispatch({
    type: ADD_LEAD,
    payload: {
      id: `card-${id}`,
      ...formData,
      createdat: Date.now(),
      list: '0-list',
    },
  });
  dispatch(setAlert('Lead criado com sucesso!', 'success'));
};
export const updateCard = (cardData) => (dispatch) => {
  cardData = { ...cardData, oport: cardData.oport.join(',') };
  dispatch({
    type: UPDATE_LEAD,
    payload: cardData,
  });
};
export const moveCard = (to, from, cardId) => (dispatch) => {
  if (
    (parseInt(from.droppableId) + 1 !== parseInt(to.droppableId)) &
    (from.droppableId !== to.droppableId)
  ) {
    dispatch(setAlert('Você não pode mover o lead para este lugar', 'danger'));
    return;
  }

  dispatch({
    type: MOVE_LEAD,
    payload: { to, from, cardId },
  });
};
