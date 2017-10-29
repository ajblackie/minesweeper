'use strict';

var generatePlayerBoard = function generatePlayerBoard(numberOfRows, numberOfColumns) {
  var board = [];
  for (var rows = 0; rows < numberOfRows; rows++) {
    var row = [];
    for (var columns = 0; columns < numberOfColumns; columns++) {
      row.push(' ');
    }
    board.push(row);
  }
  return board;
};