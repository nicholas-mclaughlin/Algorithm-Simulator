import React from 'react';
import './App.css';
import Pathfinding from './Pathfinding-Visualizer/Pathfinding.js';
import Sorting from './Sorting-Visualizer/Sorting.js';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
      <Route path="/" exact component={Sorting} />
      <Route path="/pathfinding" component={Pathfinding}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
