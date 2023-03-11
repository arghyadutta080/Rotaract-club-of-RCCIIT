import carosoul_1 from '../../Images/Home Images/2.jpg'
import carosoul_4 from '../../Images/Home Images/4.jpg'

import React from 'react'

function Home1() {
  return (
    <div className='container mb-4'>
      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
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

export default Home1
