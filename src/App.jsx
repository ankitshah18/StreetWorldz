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
import Rescue from "./Components/Rescue/Rescue";
import Campaign from "./Components/Campaign/Campaign";
import Inspiration from "./Components/Inspiration/Inspiration";
import MoreContact from "./Components/MoreContact/MoreContact";
import Gallery from "./Components/Gallery/Gallery";
import Camels from "./Components/Gallery/Camels";
import Volunteer from "./Components/Rescue/Volunteer";
import FoodCampaign from "./Pages/FoodCampaign/OneDayMeal";
import { AppProvider } from "./Components/context/AppContext";
import SingleStory from "./Components/SuccessStories/SingleStory";
import AllStories from "./Components/SuccessStories/AllStories";
import TermsAndConditions from "./Pages/TermsAndConditions/TermsAndConditions";
import PrivacyPolicy from "./Pages/PrivacyPolicy/PrivacyPolicy";
import AllMeals from "./Components/Campaign/AllMeals";
import SingleMeal from "./Components/Campaign/SingleMeal";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [playState, setPlayState] = useState(false);
  const [routeTitle, setRouteTitle] = useState(
    localStorage.getItem("routeTitle") || ""
  );

  const location = useLocation();

  // console.log("aboutus", location.pathname);

  console.log("Route", routeTitle);

  return (
    <AppProvider>
      <ToastContainer position="top-center" />
      <div className="main-content">
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About setPlayState={setPlayState} />
                <Campaign setRouteTitle={setRouteTitle} />

                <Donations />
                <Stories />

                {/* <Stories /> */}
                <div className="container">
                  {/* <Title subTitle="Gallery" title="Campus Photos" /> */}

                  {/* <Title subTitle="TESTIMONIALS" title="What Student Says" /> */}

                  <Title subTitle="Contact Us" title="Get in Touch" />
                  <Contact />
                </div>
                <Footer />
                <VideoPlayer
                  playState={playState}
                  setPlayState={setPlayState}
                />
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
          <Route
            path="/rescue"
            element={
              <>
                <Rescue />
              </>
            }
          />
          <Route
            path="/volunteer"
            element={
              <>
                <Volunteer />
              </>
            }
          />

          <Route
            path="/contact"
            element={
              <>
                <MoreContact />
              </>
            }
          />
          <Route
            path="/zaalim"
            element={
              <>
                <Inspiration />
              </>
            }
          />
          <Route
            path="/gallery"
            element={
              <>
                <Gallery />
              </>
            }
          />
          <Route
            path="/gallery/camels"
            element={
              <>
                <Camels />
              </>
            }
          />
          <Route
            path="/featuredFoodCampaign/:title"
            element={
              <>
                <FoodCampaign />
              </>
            }
          />
          <Route path="/allmeals" element={<AllMeals />} />
          <Route path="/SingleMeal/:title" element={<SingleMeal />} />
          <Route path="/SingleStory/:title" element={<SingleStory />} />
          <Route path="/allstories" element={<AllStories />} />
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditions />}
          />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </div>
    </AppProvider>
  );
};

export default App;
