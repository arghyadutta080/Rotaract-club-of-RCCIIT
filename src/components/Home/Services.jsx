import React from 'react'

const Services = () => {
    return (
        <div className='row align-items-center justify-content-center' style={{ paddingLeft: "60px", paddingRight: "60px", paddingBottom: "50px", paddingTop: "50px" }}>
            <div className='col d-flex flex-column align-items-center justify-content-center' style={{ paddingLeft: "60px", paddingRight: "50px" }} >
                <h1 style={{ fontFamily: "Lora" }} className="display-4 pb-4 text-center">What we do</h1>
                <p className='text'>We channel our commitment to service at home and abroad through four Avenues of Service, which are the foundation of Rotaract club activity.</p>
            </div>
            <div className='col d-flex flex-wrap justify-content-evenly rounded-5 py-4' style={{ paddingLeft: "60px", paddingRight: "60px", background: "#D6EFF4", paddingBottom: "40px", paddingTop: "50px" }} >
                <div className='d-flex flex-column align-items-center justify-content-between'>
                    <div className='my-2'>
                        <img src="https://media.istockphoto.com/id/688847962/vector/icon-happy-people-vector.jpg?s=612x612&w=0&k=20&c=d0XdZZIdX6T1cGEeMqyGTFQIhCNR55twxKa4ehhe5vs=" alt="community esrvice" className='img-thumbnail rounded-circle mx-auto d-block' style={{ height: "100px", width: "100px" }} />
                        <p className='pt-2 fw-semibold'>Community Service</p>
                    </div>
                    <div className='my-2'>
                        <img src="data:image/png;base64,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" alt="community esrvice" className='img-thumbnail rounded-circle mx-auto d-block' style={{ height: "100px", width: "100px" }} />
                        <p className='pt-2 fw-semibold'>Professional Service</p>
                    </div>
                </div>
                <div className='d-flex flex-column align-items-center justify-content-between'>
                    <div className='my-2'>
                        <img src="https://www.pngkit.com/png/detail/302-3023792_iconoequipo-people-icon-blue-png.png" alt="community esrvice" className='img-thumbnail rounded-circle mx-auto d-block' style={{ height: "100px", width: "100px" }} />
                        <p className='pt-2 fw-semibold'>Club Service</p>
                    </div>
                    <div className='my-2'>
                        <img src="https://icisg.org/wp-content/uploads/2019/08/network1-1024x1024.jpg" alt="community esrvice" className='img-thumbnail rounded-circle mx-auto d-block' style={{ height: "100px", width: "100px" }} />
                        <p className='pt-2 fw-semibold'>International Service</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
