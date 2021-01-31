import React, {usestate, useContext} from 'react';
import {PathfindingContext} from './PathfindingContext'


function PathfindingVisuals() {

  const {arrayVar, startVar, algVar, speedVar, startRowVar, startColumnVar, endRowVar, 
    endColumnVar, newStartVar, newEndVar, newEndWall} = useContext(PathfindingContext);
  const [array, setArray] = arrayVar;
  const [start, setStart] = startVar;
  const [Algorithm, setAlgorithm] = algVar;
  const [speed, setSpeed] = speedVar;  
  const [startRow, setStartRow] = startRowVar 
  const [startColumn, setStartColumn] = startColumnVar
  const [endRow, setEndRow] = endRowVar;
  const [endColumn, setEndColumn] = endColumnVar
  const [newStart, setNewStart] = newStartVar;
  const [newEnd, setNewEnd] = newEndVar;
  const [newWall, setNewWall] = newEndWall;


  const getColor = value => {
    return  value == 1 ? 'Black'
            : value == 2 ? 'Green'
            : value == 3 ? 'Red'
            : value == 4 ? 'Aqua'
            : 'White';
  }

  const newNode = (rowidx, idx) => {
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

  return (
    <div className="PathfindingVisuals">
      {array.map((row, rowidx) => ( 
          row.map((value, idx) => (
              <button id = {`square ${rowidx} ${idx}`} className = "array-square" key = {idx} onClick={() => newNode(rowidx, idx)}
                style = {{backgroundColor: `${getColor(value)}`}}
              ></button>
          ))
      ))}
    </div>
  );
}
  
  export default PathfindingVisuals;