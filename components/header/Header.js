import React from 'react'
import MeanuItem from './MenuItem'

import { Nav, Navbar } from 'react-bootstrap'
import ImageWrapper from '../ImageWrapper'


const COMPANY_DETAILS = {
    email: 'info@simnoorco.com',
    phoneNumber: '(+98)21 88661004',
    mainAddress: 'No. 11, 33 Alley, Alvand street',
    subAddress: 'Tehran,Iran'
}

const MENU = [
    { id: 1, pathTo: '/', routeName: 'Home' },
    { id: 2, pathTo: '/products', routeName: 'Products' },
    { id: 3, pathTo: '/about', routeName: 'About Us' },
    { id: 4, pathTo: '/contact', routeName: 'Contact' }
]


function Header() {

    return (


        <Navbar bg="lihgt" expand="md">
            <ImageWrapper iconName='simnoorlogo' style={{ width: "75px", height: "75px", marginLeft: '20px' }} />

            <Navbar.Brand className='site-logo my-0 py-0' >


                <div className="header-right headerRight" >
                    <div className="header-info-box">
                        <div className="hib-icon">
                            <ImageWrapper iconName='phone' />
                        </div>
                        <div className="hib-text">
                            <h6>{COMPANY_DETAILS.phoneNumber}</h6>
                            <p>{COMPANY_DETAILS.email}</p>
                        </div>
                    </div>
                    <div className="header-info-box">
                        <div className="hib-icon">
                            <ImageWrapper iconName='mapMarker' />
                        </div>
                        <div className="hib-text">
                            <h6>{COMPANY_DETAILS.mainAddress}</h6>
                            <p>{COMPANY_DETAILS.subAddress}</p>
                        </div>
                    </div>
                </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" >
                <Nav as='nav' className="mr-auto site-nav-menu">
                    <ul>
                        {
                            MENU.map(item => {
                                return (
                                    <MeanuItem key={item.id} pathTo={item.pathTo} routeName={item.routeName} />
                                )
                            })
                        }
                    </ul>
                </Nav>

            </Navbar.Collapse>
            <style jsx>{`
                    .headerRight{
                        top: -25px;
                        margin-left: 20px;
                    }
                `}
            </style>
        </Navbar>

    )
}

export default Header