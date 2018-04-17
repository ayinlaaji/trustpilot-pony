// @flow
import { movePony as move } from "../api";
import { printMaze } from "./maze";

// Action types
const MOVE_PONY = "MOVE_PONY";

// Actions

export const movePony = (id, direction) => {
  return async (dispatch, state) => {
    await move(id, direction);
    return dispatch(printMaze(id));
  };
};

// Default State
const defaults = {};

// Reducer
export default (state = defaults, action) => {
  switch (action.type) {
    default:
      return state;

    case MOVE_PONY:
      return Object.assign({}, state, action.payload);
  }
};
