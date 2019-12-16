import React from 'react'
import ImageWrapper from '../ImageWrapper'

import Botton from '../Button/Button'

function Slider({ img, title, btnTitle }) {
    return (
        <div>
            <div className='card'>
                <ImageWrapper iconName={img} className='card-img-top' />
                {/* style={{ marginTop: '100px' }} */}
                <div className='card-img-overlay container ' >
                    <h1 className='text-center heading'><span className='headingTitle'>{title}</span></h1>
                    <div style={{ marginTop: '30px' }} className='botton'>
                        <Botton title={btnTitle} classes='d-flex justify-content-center ' />
                    </div>
                </div>
            </div>
            <style jsx>{`
                .heading {
                    color: #000;
                    font-weight: 100;
                    font-size: 68px;
                    text-shadow: 1px 1px #fff;
                }
                .headingTitle {
                    background: #b44501;
                    padding: 0px 10px;
                }
                @media only screen and (max-width: 767px){
                    .heading{
                        font-size: 23px;
                        color: white;
                    }
                    .botton{
                        display:none !important;
                    }
                }
            `}
            </style>
        </div >
    )
}

export default Slider