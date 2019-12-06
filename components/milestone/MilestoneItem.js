import React from 'react'

function MilestoneItem({ img, percent, paragraph, subject }) {
    return (
        <div className="col-lg-3 col-sm-6">
            <div className="milestone">
                <div className="milestone-icon">
                    <img src={img} alt="" />
                </div>
                <div className="milestone-text">
                    <span>{subject}</span>
                    <h2>{percent}</h2>
                    <p>{paragraph} </p>
                </div>
            </div>
        </div>
    )
}

export default MilestoneItem
