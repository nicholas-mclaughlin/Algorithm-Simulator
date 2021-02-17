// Returns an array which contains a very basic maze.
// Probably made this in the least efficient possible way oops :(
export const createMazeA = (array, startRow, endRow, startColumn, endColumn) => {
    var newArray = new Array(20);
    for (var i = 0; i < newArray.length; i++) {
      newArray[i] = new Array(50);
    }

    for (var i = 0; i < 20; i++) { 
        for (var j = 0; j < 50; j++) { 
            newArray[i][j] = 0; 
        }
    }

    newArray[startRow][startColumn] = 2;
    newArray[endRow][endColumn] = 3;

    for (var i=5; i<9; i++) {
      if (newArray[i][5] == 0)
        newArray[i][5] = 1;
    }

    for (var i=8; i<13; i++) {
      if (newArray[i][10] == 0)
        newArray[i][10] = 1;
    }

    for (var i=0; i<array.length; i++) {
      if (newArray[i][15] == 0)
        newArray[i][15] = 1;
      if (i == 8)
        i = 12
      if (i == 16)
        i = 20
    }

    for (var i=9; i<array.length; i++) {
      if (newArray[i][20] == 0)
        newArray[i][20] = 1;
      if (i == 12)
        i = 15
    }

    for (var i=5; i<array.length; i++) {
      if (newArray[i][25] == 0)
        newArray[i][25] = 1;
      if (i == 8)
        i = 12
      if (i == 15)
        i = 20
    }

    for (var i=0; i<array.length; i++) {
      if (newArray[i][30] == 0)
        newArray[i][30] = 1;
      if (i == 4)
        i = 7
      if (i == 12)
        i = 15
    }

    for (var i=5; i<array.length; i++) {
      if (newArray[i][35] == 0)
        newArray[i][35] = 1;
      if (i == 8)
        i = 11
      if (i == 15)
        i = 20
    }

    for (var i=5; i<13; i++) {
      if (newArray[i][40] == 0)
        newArray[i][40] = 1;
    }

    for (var i=9; i<13; i++) {
      if (newArray[i][45] == 0)
        newArray[i][45] = 1;
    }

    for (var j=5; j<array[0].length; j++) {
      if (newArray[4][j] == 0)
        newArray[4][j] = 1;
      if (j == 10)
        j = 20
      if (j == 25)
        j = 34
      if (j == 45)
       j = 50  
    }
    for (var j=5; j<array[0].length; j++) {
      if (newArray[8][j] == 0)
        newArray[8][j] = 1;
      if (j == 20)
        j = 24
      if (j == 30)
        j = 44 
    }
    for (var j=0; j<array[0].length; j++) {
      if (newArray[12][j] == 0)
        newArray[12][j] = 1;
      if (j == 5)
        j = 14
      if (j == 20)
        j = 29
      if (j == 40)
        j = 50 
    }
    for (var j=5; j<array[0].length; j++) {
      if (newArray[16][j] == 0)
        newArray[16][j] = 1;
      if (j == 15)
        j = 24
      if (j == 35)
        j = 39
    }

    return newArray
  }

  // Creates a maze where walls are places in random locations except where the start
  // and end node are.
  export const createRandomMaze = (array, startRow, endRow, startColumn, endColumn) => {
    const newArray = array.slice();
      for (var i=0; i<array.length; i++) {
        for (var j=0; j<array[i].length; j++) {
          if (array[i][j] == 0 || array[i][j] == 1) {
            newArray[i][j] = Math.floor(Math.random() * Math.floor(2));
          }    
        }
      }
    return newArray;
  }

  export const recursiveMaze = array => {
    
  }