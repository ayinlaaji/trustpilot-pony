// @flow

import { compose, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./modules";

const store = compose(applyMiddleware(thunk))(createStore)(reducers);

export default store;
