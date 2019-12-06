import React from 'react'

import ImageWrapper from '../ImageWrapper'
import Button from '../Button/Button'

function ContanctForm() {
    return (
        <section className="contact-section spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="contact-text">
                            <h2>Get in Touch</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque orci purus, sodales in est quis, blandit sollicitudin estst quis, blandit sollicitudi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque orci purus, sodales in est quis, blandit sollicitudin estst quis, blandit sollicitudi</p>
                            <div className="header-info-box">
                                <div className="hib-icon">
                                    <ImageWrapper iconName='phone' />
                                </div>
                                <div className="hib-text">
                                    <h6>+546 990221 123</h6>
                                    <p>contact@industryalinc.com</p>
                                </div>
                            </div>
                            <div className="header-info-box">
                                <div className="hib-icon">
                                    <ImageWrapper iconName='mapMarker' />
                                </div>
                                <div className="hib-text">
                                    <h6>Main Str, no 23</h6>
                                    <p>NY, New York PK 23589</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <form className="contact-form">
                            <div className="row">
                                <div className="col-lg-6">
                                    <input type="text" placeholder="Your Name" />
                                </div>
                                <div className="col-lg-6">
                                    <input type="text" placeholder="Your Email" />
                                </div>
                                <div className="col-lg-4">
                                </div>
                                <div className="col-lg-12">
                                    <input type="text" placeholder="Subject" />
                                    <textarea className="text-msg" placeholder="Message"></textarea>
                                    <Button className="site-btn" type="submit" title='send message'></Button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContanctForm
