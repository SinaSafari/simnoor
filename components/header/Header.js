import React from 'react'
import Link from 'next/link'



import ImageWrapper from '../ImageWrapper'
import MenuItem from './MenuItem'


const COMPANY_DETAILS = {
    email: 'simnooryazdan@yahoo.com',
    phoneNumber: '(+98)21 44074833',
    mainAddress: 'No 94, East Ferdos, Kashani Ave',
    subAddress: 'Tehran,Iran'
}


const MENU_ITEMS = [
    {
        id: 1,
        title: 'Home',
        route: '/'
    },
    {
        id: 2,
        title: 'About Us',
        route: '/about'

    },
    {
        id: 3,
        title: 'Solutions',
        route: '/solutions'
    },
    {
        id: 4,
        title: 'Contact',
        route: '/contact'
    },
]


function Header() {
    return (
        <header className="header-section clearfix">
            <div className="site-navbar">
                <a href="" className="site-logo">
                    <ImageWrapper iconName='logo' />
                </a>
                <div className="header-right">
                    <div className="header-info-box">
                        <div className="hib-icon">
                            <ImageWrapper iconName='phone' />
                        </div>
                        <div className="hib-text">
                            {/* <h6>+546 990221 123</h6> */}
                            <h6>{COMPANY_DETAILS.phoneNumber}</h6>

                            {/* <p>contact@industryalinc.com</p> */}
                            <p>{COMPANY_DETAILS.email}</p>
                        </div>
                    </div>
                    <div className="header-info-box">
                        <div className="hib-icon">
                            <ImageWrapper iconName='mapMarker' />
                        </div>
                        <div className="hib-text">
                            {/* <h6>Main Str, no 23</h6> */}
                            <h6>{COMPANY_DETAILS.mainAddress}</h6>
                            {/* <p>NY, New York PK 23589</p> */}
                            <p>{COMPANY_DETAILS.subAddress}</p>
                        </div>
                    </div>
                    <button className="search-switch">{/*<ImageWrapper iconName='search' /> */}</button>
                </div>
                <nav className="site-nav-menu">
                    {
                        MENU_ITEMS.map(item => (
                            <MenuItem key={item.id} >
                                <Link href={`${item.route}`}>
                                    <a>
                                        {item.title}
                                    </a>
                                </Link>
                            </MenuItem>
                        ))
                    }
                </nav>

            </div>
        </header>

    )
}

export default Header