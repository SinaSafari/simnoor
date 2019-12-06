import React, { useState } from 'react'

import ImageWrapper from '../ImageWrapper'
import Button from '../Button/Button'


const RESEARCH = [
    {
        id: 1,
        heading: 'Engineering',
        title: '1. We produce or supply Goods, & Services, Oils & Lubricants',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque orci purus, sodales in est quis, blandit sollicitudin est. Nam ornare ipsum ac accumsan auctor. Donec consequat arcu et commodo interdum. Vivamus posuere lorem lacus.Lorem ipsum dolor sit amet,'
    },
    {
        id: 2,
        heading: 'Green Energy',
        title: '2. We produce or supply Goods, & Services, Oils & Lubricants',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque orci purus, sodales in est quis, blandit sollicitudin est. Nam ornare ipsum ac accumsan auctor. Donec consequat arcu et commodo interdum. Vivamus posuere lorem lacus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque orci purus, sodales in est quis, blandit sollicitudin est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque orci purus, sodales in est quis, blandit sollicitudin est. Nam ornare ipsum ac accumsan auctor.'
    },
    {
        id: 3,
        heading: 'Power',
        title: '3. We produce or supply Goods, & Services, Oils & Lubricants',
        text: 'Quisque orci purus, sodales in est quis, blandit sollicitudin est. Nam ornare ipsum ac accumsan auctor. Donec consequat ar'
    },
]

const Research = () => {




    const [activeIndex, setActiveIndex] = useState(0)
    const [activeStyle, setActiveStyle] = useState()




    return (

        <section className='reserch-section spad'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-4'>
                        {
                            RESEARCH.map((item, i) => {

                                return (
                                    <ul className='nav nav-tabs reserch-tab-menu'>
                                        <li className='nav-item' >
                                            <a key={i} onClick={() => { setActiveIndex(i) }} className={`nav-link ${activeIndex + 1 == item.id ? 'active' : ''}`}>
                                                {item.heading}
                                            </a>
                                        </li>
                                    </ul>

                                )
                            })
                        }
                    </div>
                    <div className='col-lg-8'>
                        <div className='tab-content research-tab'>
                            {
                                <div className='tab-pane fade show active'>
                                    <h2 style={{ color: 'white' }}>{
                                        RESEARCH[activeIndex].title

                                    }</h2>
                                    <p>{
                                        RESEARCH[activeIndex].text
                                    }</p>
                                </div>
                            }
                        </div>
                    </div>
                    {/* <div className="col-lg-4">
                        <div className="reserch-info-warp">
                            <a href="" className="site-btn w-100">Download Brochure</a>
                            <div className="info-box">
                                <h3>Contact Us for Help</h3>
                                <p>Quisque orci purus, sodales in est quis, blandit sollicitudin est. Nam ornare ipsum ac accumsan auctor. Donec consequat arcu et commodo interdum. </p>
                                <div className="footer-info-box">
                                    <div className="fib-icon">
                                        <ImageWrapper iconName='phone' />
                                    </div>
                                    <div className="fib-text">
                                        <p>+546 990221 123<br />contact@industryalinc.com</p>
                                    </div>
                                </div>
                                <a href="#">Send us a message</a>
                            </div>
                        </div>
                    </div> */}
                    <div className="mt-5">


                        <div className="reserch-text">
                            <h5>Research Results</h5>
                            <p>Quisque orci purus, sodales in est quis, blandit sollici-tudin est. Nam ornare ipsum ac accumsan auctor. Donec consequat arcu et commodo interdum. Vivamus posuere lorem lacus.Lorem ipsum dolor sit amet, con-sectetur adipiscing elit. Quisque orci purus, sodales in est quis, blandit sollicitudin est. </p>
                        </div>
                        <Button title='Download Brochure' classes='d-flex justify-content-center' />


                    </div>
                </div>
            </div>
        </section>

    )
}







export default Research
