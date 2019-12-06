import React from 'react'

import ImageWrapper from '../ImageWrapper'


const SERVICES = [
    {
        id: 1,
        img: 'cogwheel',
        title: "AAC / AAAC",
        text: 'All Aluminium Conductor / All Aluminium Alloy Conductors'
    },
    {
        id: 2,
        img: 'helmet',
        title: "ACSR/AW / ACSR",
        text: 'Aluminium Conductor Aluminium – Clad  Steel Reinforced / Aluminium Conductor Steel Reinforced'
    },
    {
        id: 3,
        img: 'windEngine',
        title: "ACSR/TW ",
        text: 'Aluminium Conductor Steel Reinforced Trapezoidal Wire'
    },
    {
        id: 4,
        img: 'pollution',
        title: "ACSS / GA/AW",
        text: 'Aluminium Conductor Steel Supported / Shield Wires'
    },
    {
        id: 5,
        img: 'pumpjack',
        title: "ACSS/AW",
        text: "Aluminium Conductor Steel Supported-Clad Steel Reinforced"
    },
    {
        id: 6,
        img: 'lightBulb',
        title: "ACSS/TW",
        text: 'Aluminium Conductor Steel Supported-Trapezoidal Wire'
    },
]



function Services() {
    return (
        <div>
            <section className='services-section'>
                <div style={{ marginTop: '45px' }}>
                    <div className='container'>
                        <div className='row'>


                            {SERVICES.map(item => {
                                return (
                                    <div key={item.id} className="col-lg-4 col-md-6">
                                        <div className="service-item">
                                            <div className="si-head">
                                                <div className="si-icon">
                                                    <ImageWrapper iconName={item.img} />
                                                </div>
                                                <h5> {item.title} </h5>
                                            </div>
                                            <p>{item.text} </p>
                                        </div>
                                    </div>
                                )
                            })

                            }

                        </div>
                    </div>
                </div>
            </section>
        </div >
    )
}

export default Services




