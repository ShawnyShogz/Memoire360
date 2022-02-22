import React from 'react';
import IndexCarousel from '../Carousel/Carousel'
import { SubHeading } from '../../components';
import { images, data } from '../../constants';
import './Testimonials.css';

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className="app__laurels_awards-card">
    <img src={imgUrl} alt="awards" />
    <div className="app__laurels_awards-card_content">
      <p className="p__cormorant" style={{ color: '#DCCA87' }}>{title}</p>
      <p className="p__opensans">{subtitle}</p>
    </div>
  </div>
);

const Testimonials = () => (

  <div className="app__bg " id="awards">
    <IndexCarousel />
    {/* <div className="app__wrapper_info">
      <SubHeading title="Awards & recognition" />
      <h1 className="headtext__cormorant">Our Testimonials</h1>

      <div className="app__laurels_awards">
        {data.awards.map((award) => <AwardCard award={award} key={award.title} />)}
      </div>
    </div>

    <div className="app__wrapper_img">
      <img src='' alt="laurels_img" />
    </div> */}

    
  </div>
  
);

export default Testimonials;