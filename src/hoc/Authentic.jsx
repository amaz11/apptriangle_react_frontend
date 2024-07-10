import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../contextApi/AuthContext';
import { jwtDecode } from 'jwt-decode';

const Authentic = ({ children }) => {
    const { token, loading } = useContext(AuthContext)
    if (loading) {
        // Optionally, return a loading spinner or placeholder while loading
        return <div>Loading...</div>;
    }
    if (token === undefined || token.length < 10) {
        return <Navigate to={"/login"} replace />;
    }
    return children;
}

export const ISLogin = ({ children }) => {
    const { token } = useContext(AuthContext)
    if (token.length > 10) {
        return <Navigate to={"/"} replace />;

    }
    return children;

}

export default Authentic