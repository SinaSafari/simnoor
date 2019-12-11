import React from 'react'
import ImageWrapper from '../ImageWrapper'

function CostumerItem({ img }) {
    return (
        <div className="single-brand col-12 col-sm-4 col-md-1" >
            <a href="#" >
                <ImageWrapper iconName={img} />
            </a>
        </div>

    )
}


export default CostumerItem
