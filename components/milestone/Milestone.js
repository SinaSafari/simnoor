import React from 'react'

import MilestoneItem from './MilestoneItem'


const MILESTONS = [
    {
        id: 1,
        img: 'plug',
        subject: 'Clients',
        number: '725',
        paragraph: 'Nam ornare ipsum',
    },
    {
        id: 2,
        img: 'light',
        subject: 'Growth',
        number: '45%',
        paragraph: 'Nam ornare ipsum',
    },
    {
        id: 3,
        img: 'trafficCone',
        subject: 'Projects',
        number: '59',
        paragraph: 'Nam ornare ipsum',
    },
    {
        id: 4,
        img: 'worker',
        subject: 'Emploees',
        number: '138',
        paragraph: 'Nam ornare ipsum',
    },
]


function Milestone() {
    return (
        <section className="milestones-section set-bg" style={{ background: 'linear-gradient(to left, #000099 0%, #660066 100%)' }} >
            <div className="container text-white">
                <div className="row">
                    {
                        MILESTONS.map(item => (
                            <MilestoneItem key={item.id} img={item.img} number={item.number} subject={item.subject} paragraph={item.paragraph} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Milestone
