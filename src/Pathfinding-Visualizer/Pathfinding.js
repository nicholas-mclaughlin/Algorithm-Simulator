import React, {usestate, useContext} from 'react';
import PathfindingMenu from './PathfindingMenu';
import { PathfindingProvider } from './PathfindingContext';
import PathfindingVisuals from './PathfindingVisuals';
import PathfindingItems from './PathfindingItems'

function Pathfinding() {

    
    return (
      <PathfindingProvider>
      <div className="Pathfinding">

        <PathfindingMenu/>
        {/*<PathfindingItems/>*/}
        <PathfindingVisuals/>
        
      </div>
      </PathfindingProvider>
    );
  }
  
  export default Pathfinding;