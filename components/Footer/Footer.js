import React from 'react'
import Link from 'next/link'

import ImageWrapper from '../ImageWrapper'
import FooterList from './FooterList'


const RESOURCES = [
    {
        id: 1,
        title: 'hield Wires'
    },
    {
        id: 2,
        title: 'Optical Power Ground Wire'
    },
    {
        id: 3,
        title: 'All Aluminium Conductor'
    },
    {
        id: 4,
        title: 'Steel Reinforced'
    },
    {
        id: 5,
        title: 'Supported-Trapezoidal Wire'
    },
    {
        id: 6,
        title: 'Trapezoidal Wire'
    },
]

const SOLUTIONS = [
    {
        id: 1,
        title: 'AAAC'
    },
    {
        id: 2,
        title: 'ACSR'
    },
    {
        id: 3,
        title: 'ACSR/AW'
    },
    {
        id: 4,
        title: 'ACSS'
    },
    {
        id: 5,
        title: 'ACSR/TW'
    },
    {
        id: 6,
        title: 'OPGW'
    },
]

function Footer() {
    return (
        <div>
            <footer className="footer-section spad" style={{ paddingTop: '20px' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-widget about-widget">
                                <div className="d-flex justify-content-center">
                                    <ImageWrapper iconName='simnoorlogo' style={{ width: '100px', height: '100px', marginBottom: '20px' }} />
                                </div>
                                <p>We embrace the responsibility of leadership. Providing our people with a clear vision and demonstrating the role they play in delivering it is important. </p>
                                <div className="footer-social d-flex justify-content-center">
                                    {/* <a href=""><ImageWrapper iconName='facebook' className='m-auto' /></a> */}
                                    {/* <a href=""><ImageWrapper iconName='instagram' className='m-auto' /></a> */}
                                    <a href=""><ImageWrapper iconName='telegram' className='m-auto' /></a>
                                    <a href=""><ImageWrapper iconName='linkedin' className='m-auto' /></a>
                                    {/* TODO: ADD EMAIL SVG ICON */}
                                    <a href=""><ImageWrapper iconName="" className="m-auto" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="footer-widget">
                                <h2 className="fw-title">Articless</h2>
                                <ul>

                                    {
                                        RESOURCES.map(item => (
                                            <li key={item.id}>
                                                <FooterList title={item.title} />
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="footer-widget">
                                <h2 className="fw-title">Our Solutions</h2>
                                <ul>

                                    {
                                        SOLUTIONS.map(item => (
                                            <li key={item.id}>
                                                <FooterList title={item.title} />
                                            </li>
                                        ))
                                    }
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
                                        <p>No .112, 3 phase, Kheir Abad Industrial City,<br /> Arak, Iran</p>
                                    </div>
                                </div>
                                <div className="footer-info-box">
                                    <div className="fib-icon">
                                        <ImageWrapper iconName='phone' />
                                    </div>
                                    <div className="fib-text">
                                        <p>(+98)21 88661904<br />info@simnoorco.com</p>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
                <div className="footer-buttom">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 order-2 order-lg-1 p-0">
                                <div className="copyright">
                                    {/* Copyright &copy; {getCurrentYear()} All rights reserved */}
                                    Designed and maintain by <a href="http://pouyeshsystem.com/">Pouyesh System</a>
                                </div>
                            </div>
                            <div className="col-lg-7 order-1 order-lg-2 p-0">
                                <ul className="footer-menu">
                                    <li><Link href='/'><a>Home</a></Link></li>
                                    <li><Link href='/about'><a>About Us</a></Link></li>
                                    <li><Link href='/solutions'><a>Solutions</a></Link></li>
                                    <li><Link href='/contact'><a>Contanct</a></Link></li>

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