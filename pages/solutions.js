import React from 'react'

import Header from '../components/header/Header'
import Slider from '../components/hero/Slider'
import Services from '../components/services/Services'
import ContactUs from '../components/contact/ContactUs'
import Footer from '../components/Footer/Footer'
import Researches from '../components/Researches/Researches'


function solution() {
    return (
        <>
            <Header />
            <Slider img='pageTopImg3' title='Our Company Solutions' btnTitle='Back To Home Page' />
            <Services />
            <Researches />
            <ContactUs />
            <Footer />
        </>
    )
}

export default solution
