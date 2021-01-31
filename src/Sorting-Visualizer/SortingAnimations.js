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