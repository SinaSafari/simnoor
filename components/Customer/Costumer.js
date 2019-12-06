import React from 'react'
import ImageWrapper from '../ImageWrapper'

function Costumer({ img }) {
    return (

        <div className="single-brand ">
            <a href="#">
                <ImageWrapper iconName={img} />
            </a>
        </div>

    )
}


export default Costumer
