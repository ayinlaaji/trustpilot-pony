// @flow
import { movePony as move } from "../api";
import { printMaze } from "./maze";

// Action types
const MOVE_PONY = "MOVE_PONY";

// Actions
/*export const movePony = payload => ({
  type: MOVE_PONY,
  payload
});
*/
export const movePony = (id, direction) => {
  return (dispatch, state) => {
    const req = move(id, direction);
    req
      .then(({ data }) => {
        return dispatch(printMaze(id));
      })
      .catch(err => {
        //console.log(err);
      });
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
