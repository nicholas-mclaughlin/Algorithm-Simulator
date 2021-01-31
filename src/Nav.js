import React from 'react';
import { link, Link } from 'react-router-dom';

function Nav() {

    const coloring = {
      color: "white"
    }  

    return (
      
      <nav>
        <ul className="nav-links" >
          <Link style={coloring} to="/pathfinding">
            <li>Pathfinding Algorithms</li>
          </Link>
          <Link style={coloring} to="/">
            <li>Sorting Algorithms</li>
          </Link>
        </ul>
      </nav>
    );
  }
  
  export default Nav;