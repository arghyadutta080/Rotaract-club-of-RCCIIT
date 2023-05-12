import './App.css';
import React from 'react';
import HomePage from './pages/HomePage';
import EventPage from './pages/EventPage';
import NoticePage from './pages/NoticePage';
import TeamPage from './pages/TeamPage';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"


function App() {
  return (
    <div className="App" style={{ overflowX: "hidden", overflowY: "hidden" }}>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/event" element={<EventPage />} />
          <Route exact path="/notice" element={<NoticePage />} />
          <Route exact path="/team" element={<TeamPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
