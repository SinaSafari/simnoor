import React from 'react'

import ImageWrapper from '../ImageWrapper'
import Button from '../Button/Button'

const SERVICES = [
    {
        id: 1,
        img: 'cogwheel',
        title: "AAC",
        text: 'All Aluminium Conductor '
    },
    {
        id: 2,
        img: "cogwheel",
        title: "AAAC",
        text: "All Aluminium Alloy Conductors"
    },
    {
        id: 3,
        img: "cogwheel",
        title: "ACSR",
        text: "ACSR/GA, ACSR/AW, ACSR/TW"
    },
    {
        id: 4,
        img: "cogwheel",
        title: "ACSS",
        text: "ACSS/GA, ACSS/AW, ACSS/TW"
    },
    {
        id: 5,
        img: "cogwheel",
        title: "ACCC",
        text: "ACCC"
    },
    {
        id: 6,
        img: 'cogwheel',
        title: "GACW",
        text: 'GACW'
    },
    {
        id: 7,
        img: 'cogwheel',
        title: "ACS",
        text: 'ACS'
    },
    {
        id: 8,
        img: 'cogwheel',
        title: "Rod",
        text: 'Rod All 07, Rod AL'
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
                                    <div key={item.id} className="col-lg-4 col-md-6 service">
                                        <div className="service-item">
                                            <div className="si-head service">
                                                <div className="si-icon">
                                                    <ImageWrapper className="service" iconName={item.img} />
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
                <div className='d-flex justify-content-center' >
                    <div className="text-lg-right mb-5" >
                        <a href="" className="site-btn " style={{ backgroundColor: '#FC7626', border: '1px solid grey' }}>Our Products</a>
                    </div>
                </div>
            </section>

            <style jsx>
                {`
                    .service-btn {
                        font-size: 40px;
                    }
                    @media only screen and (max-width: 768px) {
                        .service {
                            display: flex;
                            justify-content: center;
                        }
                    }
                `}
            </style>
        </div >
    )
}

export default Services




