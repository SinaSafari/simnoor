import React from 'react'
import ImageWrapper from '../ImageWrapper'
import Button from '../Button/Button'

import { Carousel } from 'react-bootstrap'

function ImageSlider({ title, img, btnTitle }) {
    return (
        <>
            <Carousel className='d-inline-flex cCrousel' >
                <Carousel.Item className=' position-static'>
                    {/* <img
                    className="d-block w-100"
                    src={bg1}
                    alt="First slide"
                /> */}
                    <ImageWrapper iconName='hero1' />
                    <Carousel.Caption className='pb-0'>
                        {/* <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                        <h1 className='text-center title' style={{ color: '#fff', fontWeight: '100', fontSize: '68px', textShadow: '2px 1px  #000' }}><span style={{ background: '#b44501', padding: '0px 10px' }}>{title}</span></h1>
                        <div style={{ marginTop: '30px' }}>
                            <Button title={btnTitle} classes='d-flex justify-content-center' />
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className=' position-static'>
                    {/* <img
                    className="d-block w-100"
                    src={bg2}
                    alt="Third slide"
                /> */}
                    <ImageWrapper iconName='hero2' />

                    <Carousel.Caption>
                        {/* <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                        <h1 className='text-center' style={{ color: '#fff', fontWeight: '100', fontSize: '68px', textShadow: '2px 1px  #000' }}><span style={{ background: '#b44501', padding: '0px 10px' }}>{title}</span></h1>
                        <div style={{ marginTop: '30px' }}>
                            <Button title={btnTitle} classes='d-flex justify-content-center ' />
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <style jsx>{`
        @media only screen and (max-width: 767px){
            .title{
                font-size: 10px;
            }
            .botton{
                display: none;
            }
        
            
            `}

            </style>
        </>
    )
}

export default ImageSlider
