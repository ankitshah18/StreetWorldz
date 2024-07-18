import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Programs from "./Components/Programs/Programs";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Campus from "./Components/Campus/Campus";
import Donations from "./Components/Donation/Donations";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer";

const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar />
      <Hero />

      {/* <Title subTitle="Our PROGRAM" title="What We Offer" /> */}
      {/* <Programs/> */}
      <About setPlayState={setPlayState} />
      <Campus />
      <Donations />
      <div className="container">
        {/* <Title subTitle="Gallery" title="Campus Photos" /> */}

        {/* <Title subTitle="TESTIMONIALS" title="What Student Says" /> */}

        <Title subTitle="Contact Us" title="Get in Touch" />
        <Contact />
        <Footer />
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  );
};

export default App;
