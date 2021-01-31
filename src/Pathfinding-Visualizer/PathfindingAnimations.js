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