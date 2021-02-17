import React, {useState, createContext} from 'react';

export const PathfindingContext = createContext();

export const PathfindingProvider = props => {

    const newGrid = () => {
        var grid = new Array(20);
        for (var i = 0; i < grid.length; i++) {
            grid[i] = new Array(50);
        }
    
        for (var i = 0; i < 20; i++) { 
            for (var j = 0; j < 50; j++) { 
                grid[i][j] = 0; 
            }
        }

        grid[0][0] = 2;
        grid[19][49] = 3;

        return grid;
    }

    // An array that represents the maze
    const [array, setArray] = useState(newGrid);
    // Variable to keep track of whether visualization has started
    const [start, setStart] = useState(false);
    // Type of algorithm to use
    const [Algorithm, setAlgorithm] = useState("BFS");
    // Maze type
    const [MazeType, setMazeType] = useState("Maze A")
    // Speed of animation
    const [speed, setSpeed] = useState(3);
    // The row of where the start node is
    const [startRow, setStartRow] = useState(0);
    // The column of where the start node is
    const [startColumn, setStartColumn] = useState(0);
    // The row of where the end node is
    const [endRow, setEndRow] = useState(19);
    // The column of where the end node is
    const [endColumn, setEndColumn] = useState(49);
    // To keep track of whether the new start node button has been pressed
    const [newStart, setNewStart] = useState(false);
    // To keep track of whether the new end node button has been pressed
    const [newEnd, setNewEnd] = useState(false);
    // To keep track of whether the new wall button has been pressed
    const [newWall, setNewWall] = useState(false);
    // To keep track of whether mouse is been pressed down.
    // For moving start or end, or dragging walls.
    const [mousePressed, setMousePressed] = useState(false);

    // Provides the context for the entire pathfinding visualizer
    return (
        <PathfindingContext.Provider 
            value = {{arrayVar: [array, setArray], startVar: [start, setStart], 
            algVar: [Algorithm, setAlgorithm], speedVar: [speed, setSpeed], mazeTypeVar: [MazeType, setMazeType],
            startRowVar: [startRow, setStartRow], startColumnVar: [startColumn, setStartColumn], 
            endRowVar: [endRow, setEndRow], endColumnVar: [endColumn, setEndColumn],
            newStartVar: [newStart, setNewStart], newEndVar: [newEnd, setNewEnd],
            newEndWall: [newWall, setNewWall], mousePressedVar: [mousePressed, setMousePressed]}}>
        {props.children}
        </PathfindingContext.Provider>
        );
};

