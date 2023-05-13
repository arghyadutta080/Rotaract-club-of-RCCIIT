import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import TeamList from '../components/RotaTeam/TeamList'

const TeamPage = () => {
  return (
    <div>
      <Navbar />
      <div className='container d-flex flex-column align-items-center justify-content-center mb-4'>
        <div className='text-center display-4 container-fluid' style={{ fontFamily: "Lora", width: "60%" }}> <em>Discover the team</em></div>
        <p className='my-4 fw-semibold' style={{ width: "70%" }}>Our team consists of highly skilled professionals with diverse backgrounds and expertise, working collaboratively to turn your vision into a reality that exceeds your expectations</p>
        <TeamList />
      </div>
      <Footer />
    </div>
  )
}

export default TeamPage
