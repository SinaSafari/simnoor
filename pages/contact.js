import React from 'react'

import MainWrapper from '../components/mainWrapper/MainWrapper'
import ContactUs from '../components/contact/ContactUs'
import Slider from '../components/Slider/Slider'
import ContactForm from '../components/Form/ContactForm'
import Map from '../components/map/map'

import Head from 'next/head'

function contact() {
    return (
        <>
            <Head>
                <title>Simnoor Yazdan | Contact us</title>
            </Head>
            <MainWrapper>
                <Slider img='pageTopImg4' title='Contact Us' btnTitle='Back To Home Page' />
                <Map />
                <ContactForm />
                {/* <ContactUs /> */}
            </MainWrapper>
        </>
    )
}

export default contact
