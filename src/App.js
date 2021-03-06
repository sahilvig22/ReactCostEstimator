import React from 'react';
import './App.css';
import './styles/tailwind.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import RoomSection from './components/roomSection/RoomSection.jsx'
import Home from './components/Home/Home.jsx';
import Calculate from './components/Calculate/Calculate.jsx'
import ProductSelection from './components/ProductSelection/ProductSelection';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/calculate' component={Calculate} />
          <Route path='/room-section' component={RoomSection} />
          <Route path='/product-selection/:floor/:bathroom/:area' component={ProductSelection} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
