import React, {usestate, useContext} from 'react';
import {PathfindingContext} from './PathfindingContext'


function PathfindingVisuals() {

  // Gets the context needed from the PathfindingContext
  const {arrayVar, startRowVar, startColumnVar, endRowVar, 
    endColumnVar, newStartVar, newEndVar, newEndWall, mousePressedVar} = useContext(PathfindingContext);
  const [array, setArray] = arrayVar;
  const [startRow, setStartRow] = startRowVar 
  const [startColumn, setStartColumn] = startColumnVar
  const [endRow, setEndRow] = endRowVar;
  const [endColumn, setEndColumn] = endColumnVar
  const [newStart, setNewStart] = newStartVar;
  const [newEnd, setNewEnd] = newEndVar;
  const [newWall, setNewWall] = newEndWall;
  const [mousePressed, setMousePressed] = mousePressedVar;


  const mousePress = () => {
    setMousePressed(true);
  }

  const mouseUp = () => {
    setMousePressed(false);
  }

  // Depending on what the value of the element in the array is,
  // gives it a color.
  const getColor = value => {
    return  value == 1 ? 'Black'
            : value == 2 ? 'Green'
            : value == 3 ? 'Red'
            : value == 4 ? 'Aqua'
            : 'White';
  }

  // Sets a new type of node depending on where the cursor is
  // dragged and which button on the menu was pressed.
  // If the start node or end node button was pressed and the
  // cursor drags to a new square then the start or end node is
  // moved there.
  // If the new wall button was pressed then a new wall is created
  // everywhere the cursor is dragged over. Except the start and
  // end node.
  const newNode = (rowidx, idx) => {
    if (mousePressed) {
      if (newStart) {
        const newArray = array.slice();
        newArray[startRow][startColumn] = 0;
        setStartRow(rowidx);
        setStartColumn(idx);
        newArray[rowidx][idx] = 2;
        setArray(prevArray => newArray);
      }
      else if (newEnd) {
        const newArray = array.slice();
        newArray[endRow][endColumn] = 0;
        setEndRow(rowidx);
        setEndColumn(idx);
        newArray[rowidx][idx] = 3;
        setArray(prevArray => newArray);
      }

      else if (newWall) {
        const newArray = array.slice();
        if (newArray[rowidx][idx] == 0)
          newArray[rowidx][idx] = 1;
        else if (newArray[rowidx][idx] == 1)
          newArray[rowidx][idx] = 0;
        setArray(prevArray => newArray);
      }
    }
  }

  // Renders the actual visualization of the maze.
  // The color of the square depends on the value of the
  // element in the array.
  return (
    <div className="PathfindingVisuals">
      {array.map((row, rowidx) => ( 
          row.map((value, idx) => (
              <button id = {`square ${rowidx} ${idx}`} className = "array-square" key = {idx} 
                onMouseDown = {mousePress} onMouseUp = {mouseUp} onMouseEnter={() => newNode(rowidx, idx)}
                style = {{backgroundColor: `${getColor(value)}`}}
              ></button>
          ))
      ))}
    </div>
  );
}
  
  export default PathfindingVisuals;