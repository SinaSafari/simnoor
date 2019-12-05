import React from 'react'

import ImageWrapper from '../ImageWrapper'
import { getCurrentYear } from '../../common/util/getCurrentYear'


function Footer() {
    return (
        <div>
            <footer className="footer-section spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-widget about-widget">
                                <ImageWrapper iconName='logoLight' />
                                <p>Lorem ipsum dolor sit amet, consec-tetur adipiscing elit. Quisque orci purus, sodales in est quis, blandit sollicitudin est. Nam ornare ipsum ac accumsan auctor. Donec consequat arcu et commodo interdum. </p>
                                <div className="footer-social">
                                    <a href=""><ImageWrapper iconName='facebook' className='m-auto' /></a>
                                    <a href=""><ImageWrapper iconName='instagram' className='m-auto' /></a>
                                    <a href=""><ImageWrapper iconName='telegram' className='m-auto' /></a>
                                    <a href=""><ImageWrapper iconName='linkedin' className='m-auto' /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="footer-widget">
                                <h2 className="fw-title">Useful Resources</h2>
                                <ul>
                                    <li><a href="">Jobs Vacancies</a></li>
                                    <li><a href="">Client Testimonials</a></li>
                                    <li><a href="">Green  Energy</a></li>
                                    <li><a href="">Chemical Research</a></li>
                                    <li><a href="">Oil Extractions</a></li>
                                    <li><a href="">About our Work</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="footer-widget">
                                <h2 className="fw-title">Our Solutions</h2>
                                <ul>
                                    <li><a href="">Metal Industry</a></li>
                                    <li><a href="">Agricultural Engineering</a></li>
                                    <li><a href="">Green  Energy</a></li>
                                    <li><a href="">Chemical Research</a></li>
                                    <li><a href="">Oil Extractions</a></li>
                                    <li><a href="">Manufactoring</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-7">
                            <div className="footer-widget">
                                <h2 className="fw-title">Contact Us</h2>
                                <div className="footer-info-box">
                                    <div className="fib-icon">
                                        <ImageWrapper iconName='mapMarker' />
                                    </div>
                                    <div className="fib-text">
                                        <p>Main Str, no 23 NY,<br />New York PK 23589</p>
                                    </div>
                                </div>
                                <div className="footer-info-box">
                                    <div className="fib-icon">
                                        <ImageWrapper iconName='phone' />
                                    </div>
                                    <div className="fib-text">
                                        <p>+546 990221 123<br />contact@industryalinc.com</p>
                                    </div>
                                </div>
                                <form className="footer-search">
                                    <input type="text" placeholder="Search" />
                                    <button><i className="fa fa-search"></i></button>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="footer-buttom">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 order-2 order-lg-1 p-0">
                                <div className="copyright">
                                    Copyright &copy; {getCurrentYear()} All rights reserved
                                </div>
                            </div>
                            <div className="col-lg-7 order-1 order-lg-2 p-0">
                                <ul className="footer-menu">
                                    <li className="active"><a href="">Home</a></li>
                                    <li><a href="">About us</a></li>
                                    <li><a href="">Solutions</a></li>
                                    <li><a href="">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}


export default Footer