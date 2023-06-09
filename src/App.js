import './App.css';
import React from 'react';
import HomePage from './pages/HomePage';
import EventPage from './pages/EventPage';
import NoticePage from './pages/NoticePage';
import TeamPage from './pages/TeamPage';
import ProfilePage from './pages/ProfilePage';

// importing profile pages components
import SignUp from './components/Authentication/SignUp'
import Login from './components/Authentication/LogIn'
import Profile from './components/Authentication/Profile'

import AuthState from './components/Context/Auth/AuthState';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"


function App() {
  return (
    <div className="App" style={{ overflowX: "hidden", overflowY: "hidden" }}>
      <AuthState>
        <Router>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/event" element={<EventPage />} />
            <Route exact path="/notice" element={<NoticePage />} />
            <Route exact path="/team" element={<TeamPage />} />
            <Route exact path="/profile" element={<ProfilePage />} />
            {/* routing ProfilePage components */}
            <Route exact path="/signup" element={<SignUp />} />
            <Route exact path="/login" element={<Login />} />
          </Routes>
        </Router>
      </AuthState>
    </div>
  );
}

export default App;