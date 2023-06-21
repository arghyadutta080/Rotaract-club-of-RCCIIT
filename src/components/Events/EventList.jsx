import React from 'react'
import { event_2022, event_2023 } from './EventListData'
import { ScrollingCarousel } from '@trendyol-js/react-carousel';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const EventList = () => {

    const [year, setYear] = useState(event_2023);

    return (
        <>
            <div className='d-flex justify-content-start'>
                <div className='d-flex justify-content-center align-items-center flex-wrap fs-4 mb-3 mt-4 pt-3 container' style={{ fontFamily: "Lora" }}>
                    <em className='mx-4'>Past Events & Collaborations from</em>
                    <div className="dropdown ">
                        <button className="btn dropdown-toggle my-2" style={{ backgroundColor: "#D0B9EC" }} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            {year === event_2023 ? "2023" : "2022"}
                        </button>
                        <ul className="dropdown-menu ">
                            <li><div className="dropdown-item my-2" onClick={() => { setYear(event_2023) }} >2023</div></li>
                            <li><div className="dropdown-item my-2" onClick={() => { setYear(event_2022) }}>2022</div></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='d-flex justify-content-start flex-wrap container'>
                <ScrollingCarousel show={3} slide={3} swiping={true} className='d-flex justify-content-start flex-wrap'>
                    {
                        year.map((event, index) => {
                            return (
                                <div key={index} className='d-flex flex-column justify-content-evenly mx-3 px-4 rounded-4 mt-2 mb-5' style={{ backgroundColor: "#D7ECEF", width: "300px", height: "340px" }}>
                                    <div className='fw-semibold fs-5' style={{ textAlign: "left" }}>{event.name}</div>
                                    <div className='fw-normal' style={{ textAlign: "left" }}>{event.desc.replace(/(<([^>]+)>)/ig, "")}</div>
                                    <div className='d-flex flex-column'>
                                        <div className='fw-semibold' style={{ color: "#9893A5", textAlign: "left" }}>{`${event.date}`}</div>
                                        <div className='fw-semibold' style={{ color: "#9893A5", textAlign: "left" }}>{event.venue}</div>
                                    </div>
                                    <div className='p-2 rounded-4 fw-semibold' style={{ backgroundColor: "#B4637A", width: "40%" }}><Link to={`${event.more}`} style={{ color: "white", textDecoration: "none" }}>Show More</Link></div>
                                </div>
                            )
                        })
                    }
                </ScrollingCarousel>
            </div>
        </>
    )
}

export default EventList
