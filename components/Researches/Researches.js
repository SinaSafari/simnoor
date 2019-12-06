import React, { useState } from 'react'

import ImageWrapper from '../ImageWrapper'
import Button from '../Button/Button'


const RESEARCH = [
    {
        id: 1,
        heading: 'ACSS/AW',
        title: 'Aluminum Conductor Aluminum-Clad Steel-Supported Concentric-Lay-Stranded',
        text: 'Aluminum Conductor, Steel-Supported with aluminum-clad steel wire (ACSS/AW) are used for overhead distribution and transmission lines where a high degree of corrosion resistance is required. ACSS/AW offers strength characteristics similar to ACSS, along with slightly greater ampacity and resistance to corrosion due to aluminum-cladding of the steel core wires. The AW core, which consists of a thick layer of aluminum (approx. 10% of the nominal wire\radius) over steel, gives ACSS/AW conductors the advantages of standard ACSS along with light weight and good conductivity of aluminum with the high tensile strength and ruggedness of steel.'
    },
    {
        id: 2,
        heading: 'ACSS/TW',
        title: 'Aluminum Conductor Steel Supported/Trapezoidal Wire',
        text: 'ACSS/TW is designed for overhead distribution and transmission lines. They are especially useful in reconductoring applications requiring increased current with existing tensions and clearances; new line applications where structures can be economized due to reduced sag; new line applications requiring high emergency loadings; lines where Aeolian vibration is a problem. It is designed to operate continuously at elevated temperatures up to 200°C without loss of strength, it sags less under emergency electrical loadings than ACSR/TW, excellent self damping properties, and its final sags are not affected by long-term creep of aluminum. ACSS/TW is available in equal area and equal diameter design. The equal area design allows equal ampacity in a smaller diameter conductor when compared with a standard ACSS conductor. The equal diameter design allows more ampacity in an equal diameter conductor when compared with a standard ACSS conductor. ACSS/TW also provides many design opportunities for new line construction: i.e., reduced tower cost, decreased sag, increased self-damping properties, increased operating temperature.'
    },
    {
        id: 3,
        heading: 'OPGW',
        title: 'Optical Ground Wire',
        text: 'An overhead ground wire is installed to protect phase conductors from lightning and reduce electromagnetic interference against telecommunication lines during the grounding of power lines. An optical fiber can transmit a large amount of information in high speeds and suffers no electromagnetic interference because of its non-metallic characteristics. This advantageous feature makes it possible to construct long distance telecommunication lines with high reliablity. Generally, OPGW has dual performance functions of conventional ground wire with optical fiber telecommunication capabilities. '
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
                    <div className="mt-5">
                        <div className="reserch-text">
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
