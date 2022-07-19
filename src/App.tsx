import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/Components/counter';
import './App.css';
import BottomNavbar from './features/Views/Navbar/BottomNavbar';
import SlideNavbar from './features/Views/Navbar/SlideNavbar';
import SpeedDialControlled from './features/Components/SpeedDialControlled';
import TopNavbar from './features/Views/Navbar/TopNavbar';
import CarouselBusiness from './features/Views/Carousal';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Contact />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <SlideNavbar />
       <CarouselBusiness />
       <TopNavbar />
       <SpeedDialControlled />
      </header>
      <BottomNavbar /> */}
      <Footer />
    </div>
  );
}

export default App;
