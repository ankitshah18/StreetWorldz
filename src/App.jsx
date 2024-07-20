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
import { Route, Routes, useLocation } from "react-router-dom";
import Blog from "./Components/Blog/Blog";
import MoreAbout from "./Components/MoreAbout/MoreAbout";
// import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [playState, setPlayState] = useState(false);
  const location = useLocation();
  const isAboutUsPage = location.pathname === "/aboutus";
  // console.log("aboutus", location.pathname);

  return (
    <div>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About setPlayState={setPlayState} />

              <Stories />
              <Donations />
              <div className="container">
                {/* <Title subTitle="Gallery" title="Campus Photos" /> */}

                {/* <Title subTitle="TESTIMONIALS" title="What Student Says" /> */}

                <Title subTitle="Contact Us" title="Get in Touch" />
                <Contact />
              </div>
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
              {/* <Hero additionalClass={isAboutUsPage ? "aboutus-hero" : ""} /> */}

              <MoreAbout />
              <div className="container"> {/* <Footer /> */}</div>
            </>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
