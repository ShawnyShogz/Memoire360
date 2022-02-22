import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      {/* <img src={images.G} alt="G_overlay" /> */}
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">What we do</h1>
        <p className="p__opensans">We specialise in 360 video booths and enclosures. We offer a unique experience to businesses and individuals, a unique way to promote and advertise your business or in the form of entertainment for weddings, birthday parties, graduations, Baby showers.</p>

      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.memoire360} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">How it works</h1>
        <p className="p__opensans">The 360 video booth is one of the hottest entertainment and event experiences currently on the market. Widely called a 360 photo booth, it is actually a video booth that captures 120 frames a second. Users step on to the platform, while a revolving arm spins 360 degrees around to capture slow-motion videos. The 360 video booth captures footage of the user from every angle creating a paparazzi vibe, essentially leaving your customers with pleasant/personal memories to take away. Who doesn’t love to feel like a celebrity?.</p>
        
      </div>
    </div>
  </div>
);

export default AboutUs;