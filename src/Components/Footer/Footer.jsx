import { Link } from "react-router-dom";

import { IoLocationSharp } from "react-icons/io5";
import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import whatsapp from "../../assets/Whatsapp.png";
import youtube from "../../assets/youtube.png";
import { GiSittingDog } from "react-icons/gi";

import "./Footer.css";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <>
      <div className="footer container">
        <div className="footer-column">
          <GiSittingDog className="footer-logo" size={44} />
          <p>
            StreetWorldz, a place where dogs can find another home. It was
            started with the simple idea of helping the poor stray dogs and
            treating them.
          </p>
          <p>Follow Us</p>
          <ul className="social-links">
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={facebook} alt="instagram" height={"40px"} />
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={instagram} alt="instagram" height={"40px"} />
              </a>
            </li>
            <li>
              <a href="" target="_blank" rel="noopener noreferrer">
                <img
                  src={whatsapp}
                  alt="instagram"
                  height={"40px"}
                  color="white"
                />
              </a>
            </li>
            <li>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={youtube} alt="instagram" height={"40px"} />
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Informations</h3>
          <ul className="footer-links">
            {/* <li>
            <Link to="/blog">Blog</Link>
          </li> */}
            <li>
              <Link to="/aboutus">Who We Are</Link>
            </li>
            <li>
              <Link to="/our-team">Our Team</Link>
            </li>
            <li>
              <Link to="/allstories">Success Stories</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/terms-and-conditions">Terms and Conditions</Link>
            </li>
            {/* <li>
              <Link to="/refund-and-cancellation">Refund and Cancellation</Link>
            </li> */}
          </ul>
        </div>
        <div className="footer-column">
          <h3>Contact Us</h3>
          {/* <p
          style={{
            display: "flex",

            alignItems: "center",
          }}
        >
          {" "}
          <IoLocationSharp className="location" />
          Address
        </p>
        <p>
          Ganesham Farm House Plot No.13, opp. GS Jangid School, Bujhawad,
          Jodhpur, Rajasthan 342802
        </p> */}
          <p>
            Mail Us :{" "}
            <a href="mailto:contact@doghomefoundation.com">
              streetworldzhelpline@gmail.com
            </a>
          </p>
          <p>
            Call Us : <a href="tel:+919352727457">+91 9667016057</a>
          </p>
          <p>
            Call Us : <a href="tel:+919696967396">+91 8860200400</a>
          </p>
        </div>
      </div>
      <div className="copyright">
        <p>
          © Copyright {date} StreetWorldz | Developed By :{" "}
          <span>StreetWorldz Team</span>
        </p>
      </div>
    </>
  );
};

export default Footer;
