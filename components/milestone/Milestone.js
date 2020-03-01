import React from 'react'

import MilestoneItem from './MilestoneItem'


const MILESTONS = [
    {
        id: 1,
        img: 'plug',
        subject: 'Clients',
        number: '725',
        paragraph: 'In 10 Years',
    },
    {
        id: 2,
        img: 'light',
        subject: 'Growth',
        number: '45%',
        paragraph: 'In Production',
    },
    {
        id: 3,
        img: 'trafficCone',
        subject: 'Projects',
        number: '59',
        paragraph: 'AAC and AAAC',
    },
    {
        id: 4,
        img: 'worker',
        subject: 'Emploees',
        number: '138',
        paragraph: 'Enginners and clerks',
    },
]


function Milestone() {
    return (
        <section className="milestones-section set-bg grad" >
            <div className="container text-white  ">
                <div className="row ">
                    {
                        MILESTONS.map(item => (
                            <MilestoneItem className='item' key={item.id} img={item.img} number={item.number} subject={item.subject} paragraph={item.paragraph} />
                        ))
                    }
                </div>
            </div>
            <style jsx>{`
                    .grad {
                        background: linear-gradient(to left, #fc4a1a 0%, #f7b733 100%);
                    }
            `}
            </style>
        </section>
    )
}

export default Milestone
