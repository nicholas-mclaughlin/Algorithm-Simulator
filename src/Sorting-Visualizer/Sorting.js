import React, {usestate, useContext} from 'react';
import SortingMenu from './SortingMenu';
import { SortingProvider } from './SortingContext';
import SortingVisuals from './SortingVisuals';



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