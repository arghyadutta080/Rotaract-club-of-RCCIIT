import React from 'react'

function LeaderListElement(props) {
    return (
        <div className="col mb-6 px-3 mb-5">
            <div className="card pt-4" style={{ backgroundColor: "#F6C177", border: "1px solid black" }}>
                <img src={props.img} alt="" className='img-thumbnail rounded mx-auto d-block' style={{ height: "250px", width: "250px" }} />

                <div className="card-body">
                    <h2>{props.name}</h2>
                    <h4>{props.role}</h4>
                    <p className="card-text pt-2">{props.text}</p>
                </div>
            </div>
        </div>
    )
}

export default LeaderListElement
