import { AboutUs, Footer, Gallery, Header, Intro, Testimonials } from '../../container';
import { Navbar } from '../../components';
import React from 'react'

export default function Index() {
    return (
        <>
         <div>
    <Navbar />
    {/* Testing the modal  */}
    {/* <Container>
        <Button onClick={openModal}>I'm a modal</Button>
        <Modal showModal={showModal} setShowModal={setShowModal} />
        
      </Container> */}
       <Intro />
    <Testimonials />

    <Header />
    
    <AboutUs />
    
   
    
    <Gallery />
    {/*<FindUs />*/}
    <Footer /> 
    {/* Mailchimp API KEY: ec54489dd783fb368c2e1745103730f8-us14 */}
  </div>
        </>
    )
}