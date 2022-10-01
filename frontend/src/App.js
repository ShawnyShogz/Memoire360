import React, { Suspense,lazy } from 'react';
import ReactGA from 'react-ga';
import { useEffect } from "react";
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Index from './pages/index/Index';
//import PhotoGallery from './pages/photoGallery/PhotoGallery';
// import Blog from './pages/blog/Blog';
// import Booking from './pages/book/Booking';
const PhotoGallery = lazy(()=> import('./pages/photoGallery/PhotoGallery'))
const Blog = lazy(()=> import('./pages/blog/Blog'))
const Booking = lazy(()=> import('./pages/book/Booking'))



function App (){

  const measurementID = process.env.REACT_APP_GOOGLE_ANALYTICS_MEASURMENT_ID;
  useEffect(() => {
    // ReactGA.initialize(`${measurementID}`, { debug: true });
    ReactGA.initialize(`${measurementID}`);
    // To Report Page View 
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [measurementID])

  return ( 
    <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/photogallery" element={<PhotoGallery />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/booking" element={<Booking />} />
      </Routes>
    </Suspense>
    </BrowserRouter>
  )
  }

export default App;
