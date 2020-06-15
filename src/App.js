import React from 'react';
import './App.css';
import './styles/tailwind.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import RoomSection from './components/roomSection/RoomSection.jsx'
import Home from './components/Home/Home';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/room-section' component={RoomSection} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
