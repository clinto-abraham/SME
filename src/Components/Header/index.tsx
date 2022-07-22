import React from "react";
// @ts-ignore
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBCarouselElement, MDBCarouselCaption } from 'mdb-react-ui-kit';
import { useSpring, animated } from '@react-spring/web'



function Header() {

    return (
      <header id="home">
        <>
        
    <MDBCarousel showControls showIndicators dark fade>
      <MDBCarouselInner>


        <MDBCarouselItem>
          <MDBCarouselElement height={650}  src='https://www.searates.com/design/images/import/blog-uploads/img-1637053505-7858.jpg' alt='...' />
          <MDBCarouselCaption>
          <h1 className="responsive-headline">{"Sabari Marine Enterprise"}</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>


        <MDBCarouselItem>
          <MDBCarouselElement height={650}  src='https://www.searates.com/design/images/import/blog-uploads/img-1637053512-2625.jpg' alt='...' />
          <MDBCarouselCaption>
          <h1 className="responsive-headline">{"Sabari Marine Enterprise"}</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>


        
        <MDBCarouselItem className='active'>
          <MDBCarouselElement height={650}  src='https://mdbootstrap.com/img/Photos/Slides/img%20(19).webp' alt='...' />
          <MDBCarouselCaption>
        <h1 className="responsive-headline">{"Sabari Marine Enterprise"}</h1>
         
            <p>Bikeeeee</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>


        <MDBCarouselItem>
          <MDBCarouselElement height={650} src={`https://aambpublicoceanservice.blob.core.windows.net/oceanserviceprod/news/apr22/evergreen-ship-header.jpg`} alt="don't" />
          <MDBCarouselCaption>
          <h1 className="responsive-headline">{"Sabari Marine Enterprise"}</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>

        <MDBCarouselItem>
          <MDBCarouselElement height={650}  src='https://www.ips-journal.eu/fileadmin/_processed_/9/9/csm_Reuters_Container_ship_inflation_7887969eb2.jpg' alt='...' />
          <MDBCarouselCaption>
          <h1 className="responsive-headline">{"Sabari Marine Enterprise"}</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        
    
        <MDBCarouselItem>
          <MDBCarouselElement height={650}  src=' https://www.searates.com/design/images/import/blog/0.37052700%201591688361.jpg' alt='...' />
          <MDBCarouselCaption>
          <h1 className="responsive-headline">{"Sabari Marine Enterprise"}</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>

       
      </MDBCarouselInner>
    </MDBCarousel>
  
        
        </>
        {/* <img src={`../../assets/business/ship1.jpeg`} alt=" sadf"/> */}
      </header>
         
    );
  }

export default Header;


// // @ts-ignore
// import ParticlesBg from "particles-bg";
// // @ts-ignore
// import Fade from "react-reveal";




// <ParticlesBg type="circle" bg={true} />

// <nav id="nav-wrap">
//   <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
//     Show navigation
//   </a>
//   <a className="mobile-btn" href="#home" title="Hide navigation">
//     Hide navigation
//   </a>

//   <ul id="nav" className="nav">
//     <li className="current">
//       <a className="smoothscroll" href="#home">
//         Home
//       </a>
//     </li>

//     <li>
//       <a className="smoothscroll" href="#about">
//         About
//       </a>
//     </li>

//     <li>
//       <a className="smoothscroll" href="#resume">
//         Resume
//       </a>
//     </li>

//     <li>
//       <a className="smoothscroll" href="#portfolio">
//         Works
//       </a>
//     </li>

//     <li>
//       <a className="smoothscroll" href="#contact">
//         Contact
//       </a>
//     </li>
//   </ul>
// </nav>

// <div className="row banner">
//   <div className="banner-text">
//     <Fade bottom>
//       
//     </Fade>
//     <Fade bottom duration={1200}>
//       <h3>{"I am a web development engineer and I use react and vue.js to develop pages. This project is a resume template that can be used as the project home page or resume page."}.</h3>
//     </Fade>
//     <hr />
//     <Fade bottom duration={2000}>
//       <ul className="social">
//         <a href={"project"} className="button btn project-btn">
//           <i className="fa fa-book"></i>Project
//         </a>
//         <a href={"github"} className="button btn github-btn">
//           <i className="fa fa-github"></i>Github
//         </a>
//       </ul>
//     </Fade>
//   </div>
// </div>

// <p className="scrolldown">
//   <a className="smoothscroll" href="#about">
//     <i className="icon-down-circle"></i>
//   </a>
// </p>