import { FETCH_TODOS } from "../actions/types";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_TODOS:
      return { data: action.payload };
    default:
      return state;
  }
}