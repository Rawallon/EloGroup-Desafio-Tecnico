import { SET_ALERT, REMOVE_ALERT } from '../actions/types';
const initialState = [];

export default function Alert(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_ALERT:
      return [...state, payload];
    case REMOVE_ALERT:
      return state.filter((el) => {
        return el.id !== payload.id;
      });
    default:
      return state;
  }
}
