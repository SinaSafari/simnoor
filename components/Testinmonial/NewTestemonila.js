import React from 'react'
import ImageWrapper from '../ImageWrapper'

function Testimonials() {
    return (
        <div>
            <section className="testimonial-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 p-0">
                            <div className="testimonial-box" >
                                <div className="testi-box-warp">
                                    <h2>Client’s Testimonials</h2>
                                    <div className="testimonial-slider owl-carousel">
                                        <div className="testimonial">
                                            <p>We embrace the responsibility of leadership. Providing our people with a clear vision and demonstrating the role they play in delivering it is important. It’s why our Leadership teams take the time to listen, to share their learnings and experiences, helping people across our business grow and develop.</p>
                                            {/* <ImageWrapper iconName='testemonialThumb' className='testi-thumb' /> */}
                                            {/* <div className="testi-info">
                                                <h5>Amir Rezaei Hezave</h5>
                                                <span>CEO Sim Noor Yazdan</span>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 p-0">
                            <div className="testimonial-bg " >
                                <ImageWrapper iconName='testemonialBg' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonials