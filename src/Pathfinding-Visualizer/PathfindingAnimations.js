// Gets the moves to visualize breadth-first search
// Returns a object called animation which has the indices of on
// the maze it has been searched and will be animated, the previous
// square of the current searched square so that we can use this to
// find the shortest path, and the boolean attribute endReached, so
// that we can know when to stop the helper function getBFSAnimation
// and to know if we should find the shortest path since we know that
// the end node has been found.
export const BFSAnimations = (array, startRow, startColumn) => {
    var grid = new Array(20);
    for (var i = 0; i < grid.length; i++) {
        grid[i] = new Array(50);
    }

    const animation = {
        indices: [],
        prevSquare: grid,
        endReached: false
    };
    const arrayCopy = array.slice();
    const maxRow = array.length;
    const maxColumn = array[0].length;
    //animation.push([startRow, startColumn]);
    var queue = [];
    queue.push([startRow, startColumn]);         
    getBFSAnimations(animation, arrayCopy, queue, maxRow, maxColumn);
    return animation;
}

// A helper function for the breadth-first search animation.
// Uses a queue to perform BFS where while the queue is not empty,
// each adjacent node is pushed onto the queue and then the front
// of the queue is searched.
const getBFSAnimations = (animation, grid, queue, maxRow, maxColumn) => {
    while (queue.length != 0) {
        var current = queue.shift();
        var row = current[0];
        var col = current[1];
        if (row-1 >= 0 && grid[row-1][col] == 0) {
            queue.push([row-1, col]);
            animation.indices.push([row-1, col]);
            grid[row-1][col] = 4;
            animation.prevSquare[row-1][col] = [row, col];
        }
        else if (row-1 >= 0 && grid[row-1][col] == 3) {
            animation.prevSquare[row-1][col] = [row, col];
            animation.endReached = true;
            break;
        }

        if (col-1 >= 0 && grid[row][col-1] == 0) {
            queue.push([row, col-1]);
            animation.indices.push([row, col-1]);
            grid[row][col-1] = 4;
            animation.prevSquare[row][col-1] = [row, col];
        }
        else if (col-1 >= 0 && grid[row][col-1] == 3) {
            animation.prevSquare[row][col-1] = [row, col];
            animation.endReached = true;
            break;
        }

        if (col+1 < maxColumn && grid[row][col+1] == 0) {
            queue.push([row, col+1]);
            animation.indices.push([row, col+1]);
            grid[row][col+1] = 4;
            animation.prevSquare[row][col+1] = [row, col];
        }
        else if (col+1 < maxColumn && grid[row][col+1] == 3) {
            animation.prevSquare[row][col+1] = [row, col];
            animation.endReached = true;
            break;
        }

        if (row+1 < maxRow && grid[row+1][col] == 0) {
            queue.push([row+1, col]);
            animation.indices.push([row+1, col]);
            grid[row+1][col] = 4;
            animation.prevSquare[row+1][col] = [row, col];
        }
        else if (row+1 < maxRow && grid[row+1][col] == 3) {
            animation.prevSquare[row+1][col] = [row, col];
            animation.endReached = true;
            break;
        }
    }
}

// Currently not working properly
// Gets the moves to visualize depth-first search
// Returns a object called animation which has the indices of on
// the maze it has been searched and will be animated, the previous
// square of the current searched square so that we can use this to
// find the shortest path, and the boolean attribute endReached, so
// that we can know when to stop the helper function getDFSAnimation
// and to know if we should find the shortest path since we know that
// the end node has been found.
export const DFSAnimations = (array, startRow, startColumn) => {
    var grid = new Array(20);
    for (var i = 0; i < grid.length; i++) {
        grid[i] = new Array(50);
    }

    const animation = {
        indices: [],
        prevSquare: grid,
        endReached: false
    };
    const arrayCopy = array.slice();
    const maxRow = array.length;
    const maxColumn = array[0].length;
    //animation.push([startRow, startColumn]);
    var endReached = false;       
    getDFSAnimations(animation, arrayCopy, startRow, startColumn, maxRow, maxColumn, endReached);
    return animation;
}

// A helper function for the depth-first search animation.
// Uses recursion to perform DFS, where it recursively searches each adjacent node until
// the end has been reached or there are no adjacent nodes to the current node.
const getDFSAnimations = (animation, grid, row, col, maxRow, maxColumn, endReached) => {
    if (!endReached && row-1 >= 0 && grid[row-1][col] == 0) {
        animation.indices.push([row-1, col]);
        grid[row-1][col] = 4;
        animation.prevSquare[row-1][col] = [row, col];
        getDFSAnimations(animation, grid, row-1, col, maxRow, maxColumn);
    }
    else if (!endReached && row-1 >= 0 && grid[row-1][col] == 3) {
        animation.prevSquare[row-1][col] = [row, col];
        animation.endReached = true;
        endReached = true;
    }

    if (!endReached && col-1 >= 0 && grid[row][col-1] == 0) {
        animation.indices.push([row, col-1]);
        grid[row][col-1] = 4;
        animation.prevSquare[row][col-1] = [row, col];
        getDFSAnimations(animation, grid, row, col-1, maxRow, maxColumn);
    }
    else if (!endReached && col-1 >= 0 && grid[row][col-1] == 3) {
        animation.prevSquare[row][col-1] = [row, col];
        animation.endReached = true;
        endReached = true;
    }

    if (!endReached && col+1 < maxColumn && grid[row][col+1] == 0) {
        animation.indices.push([row, col+1]);
        grid[row][col+1] = 4;
        animation.prevSquare[row][col+1] = [row, col];
        getDFSAnimations(animation, grid, row, col+1, maxRow, maxColumn);
    }
    else if (!endReached && col+1 < maxColumn && grid[row][col+1] == 3) {
        animation.prevSquare[row][col+1] = [row, col];
        animation.endReached = true;
        endReached = true;
    }

    if (!endReached && row+1 < maxRow && grid[row+1][col] == 0) {
        animation.indices.push([row+1, col]);
        grid[row+1][col] = 4;
        animation.prevSquare[row+1][col] = [row, col];
        getDFSAnimations(animation, grid, row+1, col, maxRow, maxColumn);
    }
    else if (!endReached && row+1 < maxRow && grid[row+1][col] == 3) {
        animation.prevSquare[row+1][col] = [row, col];
        animation.endReached = true;
        endReached = true;
    }
}