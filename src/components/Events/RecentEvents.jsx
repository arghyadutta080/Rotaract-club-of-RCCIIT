import React from 'react'

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import img_1 from './Recent event images/recent_event_1.jpg'
import img_2 from './Recent event images/recent_event_2.jpg'
import img_3 from './Recent event images/recent_event_3.jpg'


const events = [
    {
        name: "Barnali",
        date: "21st May, 2023",
        time: "4.00 pm",
        venue: "Rotary Sadan, Kolkata",
        img: img_1,
        desc: "<p>The Rotaract Club of Calcutta Renaissance RID 3291 organized Barnali. Rotaract Club of RCCIIT co-hosted the event.</p>"
    },
    {
        name: "Initium",
        date: "18th March, 2023",
        time: "7.30 pm",
        venue: "Google Meet",
        img: img_2,
        desc: "Each year we organise club orientation ceremony for 1st years and taking new members from other years too."
    },
    {
        name: "Tree Plantation Drive",
        date: "17th March, 2023",
        time: "3.00 pm",
        venue: "RCCIIT Campus",
        img: img_3,
        desc: "Rotaract Club of RCCIIT organized a tree plantation drive in the college campus. The event was a huge success."
    },
]

const RecentEvents = () => {
    return (
        <>
            <div className='d-flex justify-content-start fs-4 mb-2 mt-2 container' style={{ fontFamily: "Lora" }}> <em className='mx-4'>Recent Events & Collaboration</em></div>
            <div className='d-flex justify-content-center flex-wrap container'>
                <AliceCarousel
                    autoPlay
                    autoPlayInterval={1100}
                    infinite
                    items={events.length}
                    disableButtonsControls
                    disableDotsControls
                    mouseTracking
                    itemsInSlide={3}
                    responsive={{
                        0: { items: 1 },
                        768: { items: 2 },
                        1024: { items: 3 },
                    }} className='container' >
                    {
                        events.map((event, index) => {
                            return (
                                <div key={index} className='d-flex flex-column align-items-start align-content-around p-3 mx-4 rounded-4 my-2' style={{ backgroundColor: "#D7ECEF", minWidth: "320px", maxWidth: "360px" }}>
                                    <div className='fw-semibold fs-3'>{event.name}</div>
                                    <div className='fw-normal my-3 text-left' style={{ textAlign: "left" }}>{event.desc.replace(/(<([^>]+)>)/ig, "")}</div>
                                    <div className='fw-semibold mt-1' style={{ color: "#9893A5" }}>{`${event.date} • ${event.time}`}</div>
                                    <div className='fw-semibold mb-3' style={{ color: "#9893A5" }}>{event.venue}</div>
                                    <div className='d-flex justify-content-center align-items-center' style={{ width: "100%" }} >
                                        <img src={event.img} alt={event.name} className='img-fluid my-3' style={{ width: "270px", height: "270px" }} />
                                    </div>
                                </div>
                            )
                        })
                    }
                </AliceCarousel>
            </div>
        </>
    )
}

export default RecentEvents
