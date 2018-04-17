// @flow
import {
  mazeState,
  printMaze as apiPrintMaze,
  createMaze as apiCreateMaze
} from "../api";

// Action types
const CREATE_MAZE = "CREATE_MAZE";
const CREATE_MAZE_FULFILLED = `${CREATE_MAZE}_FULFILLED`;
const CREATE_MAZE_FAILED = `${CREATE_MAZE}_FAILED`;

const PRINT_MAZE = "PRINT_MAZE";
const PRINT_MAZE_FULFILLED = `${PRINT_MAZE}_FULFILLED`;
const PRINT_MAZE_FAILED = `${PRINT_MAZE}_FAILED`;

const READ_MAZE = "READ_MAZE";
const READ_MAZE_FULFILLED = `${READ_MAZE}_FULFILLED`;
const READ_MAZE_FAILED = `${READ_MAZE}_FAILED`;

// Actions
export const printMaze = id => {
  return async (dispatch, state) => {
    dispatch({ type: CREATE_MAZE, payload: { isFetching: true } });
    const { data } = await apiPrintMaze(id);
    return dispatch(printMazeFulfilled({ mazeMap: data.trim() }));
  };
};

const createMazeFulfilled = payload => ({
  type: CREATE_MAZE_FULFILLED,
  payload
});

const printMazeFulfilled = payload => ({
  type: PRINT_MAZE_FULFILLED,
  payload
});

export const createMaze = payload => {
  return async (dispatch, state) => {
    dispatch({ type: CREATE_MAZE, payload: { isFetching: true } });

    const { data } = await apiCreateMaze(payload);
    const mazeId = data.maze_id;
    dispatch(createMazeFulfilled({ mazeId }));
    return dispatch(printMaze(mazeId));
  };
};

// Default State
const defaults = {
  mazeId: null,
  isFetching: false,
  mazeMap: null
};

// Reducer
export default (state = defaults, action) => {
  switch (action.type) {
    default:
      return state;

    case CREATE_MAZE:
      return Object.assign({}, state, action.payload);

    case PRINT_MAZE_FULFILLED:
      return Object.assign({}, state, action.payload);

    case CREATE_MAZE_FULFILLED:
      return Object.assign({}, state, { isFetching: false }, action.payload);
  }
};
