import React from 'react'
import Navbar from '../components/Navbar'
import notice from '../Images/notice.png'

const NoticePage = () => {
  return (
    <div>

      <Navbar />

      <div className='d-flex align-items-center justify-content-center' style={{ height: "70vh" }}>
        <img className='p-4 img-fluid' src={notice} alt="_coming_soon" style={{ height: "300px", width: "470px" }}/>
      </div>
      
    </div>
  )
}

export default NoticePage
