import React, { useState } from 'react';
import styled from 'styled-components';
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


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const Button = styled.button`
  min-width: 100px;
  padding: 16px 32px;
  border-radius: 4px;
  border: none;
  background: #141414;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
`;

function App (){
  // const [showModal, setShowModal] = useState(true);

  // const openModal = () => {
  //   setShowModal(prev => !prev);
  //};
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
