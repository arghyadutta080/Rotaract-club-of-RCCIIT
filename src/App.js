import './App.css';
import React from 'react';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App" style={{ overflowX: "hidden", overflowY: "hidden" }}>
      <HomePage />
    </div>
  );
}

export default App;
