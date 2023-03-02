import React from 'react'
import fb_logo from '../Images/Social Logos/fb_logo.png'
import insta_logo from '../Images/Social Logos/insta_logo.png'

function Footer() {
    return (
        <div style={{ backgroundColor: "#114541" }}>
            <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-2 py-5 my-5 border-top">

                <div className="row">
                    <div className="col mb-3">
                        <h5 className='text-white'>Visit</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Home</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Events</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Notice</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Team</a></li>
                        </ul>
                    </div>

                    <div className="col mb-3">
                        <h5 className='text-white'>Profile</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Sign Up</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Login</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">GitHub</a></li>
                        </ul>
                    </div>

                    <div className="col mb-3">
                        <h5 className='text-white'>Social</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="#"><img src={fb_logo} className="bi" width="43" height="34"></img></a></li>
                            <li className="nav-item mb-2"><a href="#"><img src={insta_logo} className="bi" width="30" height="24"></img></a></li>
                            {/* <li className="nav-item mb-2"><a href="#"><img src='' className="bi" width="24" height="24"></img></a></li> */}
                        </ul>
                    </div>
                </div>

                <div className="col mb-3 d-flex flex-column align-items-center justify-content-center">
                    <div>
                        <a href="/" className="m-auto text-decoration-none">
                            <h3 className="text-light">Rotaract Club of RCCIIT</h3>
                        </a>
                        <p className="text-light">© 2022 RACRCCIIT, Inc. All rights reserved.</p>
                    </div>
                </div>

            </footer>
        </div>
    )
}

export default Footer
