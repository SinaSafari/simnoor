import React from 'react'
import ImageWrapper from '../ImageWrapper'

function Testimonials() {
    return (
        <div>
            <section className="testimonial-section">
                <div className="container-fluid">
                    <div className="row">

                        <div className="col-lg-6 p-0">
                            <div className="testimonial-bg set-bg" >
                                {/* <img src={bg} style={{  }} /> */}
                                <ImageWrapper iconName='testemonialBg' style={{ height: '100%' }} />
                            </div>
                        </div>
                        <div className="col col-lg-6 p-0">
                            <div className="testimonial-box" >
                                <div className="testi-box-warp">
                                    <h2>Client’s Testimonials</h2>
                                    <div className="testimonial-slider owl-carousel">
                                        <div className="testimonial">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque orci purus, sodales in est quis, blandit sollicitudin est. Nam ornare ipsum ac accumsan auctor. Donec consequat arcu et commodo interdum. Vivamus posuere lorem lacus.Lorem ipsum dolor sit amet, consecte-tur adipiscing elit. Quisque orci purus, sodales in est quis, blandit sollicitudin est.</p>
                                            <ImageWrapper iconName='testemonialThumb' className='testi-thumb' />
                                            <div className="testi-info">
                                                <h5>Michael Smith</h5>
                                                <span>CEO Industrial INC</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonials