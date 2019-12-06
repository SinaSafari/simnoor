import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/Footer/Footer'
import ContactUs from '../components/contact/ContactUs'
import Slider from '../components/hero/Slider'
import AboutSection from '../components/aboutSection/AboutSection'
import Milestone from '../components/milestone/Milestone'

function about() {
    return (
        <>
            <Header />
            <Slider img='pageTopImg1' />
            <AboutSection />
            <Milestone />
            {/* <OutTeam />  */}
            <ContactUs />
            <Footer />
        </>
    )
}

export default about
