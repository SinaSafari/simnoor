import React from 'react'
import ImageWrapper from '../ImageWrapper'

function AboutSection() {
    return (
        <section class="about-section spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        {/* <img src={aboutJPG} alt="" /> */}
                        <ImageWrapper iconName='about' />
                    </div>
                    <div className="col-lg-6">
                        <div className="about-text">
                            <h2>We produce or supply Goods, & Services</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque orci purus, sodales in est quis, blandit sollicitudin est. Nam ornare ipsum ac accumsan auctor. Donec consequat arcu et commodo interdum. Vivamus posuere lorem lacus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque orci purus, sodales in est quis, blandit sollicitudin est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque orci purus, sodales in est quis, blandit sollicitudin est. Nam ornare ipsum ac accumsan auctor. </p>
                            <div className="about-sign">
                                <div className="sign">
                                    {/* <img src={sign} alt="" /> */}
                                    <ImageWrapper iconName='sign' />
                                </div>
                                <div className="sign-info">
                                    <h5>Michael Smith</h5>
                                    <span>CEO Industrial INC</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection
