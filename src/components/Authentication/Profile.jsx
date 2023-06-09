import React from 'react'
import { CiLogout } from 'react-icons/ci'
import Navbar from '../Navbar'
import Footer from '../Footer'

const Profile = () => {
  return (
    <div>
      <Navbar />
      <div className='mt-4 pt-2 container'>
        {/* heading with buttons */}
        <div className='d-flex flex-column justify-content-start align-items-start mx-4'>
          
          <div className='display-5 d-flex justify-content-start mb-4' style={{ fontFamily: "Lora", width: "350px" }}> <em>User Dashboard</em></div>
          
          <div className='d-flex mb-4'>
            <button className="my-1 mx-0 btn fw-semibold btn-sm rounded-pill" style={{ backgroundColor: "#B4637A", color: "white" }} type="submit">Edit Details</button>
            <button className="my-1 mx-3 btn fw-semibold btn-sm rounded-pill" style={{ backgroundColor: "#D0B9EC" }} type="submit"><CiLogout color='black' size={20} /> Logout</button>
          </div>

        </div>
        {/* user's details */}
        <div className='d-flex flex-column justify-content-start align-items-start mx-4'>

          <div className='fs-3 d-flex justify-content-start' style={{ fontFamily: "Lora", width: "350px" }}> <em>Your's Details</em></div>



        </div>

      </div>
      <Footer />
    </div>
  )
}

export default Profile
