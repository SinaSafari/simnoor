import React from 'react'
import ImageWrapper from '../ImageWrapper'



function Slider({ img, title }) {
    return (
        <div>
            <div className='card'>
                <ImageWrapper iconName={img} className='card-img-top' />

                <div className='card-img-overlay'>
                    <p>{title}e</p>
                </div>
            </div>
        </div >
    )
}

export default Slider