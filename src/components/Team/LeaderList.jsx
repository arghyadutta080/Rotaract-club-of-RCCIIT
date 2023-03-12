import React from 'react'
import LeaderListElement from './LeaderListElement'
import { row_1 } from './LeaderListData'
import { row_2 } from './LeaderListData'

function LeaderList() {
    return (
        <div style={{ backgroundColor: "#F6C177" }}>
            <div className="album py-5">
                <h1 style={{ fontFamily: "Lora" }}> <em>Team Leaders</em></h1>
                <div className="container mt-5">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 g-3">
                        {
                            row_1.map((e) => {
                                console.log(e)
                                return <LeaderListElement role={e.role} name={e.name} img={e.img} text={e.text} key={e.role} />
                            })
                        }
                    </div>

                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 g-3">
                        {
                            row_2.map((e) => {
                                console.log(e)
                                return <LeaderListElement role={e.role} name={e.name} img={e.img} text={e.text} key={e.role} />
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeaderList
