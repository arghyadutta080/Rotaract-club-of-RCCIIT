import carosoul_1 from '../../Images/Home Images/2.jpg'
import carosoul_4 from '../../Images/Home Images/4.jpg'

import React from 'react'

function Home() {
  return (
    <div className='container mb-4'>
      <div className='container mb-4'>
        <div className='text-center display-4 container-fluid' style={{ fontFamily: "Lora", width: "60%" }}> <em>Empowering tomorrow's leaders, today</em></div>
        <p className='mt-3 mb-4'> Join the college rotary club and make a difference!</p>
        <button className="btn" type="submit" style={{ color: "white", backgroundColor: "#B4637A" }}><a className="nav-link fw-semibold fs-6" href="#">Join Us</a></button>
      </div>
      <div id="carouselExampleControls" className="carousel slide container-fluid" data-ride="carousel" style={{width: "50%"}}>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={carosoul_1} alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={carosoul_4} alt="Second slide" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

export default Home
