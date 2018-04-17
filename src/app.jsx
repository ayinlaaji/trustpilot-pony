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
    <div style={{ margin: "0.5rem 0", marginLeft: "0.6rem" }}>
      <a target="_blank" href="https://github.com/ayinlaaji/maze-runner">
        Source code on Github
      </a>
      <h2>
        Interview problem here :
        <a
          target="_blank"
          href="https://ponychallenge.trustpilot.com/index.html"
        >
          Pony Challenge
        </a>
      </h2>
    </div>
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
