import React from 'react'
import LeaderListElement from './LeaderListElement'
import { leaders } from './LeaderListData'

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { ScrollingCarousel } from '@trendyol-js/react-carousel';

function LeaderList() {
    return (
        <div style={{ backgroundColor: "#F6C177" }}>
            <div className="album py-5">
                <h1 style={{ fontFamily: "Lora" }} className='display-5'> Team Leaders</h1>
                <div className=" mt-4">
                    <div className="d-flex justify-content-start flex-wrap container">
                        {/* leader list rendering */}
                        <AliceCarousel
                            autoPlay
                            reverse
                            autoPlayInterval={1000}
                            infinite
                            items={leaders.length}
                            disableButtonsControls
                            disableDotsControls
                            mouseTracking
                            itemsInSlide={3}
                            responsive={{
                                0: { items: 1 },
                                768: { items: 2 },
                                1024: { items: 3 },
                            }}>
                            {
                                leaders.map((e) => {
                                    console.log(e)
                                    return <LeaderListElement role={e.role} name={e.name} img={e.img} text={e.text} key={e.role} />
                                })
                            }
                        </AliceCarousel>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeaderList
