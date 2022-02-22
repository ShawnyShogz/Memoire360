import React from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import {Link} from "react-router-dom"
import { videos } from '../../constants';
import './Gallery.css';

const Gallery = () => {
  const scrollRef = React.useRef(null);
  const vidRef = React.useRef();

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <h1 className="headtext__cormorant">Media Gallery</h1>
        <p className="p__opensans" style={{ color: '#AAAAAA', marginTop: '2rem' }}>So many people have enjoyed the 360 experience we provide these are just a few but check out some more.</p>
        
          <Link to="/photogallery"><button type="button" className="custom__button">View More</button></Link>
         
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {[videos.chipMemoire, videos.budina[0], videos.konanMemoire,].map((video, index) => (
            <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
              <video ref={vidRef}
                      autoPlay={true}
                      src={video}
                      type="video/mp4"
                      loop
                      controls={false}
                      muted></video>
              <a className="gallery__image-icon" href='https://www.instagram.com/memoire_360/'><BsInstagram  /></a>
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;