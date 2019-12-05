import React from 'react'

import ImageWrapper from '../ImageWrapper'


const SERVICES = [
    {
        id: 1,
        img: 'cogwheel',
        title: "Mechanical Engineering",
        text:
            " Quisque orci purus, sodales in est quis, blandit sollicitudin est. Nam ornare ipsum ac accumsan auctor. Donec consequat arcu."
    },
    {
        id: 2,
        img: 'helmet',
        title: "Profesional Workers",
        text:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, accusamus."
    },
    {
        id: 3,
        img: 'windEngine',
        title: "Green Energy",
        text:
            " Sodales in est quis, blandit sollicitudin est. Nam ornare ipsum ac accumsan auctor. Donec con-sequat arcu et commodo interdum."
    },
    {
        id: 4,
        img: 'pollution',
        title: "Power Engineering",
        text:
            " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque orci purus, sodales in est quis, blandit sollicitudin est. "
    },
    {
        id: 5,
        img: 'pumpjack',
        title: "Oil & Lubricants",
        text: " Quisque orci purus, sodales in est quis, blandit sollicitudin est. Nam ornare ipsum ac accumsan auctor. Donec consequat arcu."
    },
    {
        id: 6,
        img: 'lightBulb',
        title: "Power & Energy",
        text:
            " Sodales in est quis, blandit sollicitudin est. Nam ornare ipsum ac accumsan auctor. Donec con-sequat arcu et commodo interdum. "
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
                                    <div key={item.id} class="col-lg-4 col-md-6">
                                        <div className="service-item">
                                            <div className="si-head">
                                                <div className="si-icon">
                                                    {/* <img src={item.img} alt="" /> */}
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




