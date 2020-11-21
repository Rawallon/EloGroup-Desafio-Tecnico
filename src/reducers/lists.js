import { ADD_LEAD, MOVE_LEAD } from '../actions/types';

const initialState = {
  '0-list': {
    title: 'Cliente em Potencial',
    cards: ['card-y9b6dmbdg', 'card-7c1wufqqk', 'card-ttkz1k89c'],
  },
  '1-list': {
    title: 'Dados Confirmados',
    cards: [],
  },
  '2-list': {
    title: 'Reunião Agendada',
    cards: [],
  },
};
const lists = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_LEAD:
      const { id } = payload;
      const listId = '0-list';
      const list = state[listId];
      list.cards.push(id);
      return { ...state, [listId]: list };

    case MOVE_LEAD:
      const { to, from } = payload;
      if (from.droppableId === to.droppableId) {
        const list = state[from.droppableId];
        const card = list.cards.splice(from.index, 1);
        list.cards.splice(to.index, 0, ...card);
        return { ...state, [from.droppableId]: list };
      }

      const listStart = state[from.droppableId];
      const card = listStart.cards.splice(from.index, 1);
      const listEnd = state[to.droppableId];

      listEnd.cards.splice(to.index, 0, ...card);
      return {
        ...state,
        [from.droppableId]: listStart,
        [to.droppableId]: listEnd,
      };
    default:
      return state;
  }
};

export default lists;
