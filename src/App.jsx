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
import { Route, Routes } from "react-router-dom";
import MoreAbout from "./Components/MoreAbout/MoreAbout";

const App = () => {
  const [playState, setPlayState] = useState(false);

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
                <Footer />
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
              <Hero />

              <MoreAbout />
              <div className="container">
                {" "}
                <Footer />
              </div>
            </>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
