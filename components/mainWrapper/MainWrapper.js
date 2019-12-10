import React from 'react'
import Header from '../header/Header'
import Footer from '../Footer/Footer'

const MainWrapper = ({ children }) => (
    <>
        <Header />
        {children}
        <Footer />
    </>
)

export default MainWrapper