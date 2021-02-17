import React, {usestate, useContext} from 'react';
import PathfindingMenu from './PathfindingMenu';
import { PathfindingProvider } from './PathfindingContext';
import PathfindingVisuals from './PathfindingVisuals';

function Pathfinding() {

    // The entire pathfinding algorithm page
    // Splits into components Sorting Menu and Sorting Visuals
    return (
      <PathfindingProvider>
      <div className="Pathfinding">
        <PathfindingMenu/>
        <PathfindingVisuals/>
      </div>
      </PathfindingProvider>
    );
  }
  
  export default Pathfinding;