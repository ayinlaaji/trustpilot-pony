//@flow

var axios = require("axios");

const DOMAIN = "https://ponychallenge.trustpilot.com";
const END_POINT = `${DOMAIN}/pony-challenge/maze`;

const api = {
  createMaze: `${END_POINT}`,
  mazeState: `${END_POINT}`,
  movePony: id => `${END_POINT}/${id}`,
  printMaze: id => `${END_POINT}/${id}/print`
};

function createMaze(data) {
  return axios({
    method: "post",
    url: api.createMaze,
    data
  });
}

function mazeState(id) {
  return axios({
    method: "get",
    url: api.mazeState()
  });
}

function printMaze(id) {
  return axios({
    method: "get",
    url: api.printMaze(id)
  });
}

function movePony(id, direction) {
  return axios({
    method: "post",
    url: api.movePony(id),
    data: { direction }
  });
}

module.exports = {
  createMaze,
  mazeState,
  movePony,
  printMaze
};
