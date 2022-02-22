
   
import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <h1 className="app__header-h1">The Ultimate Event Experience</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>We cater for parties and events of all shapes and sizes.
       If the saying is genuinely true a picture paints a thousand words, then our experiece will publish award winning novels. </p>
      <HashLink to="/#about"><button type="button" className="custom__button">Want to Know More?</button></HashLink>
    </div>

    <div className="app__wrapper_img">
      <img className="app_image" src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;