import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const NoticePage = () => {
  return (
    <div>
      <Navbar />
      <div className='d-flex align-items-center justify-content-center' style={{ height: "70vh" }}>
        <img className='mt-4' src="https://www.pw.live/study/assets/coming-soon.png" alt="" style={{ height: "300px", width: "470px" }}/>
      </div>
      {/* <Footer/> */}
    </div>
  )
}

export default NoticePage
