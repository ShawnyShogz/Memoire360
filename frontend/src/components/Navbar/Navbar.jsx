import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import {FaTiktok,FaInstagram,FaFacebookF} from 'react-icons/fa'
import { MdCameraAlt } from 'react-icons/md';
import {Link} from "react-router-dom"
import { HashLink } from 'react-router-hash-link';
import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <Link to="/">
        <img src={images.memoire360} alt="app__logo" />
        </Link>
      </div>
      <ul className="app__navbar-links">
        <Link to="/"><li className="p__opensans">Home</li></Link>
        <HashLink smooth to="/#about"><li className="p__opensans">About</li></HashLink>
        <Link to="/blog"><li className="p__opensans">Blog</li></Link>
        <Link to="/photogallery"><li className="p__opensans">Gallery</li></Link>
        <HashLink smooth to="/#contact"><li className="p__opensans">Contact</li></HashLink>
      </ul>
      <div className="app__navbar-socials">
      <a href="https://www.tiktok.com/@memoire360">
        <FaTiktok color="#fff" fontSize={27} />
        </a>
      </div>
      <div className="app__navbar-socials">
        <a href="https://www.instagram.com/memoire_360/">
        <FaInstagram color="#fff" fontSize={27}/> 
        </a>
      </div>
      <div className="app__navbar-socials">
      <a href="https://www.facebook.com/Memoire-360-111106981466757/">
        <FaFacebookF color="#fff" fontSize={27}/>
        </a>
      </div>
      
        
      <div className="app__navbar-login">
      <Link to="/booking" className="p__opensans">Book A Booth</Link>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdCameraAlt fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <Link to="/"><li onClick={() => setToggleMenu(false)}>Home</li></Link>
              <HashLink to="/#about"><li onClick={() => setToggleMenu(false)}>About</li></HashLink>
              <Link to="/blog"><li onClick={() => setToggleMenu(false)}>Blog</li></Link>
              <Link to="/photogallery"><li onClick={() => setToggleMenu(false)}>Gallery</li></Link>
              <HashLink to="/#contact"><li onClick={() => setToggleMenu(false)}>Contact</li></HashLink>
              <Link to="/booking"><li onClick={() => setToggleMenu(false)}>Book now</li></Link>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
