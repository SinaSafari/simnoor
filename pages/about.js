import React from 'react'

import MainWrapper from '../components/mainWrapper/MainWrapper'

import Header from '../components/header/Header'
import Footer from '../components/Footer/Footer'
import ContactUs from '../components/contact/ContactUs'
import Slider from '../components/Slider/Slider'
import AboutSection from '../components/aboutSection/AboutSection'
import Milestone from '../components/milestone/Milestone'
import OurTeam from '../components/ourTeam/OurTeam'

function about() {
    return (
        <>
            <MainWrapper>
                {/* <Header /> */}
                <Slider img='pageTopImg1' title='About us' btnTitle='Back To Home Page' />
                <AboutSection />
                <Milestone />
                <OurTeam />
                <ContactUs />
                {/* <Footer /> */}
            </MainWrapper>
        </>
    )
}

export default about
