import React from 'react'
import { Navbar } from '../../components';
import Footer from '../../container/Footer/Footer';
import { images } from '../../constants';
import './Blog.css'

const Blog = () => {
  return (
    <>
        <Navbar /> 
        <div className="app__bg ">
        <div className="app__blog section__padding" id="login">
          <h1 className="headtext__cormorant">This page is coming soon</h1>
          <img src={images.memoire360} alt="footer_logo" />
          <p className="p__opensans"> To ensure you don't miss out on updates sign up below.</p>
          <br/>
          <br/>
          <Footer />
          </div>
          </div> 
    </>
  )
}

export default Blog