import React, { useState } from 'react'
import { AuthContext } from './AuthContext';


const AuthState = (props) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);   
    const [userRoll, setUserRoll] = useState('');
    const [user, setUser] = useState({});
    
    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, userRoll, setUserRoll, user, setUser }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState