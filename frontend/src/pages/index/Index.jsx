import { AboutUs, Footer, Gallery, Header, Intro, Testimonials } from '../../container';
import { Navbar } from '../../components';
import React from 'react'

export default function Index() {
    return (
        <>
         <div>
            <Navbar />
            <Intro />
            <Testimonials />
            <Header />
            <AboutUs />
            <Gallery />
            <Footer /> 
        </div>
        </>
    )
}