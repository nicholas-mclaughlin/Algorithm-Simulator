import React, {usestate, useContext} from 'react';
import Nav from '../Nav.js'
import {PathfindingContext} from './PathfindingContext'
import {createMazeA, createRandomMaze} from './Mazes';
import {BFSAnimations, DFSAnimations} from './PathfindingAnimations';

function PathfindingMenu() {

    // Gets the context needed from the PathfindingContext
    const {arrayVar, algVar, mazeTypeVar, startRowVar, startColumnVar, endRowVar, 
          endColumnVar, newStartVar, newEndVar, newEndWall} = useContext(PathfindingContext);
    const [array, setArray] = arrayVar;
    const [Algorithm, setAlgorithm] = algVar;
    const [MazeType, setMazeType] = mazeTypeVar;
    const [startRow, setStartRow] = startRowVar 
    const [startColumn, setStartColumn] = startColumnVar
    const [endRow, setEndRow] = endRowVar;
    const [endColumn, setEndColumn] = endColumnVar
    const [newStart, setNewStart] = newStartVar;
    const [newEnd, setNewEnd] = newEndVar;
    const [newWall, setNewWall] = newEndWall;

    // Colors of squares that have been searched
    const FILLCOLOR = "Aqua";
    // Colors of the squares in the shortest path
    const PATHCOLOR = "Yellow"
    const ANIMATIONSPEED = 10;

  const changeAlg = e => {
    setAlgorithm(e.target.value);
  }

  // Creates a new grid.
  // Makes every single square except the current start and end nodes white.
  const newGrid = () => {
    var grid = new Array(20);
    for (var i = 0; i < grid.length; i++) {
        grid[i] = new Array(50);
    }

    for (var i = 0; i < 20; i++) { 
        for (var j = 0; j < 50; j++) { 
          if (array[i][j] != 2 && array[i][j] != 3)
            document.getElementById("square "+i.toString()+" "+j.toString()).style.backgroundColor = "White";
          grid[i][j] = 0; 
        }
    }

    grid[startRow][startColumn] = 2;
    grid[endRow][endColumn] = 3;
    setArray(prevArray => grid);
  }
    
  const changeMazeType = e => {
    setMazeType(e.target.value)
  }

  const newMaze = () => {
    if (MazeType == "Maze A") 
      setArray(prevArray => createMazeA(array, startRow, endRow, startColumn, endColumn));

    if (MazeType == "Random Maze") 
      setArray(prevArray => createRandomMaze(array, startRow, endRow, startColumn, endColumn));
  }

  // Gets the shortest path using the prevNode attribute from the animation of the pathfinding algo
  const getShortestPath = seqs => {
    //console.log(seqs.prevSquare);
    var path = [];
    path.unshift(seqs.prevSquare[endRow][endColumn]);
    //console.log(seqs.prevSquare[endRow][endColumn]);
    var prevRow = seqs.prevSquare[endRow][endColumn][0];
    var prevColumn = seqs.prevSquare[endRow][endColumn][1];

    while (1) {
      path.unshift(seqs.prevSquare[prevRow][prevColumn]);
      if (seqs.prevSquare[prevRow][prevColumn][0] == startRow && seqs.prevSquare[prevRow][prevColumn][1] == startColumn)
        break;
      if (prevColumn!= seqs.prevSquare[prevRow][prevColumn][1])
        path.unshift([prevRow, prevColumn]);
      console.log(seqs.prevSquare[prevRow][prevColumn]);
      prevRow = seqs.prevSquare[prevRow][prevColumn][0];
      prevColumn = seqs.prevSquare[prevRow][prevColumn][1];
    }
    path.shift();
    return path;
  }

  // Runs the algorithm. 
  // Using the animations from PathfindingAnimations.js, it uses a for loop and timeouts
  // to visualize the algorithm.
  // Calls each square by their unique id and then changes their background color, to
  // to show that it has been searched.
  // If the end node is reached then the shortestpath function is called.
  const runAlgorithm = animations => {
    var time = 1;

    for (var i=0; i<animations.indices.length; i++) {
      var row = animations.indices[i][0].toString();
      var col = animations.indices[i][1].toString();

      const id = "square " + animations.indices[i][0].toString() + " " + animations.indices[i][1].toString();
      const square = document.getElementById(id);

      setTimeout(() => {
        square.style.backgroundColor = FILLCOLOR;
      }, time * ANIMATIONSPEED);
      time++; 
    }
    if (animations.endReached) {
      const path = getShortestPath(animations);
      console.log(path);

      for (var i=0; i<path.length; i++) {
        const id = "square " + path[i][0].toString() + " " + path[i][1].toString();
        const square = document.getElementById(id);

        setTimeout(() => {
          square.style.backgroundColor = PATHCOLOR;
        }, time * ANIMATIONSPEED);
        time++; 
      }
    }
  }

  // Depending on the algorithm, we get its animation from PathfindingAnimations.js
  // and then we call the runAlgorithm function with animation as the argument.
  const findPath = () => {
    if (Algorithm == "BFS") {
      const animations = BFSAnimations(array, startRow, startColumn);
      runAlgorithm(animations);
    }
    else if (Algorithm == "DFS") {
      //onst animations = DFSAnimations(array, startRow, startColumn);
      //runAlgorithm(animations);
    }
    else if (Algorithm == "Dijkstra's") {
      const animations = BFSAnimations(array, startRow, startColumn);
      runAlgorithm(animations);
    }
    else if (Algorithm == "A*") {
      //onst animations = DFSAnimations(array, startRow, startColumn);
      //runAlgorithm(animations);
    }
  }

  const newStartNode = () => {
    setNewStart(!newStart);
    if (newEnd)
      setNewEnd(false);
    if (newWall)
      setNewWall(false);
  }

  const newEndNode = () => {
    setNewEnd(!newEnd);
    if (newStart)
      setNewStart(false);
    if (newWall)
      setNewWall(false);
  }

  const newWallNode = () => {
    setNewWall(!newWall);
    if (newStart)
      setNewStart(false);
    if (newEnd)
      setNewEnd(false);
    //console.log(array);
  }

    // The rendering of the menu at the top of the window
    return (
      <div className="PathfindingMenu">
        <Nav/>
        <select value={Algorithm} onChange={changeAlg}>
          <option value="BFS">Breadth-First Search</option>
          <option value="DFS">Depth-First Search</option>
          <option value="Dijkstra's">Dijkstra's</option>
          <option value="A*">A*</option>
        </select>
        <button onClick={findPath}>Start!</button>
        <button onClick={newGrid}>Clear</button>
        <select value={MazeType} onChange={changeMazeType}>
          <option value="Maze A">Maze A</option>
          <option value="Maze B">Maze B</option>
          <option value="Random Maze">Random Maze</option>
        </select>
        <button onClick={newMaze}>New Maze</button>



        <button onClick={newStartNode}>Move Start</button>
        <button onClick={newEndNode}>Move End</button>
        <button onClick={newWallNode}> Wall </button>
      
      </div>
    );
  }
  
  export default PathfindingMenu;
