import React from 'react';
import { FiFacebook, FiInstagram } from 'react-icons/fi';
import {FaTiktok} from 'react-icons/fa'
import { MdCameraAlt } from 'react-icons/md';

import { FooterOverlay } from '../../components';
import NewsLetterSubscribe from '../../components/NewsLetterSubscribe/NewsLetterSubscribe'
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <NewsLetterSubscribe />
    <img src={images.memoire360} alt="footer_logo" />

    <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext" id="contact">Contact Us</h1>
        <p className="p__opensans">Nationwide</p>
        <p className="p__opensans"><a href ="tel:+447500622775">+44 7500622775</a></p>
        <p className="p__opensans"><a href ="tel:+447720270993">+44 7720270993</a></p>
        <p className="p__opensans">memoire360@outlook.com</p>

        <div className="app__footer-links_icons">
          <a href="https://www.facebook.com/Memoire-360-111106981466757/">
          <FiFacebook />
          </a>
          <a href="https://www.tiktok.com/@memoire360">
          <FaTiktok />
          </a>
          <a href="https://www.instagram.com/memoire_360/">
          <FiInstagram />
          </a>
        </div>
      </div>

    <div className="app__footer-links">
     
      <div className="app__footer-links_logo">
        <MdCameraAlt className="spoon__img"/>       
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2021 Memoire360. All Rights reserved.</p>
      <p className="p__opensans">Designed and Created By <a href="http://www.shawnyshogz.com">ShawnyShogz </a>
        </p>.
    </div>

  </div>
);

export default Footer;