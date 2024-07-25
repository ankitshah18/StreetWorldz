import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { ImFacebook2 } from "react-icons/im";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer container">
      <div className="footer-column">
        <img src="path-to-your-logo" alt="Logo" className="footer-logo" />
        <p>
          Dog Home Foundation, a place where dogs can find another home. It was
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
              <ImFacebook2 />
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSquareInstagram />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSquareXTwitter />
            </a>
          </li>
          <li>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Informations</h3>
        <ul className="footer-links">
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/who-we-are">Who We Are</Link>
          </li>
          <li>
            <Link to="/our-team">Our Team</Link>
          </li>
          <li>
            <Link to="/success-stories">Success Stories</Link>
          </li>
          <li>
            <Link to="/contact-us">Contact Us</Link>
          </li>
          <li>
            <Link to="/privacy-policy">Privacy Policy</Link>
          </li>
          <li>
            <Link to="/terms-and-conditions">Terms and Conditions</Link>
          </li>
          <li>
            <Link to="/refund-and-cancellation">Refund and Cancellation</Link>
          </li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Contact Us</h3>
        <p
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
        </p>
        <p>
          Mail Us:{" "}
          <a href="mailto:contact@doghomefoundation.com">
            contact@doghomefoundation.com
          </a>
        </p>
        <p>
          Call Us: <a href="tel:+919352727457">+91 93527 27457</a>
        </p>
        <p>
          Call Us: <a href="tel:+919696967396">+91 96969 67396</a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
