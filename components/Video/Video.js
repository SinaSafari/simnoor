import React from 'react'
import ImageWrapper from '../ImageWrapper'


function Video() {
    return (
        <div>
            <section className="video-section spad" >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="video-text">
                                <h2>We produce or supply Goods, & Services</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque orci purus, sodales in est quis, blandit sollicitudin est. Nam ornare ipsum ac accumsan auctor. Donec consequat arcu et commodo interdum. Vivamus posuere lorem lacus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque orci purus, sodales in est quis, blandit sollicitudin est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque orci purus, sodales in est quis, blandit sollicitudin est. Nam ornare ipsum ac accumsan auctor. Donec consequat arcu et commodo interdum. Vivamus posuere lorem lacus.Lorem ipsum dolor sit amet, consectetur.</p>
                                <a href="#" className="site-btn">contact us</a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="video-box set-bg">
                                <ImageWrapper iconName='video' style={{ height: '100%', width: '100%' }} />
                                {/* <a href="https://www.youtube.com/watch?v=wbnaHgSttVo" className="video-popup">
                                    <i className="fa fa-play"></i>
                                </a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}


export default Video