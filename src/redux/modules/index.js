// @flow
import { combineReducers } from "redux";

import pony from "./pony";
import maze from "./maze";

const reducers = {
  pony,
  maze
};

export default combineReducers(reducers);
