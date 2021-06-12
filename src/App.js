import React from 'react';
import './App.css';
import Header from './components/userInterface/Header';
import Sidebar from './components/userInterface/Sidebar';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />
      <div className="" >
        <Sidebar />
      </div>
      {/* Sidebar */}
      
      {/* React-Router -> The chat screen you are going to view */}
    </div>
  );
}

export default App;
