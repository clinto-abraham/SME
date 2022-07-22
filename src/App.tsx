import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import OurServices from "./Components/OurServices";
import Navbar from "./Components/Navbar";
import AboutUs from "./Components/About";
import Career from "./Components/Careers";
import Home from "./Components/Home";
import Account from "./Components/Account";
import Profile from "./Components/Profile";
import License from "./Components/License";
import Logout from "./Components/Logout";
import SignUp from "./Components/Profile/signUp";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="our-services" element={<OurServices />} />   
          <Route path="contact" element={<Contact />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="careers" element={<Career />} />

          <Route path="profile" element={<Profile />} />
          <Route path="account" element={<Account />} />
          <Route path="license-registration" element={<License />} />
          <Route path="logout" element={<Logout />} />
          <Route path="logout" element={<SignUp />} />
        </Routes>
        {/* <Home /> */}
        
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

// 
// import { Counter } from './features/Components/counter';
// import BottomNavbar from './features/Views/Navbar/BottomNavbar';
// import SlideNavbar from './features/Views/Navbar/SlideNavbar';
// import SpeedDialControlled from './features/Components/SpeedDialControlled';
// import TopNavbar from './features/Views/Navbar/TopNavbar';
// import CarouselBusiness from './features/Views/Carousal';
//

// {/* <header className="App-header">
//   
//  <SlideNavbar />
//  <CarouselBusiness />
//  <TopNavbar />
//  <SpeedDialControlled />
// </header>
// <BottomNavbar /> */}
