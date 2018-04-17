// @flow

import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { movePony } from "../../redux/modules/pony";

type MotionProps = {
  direction: Array,
  bluePrints: Array,
  clicked: Function,
  index: Number
};

const rotate = index => {};

const Span = styled.span`
  cursor: ${props => (props.index > -1 ? "pointer" : "none")};
  height: ${props => (props.index > -1 ? "4rem" : 0)};
  border: ${props => (props.index > -1 ? "1px solid gray" : "none")};
  width: 33%;
  display: inline-block;
  box-sizing: border-box;
  text-align: center;
  transform: ${props => rotate(props.index)};
`;

const Motion = ({ direction, handleClick, index, position }: MotionProps) =>
  position === 0 ? (
    <Span />
  ) : (
    <Span
      index={index}
      onClick={ev => {
        ev.preventDefault();
        return handleClick(direction);
      }}
    >
      <p> {direction} </p>
    </Span>
  );

type ControlProps = {
  mazeMap: String
};

const PonyControl = ({
  dispatch,
  mazeId,
  directions = ["North", "West", "East", "South"],
  bluePrints = [0, 1, 0, 2, 0, 3, 0, 4, 0]
}: ControlProps) => (
  <div
    style={{
      marginTop: "4rem",
      height: "20rem"
    }}
  >
    {bluePrints.map((position, index) => {
      const dirInd = position - 1;
      const dirEle = directions[dirInd];

      return (
        <Motion
          position={position}
          index={directions.indexOf(dirEle)}
          direction={dirEle}
          key={index}
          handleClick={() => dispatch(movePony(mazeId, dirEle.toLowerCase()))}
        />
      );
    })}
  </div>
);

export default connect(({ maze }) => ({
  mazeId: maze.mazeId
}))(PonyControl);
