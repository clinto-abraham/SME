import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/Components/counter';
import './App.css';
import BottomNavbar from './features/Views/Navbar/BottomNavbar';
import SlideNavbar from './features/Views/Navbar/SlideNavbar';
import SpeedDialControlled from './features/Components/SpeedDialControlled';
import TopNavbar from './features/Views/Navbar/TopNavbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <SlideNavbar />
       <TopNavbar />
       <SpeedDialControlled />
      </header>
      <BottomNavbar />
    </div>
  );
}

export default App;
