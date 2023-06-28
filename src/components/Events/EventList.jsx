import React from 'react'
import { event_2022, event_2023, collaboration_2022, collaboration_2023 } from './EventListData'

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import { useState } from 'react';
import { Link } from 'react-router-dom';

const EventList = () => {

    const [eventYear, setEventYear] = useState(event_2023);

    return (
        <>
            <div className='d-flex justify-content-start'>
                <div className='d-flex justify-content-center align-items-center flex-wrap fs-4 mb-3 mt-4 pt-3 container' style={{ fontFamily: "Lora" }}>
                    <em className='mx-4'>Past Events from</em>
                    <div className="dropdown ">
                        <button className="btn dropdown-toggle my-2" style={{ backgroundColor: "#D0B9EC" }} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            {eventYear === event_2023 ? "2023" : "2022"}
                        </button>
                        <ul className="dropdown-menu ">
                            <li><div className="dropdown-item my-2" onClick={() => { setEventYear(event_2023) }} >2023</div></li>
                            <li><div className="dropdown-item my-2" onClick={() => { setEventYear(event_2022) }}>2022</div></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='container'>
                <AliceCarousel
                    autoPlay
                    autoPlayInterval={1000}
                    infinite
                    items={eventYear.length}
                    disableButtonsControls
                    disableDotsControls
                    mouseTracking
                    itemsInSlide={4}
                    responsive={{
                        0: { items: 1 },
                        576: { items: 2 },
                        768: { items: 3 },
                        992: { items: 4 },
                    }} className='container' >
                    {
                        eventYear.map((event, index) => {
                            return (
                                <div key={index} style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-evenly',
                                    marginLeft: '1.15rem',
                                    marginRight: '1.15rem',
                                    paddingLeft: '1rem',
                                    paddingRight: '1rem',
                                    borderRadius: '0.5rem',
                                    marginTop: '0.5rem',
                                    marginBottom: '1.25rem',
                                    backgroundColor: "#D7ECEF", width: "300px", height: "340px"
                                }} >
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
                </AliceCarousel>
            </div>
        </>
    )
}

export default EventList
