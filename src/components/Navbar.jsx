import React from 'react';
import { Link } from 'react-router-dom';
import Club_Logo from '../Images/Club_Logo.png';


function Navbar() {

  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <img src={Club_Logo} style={{ height: "80px", width: "120px", marginRight: "40px" }} alt="" />
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active fw-semibold fs-5 mx-3" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active fw-semibold fs-5 mx-3" to="/event">Events</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active fw-semibold fs-5 mx-3" to="/notice">Notice</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active fw-semibold fs-5 mx-3" to="/team">Team</Link>
                </li>
              </ul>
              <form className="d-flex flex-row justify-content-center" role="search">
                <div className='py-1 px-3 rounded-3' style={{ color: "white", backgroundColor: "#B4637A" }}><Link className="nav-link fw-semibold fs-5" to="/profile">Profile</Link></div>
              </form>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;