import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookSquare } from 'react-icons/fa'
import { BsInstagram, BsLinkedin } from 'react-icons/bs'


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
                            <h4 className='text-white'>Member</h4>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><Link to="/profile" className="nav-link p-0 text-light">Profile</Link></li>
                                <li className="nav-item mb-2"><Link to="/login" className="nav-link p-0 text-light">Login</Link></li>
                                <li className="nav-item mb-2"><Link to="/signup" className="nav-link p-0 text-light">Sign Up</Link></li>
                            </ul>
                        </div>

                        <div className="col mb-3">
                            <h4 className='text-white'>Social</h4>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-3"><Link to="https://www.facebook.com/rotaractrcciit"><FaFacebookSquare size={30} color='white' /> </Link></li>
                                <li className="nav-item mb-3"><Link to="https://www.instagram.com/rotaractrcciit/"><BsInstagram size={28} color='white' /> </Link></li>
                                <li className="nav-item mb-3"><Link to="https://www.linkedin.com/company/rotaractrcciit/"><BsLinkedin size={27} color='white' /> </Link></li>
                            </ul>
                        </div>
                    </div>


                </div>

            </footer>
        </div>
    )
}

export default Footer
