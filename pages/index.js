import React from 'react'
import Head from 'next/head'

import MainWrapper from '../components/mainWrapper/MainWrapper'
import Services from '../components/services/Services'
import FeaturedPosts from '../components/FeaturedPosts/FeaturedPosts'
import Costumers from '../components/Customer/Costumers'
import Testimonials from '../components/Testinmonial/Testimonial'
import ContactUs from '../components/contact/ContactUs'
import Video from '../components/Video/Video'
import ImageSlider from '../components/Slider/ImageSlider'

const Home = () => {

  return (
    <>

      <MainWrapper>
        <ImageSlider title='Sim Noor Co.' btnTitle='Our Services' />
        <Services />
        <FeaturedPosts />
        <Costumers />
        <Testimonials />
        <ContactUs />
        <Video />
        {/* <Footer /> */}
      </MainWrapper>
    </>
  )
}


export default Home
