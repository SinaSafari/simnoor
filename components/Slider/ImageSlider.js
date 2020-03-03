import React from 'react'
import ImageWrapper from '../ImageWrapper'
import Button from '../Button/Button'

import { Carousel } from 'react-bootstrap'

function ImageSlider({ title, img, btnTitle }) {
    return (
        <>
            <Carousel className='d-inline-flex cCrousel' >
                {/* item3 */}
                <Carousel.Item className='position-static'>
                    <ImageWrapper iconName='slide6' />

                    <Carousel.Caption style={{}} >
                        <h1 className='text-center title' style={{ color: '#fff', fontWeight: '100', fontSize: '86px', textShadow: '2px 1px  #000' }}><span className='titleSlider' style={{ background: '#FC7626', padding: '0px 10px' }}>{title}</span></h1>
                    </Carousel.Caption>
                </Carousel.Item>
                {/* item4 */}
                <Carousel.Item className=' position-static '>
                    <ImageWrapper iconName='slide8' />
                    <Carousel.Caption style={{ marginTop: '100px' }} >
                        <h1 className='text-center title' style={{ color: '#000', fontWeight: '100', fontSize: '86px', textShadow: '2px 1px  #000' }}><span className='titleSlider' style={{ background: '#FC7626', padding: '0px 10px' }}>{title}</span></h1>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            {/* <div style={{ position: 'absolute', top: "-x" }}>
                <h1 style={{ color: 'black' }}>Sim Nor Yazdan</h1>
            </div> */}
            <style jsx>{`
                @media only screen and (max-width: 767px){
                    .titleSlider{
                        font-size: 35px;
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
