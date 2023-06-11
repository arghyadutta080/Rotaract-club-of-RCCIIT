import React from 'react'


const events = [
    {
        name: "Barnali",
        date: "21st May, 2023",
        time: "4.00 pm",
        venue: "Rotary Sadan, Kolkata",
        img: "https://scontent.fccu7-1.fna.fbcdn.net/v/t39.30808-6/347582072_1310480119896985_8808164405508342658_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=G_k3RoV88o0AX_Zm8Bf&_nc_ht=scontent.fccu7-1.fna&oh=00_AfAlVtR6d4zNuSpwGSWf_VNoT0QCsVEUCA7Uhl0PFrnMHw&oe=64899B57",
        desc: "<p>The Rotaract Club of Calcutta Renaissance RID 3291 organized Barnali. Rotaract Club of RCCIIT co-hosted the event.</p>"
    },
    {
        name: "Initium",
        date: "18th March, 2023",
        time: "7.30 pm",
        venue: "Google Meet",
        img: "https://scontent.fccu7-1.fna.fbcdn.net/v/t39.30808-6/336565100_186829344068331_4274664331075005993_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=ZwfW-ifgthsAX8klsNM&_nc_oc=AQkkSbvS_WJVn8l_QUT2TMipHtGVUQshyk_9dk2fTQj_wJJ7YRdJO7UJtdUWCidKoqUsIzJBdyWD9H4v9In1j6V6&_nc_ht=scontent.fccu7-1.fna&oh=00_AfCCnojkn3jMJFk8jqXFemRZnDlGCjKfX75qgQxms-huLg&oe=648A629B",
        desc: "Each year we organise club orientation ceremony for 1st years and taking new members from other years too."
    },
    {
        name: "Tree Plantation Drive",
        date: "17th March, 2023",
        time: "3.00 pm",
        venue: "RCCIIT Campus",
        img: "https://scontent.fccu7-1.fna.fbcdn.net/v/t39.30808-6/336322607_613606463439309_3270827504195515042_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=RRi0AxMdmd8AX_rh8JN&_nc_ht=scontent.fccu7-1.fna&oh=00_AfDcDjEia55A5sOwbNQMQ7kb61Q533ChH0oJBGaCNVp-vQ&oe=6488F7A5",
        desc: "Rotaract Club of RCCIIT organized a tree plantation drive in the college campus. The event was a huge success."
    }
]

const RecentEvents = () => {
    return (
        <>
            <div className='d-flex justify-content-start fs-4 mb-2 mt-4 pt-2 container' style={{ fontFamily: "Lora" }}> <em className='mx-4'>Recent Events</em></div>
            <div className='d-flex justify-content-center container'>
                {
                    events.map((event, index) => {
                        return (
                            <div key={index} className='d-flex flex-column justify-content-start align-items-start align-content-around p-3 mx-4 rounded-4 my-2' style={{ backgroundColor: "#D7ECEF", minWidth: "320px", maxWidth: "370px" }}>
                                <div className='fw-semibold fs-3'>{event.name}</div>
                                <div className='fw-normal my-2 text-left' style={{ textAlign: "left" }}>{event.desc.replace(/(<([^>]+)>)/ig, "")}</div>
                                <div className='fw-semibold mt-1' style={{ color: "#9893A5" }}>{`${event.date} • ${event.time}`}</div>
                                <div className='fw-semibold mb-1' style={{ color: "#9893A5" }}>{event.venue}</div>
                                <div className=''>
                                    <img src={event.img} alt={event.name} className='img-fluid my-3' />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default RecentEvents
