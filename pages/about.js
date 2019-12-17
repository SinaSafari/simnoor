import React from 'react'
import Head from 'next/head'

import MainWrapper from '../components/mainWrapper/MainWrapper'
import ContactUs from '../components/contact/ContactUs'
import Slider from '../components/Slider/Slider'
import AboutSection from '../components/aboutSection/AboutSection'
import Milestone from '../components/milestone/Milestone'
import OurTeam from '../components/ourTeam/OurTeam'

function about() {
    return (
        <>
            <Head>
                <title>Simnoor Yazdan | About us</title>
            </Head>
            <MainWrapper>
                <Slider img='pageTopImg1' title='About us' btnTitle='Back To Home Page' />
                <AboutSection />
                <Milestone />
                <OurTeam />
                <ContactUs />
            </MainWrapper>
        </>
    )
}

export default about
