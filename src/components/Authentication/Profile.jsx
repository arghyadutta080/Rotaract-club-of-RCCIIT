import React, { useState, useEffect } from 'react'
import { CiLogout } from 'react-icons/ci'
import Navbar from '../Navbar'
import Footer from '../Footer'
import axios from 'axios'


const Profile = () => {

  const classRoll = 'it2019046';

  const [user, setUser] = useState('');
  const [roll, setRoll] = useState('');
  const [rid, setRid] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [dob, setDob] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');
  const [doi, setDoi] = useState('');

  useEffect(() => {
    axios.get(`https://aodzylv2p2.execute-api.ap-south-1.amazonaws.com/dev/user-by-roll/${classRoll}`)
      .then((response) => {
        const userInfo = response.data;
        setUser(userInfo[0].name);
        setRoll(userInfo[0].roll);
        setRid(userInfo[0].rid);
        setEmail(userInfo[0].email);
        setPhone(userInfo[0].phone);
        setDob(userInfo[0].dob);
        setBloodGroup(userInfo[0].blood);
        setDoi(userInfo[0].doi);
      })
      .catch(error => {
        console.error(error);
      });
  }, [])


  return (
    <div>

      <Navbar />
      
      <div className='mt-4 pt-2 container'>
        {/* heading with buttons */}
        <div className='d-flex flex-column justify-content-start align-items-start mx-4 container'>

          <div className='display-5 d-flex justify-content-start mb-4' style={{ fontFamily: "Lora", width: "350px" }}> <em>User Dashboard</em></div>

          <div className='d-flex mb-3'>
            <button className="my-1 mx-0 btn fw-semibold btn-sm rounded-pill" style={{ backgroundColor: "#B4637A", color: "white" }} type="submit">Edit Details</button>
            <button className="my-1 mx-3 btn fw-semibold btn-sm rounded-pill" style={{ backgroundColor: "#D0B9EC" }} type="submit"><CiLogout color='black' size={20} /> Logout</button>
          </div>

        </div>


        {/* user's details */}

        <div className='fs-3 d-flex justify-content-center' style={{ fontFamily: "Lora" }}> <em>Your Details</em></div>

        <div className='d-flex justify-content-around flex-wrap mb-4 pb-4'>
          {/* left-column */}
          <div  style={{ width: "360px" }}>
            <div className="mt-4 d-flex rounded-pill">
              <div className='text-center fw-semibold py-1' style={{ width: "160px", backgroundColor: "#D7ECEF", border: "4px solid #D7ECEF" }}>Your Name</div>
              <div className='text-center fw-semibold py-1' style={{ width: "200px", border: "4px solid #D7ECEF" }}>{user}</div>
            </div>
            <div className="mt-4 d-flex rounded-pill">
              <div className='text-center fw-semibold py-1' style={{ width: "160px", backgroundColor: "#D7ECEF", border: "4px solid #D7ECEF" }}>Your Phone</div>
              <div className='text-center fw-semibold py-1' style={{ width: "200px", border: "4px solid #D7ECEF" }}>{phone}</div>
            </div>
            <div className="mt-4 d-flex rounded-pill">
              <div className='text-center fw-semibold py-1' style={{ width: "160px", backgroundColor: "#D7ECEF", border: "4px solid #D7ECEF" }}>Your Rotaract ID</div>
              <div className='text-center fw-semibold py-1' style={{ width: "200px", border: "4px solid #D7ECEF" }}>{rid}</div>
            </div>
            <div className="mt-4 d-flex rounded-pill">
              <div className='text-center fw-semibold py-1' style={{ width: "160px", backgroundColor: "#D7ECEF", border: "4px solid #D7ECEF" }}>Your DOB</div>
              <div className='text-center fw-semibold py-1' style={{ width: "200px", border: "4px solid #D7ECEF" }}>{dob}</div>
            </div>
          </div>
          {/* right column */}
          <div style={{ width: "360px" }}>
            <div className="mt-4 d-flex rounded-pill">
              <div className='text-center fw-semibold py-1' style={{ width: "160px", backgroundColor: "#D7ECEF", border: "4px solid #D7ECEF" }}>Your Roll</div>
              <div className='text-center fw-semibold py-1' style={{ width: "200px", border: "4px solid #D7ECEF" }}>{roll}</div>
            </div>
            <div className="mt-4 d-flex rounded-pill">
              <div className='text-center fw-semibold py-1' style={{ width: "160px", backgroundColor: "#D7ECEF", border: "4px solid #D7ECEF" }}>Your Email</div>
              <div className='text-center fw-semibold py-1' style={{ width: "200px", border: "4px solid #D7ECEF" }}>{email}</div>
            </div>
            <div className="mt-4 d-flex rounded-pill">
              <div className='text-center fw-semibold py-1' style={{ width: "160px", backgroundColor: "#D7ECEF", border: "4px solid #D7ECEF" }}>Your Blood Group</div>
              <div className='text-center fw-semibold py-1' style={{ width: "200px", border: "4px solid #D7ECEF" }}>{bloodGroup}</div>
            </div>
            <div className="mt-4 d-flex rounded-pill">
              <div className='text-center fw-semibold py-1' style={{ width: "160px", backgroundColor: "#D7ECEF", border: "4px solid #D7ECEF" }}>Your DOI</div>
              <div className='text-center fw-semibold py-1' style={{ width: "200px", border: "4px solid #D7ECEF" }}>{doi}</div>
            </div>
          </div>

        </div>


        {/* make payment */}

        <div className='fs-3 d-flex justify-content-center ' style={{ fontFamily: "Lora" }}> <em>Make Payment</em></div>

        <div className='d-flex justify-content-center mt-3 mb-4 pb-4'>
          <div className='d-flex flex-column justify-content-start align-items-start p-4 rounded-5' style={{ backgroundColor: "#D7ECEF", width: "380px" }}>
            <div className='fs-5 fw-semibold'>Club Membership of Month June</div>
            <div className='mt-3'>Make your membership payment here </div>
            <div className='d-flex justify-content-between mt-3' style={{ width: "100%" }}>
              <div className='d-flex flex-column align-items-start'>
                <div className='fw-semibold'>Due Date</div>
                <div>30th June 2021</div>
              </div>
              <button className="my-1 mx-0 py-2 btn fw-semibold rounded-pill" style={{ backgroundColor: "#B4637A", color: "white" }} type="submit">Pay Now</button>
            </div>
          </div>
        </div>

      </div>

      <Footer />

    </div>
  )
}

export default Profile