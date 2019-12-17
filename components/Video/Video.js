import React from 'react'
import ImageWrapper from '../ImageWrapper'
import Button from '../Button/Button'


function Video() {
    return (
        <div>
            <section className="video-section spad" >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="video-text">
                                <h2>We produce or supply Goods, & Services</h2>
                                <p>As a Group with a global footprint, we take our responsibility to create an inclusive environment seriously. We have a culture of sharing, collaboration, openness and transparency which means we embrace diversity, and we consistently monitor our progression. Each of our people has a unique skillset, perspective and capability that they bring to the business. We encourage our people make their mark on Prysmian Group by recognising the essential part that they play both in the business and for the world.</p>
                                <Button title='Contact Us' />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="video-box set-bg">
                                <ImageWrapper iconName='video' style={{ height: '100%', width: '100%' }} />

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}


export default Video