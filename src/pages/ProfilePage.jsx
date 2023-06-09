import React, { useContext } from 'react'
import { AuthContext } from '../components/Context/Auth/AuthContext'
import { Navigate } from 'react-router-dom'

import SignUp from '../components/Authentication/SignUp'
import Login from '../components/Authentication/LogIn'
import Profile from '../components/Authentication/Profile'



const ProfilePage = () => {

  const context = useContext(AuthContext);
  const isAuthenticated = context.isAuthenticated;

  if (isAuthenticated === false) {
    return <Navigate to="/login" />
  }

  return (
    <div >
      <Profile/>
    </div>
  )
}

export default ProfilePage