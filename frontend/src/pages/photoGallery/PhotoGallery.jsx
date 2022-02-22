import React from 'react'
import { useState } from 'react';
import { Navbar } from '../../components';
import { images } from '../../constants';
import './PhotoGallery.css';
import ImageModal from '../../components/ImageModal/ImageModal';

const PhotoGallery = () => {
    const [clickedImg, setClickedImg] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(null);
    const [media, setMedia] = useState(null);

    const handleClick = (item, index) => {
        setCurrentIndex(index);
        {item.imgSrc ? setClickedImg(item.imgSrc): setClickedImg(item.vidSrc);}
        setImageOrVideo();
        
      };
      


    const data = [
        {
            id: 1,
            imgSrc: images.img1,
        },
        {
            id: 2,
            imgSrc:images.img2,
        },
        {
            id: 3,
            imgSrc:images.img3,
        },
        {
            id: 4,
            imgSrc:images.img4,
        },
        {
            id: 5,
            imgSrc:images.img5,
        },
        {
            id: 6,
            vidSrc:images.hautedolci,
        },
        {
            id: 7,
            imgSrc:images.img6,
        },
        {
            id: 8,
            vidSrc:images.vid1,
        },  
        {
          id: 9,
          vidSrc:images.vid2,
        },
        {
          id: 10,
          vidSrc:images.vid3,
        },
        {
          id: 11,
          vidSrc:images.vid4,
        },
        {
          id: 12,
          vidSrc:images.vid5,
        },
        {
          id: 13,
          vidSrc:images.vid6,
        },
        {
          id: 14,
          vidSrc:images.vid7,
        },
        {
          id: 15,
          vidSrc:images.vid8,
        },
        {
          id: 16,
          vidSrc:images.vid9,
        },
        {
          id: 17,
          vidSrc:images.vid10,
        },
        {
          id: 18,
          vidSrc:images.vid11,
        },
        {
          id: 19,
          vidSrc:images.vid12,
        },
        {
          id: 20,
          vidSrc:images.vid13,
        },
        {
          id: 21,
          vidSrc:images.vid14,
        },
        {
          id: 22,
          vidSrc:images.vid15,
        },
        {
          id: 23,
          vidSrc:images.vid16,
        },
        {
          id: 24,
          vidSrc:images.vid17,
        },  
      
        
    ]

    const setImageOrVideo = () => {
      setMedia('media')
    }

const handelRotationRight = () => {
    const totalLength = data.length;
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newUrl = data[0].imgSrc? data[0].imgSrc : data[0].vidSrc;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = data.filter((item) => {
      return data.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].imgSrc ? newUrl[0].imgSrc : newUrl[0].vidSrc;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  const handelRotationLeft = () => {
    const totalLength = data.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = data[totalLength - 1].imgSrc;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex - 1;
    const newUrl = data.filter((item) => {
      return data.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].imgSrc;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  return (
      <>
       <Navbar />
      <div className="app__header">
        <div className="gallery">
      {data.map((item, index) => (
        <div key={index} className="media">
          {item.imgSrc ? <img
            src={item.imgSrc}
            loading="lazy"
            alt=""
            style={{width:'100%'}}
            onClick={() => handleClick(item, index)}
          />:
          <video
          src={item.vidSrc}
          type="video/mp4"
          loop
          style={{width:'100%'}}
          controls={true}
          autoplay={true}
          muted
          onClick={() => handleClick(item, index)}/>}
        </div>
      ))}
      <div>
        {clickedImg && (
          <ImageModal
            clickedImg={clickedImg}
            handelRotationRight={handelRotationRight}
            setClickedImg={setClickedImg}
            handelRotationLeft={handelRotationLeft}
            imgPresent={media}
          />
        )}
      </div>
    </div>
    </div>
    </>
  )
}

export default PhotoGallery