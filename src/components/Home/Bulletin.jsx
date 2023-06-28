import React from 'react'
import RotaTimeVol_4 from '../../Images/Bulletin/Rota-time-vol-4.jpg'
import { BsDownload } from 'react-icons/bs'

const Bulletin = () => {

    const handleDownload = () => {
        const fileUrl = '/downloads/The Rota Times.pdf'
        window.open(fileUrl, '_blank');
    }

    return (
        <div style={{ backgroundColor: "white" }}>
            <div className='container d-flex flex-column py-4'>
                <div style={{ fontFamily: "Lora" }} className="display-4 py-4 mt-2">Rotaract Club of RCCIIT Bulletin</div>
                <div className='d-flex justify-content-evenly flex-wrap'>
                    <div className='py-4'>
                        <img src={RotaTimeVol_4} alt="_rotateam-vol.4" style={{ width: "330px", border: "1px solid #D9D9D9" }} className='rounded mb-4' />
                    </div>
                    <div className='d-flex flex-column justify-content-center align-items-center mb-4'>
                        <p style={{ fontFamily: "Lora" }} className="fs-1">THE ROTA TIMES</p>
                        <p style={{ fontFamily: "Lora" }} className="fs-4 fw-semibold">VOLUME-4 ISSUE-1</p>
                        <p className='fs-4 fw-semibold fst-italic px-1'>Half Yearly Bulletin of Rotaract Club of RCCIIT</p>
                        <p className='mt-3'>
                            <button className="btn btn-lg d-flex justify-content-between align-items-center fw-semibold" onClick={handleDownload} style={{ color: "white", backgroundColor: "#B4637A" }}>
                                <BsDownload size={20} className='me-2' />
                                <div>Download</div>
                            </button>
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Bulletin
