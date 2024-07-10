import { jwtDecode } from 'jwt-decode';
import React, { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext()

const AuthUser = ({ children }) => {
    const [token, setToken] = useState('')
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    const ls = typeof window !== 'undefined' ? window.localStorage : null
    useEffect(() => {
        if (ls.getItem('X_auth_token')) {
            const localToken = ls.getItem('X_auth_token')
            if (localToken && localToken.length > 10) {
                const { exp } = jwtDecode(localToken);
                const expirationTime = exp * 1000 - 60000;
                if (Date.now() >= expirationTime) {
                    localStorage.clear();
                    setIsAuthenticated(false);
                    setLoading(false);
                    window.location.href = "/login"
                } else {
                    setToken(localToken);
                    setIsAuthenticated(true);
                    setLoading(false);
                }
            } else {
                setLoading(false);
            }
        } else {
            setLoading(false);
        }
    }, [])
    return (
        <AuthContext.Provider value={{ token, setToken, isAuthenticated, loading }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthUser