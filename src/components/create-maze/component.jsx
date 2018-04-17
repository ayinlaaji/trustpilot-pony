// @flow
//
import React, { Component } from "react";
import { connect } from "react-redux";
import { createMaze } from "../../redux/modules/maze";
import styled from "styled-components";

const Div = styled.div`
  box-shadow: 0.1px 4.5px 11.7px -2px;
  border: 0px solid white;
  padding: 0.3rem;
  h2 {
    text-align: center;
  }
  button {
    width: 100%;
    height: 3rem;
    :cursor: pointer;
  }
  div {
    margin-bottom: 1rem;
    input {
      width: 20%;
      float: right;
    }
  }
`;

class CreateMaze extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "maze-height": 15,
      "maze-width": 20,
      "maze-player-name": "spike",
      difficulty: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(ev) {
    const value = ev.target.value.trim();
    const data = {
      [ev.target.name]: typeof +value === "number" ? +value : value
    };
    return this.setState(data);
  }

  handleClick(ev) {
    ev.preventDefault();
    this.props.dispatch(createMaze(this.state));
  }

  render() {
    return (
      <Div>
        <h2> Create a maze</h2>
        <form>
          {Object.keys(this.state).map(key => (
            <div key={key}>
              <label> {key} </label>
              {typeof this.state[key] === "number" ? (
                <input
                  onChange={this.handleChange}
                  value={this.state[key]}
                  name={key}
                  type="number"
                  min={key === "difficulty" ? 0 : 15}
                  max={key === "difficulty" ? 10 : 25}
                />
              ) : (
                <input
                  onChange={this.handleChange}
                  value={this.state[key]}
                  name={key}
                  type={"text"}
                  placeholder={this.state[key]}
                />
              )}
            </div>
          ))}
          <button onClick={this.handleClick}>Create maze</button>
        </form>
      </Div>
    );
  }
}

export default connect(() => ({}))(CreateMaze);
