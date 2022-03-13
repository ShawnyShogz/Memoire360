//import { AboutUs, Footer, Gallery, Header, Intro, Testimonials } from '../../container';
import { Navbar } from '../../components';
import React ,{Suspense} from 'react'
const AboutUs = React.lazy(()=> import('../../container/AboutUs/AboutUs'))
const Gallery = React.lazy(()=> import('../../container/Gallery/Gallery'))
const Header = React.lazy(()=> import('../../container/Header/Header'))
const Intro = React.lazy(()=> import('../../container/Intro/Intro'))
const Testimonials = React.lazy(()=> import('../../container/Testimonials/Testimonials'))
const Footer = React.lazy(()=> import('../../container/Footer/Footer'))

export default function Index() {
    return (
        <>
         <div>
            <Navbar />
            <Suspense fallback={<div>Loading...</div>}>
            <Intro />
            <Testimonials />
            <Header />
            <AboutUs />
            <Gallery />
            <Footer />
            </Suspense>
        </div>
        </>
    )
}