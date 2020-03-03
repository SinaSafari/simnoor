import React from 'react'

import ImageWrapper from '../ImageWrapper'

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
        title: "OPGW",
        text: 'OPGW'
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


const LIMITEDSERVICES = [
    {
        id: 6,
        img: 'cogwheel',
        title: "OPGW",
        text: 'OPGW'
    },
    {
        id: 4,
        img: "cogwheel",
        title: "ACSS",
        text: "ACSS/GA, ACSS/AW, ACSS/TW"
    },
    {
        id: 8,
        img: 'cogwheel',
        title: "Rod",
        text: 'Rod All 07, Rod AL'
    },
]



function Services({ readmore, btnText, header, homepage }) {
    const limiter = (items) => {
        return items.filter(item => item.title == 'OPGW' || item.title == 'ACSS' || item.title == 'AAAC')
    }
    return (
        <div>
            <section className='services-section'>
                <div style={{ marginTop: '65px' }}>
                    <div className='container'>
                        <div className='d-flex '>
                            {(header && <h1 className="mb-5" style={{ borderBottom: '8px solid #FC7626' }}>Products</h1>)}
                        </div>
                        <div className='row seviceSection'>


                            {(homepage &&
                                LIMITEDSERVICES.map(item => {
                                    return (
                                        <div key={item.id} className="service" style={{ border: '1px solid #ccc', padding: '30px', borderRadius: '5px', boxShadow: ' 0px 0px 16px -9px rgba(0,0,0,0.75)', marginBottom: '10px', marginLeft: '20px' }}>
                                            <div className="service-item" >
                                                <div className="si-head service">
                                                    <div className="si-icon">
                                                        <ImageWrapper className="service" iconName={item.img} />
                                                    </div>
                                                    <h5> {item.title} </h5>
                                                </div>
                                                <p>{item.text} </p>
                                                <div className="mt-3">
                                                    {


                                                        // (readmore && <a href="" >Read more &raquo;</a>)
                                                        (readmore && <a href="" >Download Brochure &darr;</a>)

                                                    }
                                                </div>
                                            </div>

                                        </div>

                                    )
                                })
                            )}


                            {!homepage && SERVICES.map(item => {
                                return (
                                    <div key={item.id} className="service" style={{ border: '1px solid #ccc', padding: '30px', borderRadius: '5px', boxShadow: ' 0px 0px 16px -9px rgba(0,0,0,0.75)', marginBottom: '10px', marginLeft: '20px' }}>
                                        <div className="service-item" >
                                            <div className="si-head service">
                                                <div className="si-icon">
                                                    <ImageWrapper className="service" iconName={item.img} />
                                                </div>
                                                <h5> {item.title} </h5>
                                            </div>
                                            <p>{item.text} </p>
                                            <div className="mt-3">
                                                {


                                                    // (readmore && <a href="" >Read more &raquo;</a>)
                                                    (readmore && <a href="" >Download Brochure</a>)


                                                }
                                            </div>
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
                        <a href="" className="site-btn " style={{ backgroundColor: '#FC7626', border: '1px solid grey', marginTop: '15px' }}>{btnText}</a>
                    </div>
                </div>
            </section>

            <style jsx>
                {`

                .seviceSection {
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr; 
                }
            
                    .service-btn {
                        font-size: 40px;
                    }
                    @media only screen and (max-width: 768px) {
                        .seviceSection {
                            display: grid;
                            grid-template-columns: 1fr; 
                            justify-content: space-evenly;
                            margin: 10px 30px;
                        }
                    }
                `}
            </style>
        </div >
    )
}

export default Services




