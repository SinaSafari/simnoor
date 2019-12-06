import React from 'react'
import ImageWrapper from '../ImageWrapper'

function MilestoneItem({ img, number, paragraph, subject }) {
    return (
        <div className="col-lg-3 col-sm-6">
            <div className="milestone">
                <div className="milestone-icon">
                    <ImageWrapper iconName={img} />
                </div>
                <div className="milestone-text">
                    <span>{subject}</span>
                    <h2>{number}</h2>
                    <p>{paragraph} </p>
                </div>
            </div>
        </div>
    )
}

export default MilestoneItem
