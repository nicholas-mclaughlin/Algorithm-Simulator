import React, { useState, useContext } from 'react';
import Nav from '../Nav.js'
import {SortingContext} from './SortingContext'
import {bubbleAni, mergeAni} from './SortingAnimations';


function SortingMenu() {

    // Gets the context needed from the SortingContext
    const {isSortedVar, arrayVar, arrayTypeVar, algVar, sizeVar, 
      speedVar, visualTypeVar, animationSpeedVar, runningVar} = useContext(SortingContext);
    const [isSorted, setIsSorted] = isSortedVar;
    const [array, setArray] = arrayVar;
    const [arrayType, setArrayType] = arrayTypeVar;
    const [Algorithm, setAlgorithm] = algVar;
    const [size, setSize] = sizeVar;
    const [speed, setSpeed] = speedVar;
    const [visualType, setVisualType] = visualTypeVar;
    const [animationSpeed, setAnimationSpeed] = animationSpeedVar;
    const [running, setRunning] = runningVar;

    const ORIGINALCOLOR = "Blue";
    const SWAPCOLOR = "Green";
    const COMPARINGCOLOR = "Red";
    const SORTEDSPEED = 10;

    const changeAlg = e => {
      setAlgorithm(e.target.value);
    }

    const changeArrayType = e => {
      setArrayType(e.target.value);
    }

    const changeSize = e => {
      setSize(e.target.value);
      var output = document.getElementById("sizevalue");
      output.innerHTML = e.target.value;
    }

    const changeSpeed = e => {
      setSpeed(e.target.value);
      if (e.target.value == 1) {
        setAnimationSpeed(500);
      }
      else if (e.target.value == 2)
        setAnimationSpeed(20);
      else if (e.target.value == 3)
      setAnimationSpeed(5);
      var output = document.getElementById("speedvalue");
      output.innerHTML = e.target.value;
    }

    const changeVisualType = e => {
      setVisualType(e.target.value);
    }

    // Creates a new array if the visualization is not currently running
    // Creates a different type of array depending on what arrayType is set to.
    const newArray = () => {
      if (!running) {
        setIsSorted(false);
        var unsortedArray = new Array(size);

        if (arrayType === "Random Array"){
          for (var i = 0; i < size; i++) {
            unsortedArray[i] = i+1;
          }

          var index = unsortedArray.length

          while (0 !== index) {

            // Pick a remaining element...
            var randomIndex = Math.floor(Math.random() * index);
            index -= 1;
        
            // And swap it with the current element.
            var temporaryValue = unsortedArray[index];
            unsortedArray[index] = unsortedArray[randomIndex];
            unsortedArray[randomIndex] = temporaryValue;
          }
        }
        /*
        else if (arrayType === "Reverse Array") {
          for (var i = size-1; i >= 0; i--) {
            unsortedArray.push(i);
          }
        }
        */
        else if (arrayType === "Reverse Array") {
          for (var i = 0; i < size; i++) {
            unsortedArray[i] = size-i-1;
          }
        }
      
        setArray(prevArray => unsortedArray);

        const arrayBars = document.getElementsByClassName('array-bar');

        /*Tested but didnt seem to fix issue
        if (arrayType === "Reverse Array") {
          for (var i=0; i < array.length; i++){
            arrayBars[i].height = unsortedArray[i];
          }   
        }
        */
       
        for (var i=0; i < array.length; i++){
          arrayBars[i].style.backgroundColor = ORIGINALCOLOR;
        } 
      }
    }

    // Gets the animations for bubble sort from SortingAnimations.js
    // then visualizes it using loops and timeouts.
    // Speed of visualization depends on what animationSpeed is set to.
    const bubbleSort = () => {
      const animations = bubbleAni(array);
      const bars = document.getElementsByClassName('array-bar');
      var time = 1;
      
      for (var i=0; i<animations.pairs.length; i++){

        const firstBarStyle = bars[animations.pairs[i][0]].style;
        const secondBarStyle = bars[animations.pairs[i][1]].style;

        setTimeout(() => {
          firstBarStyle.backgroundColor = COMPARINGCOLOR;
          secondBarStyle.backgroundColor = COMPARINGCOLOR;
        }, time * animationSpeed);
        time++;

        if (animations.swap[i]) {
          const h1 = animations.heights[i][1];
          const h2 = animations.heights[i][0];
          setTimeout(() => {
            firstBarStyle.height = `${h1}%`;
            secondBarStyle.height = `${h2}%`;
            firstBarStyle.backgroundColor = SWAPCOLOR;
            secondBarStyle.backgroundColor = SWAPCOLOR;
          }, time * animationSpeed);
          time++;
        }
        else {
          setTimeout(() => {
          }, time * animationSpeed);
          time++;
        }        

        setTimeout(() => {
          firstBarStyle.backgroundColor = ORIGINALCOLOR;
          secondBarStyle.backgroundColor = ORIGINALCOLOR;
        }, time * animationSpeed);
        time++;
      }

      for (var j=0; j<array.length; j++) {
        const bar = bars[j];
        setTimeout(() => {
          bar.style.backgroundColor = "Green";
        }, time * animationSpeed);
        time++
      }
      setTimeout(() => {
        setIsSorted(true);
        setRunning(false);
      }, time * animationSpeed);
      time++
    }
    

    // Gets the animations for merge sort from SortingAnimations.js
    // then visualizes it using loops and timeouts.
    // Speed of visualization depends on what animationSpeed is set to.
    const mergeSort = () => {
      const animations = mergeAni(array);
      const bars = document.getElementsByClassName('array-bar');
      var time = 1;

      for (var i=0; i<animations.newHeights.length; i++){
        for (var j=0; j<animations.rightMerge[i].length; j++) {
          if (j < animations.leftMerge[i].length) {
            const firstBarStyle = bars[animations.leftMerge[i][j]].style;
            const secondBarStyle = bars[animations.rightMerge[i][j]].style;
            setTimeout(() => {
              firstBarStyle.backgroundColor = COMPARINGCOLOR;
              secondBarStyle.backgroundColor = COMPARINGCOLOR;
            }, time * animationSpeed);
            time++;
            setTimeout(() => {
              firstBarStyle.backgroundColor = ORIGINALCOLOR;
              secondBarStyle.backgroundColor = ORIGINALCOLOR;
            }, time * animationSpeed);
            time++;
          }
          else {
            const secondBarStyle = bars[animations.rightMerge[i][j]].style;
            setTimeout(() => {
              secondBarStyle.backgroundColor = COMPARINGCOLOR;
            }, time * animationSpeed);
            time++;
            setTimeout(() => {
              secondBarStyle.backgroundColor = ORIGINALCOLOR;
            }, time * animationSpeed);
            time++;
          }
        }
        
        const currentIndices = animations.leftMerge[i].concat(animations.rightMerge[i]);
        console.log(currentIndices);
        for (var k=0; k<animations.newHeights[i].length; k++) {       
          const currentBarStyle = bars[currentIndices[k]].style;
          const h = animations.newHeights[i][k];
          setTimeout(() => {
            currentBarStyle.backgroundColor = SWAPCOLOR;
            currentBarStyle.height = `${h}%`;
          }, time * animationSpeed);
          time++;
          setTimeout(() => {
            currentBarStyle.backgroundColor = ORIGINALCOLOR;
          }, time * animationSpeed);
          time++;
        }
      }

      for (var j=0; j<array.length; j++) {
        const bar = bars[j];
        setTimeout(() => {
          bar.style.backgroundColor = "Green";
        }, time * animationSpeed);
        time++
      }
      setTimeout(() => {
        setIsSorted(true);
        setRunning(false);
      }, time * animationSpeed);
      time++
    }


    // If the array isn't already sorted and the visualization
    // isn't already started then, start visualization
    const startVis = () => {
      if (!isSorted && !running) {
        setRunning(true);
        if (Algorithm === "Bubble Sort")
          bubbleSort();
        else if (Algorithm === "Merge Sort")
          mergeSort();
      }
    }

    // The rendering of the menu at the top
    return (
      <div className="SortingMenu">
        <Nav/>
        <button onClick={startVis}>Start!</button>
        
        <select value={visualType} onChange={changeVisualType}>
          <option value="Bars">Bars</option>
          <option value="Scatter Plot">Scatter Plot</option>
        </select>

        <select value={Algorithm} onChange={changeAlg}>
          <option value="Bubble Sort">Bubble Sort</option>
          <option value="Merge Sort">Merge Sort</option>
        </select>

        <select value={arrayType} onChange={changeArrayType}>
          <option value="Random Array">Random Array</option>
          <option value="Reverse Array">Reverse Array</option>
        </select>

        <button onClick={newArray}>New Array</button>

        <div id="sizecontainer">
          <h3 id="sizeoutput">Size: <span id="sizevalue">{size}</span></h3>
            <input 
              id="size" 
              type="range" 
              min="3" max="100" 
              value={size} 
              onChange={changeSize}
              step="1"/>  
        </div>
        <div id="speedcontainer">
          <h3 id="speedoutput">Speed: <span id="speedvalue">{speed}</span></h3>
          <input 
            id="speed" 
            type="range" 
            min="1" max="3" 
            value={speed} 
            onChange={changeSpeed}
            step="1"/>
        </div>
      </div>
    ); 
  }

  export default SortingMenu;