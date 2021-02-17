import React, {usestate, useContext} from 'react';
import SortingMenu from './SortingMenu';
import { SortingProvider } from './SortingContext';
import SortingVisuals from './SortingVisuals';


// The entire sorting algorithm page
// Splits into components Sorting Menu and Sorting Visuals
function Sorting() {
  return (
    <SortingProvider>
    <div className="Sorting">
      <SortingMenu/>
      <SortingVisuals/>
    </div>
    </SortingProvider>
  );
}

export default Sorting;