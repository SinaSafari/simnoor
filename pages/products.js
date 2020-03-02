import React from 'react'

import MainWrapper from '../components/mainWrapper/MainWrapper'
import Slider from '../components/Slider/Slider'
import Services from '../components/services/Services'
import ContactUs from '../components/contact/ContactUs'
import Researches from '../components/Researches/Researches'

import Head from 'next/head'


function solution() {
    return (
        <>
            <Head>
                <title>Simnoor Yazdan | Our Solutions</title>
            </Head>
            <MainWrapper>
                <Slider img='pageTopImg3' title='Our Solutions' btnTitle='Back To Home Page' />
                <Services readmore btnText="Download Our Brochure" header />
                {/* <Researches /> */}
                <ContactUs />
            </MainWrapper>
        </>
    )
}

export default solution
