import React from 'react'

function Fund() {
    return (
        <div>
            <div className="lg:hidden inline">
                <div className="container-lg bg-grey-secondary rounded-2xl m-4 mt-20 md:m-10 p-4 ">
                    <p className="text-lg md:text-3xl md:font-bold font-semibold text-grey-primary relative">OUR CLUB FUND RAISING</p>
                    <div className="flex flex-col justify-between relative px-8 my-10 gap-32">
                        <div className="absolute left-0 right-0 mx-auto flex items-center justify-center top-50 h-full w-full">
                            <div className="w-full flex justify-center">
                                <div className="bg-primary h-1 w-full"></div>
                            </div>
                            <div className="absolute left-0 right-0 mx-auto flex items-center justify-center top-50 h-full w-full">
                                <div className="bg-primary h-full w-1"></div>
                            </div>
                            <div className="absolute left-0 right-0 mx-auto flex items-center justify-center top-50 h-full w-full">
                                <div className="bg-primary h-28 w-28 rounded-full flex flex-col items-center justify-center">
                                    <div className="font-bold text-4xl">3</div>
                                    <div className="font-bold text-2xl">Years</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div className="">
                                <p className="text-4xl font-semibold">527395</p><span className="text-sm"> FUND DONATED </span></div>
                            <div className="">
                                <p className="text-4xl font-semibold">5378</p><span className="text-sm"> HOURS OF WORK</span></div>
                        </div>
                        <div className="flex justify-between">
                            <div className="">
                                <p className="text-4xl font-semibold"></p><span className="text-sm"> </span></div>
                            <div className="">
                                <p className="text-4xl font-semibold">1280</p><span className="text-sm">LIVE SERVED</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Fund
