// Gets the moves to visualize bubble sort
// Returns a object called animation which has a pair of elements
// of an array that gets highlighted, their respective heights,
// and a boolean in the attribute swap to swap the two elements.
export const bubbleAni = array => {
    const animation = {
        pairs: [],
        heights: [],
        swap: []
    };
    const arrayCopy = array.slice();
    getBubbleMoves(animation, arrayCopy, arrayCopy.length-1);
    
    return animation;
}

// A helper function for the bubble sort animation.
// index is the position in which the proper element has been
// sorted to. For example, if the index is 2 then everything after
// index 2 of the array has the correct element.
// This function loops through the array so that each element beside
// each other gets compared, where their index numbers, heights, and
// whether they need to be swapped or not are inserted into the animation
// object.
const getBubbleMoves = (ani, arr, index) => {
    if (index > 0) {
        for (var i = 0; i < index; i++) {
            ani.pairs.push([i, i+1]);
            ani.heights.push([arr[i], arr[i+1]]);
            if (arr[i] > arr[i+1]){
                ani.swap.push(true);
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
            }
            else
                ani.swap.push(false);
        }
        getBubbleMoves(ani, arr, index-1);
    }
}


// Gets the moves to visualize merge sort
// Returns a object called animation which has a left portion of
// the array and a right portion of the array which is to be merged,
// and their new respective heights after the merge, which means that
// the merged elements will be in ascending order.
export const mergeAni = array => {
    const animation = {
        leftMerge: [],
        rightMerge: [],
        newHeights: [],
    };
    const arrayCopy = array.slice();
    const indexArray = [];
    for (var i=0; i<arrayCopy.length; i++) {
        indexArray.push(i);
    }

    getMergeMoves(animation, arrayCopy, indexArray);
    
    return animation;
}

// A helper function for the bubble sort animation.
// Recursively divides the array into smaller pieces until they become size
// 1 in which then they become merged in ascending order.
const getMergeMoves = (ani, arr, indices) => {
    if (arr.length <= 1) 
        return arr;
    const mid = Math.floor(arr.length/2);
    const leftIndices = indices.slice(0, mid);
    const rightIndices = indices.slice(mid);
    const leftArr = getMergeMoves(ani, (arr.slice(0, mid)), leftIndices);
    const rightArr = getMergeMoves(ani, (arr.slice(mid)), rightIndices);

    return merge(ani, leftArr, rightArr, leftIndices, rightIndices);
}

// Merges the leftArr and rightArr. 
const merge = (ani, leftArr, rightArr, leftIndices, rightIndices) => {
    ani.leftMerge.push(leftIndices);
    ani.rightMerge.push(rightIndices);

    var mergedArray = [];
    var leftIndex = 0;
    var rightIndex = 0;
    const leftLength = leftArr.length;
    const rightLength = rightArr.length;

    while (leftIndex<leftLength && rightIndex<rightLength) {
        if (leftArr[leftIndex] < rightArr[rightIndex]) {
            mergedArray.push(leftArr[leftIndex]);
            leftIndex++;
        }
        else {
            mergedArray.push(rightArr[rightIndex]);
            rightIndex++;
        }
    }
    if (leftIndex<leftLength) 
        mergedArray = mergedArray.concat(leftArr.slice(leftIndex));
    else
        mergedArray = mergedArray.concat(rightArr.slice(rightIndex));

    ani.newHeights.push(mergedArray);
    return mergedArray;
}