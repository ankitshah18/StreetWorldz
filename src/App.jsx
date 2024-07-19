import { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer";
import Stories from "./Components/SuccessStories/SuccessStories";
import Donations from "./Components/Donations/Donations";
import Campaign from "./Components/campaign/Campaign";


const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar />
      <Hero />

      {/* <Title subTitle="Our PROGRAM" title="What We Offer" /> */}
      {/* <Programs/> */}
      <About setPlayState={setPlayState} />
      <Campaign />
      <Donations />
      <Stories />
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
