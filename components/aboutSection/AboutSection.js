import React from 'react'
import ImageWrapper from '../ImageWrapper'

function AboutSection() {
    return (
        <section className="about-section my-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <ImageWrapper iconName='about' />
                    </div>
                    <div className="col-lg-6">
                        <div className="about-text">
                            <h2>We produce or supply Goods, & Services</h2>
                            <p>  Sim Noor Yazdan Co. which focuses in research & development, innovation in Electric industry and pure energy is looking for reducing wasting pure energy through foundemental researches. This wasting is due to transmission of the energy or the way of saving. This company is also  aim at researching and developing different kinds of conductions and especially new ones. This could be done through the best in hand technology and the latest Standards in the world which has got the crucial role in this work.</p>


                            <div className="about-sign">
                                <div className="sign">
                                    <ImageWrapper iconName='sign' />
                                </div>
                                <div className="sign-info">
                                    <h5>Ali Rezaei Hezave</h5>
                                    <span style={{ color: '#777' }}>Sim Noor Co. CEO Sim Noor Yazdan</span>
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
