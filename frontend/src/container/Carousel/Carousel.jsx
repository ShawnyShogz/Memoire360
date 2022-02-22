import "./carousel.css"
import Carousel from 'react-bootstrap/Carousel'
import { images } from '../../constants';
import * as React from 'react';

export default function IndexCarousel() {

    return (
        <Carousel controls={false} className="MyCarousel">
  <Carousel.Item className="MyCarouselItem">
    <img
      className="d-block w-100"
      src={images.slide1}
      alt="First slide"
    />
    {/* <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
  <Carousel.Item className="MyCarouselItem">
    <img
      className="d-block w-100 "
      src={images.slide2}
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item className="MyCarouselItem">
    <img
      className="d-block w-100"
      src={images.slide3}
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item className="MyCarouselItem">
    <img
      className="d-block w-100"
      src={images.slide4}
      alt="Fourth slide"
    />
  </Carousel.Item>
</Carousel>
    )
}
