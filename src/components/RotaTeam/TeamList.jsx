import React from 'react'
import { TeamData } from './TeamData'

const TeamList = () => {
  return (
    <div>
      {
        TeamData.map((val) => {
            return (<img src={val} alt="" className='m-4 border pl-2' style={{ height: "250px", width: "250px" }}/>)
        })
      }
    </div>
  )
}

export default TeamList
