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
                  <a className="nav-link active fw-semibold fs-5 mx-3" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active fw-semibold fs-5 mx-3" href="#">Events</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active fw-semibold fs-5 mx-3" href="#">Notice</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active fw-semibold fs-5 mx-3" href="#">Team</a>
                </li>
              </ul>
              <form className="d-flex flex-row justify-content-center" role="search">
                <button className="btn" type="submit"  style={{ color: "white", backgroundColor: "#B4637A" }}><a className="nav-link fw-semibold fs-5" href="#">Profile</a></button>
              </form>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;