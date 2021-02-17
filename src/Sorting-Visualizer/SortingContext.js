import React, {useState, createContext} from 'react';

export const SortingContext = createContext();

export const SortingProvider = props => {

    // A boolean to see if the array is already sorted
    const [isSorted, setIsSorted] = useState(true);
    // The array that is visualized being sorted
    const [array, setArray] = useState([]);
    // Type of array before sorting. Can be random or reversed
    const [arrayType, setArrayType] = useState('Random Array');
    // To see if the visualization has been started
    const [start, setStart] = useState(false);
    // The type of algorithm to use to sort
    const [Algorithm, setAlgorithm] = useState('Bubble Sort');
    // The size of the array
    const [size, setSize] = useState(30);
    // The speed of the visualization. From 1-3 from slowest to
    // fastest.
    const [speed, setSpeed] = useState(3);
    // The visualization type. Currently only bars but may add
    // scatter plot in future.
    const [visualType, setVisualType] = useState('Bars');
    // Using speed, is the actual number of milliseconds for
    // animation speeds
    const [animationSpeed, setAnimationSpeed] = useState(5);
    // Checks if visualization had started running
    const [running, setRunning] = useState(false);

    // Provides the context for the entire sorting visualizer
    return (
        <SortingContext.Provider 
            value = {{isSortedVar: [isSorted, setIsSorted], arrayVar: [array, setArray], arrayTypeVar: [arrayType, setArrayType], startVar: [start, setStart], 
            algVar: [Algorithm, setAlgorithm], sizeVar: [size, setSize], speedVar: [speed, setSpeed], visualTypeVar: [visualType, setVisualType],
             animationSpeedVar: [animationSpeed, setAnimationSpeed], runningVar: [running, setRunning]}}>
        {props.children}
        </SortingContext.Provider>
        );
};

