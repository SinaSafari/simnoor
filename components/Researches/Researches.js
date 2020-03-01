import React, { useState } from 'react'

import ImageWrapper from '../ImageWrapper'
import Button from '../Button/Button'


const RESEARCH = [
    {
        id: 1,
        title: "AAC",
        heading: "",
        text: ""
    },
    {
        id: 2,
        title: "AAAC",
        heading: "",
        text: ""
    },
    {
        id: 3,
        title: "ACSR Group",
        heading: "ACSR / GA",
        text: "",
        headingTwo: "ACRS / AW",
        textTwo: "",
        headingThree: "ACSR / TW",
        textThree: "",
    },
    {
        id: 4,
        title: "ACSS Group",
        heading: "ACSS / GA",
        text: "",
        headingTwo: "ACSS / AW",
        textTwo: "",
        headingThree: "ACSS / TW",
        textThree: "",
    },
    {
        id: 5,
        title: "ACCC",
        heading: "",
        text: ""
    },
    {
        id: 6,
        title: "OPGW",
        heading: "",
        text: ""
    },
    {
        id: 7,
        title: "ACS",
        heading: "",
        text: ""
    },
    {
        id: 8,
        title: "ROD Group",
        heading: "ROD / ALL 07",
        text: "",
        headingTwo: "ACSS / AL",
        textTwo: "",
    }
]

const Research = () => {




    const [activeIndex, setActiveIndex] = useState(0)
    const [activeStyle, setActiveStyle] = useState()




    return (

        <section className='reserch-section spad'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-4'>
                        <ul className='nav nav-tabs reserch-tab-menu'>
                            {
                                RESEARCH.map((item, i) => {

                                    return (

                                        <li key={i} className='nav-item' >
                                            <a onClick={() => { setActiveIndex(i) }} className={`nav-link ${activeIndex + 1 == item.id ? 'active' : ''}`}>
                                                {item.title}
                                            </a>
                                        </li>


                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className='col-lg-4'>
                        {/* <div className='tab-content research-tab'>
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
                        </div> */}
                        {
                            <ul className='nav nav-tabs reserch-tab-menu'>
                                {RESEARCH[activeIndex].headingThree && (
                                    <>
                                        <li className="nav-item">
                                            <a href="" className="nav-link">{RESEARCH[activeIndex].heading}</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="" className="nav-link">{RESEARCH[activeIndex].headingTwo}</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="" className="nav-link">{RESEARCH[activeIndex].headingThree}</a>
                                        </li>
                                    </>
                                )}
                            </ul>
                        }


                    </div>
                    <div className='col-lg-4'>
                    </div>
                    <div className="mt-5">
                        <div className="reserch-text container">
                            <h5>Features and Advantages</h5>
                            <p className='mb-5'>Optimum economy is provided since the lighter weight means lower unit length costs, easier handling in installation and less-complex fittings. All-aluminum conductors have an inherent high corrosion resistance due to their homogeneous construction.</p>
                            <h5>Structure</h5>
                            <p>Bare All-Aluminum 1350- H19 Conductors (AAC) are concentric-lay-stranded consisting of one or more layers of wire wrapped helically around a straight round central wire. Each successive layer has six wires more than the layer immediately beneath. Greater flexibility is provided by increasing the number of strands for a specific cross-sectional area.  The more commonly used strandings are 7, 19, 37, 61 and 91.</p>
                            <h5>Specifications</h5>
                            <p>Sim Noor Yazdan’s ACSR cables meet or exceed industry requirements per ASTM specificat ions B230, B232, B498, and B500.</p>
                        </div>
                        <Button title='Download Brochure' classes='d-flex justify-content-center' />


                    </div>
                </div>
            </div>
        </section>

    )
}







export default Research
