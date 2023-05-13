import carosoul_1 from '../../Images/Home Images/2.jpg'
import carosoul_4 from '../../Images/Home Images/4.jpg'

import React from 'react'

function Home() {
  return (
    <div className='container mb-4'>
      <div className='container mb-4'>
        <div className='text-center display-4 container-fluid' style={{ fontFamily: "Lora", width: "60%" }}> <em>Empowering tomorrow's leaders, today</em></div>
        <p className='my-4'><b>Join the college rotary club and make a difference!</b></p>
        <button className="btn mt-3" type="submit" style={{ color: "white", backgroundColor: "#B4637A" }}><a className="nav-link fw-semibold fs-6" href="#">Join Us</a></button>
      </div>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mt-3">
        <div className="col mb-6 px-3 mb-5 d-flex flex-column justify-content-center align-items-center">
          <img src={carosoul_4} alt="" style={{ width: "85%" }} />
        </div>
        <div className="col mb-6 px-3 mb-5">
          <img src={carosoul_1} alt="" style={{ width: "100%" }} />
        </div>
        <div className="col mb-6 px-3 mb-5 d-flex flex-column justify-content-center align-items-center">
          <img src={carosoul_4} alt="" style={{ width: "85%" }} />
        </div>
      </div>
    </div>
  )
}

export default Home
