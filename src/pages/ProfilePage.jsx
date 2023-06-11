import React, { useContext } from 'react'
import { AuthContext } from '../Context/Auth/AuthContext'
import { Navigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

import Profile from '../components/Authentication/Profile'


const ProfilePage = () => {

  const context = useContext(AuthContext);
  const isAuthenticated = context.isAuthenticated;

  if (isAuthenticated === false) {
    return <Navigate to="/login" />
  }

  return (
    <div >
      <Profile />
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </div>
  )
}

export default ProfilePage