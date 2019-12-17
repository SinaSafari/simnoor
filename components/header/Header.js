import React from 'react'
import MeanuItem from './MenuItem'

import { Nav, Navbar } from 'react-bootstrap'
import ImageWrapper from '../ImageWrapper'


const COMPANY_DETAILS = {
    email: 'simnooryazdan@yahoo.com',
    phoneNumber: '(+98)21 44074833',
    mainAddress: 'No 94, East Ferdos, Kashani Ave',
    subAddress: 'Tehran,Iran'
}

const MENU = [
    { id: 1, pathTo: '/', routeName: 'Home' },
    { id: 2, pathTo: '/about', routeName: 'About' },
    { id: 3, pathTo: '/solutions', routeName: 'Solutions' },
    { id: 4, pathTo: '/contact', routeName: 'Contact' }
]


function Header() {

    return (


        <Navbar bg="lihgt" expand="md">
            <Navbar.Brand className='site-logo my-0 py-0' href="#home">

                <ImageWrapper iconName='logo' />

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