import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import RecentEvents from '../components/Events/RecentEvents'
import EventList from '../components/Events/EventList'
import Collaboration from '../components/Events/Collaboration'

const EventPage = () => {
  return (
    <>
      <Navbar />

      <div className='container'>
        <div className='display-4 d-flex justify-content-center mb-4 pt-1 container' style={{ fontFamily: "Lora" }}> <em className='mx-3'>Club Events</em></div>
      </div>

      <div className='container'>
        <RecentEvents />
        <EventList />
        <Collaboration/>
      </div>

      <Footer />
    </>
  )
}

export default EventPage