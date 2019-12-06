import React from 'react'
import Button from '../Button/Button'

import ImageWrapper from '../ImageWrapper'

function Card({ img, text, title = '', btnTitle }) {
    return (
        <div className='bg-dark'>
            <div className="card bg-dark my-3 " style={{ width: '18rem' }}>
                {/* <img src={img} class="card-img-top" alt="..." /> */}
                <ImageWrapper iconName={img} className='card-img-top' />
                <div className="card-body">
                    <h5 className="card-title text-white text-capitalize my-3">{title}</h5>
                    <p className="card-text text-white">{text}</p>
                    <Button title={btnTitle} />

                </div>
            </div>

        </div>
    )
}

export default Card