import React, {usestate, useContext} from 'react';

function PathfindingItems() {

    
    return (
      <div className="PathfindingItems">

        <button >Start Node</button>
        <button >End Node</button>
        <button> Wall </button>
        <button> Bomb Node </button>
        <button> Weight Node </button>

      </div>
    );
  }
  
  export default PathfindingItems;