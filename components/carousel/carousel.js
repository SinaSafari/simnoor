import React from 'react'
import ImageWrapper from '../ImageWrapper'
import { Carousel } from 'react-bootstrap'

const CarouselSlider = () => {
    return (
        <div className="container-fluid">
            <Carousel >
                <Carousel.Item>
                    <ImageWrapper
                        className="d-block w-100"
                        iconName="slide6"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 style={{ color: 'white', background: 'orange', borderRadius: '8px', padding: '10px 0', textShadow: '0 0 1px #000, 0 0 2px #000' }}>Sim Noor Yazdan</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <ImageWrapper
                        className="d-block w-100"
                        iconName="slide11"
                        alt="First slide"
                    />

                    <Carousel.Caption >

                        <h3 style={{ color: 'white', background: 'orange', borderRadius: '8px', padding: '10px 0', textShadow: '0 0 1px #000, 0 0 2px #000' }}>Sim Noor Yazdan</h3>

                    </Carousel.Caption>
                </Carousel.Item>
                {/* <Carousel.Item>
                    <ImageWrapper
                        className="d-block w-100"
                        iconName="slide6"
                        alt="First slide"
                    />

                    <Carousel.Caption >
                        <h3 style={{ color: 'white', background: 'orange', borderRadius: '8px', padding: '10px 0', textShadow: '0 0 1px #000, 0 0 2px #000' }}>Sim Noor Yazdan</h3>
                    </Carousel.Caption>
                </Carousel.Item> */}
            </Carousel>
            <style jsx>{`
            @media screen and (max-width: 500px){
                h3 {
                    padding: 0;
                    font-size: 14px;
                }
            }
            `}</style>
        </div>
    )
}

export default CarouselSlider