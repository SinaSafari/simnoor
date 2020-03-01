import React from 'react'
import ImageWrapper from '../ImageWrapper'


function Slider({ img, title }) {
    return (
        <div>
            <div className='card imgSlider'>
                <ImageWrapper iconName={img} className='card-img-top' />
                <div className='card-img-overlay container ' >
                    <h1 className='text-center heading mt-5'><span className='headingTitle'>{title}</span></h1>

                </div>
            </div>
            <style jsx global>{`
                .heading {
                    color: #000;
                    font-weight: 100;
                    font-size: 68px;
                    text-shadow: 1px 1px #fff;
                }
                .headingTitle {
                    background: #FC7626;
                    padding: 0px 10px;
                }
                @media only screen and (max-width: 767px){
                    
                    .imgSlider{
                        height: 30vh;
                    }
                    .imgSlider .card-img-top {
                        height: 100% !important;
                    }
                    .headingTitle {
                        font-size: 40px;
                    }
                }
                @media only screen and (min-width: 768px)and (max-width:980px ){
                    .headingTitle {
                        font-size: 40px;
                    }
                }

                }
            `}
            </style>
        </div >
    )
}

export default Slider