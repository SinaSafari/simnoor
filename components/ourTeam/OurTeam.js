import React from 'react'

import Card from '../Card/Card'

const TEAM_MEMBERS = [
    {
        id: 1,
        img: 'team1',
        title: 'Michael Smith',
        text: 'Engeneer Chemist'
    },
    {
        id: 2,
        img: 'team2',
        title: 'Jessica Steing',
        text: 'Engeneer Chemist'
    },
    {
        id: 3,
        img: 'team3',
        title: 'Chris Williams',
        text: 'Engeneer Chemist'
    },
]

function OurTeam() {
    return (
        <section className="team-section spad">
            <div className="container">
                <div className="team-text">
                    <h2>Our Amazing Team</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque orci purus, sodales in est quis, blandit sollicitudin est. Nam ornare ipsum ac accumsan auctor. Donec consequat arcu et commodo interdum. Vivamus posuere lorem lacus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque orci purus, sodales in est quis, blandit sollicitudin est.</p>
                </div>

                <div className='d-flex justify-content-center' >
                    {
                        TEAM_MEMBERS.map(item => {
                            return (
                                <div key={item.id} className='mx-5'>
                                    <div className=' text-center'>
                                        <Card img={item.img} title={item.title} text={item.text} btnTitle='Open CV' />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default OurTeam
