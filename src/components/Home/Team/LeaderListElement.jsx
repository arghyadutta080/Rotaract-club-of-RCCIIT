import React from 'react'

function LeaderListElement(props) {
    return (
        <div className= {`col px-3 mb-4 carousel-item ${props.mode}`}>
            <div className="card pt-4" style={{ backgroundColor: "white"  }}>
                <img src={props.img} alt="" className='img-thumbnail rounded-circle mx-auto d-block' style={{ height: "250px", width: "250px" }} />

                <div className="card-body">
                    <h3 style={{ fontFamily: "Merriweather", color: "brown" }} className="mt-1">{props.name}</h3>
                    <h4 style={{ fontFamily: "Lobster Two" }} className="mb-3" >{props.role}</h4>
                    <p className="card-text pt-2" style={{ fontFamily: "kalam, cursive" }}>{props.text}</p>
                </div>
            </div>
        </div>
    )
}

export default LeaderListElement
