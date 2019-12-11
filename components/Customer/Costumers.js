import React from 'react'

import Costumer from './CostumerItem'


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
                        <p>Sim Noor Yazdan Co. which focuses in research & development, innovation in Electric industry and pure energy is looking for reducing wasting pure energy through foundemental researches. This wasting is due to transmission of the energy or the way of saving. This company is also  aim at researching and developing different kinds of conductions and especially new ones. This could be done through the best in hand technology and the latest Standards in the world which has got the crucial role in this work.</p>
                    </div>
                    <div id="client-carousel" className="client-slider">
                        <div className='row w-100 d-flex justify-content-between'>

                            {
                                COSTUMERS.map(item => (
                                    <Costumer key={item.id} img={item.img} />
                                )
                                )
                            }
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Costumers