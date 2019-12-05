import React from 'react'


import Header from '../components/header/Header'
import Slider from '../components/hero/Slider'
import Services from '../components/services/Services'
import FeaturedPosts from '../components/FeaturedPosts/FeaturedPosts'
import Footer from '../components/Footer/Footer'
import Costumers from '../components/Customer/Costumers'
import Testimonials from '../components/Testinmonial/Testimonial'
import ContactUs from '../components/contact/ContactUs'
import Video from '../components/Video/Video'

const Home = () => {

  return (
    <>
      <Header />
      <Slider img='hero1' title='Home Page' />
      <Services />
      <FeaturedPosts />
      <Costumers />
      <Testimonials />
      <ContactUs />
      <Video />
      <Footer />
    </>
  )
}


export default Home
