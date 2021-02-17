import React, { useState, useContext } from 'react';
import {SortingContext} from './SortingContext'

function SortingVisuals() {

    // Gets the context needed from the SortingContext
    const {arrayVar} = useContext(SortingContext);
    const [array, setArray] = arrayVar;

    // Renders the actual visualization in which the height of the
    // bars are represented by the integer for the element of the
    // array.
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