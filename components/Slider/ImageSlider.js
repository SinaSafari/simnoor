import React from 'react'
import ImageWrapper from '../ImageWrapper'
import Button from '../Button/Button'

import { Carousel } from 'react-bootstrap'

function ImageSlider({ title, img, btnTitle }) {
    return (
        <>
            <Carousel className='d-inline-flex cCrousel' >
                <Carousel.Item className=' position-static'>
                    <ImageWrapper iconName='hero1' />
                    <Carousel.Caption className='pb-0'>
                        <h1 className='text-center title' style={{ color: '#fff', fontWeight: '100', fontSize: '68px', textShadow: '2px 1px  #000' }}><span className='titleSlider' style={{ background: '#b44501', padding: '0px 10px' }}>{title}</span></h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className=' position-static'>
                    <ImageWrapper iconName='hero2' />

                    <Carousel.Caption>
                        <h1 className='text-center title ' style={{ color: '#fff', fontWeight: '100', fontSize: '68px', textShadow: '2px 1px  #000' }}><span className='titleSlider' style={{ background: '#b44501', padding: '0px 10px' }}>{title}</span></h1>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <style jsx>{`
                @media only screen and (max-width: 767px){
                    .titleSlider{
                        font-size: 25px;
                    }
                    .btnSlider{
                        display: none;
                    }
            `}

            </style>
        </>
    )
}

export default ImageSlider
