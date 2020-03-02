import React from 'react'

import ImageWrapper from '../ImageWrapper'
import Button from '../Button/Button'

function ContanctForm() {
    return (
        <section className="contact-section" style={{ marginTop: '50px' }}>
            <div className="container">
                <div className="row">

                    <div className="col-lg-9">
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
                                <div className="col-lg-12 mb-4">
                                    <input type="text" placeholder="Subject" />
                                    <textarea className="text-msg" placeholder="Message"></textarea>
                                    <Button classes="mt-n3 " type="submit" title='send message'></Button>
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
