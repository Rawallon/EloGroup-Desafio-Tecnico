import { SHOW_MODAL, HIDE_MODAL } from '../actions/types';
const initialState = null;

export default function Alert(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SHOW_MODAL:
      return payload.id;
    case HIDE_MODAL:
      return null;
    default:
      return state;
  }
}
