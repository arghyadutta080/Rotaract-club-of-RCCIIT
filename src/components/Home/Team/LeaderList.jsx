import React from 'react'
import LeaderListElement from './LeaderListElement'
import { row_1 } from './LeaderListData'

function LeaderList() {
    return (
        <div style={{ backgroundColor: "#F6C177" }}>
            <div className="album py-5">
                <h1 style={{ fontFamily: "Lora" }}> <em>Team Leaders</em></h1>
                <div className=" mt-4">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-1 ">
                        <div id="carouselExampleControls" className="carousel slide container-fluid" data-ride="carousel" style={{ width: "670px" }}>
                            <div className="carousel-inner">
                                {
                                    row_1.map((e) => {
                                        console.log(e)
                                        return <LeaderListElement role={e.role} name={e.name} img={e.img} text={e.text} key={e.role} mode={e.carousel} />
                                    })
                                }
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon btn btn-dark rounded-circle" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                <span className="carousel-control-next-icon btn btn-dark rounded-circle" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeaderList
