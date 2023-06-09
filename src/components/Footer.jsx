import React from 'react'
import { Link } from 'react-router-dom'
import fb_logo from '../Images/Social Logos/fb_logo.png'
import insta_logo from '../Images/Social Logos/insta_logo.png'
import linkedIn_logo from '../Images/Social Logos/linkedIn_logo.png'


function Footer() {
    return (
        <div style={{ backgroundColor: "#114541" }}>
            <footer className="">

                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 py-5">
                    <div className="col mb-6">
                        <h1 className='text-white mb-5 fst-italic'>Contact Us</h1>
                        <div className='text-white d-flex flex-row align-items-center justify-content-evenly flex-wrap'>
                            <div>
                                <h5>Sumit Anand</h5>
                                {/* <p>sumit.annad@gmail.com</p> */}
                                <p>+91 88098 00499</p>
                            </div>
                            <div>
                                <h5>Adrita Dutta</h5>
                                {/* <p>adritadutta2713@gmail.com</p> */}
                                <p>+91 98364 45449</p>
                            </div>
                        </div>
                    </div>

                    <div className="col mb-6 text-white py-4 mt-4">
                        <div className='d-flex flex-column align-items-center justify-content-center mt-4'>
                            <div>
                                <p>Not a member of Rotaract Club of RCCIIT ?</p>
                                <button className="btn" type="submit" style={{ color: "white", backgroundColor: "#B4637A" }}><a className="nav-link fw-semibold fs-6" href="#">Join Us</a></button>
                            </div>
                        </div>
                    </div>

                </div>

                <hr className="container text-white" />

                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 py-5 ">

                    <div className="col mb-3 d-flex flex-column align-items-center justify-content-center">
                        <div className='py-4'>
                            <a href="/" className="m-auto text-decoration-none">
                                <h3 className="text-light">Rotaract Club of RCCIIT</h3>
                            </a>
                            <p className="text-light">© 2022 RACRCCIIT, Inc. All rights reserved.</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col mb-3">
                            <h4 className='text-white'>Visit</h4>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-light">Home</Link></li>
                                <li className="nav-item mb-2"><Link to="/event" className="nav-link p-0 text-light">Events</Link></li>
                                <li className="nav-item mb-2"><Link to="/notice" className="nav-link p-0 text-light">Notice</Link></li>
                                <li className="nav-item mb-2"><Link to="/team" className="nav-link p-0 text-light">Team</Link></li>
                            </ul>
                        </div>

                        <div className="col mb-3">
                            <h4 className='text-white'>Profile</h4>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><Link to="/signup" className="nav-link p-0 text-light">Sign Up</Link></li>
                                <li className="nav-item mb-2"><Link to="/login" className="nav-link p-0 text-light">Login</Link></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">GitHub</a></li>
                            </ul>
                        </div>

                        <div className="col mb-3">
                            <h4 className='text-white'>Social</h4>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><a href="#"><img src={fb_logo} className="bi" width="43" height="34"></img></a></li>
                                <li className="nav-item mb-2"><a href="#"><img src={insta_logo} className="bi" width="30" height="28"></img></a></li>
                                <li className="nav-item mb-2"><a href="#"><img src={linkedIn_logo} className="bi" width="35" height="35"></img></a></li>
                            </ul>
                        </div>
                    </div>


                </div>

            </footer>
        </div>
    )
}

export default Footer
