import React, { useState } from 'react'

export const AuthContext = React.createContext()

const AuthProvider = ({ children }) => {

    const [auth, setAuth] = useState({ isAuth: false, user: null })

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
