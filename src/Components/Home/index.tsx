import React from "react";
import { useLocation } from "react-router-dom";
import AboutUs from "../About";
import Contact from "../Contact";
import Header from "../Header";
import OurServices from "../OurServices";

const Home = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      {" "}
      <Header />
      
      {location.pathname === '/about-us'? null :  <AboutUs />}
      {location.pathname === '/our-services'? null :  <OurServices />} 
      {location.pathname === '/contact'? null :  <Contact />}
     
    </div>
  );
};

export default Home;
