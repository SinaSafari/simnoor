import React from 'react'
import Link from 'next/link'

function ContactUs() {
    return (
        <div>
            <section className="cta-section" style={{ backgroundColor: '#FC7626' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 d-flex align-items-center">
                            <h2>We produce or supply Goods, Services, or Sources</h2>
                        </div>
                        <div className="col-lg-3 text-lg-right" >
                            <Link href="/contact">
                                <a className="site-btn sb-dark contactBtn">contact us</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <style jsx>
                {`
                .contactBtn{
                    border-radius: 5px;
                    transition: all .3s;
                }
                    .contactBtn:hover{
                        color: black;
                        background-color: white;
                    }              
                `}
            </style>
        </div>
    )
}

export default ContactUs