import { Link } from 'react-router-dom'
import carosoul_1 from '../../Images/Home Images/1.jpg'
import carosoul_2 from '../../Images/Home Images/2.jpg'
import carosoul_3 from '../../Images/Home Images/3.jpg'

import React from 'react'
import { toast } from 'react-hot-toast'

function Home() {

  const notification = () => {
    toast.error("Currently service is not activated")
  }

  return (
    <div className='container mb-4'>
      <div className='mb-4 d-flex flex-column align-items-center justify-content-center' style={{ width: "100%" }}>
        <div className='text-center display-4 mt-2' style={{ fontFamily: "Lora", minWidth: "380px", maxWidth: "700px" }}> <em>Empowering tomorrow's leaders, today</em></div>
        <p className='my-4' style={{ width: "80%" }}><b>Join the college rotary club and make a difference!</b></p>
        <button onClick={notification} className="btn mt-3" type="submit" style={{ color: "white", backgroundColor: "#B4637A" }}><Link className="nav-link fw-semibold fs-6" to="/">Join Us</Link></button>
      </div>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mt-4 mb-5 pb-4">
        <div className="col mb-6 px-3 d-flex flex-column justify-content-center align-items-center">
          <img src={carosoul_3} alt="" style={{ width: "85%" }} />
        </div>
        <div className="col mb-6 px-3">
          <img src={carosoul_1} alt="" style={{ width: "100%" }} />
        </div>
        <div className="col mb-6 px-3 d-flex flex-column justify-content-center align-items-center">
          <img src={carosoul_2} alt="" style={{ width: "85%" }} />
        </div>
      </div>
    </div>
  )
}

export default Home
