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
      // Const indica que não pode ser declarado novamente
      const list = state[listId];
      // Push funciona em consts
      list.cards.push(id);
      return { ...state, [listId]: list };

    case MOVE_LEAD:
      const { to, from } = payload;
      // Se estiver mudando a ordem do item
      if (from.droppableId === to.droppableId) {
        // Copia a lista de onde foi colocado
        const list = state[from.droppableId];
        // Remove da posição antiga
        const card = list.cards.splice(from.index, 1);
        // Coloca na nova
        list.cards.splice(to.index, 0, ...card);
        return { ...state, [from.droppableId]: list };
      }

      // Se estiver inserindo em outra coluna
      // Copia coluna que foi removido
      const listStart = state[from.droppableId];
      // Remove item do array
      const card = listStart.cards.splice(from.index, 1);
      // Copia coluna que foi colocado
      const listEnd = state[to.droppableId];
      // Adiciona na posição que foi colocado
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
