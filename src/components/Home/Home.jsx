import React from 'react'
import carosoul_1 from '../../Images/Home Images/2.jpg'
import carosoul_4 from '../../Images/Home Images/4.jpg'
// import home_bg_1 from './Images/home_bg_1.jpeg'


function Home() {
    return (
        <div>
            <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" className="active" aria-current="true"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" className=""></button>
                </div>
                <div className="carousel-inner">                 
                    <div className="carousel-item active">
                        <img src={carosoul_4} alt="" style={{opacity: "0.7"}} />
                        <div className="container">
                            <div className="carousel-caption p-5">
                                <h1 style={{color: "#800000"}}>Rotaract Club of RCCIIT</h1>
                                <p style={{fontWeight: "light", color : "#ff3300"}}>ABC</p>
                                <p><a className="btn btn-lg btn-warning" href="#">Learn more</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={carosoul_1} alt="" style={{opacity: "0.7"}}/>
                        <div className="container">
                            <div className="carousel-caption text-start">
                                <h1 style={{color: "#151415"}}>Empowering tomorrow's leaders, today</h1>
                                <h1
                                style={{
                                    width: '811px',
                                    height: '164px',
                                    top: '130px',
                                    left: '235px',
                                }}>
                                    
                                </h1>
                                <p style={{fontWeight: "400", color: "#151415"}}>Join the College Rotary Club and Make a Difference</p>
                                <p style={{fontWeight: "400", color: "#151415"}}>AGITATE ASPIRE ACHIEVE</p>
                                <p><a className="btn btn-sm btn-success" href="#">Sign Up</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Home