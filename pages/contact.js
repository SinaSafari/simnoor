import React from 'react'

import MainWrapper from '../components/mainWrapper/MainWrapper'
import ContactUs from '../components/contact/ContactUs'
import Slider from '../components/Slider/Slider'
import ContactForm from '../components/Form/ContactForm'

function contact() {
    return (
        <>
            <MainWrapper>
                {/* <Header /> */}
                <Slider img='pageTopImg4' title='Contact Us' btnTitle='Back To Home Page' />
                {/* <Map /> */}
                <ContactForm />
                <ContactUs />
                {/* <Footer /> */}
            </MainWrapper>
        </>
    )
}

export default contact
