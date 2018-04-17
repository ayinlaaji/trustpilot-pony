// @flow

import React, { Component } from "react";
import { connect } from "react-redux";
import { Provider } from "react-redux";
import store from "./redux/configure-store";

import CreateMaze from "./components/create-maze";
import MazeMap from "./components/maze-map";
import PonyControls from "./components/pony-controls";

const Disp = ({ mazeMap, mazeId }) => (
  <div>
    <MazeMap mazeId={mazeId} />
    <div style={{ float: "left", width: "20%" }}>
      <CreateMaze />
      {mazeMap ? <PonyControls mazeId={mazeId} /> : null}
    </div>
  </div>
);

const Disp2 = connect(({ maze }) => ({
  mazeMap: maze.mazeMap,
  mazeId: maze.mazeId
}))(Disp);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Disp2 />
      </Provider>
    );
  }
}
export default App;
