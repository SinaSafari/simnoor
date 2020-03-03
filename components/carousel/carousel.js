import React from 'react'
import ImageWrapper from '../ImageWrapper'
import { Carousel } from 'react-bootstrap'

const CarouselSlider = () => {
    return (
        <div className="container">
            <Carousel>
                <Carousel.Item>
                    <ImageWrapper
                        className="d-block w-100"
                        iconName="slide4"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 style={{ color: 'white', background: 'orange', borderRadius: '8px', padding: '10px 0', textShadow: '0 0 1px #000, 0 0 2px #000' }}>Sim Noor Yazdan</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <ImageWrapper
                        className="d-block w-100"
                        iconName="slide5"
                        alt="First slide"
                    />

                    <Carousel.Caption >

                        <h3 style={{ color: 'white', background: 'orange', borderRadius: '8px', padding: '10px 0', textShadow: '0 0 1px #000, 0 0 2px #000' }}>Sim Noor Yazdan</h3>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <ImageWrapper
                        className="d-block w-100"
                        iconName="slide2"
                        alt="First slide"
                    />

                    <Carousel.Caption >
                        <h3 style={{ color: 'white', background: 'orange', borderRadius: '8px', padding: '10px 0', textShadow: '0 0 1px #000, 0 0 2px #000' }}>Sim Noor Yazdan</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default CarouselSlider