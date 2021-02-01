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

    const [array, setArray] = useState(newGrid);
    const [start, setStart] = useState(false);
    const [Algorithm, setAlgorithm] = useState("BFS");
    const [MazeType, setMazeType] = useState("Maze A")
    const [speed, setSpeed] = useState(3);
    const [startRow, setStartRow] = useState(0);
    const [startColumn, setStartColumn] = useState(0);
    const [endRow, setEndRow] = useState(19);
    const [endColumn, setEndColumn] = useState(49);
    const [newStart, setNewStart] = useState(false);
    const [newEnd, setNewEnd] = useState(false);
    const [newWall, setNewWall] = useState(false);
    const [mousePressed, setMousePressed] = useState(false);

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

