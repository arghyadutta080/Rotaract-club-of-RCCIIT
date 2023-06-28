import React from 'react'
import achievement from '../../Images/achievement.jpg'

const Achievement = () => {
    return (
        <div style={{ backgroundColor: "#D9D9D9" }} className='py-4'>
            <div className='container d-flex align-items-center justify-content-around flex-wrap' >
                <div>
                    <img src={achievement} alt="_achievement" style={{ width: "310px" }} className='my-4 py-2 rounded' />
                </div>
                <div className='d-flex align-items-center justify-content-center'>
                    <h1 style={{ fontFamily: "Lora", maxWidth: "600px", }} className="display-6 text-center">
                        2022-23 Rotary Citation awarded the Rotaract Club of RCCIIT for helping Imagine Rotary in the lives of people all over the world
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default Achievement
