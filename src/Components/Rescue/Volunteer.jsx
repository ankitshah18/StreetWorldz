import cat from "../../assets/Cat.jpg";
import Footer from "../Footer/Footer";
import PhotoContainer from "../PhotoContainer/PhotoContainer";

import FormfacadeEmbed from "@formfacade/embed-react";

const Volunteer = () => {
  return (
    <>
      <div className="rescue-main-container">
        <PhotoContainer image={cat} text="Gallery" minHeight="30vh" />
        <div>
          <FormfacadeEmbed
            formFacadeURL="https://formfacade.com/include/111510382272805926172/form/1FAIpQLSchRese8F7mPI0_QzRa5vpL9FRWQHw55tB4kDpuj2hXn0A5ig/classic.js/?div=ff-compose"
            onSubmitForm={() => console.log("Form submitted")}
          />
        </div>
        <div className="footer-container">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Volunteer;
