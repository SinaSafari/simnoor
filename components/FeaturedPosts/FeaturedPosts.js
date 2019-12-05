import React from 'react'
import Card from '../Card/Card'


const FEATURED = [
    {
        id: 1,
        title: 'title1',
        text: 'lorem lorem lorem lorem lorem lorem lorem',
        img: 'featured1'
    },
    {
        id: 2,
        title: 'title2',
        text: 'survived not only fl an unknown printer took a galley of type',
        img: 'featured2'
    },
    {
        id: 3,
        title: 'title3',
        text: 'lorem lorem lorem lorem lorem lorem lorem',
        img: 'featured3'
    },
]

function FeaturedPosts() {

    return (
        <div style={{ background: 'linear-gradient(to left, #000099 0%, #660066 100%)' }}>
            <div className='d-flex flex-wrap justify-content-around container '>
                {
                    FEATURED.map(item => (
                        <div key={item.id}>
                            <Card title={item.title} text={item.text} img={item.img} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default FeaturedPosts


