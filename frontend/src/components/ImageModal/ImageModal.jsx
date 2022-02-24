import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import {GrClose} from 'react-icons/gr';
import "./ImageModal.css"

const ImageModal = ({
    clickedImg,
    setClickedImg,
    handelRotationRight,
    handelRotationLeft,
    imgPresent
  }) => {
    const handleClick = (e) => {
      if (e.target.classList.contains("dismiss")) {
        setClickedImg(null);
      }
    };
  
    return (
      <>
        <div className="overlay dismiss" onClick={handleClick}>
          {/* {clickedImg?   : ''} */}
          {imgPresent? <img src={clickedImg} alt="bigger pic" /> : <video controls={true} src={clickedImg} alt="bigger1 pic" />}
          <span className="dismiss">
          <GrClose className="close dismiss" onClick={handleClick}/>
          </span>
          
          
          <BsArrowLeftShort onClick={handelRotationLeft} className="overlay-arrows_left"/>
          <BsArrowRightShort onClick={handelRotationRight} className="overlay-arrows_right"/>
          
        </div>
      </>
    );
  };
  
  export default ImageModal;
  