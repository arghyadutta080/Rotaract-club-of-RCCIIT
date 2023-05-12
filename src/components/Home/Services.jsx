import React from 'react'

const Services = () => {
    return (
        <div className='row align-items-center justify-content-center' style={{ paddingLeft: "60px", paddingRight: "60px", paddingBottom: "50px", paddingTop: "50px" }}>
            <div className='col d-flex flex-column align-items-center justify-content-center' style={{ paddingLeft: "60px", paddingRight: "50px" }} >
                <h1 style={{ fontFamily: "Lora" }} className="display-4 pb-4 text-center">What we do</h1>
                <p className='text'>We channel our commitment to service at home and abroad through four Avenues of Service, which are the foundation of Rotaract club activity.</p>
            </div>
            <div className='col d-flex flex-column align-items-center justify-content-between rounded-5 py-4' style={{ paddingLeft: "60px", paddingRight: "60px", background: "#D6EFF4", paddingBottom: "40px", paddingTop: "50px" }} >
                <div className='d-flex align-items-center justify-content-between'>
                    <div style={{ paddingRight: "50px" }}>
                        <img src="https://www.oakridge.in/wp-content/uploads/2023/01/VIS_0211.jpg" alt="community esrvice" className='img-thumbnail rounded-circle mx-auto d-block' style={{ height: "100px", width: "100px" }} />
                        <p className='pt-2 fw-semibold'>Community Service</p>
                        
                    </div>
                    <div style={{ paddingLeft: "50px" }}>
                        <img src="https://www.oakridge.in/wp-content/uploads/2023/01/VIS_0211.jpg" alt="community esrvice" className='img-thumbnail rounded-circle mx-auto d-block' style={{ height: "100px", width: "100px" }} />
                        <p className='pt-2 fw-semibold'>Community Service</p>
                        
                    </div>
                </div>
                <div style={{ width: "40%" }}>
                    <img src="https://www.oakridge.in/wp-content/uploads/2023/01/VIS_0211.jpg" alt="community esrvice" className='img-thumbnail rounded-circle mx-auto d-block' style={{ height: "100px", width: "100px" }} />
                    <p className='pt-2 fw-semibold'>Community Service</p>
                    
                </div>
            </div>
        </div>
    )
}

export default Services
