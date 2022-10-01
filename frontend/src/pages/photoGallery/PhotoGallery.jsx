import React from 'react'
import { useState, useEffect } from 'react';
import Amplify, { Storage } from 'aws-amplify';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Navbar } from '../../components';
import './PhotoGallery.css';
import ImageModal from '../../components/ImageModal/ImageModal';
import images from '../../constants/images';


const PhotoGallery = () => {
    const [clickedImg, setClickedImg] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(null);
    const [files, setFiles] = useState([]);
    const [media, setMedia] = useState(null);

    useEffect(() => {
      Amplify.configure({
        Auth: {
          identityPoolId: "eu-west-2:5d0419b9-902a-4818-88b0-89178d0a9e7d",
          region: "eu-west-2",
        },
  
        Storage: {
          AWSS3: {
            bucket: "memoire360bucket",
            region: "eu-west-2",
          },
        },
      });
    }, []);
  
    const loadImages = () => {
      Storage.list("")
        .then((files) => {
          // console.log(files);
          setFiles(files);
        }).then()
        .catch((err) => {
          console.log(err);
        });    
    }
  
    useEffect(() => {
      loadImages();
     }, []);



    const handleClick = (file, index) => {
        setCurrentIndex(index);
        {file.key ? setClickedImg(`https://memoire360bucket.s3.eu-west-2.amazonaws.com/public/${file.key}`): setClickedImg(file.key);}
        setMedia('media')     
      };

      const handleVideoClick = (file, index) => {
        setCurrentIndex(index);
        {file.key ? setClickedImg(`https://memoire360bucket.s3.eu-west-2.amazonaws.com/public/${file.key}`): setClickedImg(file.key);}
          setMedia(null)
      };
      

    const isImage = (file) => {
      return file.key.includes("JPG");
    }

const handelRotationRight = () => {
    const totalLength = files.length;
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newUrl = `https://memoire360bucket.s3.eu-west-2.amazonaws.com/public/${files[0].key}`;
      
      if(isImage(files[0])){
        setMedia('media')
      }else{
        setMedia(null)
      }
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = files.filter((item) => {
      return files.indexOf(item) === newIndex;
    });
    if(isImage(newUrl[0])){
      setMedia('media')
    }else{
      setMedia(null)
    }
    
     const newItem = `https://memoire360bucket.s3.eu-west-2.amazonaws.com/public/${newUrl[0].key}`;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  const handelRotationLeft = () => {
    const totalLength = files.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = `https://memoire360bucket.s3.eu-west-2.amazonaws.com/public/${files[totalLength - 1].key}`;

      if(isImage(files[totalLength - 1])){
        setMedia('media')
      }else{
        setMedia(null)
      }

      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex - 1;
    const newUrl = files.filter((item) => {
      return files.indexOf(item) === newIndex;
    });

    if(isImage(newUrl[0])){
      setMedia('media')
    }else{
      setMedia(null)
    }
    const newItem = `https://memoire360bucket.s3.eu-west-2.amazonaws.com/public/${newUrl[0].key}`;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  return (
      <>
       <Navbar />
       <div className="app__bg ">

       <div className="gallery">
        {files.map((file, i) => (
          <div key={i} className="media">
            {isImage(file) ? <LazyLoadImage 
            src={`https://memoire360bucket.s3.eu-west-2.amazonaws.com/public/${file.key}`}
            loading="lazy"
            alt=""
            style={{width:'100%'}}
            onClick={() => handleClick(file, i)}
            placeholderSrc={images.memoire360}
            />
            :
            <video
            src={`https://memoire360bucket.s3.eu-west-2.amazonaws.com/public/${file.key}`}
            type="video/mp4"
            loop
            style={{width:'100%'}}
            muted
            onClick={() => handleVideoClick(file, i)}/>}
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