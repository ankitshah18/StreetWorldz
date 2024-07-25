import { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer";
import Stories from "./Components/SuccessStories/SuccessStories";
import Donations from "./Components/Donation/Donations";
<<<<<<< HEAD
import { Route, Routes } from "react-router-dom";
import MoreAbout from "./Components/MoreAbout/MoreAbout";
=======
import { Route, Routes, useLocation } from "react-router-dom";
import Blog from "./Components/Blog/Blog";
import MoreAbout from "./Components/MoreAbout/MoreAbout";
import Rescue from "./Components/Rescue/Rescue";
import Campaign from "./Components/Campaign/Campaign";
// import "bootstrap/dist/css/bootstrap.min.css";
>>>>>>> d5a5c9f7fa9a566b7a472473d80dc18d5380d578

const App = () => {
  const [playState, setPlayState] = useState(false);
  const location = useLocation();

  // console.log("aboutus", location.pathname);

  return (
    <div className="main-content">
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About setPlayState={setPlayState} />
<<<<<<< HEAD

              <Stories />
              <Donations />
              <div className="container">
                {/* <Title subTitle="Gallery" title="Campus Photos" /> */}

=======
              <Campaign />

              <Donations />
              <Stories />

              {/* <Stories /> */}
              <div className="container">
                {/* <Title subTitle="Gallery" title="Campus Photos" /> */}

>>>>>>> d5a5c9f7fa9a566b7a472473d80dc18d5380d578
                {/* <Title subTitle="TESTIMONIALS" title="What Student Says" /> */}

                <Title subTitle="Contact Us" title="Get in Touch" />
                <Contact />
<<<<<<< HEAD
                <Footer />
              </div>
=======
              </div>
              <Footer />
>>>>>>> d5a5c9f7fa9a566b7a472473d80dc18d5380d578
              <VideoPlayer playState={playState} setPlayState={setPlayState} />
            </>
          }
        />

        {/* <Title subTitle="Our PROGRAM" title="What We Offer" /> */}
        {/* <Programs/> */}
        <Route
          path="/aboutus"
          element={
            <>
<<<<<<< HEAD
              <Hero />

              <MoreAbout />
              <div className="container">
                {" "}
                <Footer />
              </div>
=======
              {/* <Hero additionalClass={isAboutUsPage ? "aboutus-hero" : ""} /> */}

              <MoreAbout />
              <div className="container"> {/* <Footer /> */}</div>
            </>
          }
        />
        <Route
          path="/rescue"
          element={
            <>
              <Rescue />
>>>>>>> d5a5c9f7fa9a566b7a472473d80dc18d5380d578
            </>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
