import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import jsonData from './Data.json';
import Navbar from './Components/Navbar.js';
import Rooms_Available from './Components/Rooms Available.js';
import Statistics_Overview from './Components/Statistics Overview.js';
import ProfileDashboard from './Pages/ProfileDashboard';

function App() {

  return (
    <div className="App">
      <Router>
      <Navbar {...jsonData.Navbar} />
        <Routes>
          <Route path="/ProfileDashboard" component={ProfileDashboard} />
        </Routes>
        <Rooms_Available {...jsonData.Rooms} />
          <Statistics_Overview {...jsonData.Statistics_Overview} />
      </Router>
    </div>
  );
}

export default App;
