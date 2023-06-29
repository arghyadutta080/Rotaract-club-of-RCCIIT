import { Link } from 'react-router-dom'
import carosoul_1 from '../../Images/Home Images/1.jpg'
import carosoul_2 from '../../Images/Home Images/2.jpg'
import carosoul_3 from '../../Images/Home Images/3.jpg'

import React from 'react'
import { toast } from 'react-hot-toast'

function Home() {

  const join_notification = () => {
    toast.error("Currently we are not accepting any new members")
  }

  const setyear_notification = () => {
    toast.error("Service is under construction")
  }


  return (
    <div className='container mb-4'>
      <div className='mb-4 d-flex flex-column align-items-center justify-content-center' style={{ width: "100%" }}>
        <div className='text-center display-4 mt-2' style={{ fontFamily: "Lora", minWidth: "360px", maxWidth: "700px" }}> <em>Empowering tomorrow's leaders, today</em></div>
        <div className='d-flex justify-content-center align-items-center fs-3 my-4 py-2 container flex-wrap' style={{ fontFamily: "Lora" }}>
          <em style={{ marginRight: "17px" }}>Rotaract Year</em>
          <div className="dropdown ">
            <button className="btn dropdown-toggle fs-5 rounded-5 py-1 px-3" style={{ backgroundColor: "#D0B9EC" }} type="button" data-bs-toggle="dropdown" aria-expanded="false">
              <em className='semi-bold'>2022 - 2023</em>
            </button>
            <ul className="dropdown-menu ">
              <li><div className="dropdown-item my-2">2022 - 2023</div></li>
              <li><div className="dropdown-item my-2" onClick={setyear_notification}>2021 - 2022</div></li>
              <li><div className="dropdown-item my-2" onClick={setyear_notification}>2020 - 2021</div></li>
              <li><div className="dropdown-item my-2" onClick={setyear_notification}>2019 - 2020</div></li>
              <li><div className="dropdown-item my-2" onClick={setyear_notification}>2018 - 2019</div></li>
              <li><div className="dropdown-item my-2" onClick={setyear_notification}>2017 - 2018</div></li>
            </ul>
          </div>
        </div>
        <button onClick={join_notification} className="btn rounded-3 my-1" type="submit" style={{ color: "white", backgroundColor: "#B4637A" }}><Link className="nav-link fw-semibold fs-6" to="/">Join Us</Link></button>
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
