import React, {useState, createContext} from 'react';

export const SortingContext = createContext();

export const SortingProvider = props => {

    //Provides the context for the entire sorting visualizer
    const [isSorted, setIsSorted] = useState(true);
    const [array, setArray] = useState([]);
    const [arrayType, setArrayType] = useState('Random Array');
    const [start, setStart] = useState(false);
    const [Algorithm, setAlgorithm] = useState('Bubble Sort');
    const [size, setSize] = useState(30);
    const [speed, setSpeed] = useState(3);
    const [visualType, setVisualType] = useState('Bars');
    const [animationSpeed, setAnimationSpeed] = useState(5);
    const [running, setRunning] = useState(false);

    return (
        <SortingContext.Provider 
            value = {{isSortedVar: [isSorted, setIsSorted], arrayVar: [array, setArray], arrayTypeVar: [arrayType, setArrayType], startVar: [start, setStart], 
            algVar: [Algorithm, setAlgorithm], sizeVar: [size, setSize], speedVar: [speed, setSpeed], visualTypeVar: [visualType, setVisualType],
             animationSpeedVar: [animationSpeed, setAnimationSpeed], runningVar: [running, setRunning]}}>
        {props.children}
        </SortingContext.Provider>
        );
};

