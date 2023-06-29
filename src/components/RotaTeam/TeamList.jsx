import React from 'react'
import { TeamData } from './TeamData'

const TeamList = () => {
  return (
    <div>
      {
        TeamData.map((val, index) => {
            return (<img key={index} src={val} alt="" className='m-4 border pl-2' style={{ height: "250px", width: "250px" }}/>)
        })
      }
    </div>
  )
}

export default TeamList
