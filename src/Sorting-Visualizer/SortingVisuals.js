import React, { useState, useContext } from 'react';
import {SortingContext} from './SortingContext'




function SortingVisuals() {

    const {arrayVar, arrayTypeVar, startVar, algVar, sizeVar, speedVar} = useContext(SortingContext);
    const [array, setArray] = arrayVar;
    const [start, setStart] = startVar;
    const [Algorithm, setAlgorithm] = algVar;
    const [size, setSize] = sizeVar;



    /*
    const bubbleSort = (array) => {
        //if(!Array.isArray(array)) return -1; // --->if passed argument is not array
        //if(array.length<2) return array; // --->if array length is one or less
      
          let swapped=false
           var temp=0;
           var count =-1;
            var arrLength=0;
      
      
          do{
            count ++;
            swapped=false;
            arrLength = (array.length-1) - count; //---> not loop through sorted items
            for(let i=0; i<=count; i++){
                if(array[i]>array[i+1]){
                  temp=array[i+1];
                  array[i+1]=array[i];
                  array[i]=temp;
                  swapped=true;
                }
            }
          }
          
          while(swapped)
          
        } */


    return (

        <div className="SortingVisuals"> 
            {array.map((value, idx) => (
                <div
                className="array-bar"
                key={idx}
                style={{
                backgroundColor: 'Blue',
                height: `${value*1}%`,
            }}></div>
        ))}
        </div> 
      ); 
    }

    
    
    export default SortingVisuals;