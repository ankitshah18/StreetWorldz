import React from "react";
import "./MoreContact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";
import { Smartphone } from "lucide-react";
import PhotoContainer from "../PhotoContainer/PhotoContainer";
import contact from "../../assets/contactus.jpg";
import { MailOpen } from "lucide-react";
import { MapPin } from "lucide-react";
import Footer from "../Footer/Footer";

const MoreContact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    // ------Enter your web3forms access key below-------

    formData.append("access_key", "-----Enter your web3forms key----");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setResult(res.message);
      event.target.reset();
    } else {
      console.log("Error", res);
      setResult(res.message);
    }
  };

  return (
    <>
      <PhotoContainer image={contact} text="" minHeight="17vh" />
      <div className="contact-bottom container">
        <h2>Contact Us</h2>
        <div className="contact-container">
          <div className="box_contact">
            <Smartphone size={44} color={"#1bb7bc"} />

            <span>Help Line Number</span>
            <p>+91 9854595842</p>
            <p>+91 9854595842</p>
          </div>
          <div className="box_contact">
            <Smartphone size={44} color={"#1bb7bc"} />

            <span>Shelter Number</span>
            <p>+91 9854595842</p>
            <p>+91 9854595842</p>
          </div>
          <div className="box_contact">
            <MailOpen size={44} color={"#1bb7bc"} />

            <span>Email Us</span>
            <p>contact@gmail.com</p>
          </div>
          <div className="box_contact">
            <MapPin size={44} color={"#1bb7bc"} />

            <span>Address</span>
            <p>
              Ganesham Farm House Plot No.11/12/13, Opp. GS Jangid School,
              Bujhawad, Jodhpur, Rajasthan 342802
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default MoreContact;