import React from 'react'
import Card from '../Card/Card'


const FEATURED = [
    {
        id: 1,
        title: 'AAC/TW',
        text: 'Shaped Wire Compact Concentric-Lay-Stranded Aluminum Conductor is ...',
        img: 'featured1'
    },
    {
        id: 2,
        title: 'ACSR',
        text: 'ACSR conductors provide dependable performance for many years under ...',
        img: 'featured2'
    },
    {
        id: 3,
        title: 'OPGW',
        text: 'The Cable Armoring consisting of one, two or more layers of armoring wires.',
        img: 'featured3'
    },
]

function FeaturedPosts() {

    return (
        <div style={{ background: 'linear-gradient(to left, #fc4a1a 0%, #f7b733 100%)' }}>
            <div className='d-flex flex-wrap justify-content-around container '>
                {
                    FEATURED.map(item => (
                        <div key={item.id}>
                            <Card title={item.title} text={item.text} img={item.img} btnTitle='Read More' />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default FeaturedPosts


