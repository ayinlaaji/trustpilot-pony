import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const Div = styled.div`
  text-align: center;
  box-shadow: 0.1px 4.5px 11.7px -2px;
  margin: 0 0.7rem;
  float: left;
  border: 0px solid white;
  height: 100vh;
  width: 60%;
`;

const MazeMap = ({ mazeMap }) => (
  <Div>
    <pre> {mazeMap} </pre>
  </Div>
);

const mapPrintToMaze = ({ maze }) => ({ mazeMap: maze.mazeMap });

export default connect(mapPrintToMaze)(MazeMap);
