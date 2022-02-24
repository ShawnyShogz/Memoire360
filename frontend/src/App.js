import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Index from './pages/index/Index';
import PhotoGallery from './pages/photoGallery/PhotoGallery';
import Blog from './pages/blog/Blog';
import Booking from './pages/book/Booking';


function App (){
  return ( 
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/photogallery" element={<PhotoGallery />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/booking" element={<Booking />} />
      </Routes>
    </BrowserRouter>
  )
  }

export default App;
