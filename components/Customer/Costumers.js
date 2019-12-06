import React from 'react'

import Costumer from './Costumer'


const COSTUMERS = [
    {
        id: 1,
        img: 'client1'
    },
    {
        id: 2,
        img: 'client2'
    },
    {
        id: 3,
        img: 'client3'
    },
    {
        id: 4,
        img: 'client4'
    },
    {
        id: 5,
        img: 'client5'
    },
]


function Costumers() {
    return (
        <div>
            <section className="clients-section spad">
                <div className="container">
                    <div className="client-text">
                        <h2>A group of productive enterprises that produce or supply Goods, Services, or Sources of Income</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque orci purus, sodales in est quis, blandit sollicitudin est. Nam ornare ipsum ac accumsan auctor. Donec consequat arcu et commodo interdum. Vivamus posuere lorem lacus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque orci purus, sodales in est quis, blandit sollicitudin est.</p>
                    </div>
                    <div id="client-carousel" className="client-slider d-flex">

                        {
                            COSTUMERS.map(item => (
                                <Costumer key={item.id} img={item.img} />
                            )
                            )
                        }

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Costumers