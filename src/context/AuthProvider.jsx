import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    // localStorage.clear()
    const [userData, setUserData] = useState([])
    const [adminData, setAdminData] = useState([])

    useEffect(() => {
        setLocalStorage()
        const { employees, admin } = getLocalStorage()
        setUserData(employees)
        setAdminData(admin)
    }, [])

    return (
        <div>
            <AuthContext.Provider value={[userData, setUserData, adminData, setAdminData]}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}

export default AuthProvider