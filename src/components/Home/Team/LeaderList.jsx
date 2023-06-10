import React from 'react'
import LeaderListElement from './LeaderListElement'
import { leaders } from './LeaderListData'
import { ScrollingCarousel } from '@trendyol-js/react-carousel';

function LeaderList() {
    return (
        <div style={{ backgroundColor: "#F6C177" }}>
            <div className="album py-5">
                <h1 style={{ fontFamily: "Lora" }}> <em>Team Leaders</em></h1>
                <div className=" mt-4">
                    <div className="d-flex justify-content-start flex-wrap container">
                        {/* leader list rendering */}
                        <ScrollingCarousel show={3} slide={3} swiping={true} className='d-flex justify-content-start flex-wrap' >
                            {
                                leaders.map((e) => {
                                    console.log(e)
                                    return <LeaderListElement role={e.role} name={e.name} img={e.img} text={e.text} key={e.role} />
                                })
                            }
                        </ScrollingCarousel>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeaderList
