import { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import menu_icon from "../../assets/menu-icon.png";
import { Link } from "react-router-dom";
<<<<<<< HEAD
=======
import { RxHamburgerMenu } from "react-icons/rx";
import { GiSittingDog } from "react-icons/gi";
import { LuDog } from "react-icons/lu";
>>>>>>> d5a5c9f7fa9a566b7a472473d80dc18d5380d578

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
<<<<<<< HEAD
      <img src={logo} alt="" className="logo" />
      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        <li>
          <Link to="/" smooth={true} offset={0} duration={500}>
=======
      {/* <img src={logo} alt="" className="logo" /> */}
      <GiSittingDog className="logo" />
      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        <li>
          <Link
            to="/"
            smooth={true}
            offset={0}
            duration={500}
            onClick={toggleMenu}
          >
>>>>>>> d5a5c9f7fa9a566b7a472473d80dc18d5380d578
            Home
          </Link>
        </li>
        <li>
          <Link to="/donate" smooth={true} offset={-260} duration={500}>
            Donate
          </Link>
        </li>
        <li>
          <Link to="/rescue" smooth={true} offset={-260} duration={500}>
<<<<<<< HEAD
            Request Rescue
          </Link>
        </li>
        <li>
          <Link to="/aboutus" smooth={true} offset={-150} duration={500}>
=======
            Rescue
          </Link>
        </li>
        <li>
          <Link
            to="/aboutus"
            smooth={true}
            offset={-150}
            duration={500}
            onClick={toggleMenu}
          >
>>>>>>> d5a5c9f7fa9a566b7a472473d80dc18d5380d578
            About us
          </Link>
        </li>
        <li>
          <Link to="/gallery" smooth={true} offset={-260} duration={500}>
            Gallery
          </Link>
        </li>
        <li>
          <Link to="/blog" smooth={true} offset={-260} duration={500}>
            Blog
          </Link>
        </li>
        <li>
          <Link to="/zaalim" smooth={true} offset={-260} duration={500}>
            Inspiration
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            smooth={true}
            offset={-260}
            duration={500}
            className="btn"
          >
<<<<<<< HEAD
            Contact us
          </Link>
        </li>
      </ul>
      <img src={menu_icon} alt="" className="menu-icon" onClick={toggleMenu} />
=======
            <LuDog />
            Donate
          </Link>
        </li>
      </ul>
      <RxHamburgerMenu className="menu-icon" onClick={toggleMenu} />
      {/* <img src={menu_icon} alt="" className="menu-icon" onClick={toggleMenu} /> */}
>>>>>>> d5a5c9f7fa9a566b7a472473d80dc18d5380d578
    </nav>
  );
};

export default Navbar;
