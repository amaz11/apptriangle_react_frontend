import React, { useContext, useState } from 'react'
import logo from '../assets/logo.png'
import backgroundImage from '../assets/background.svg'
import { useLoginUserMutation } from '../feature/authApi';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contextApi/AuthContext';
import { getTokenFromLocalStorage } from '../utils/token';
const Login = () => {
    const [loginUser, { isLoading }] = useLoginUserMutation();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const { setToken } = useContext(AuthContext)

    const navigate = useNavigate()
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const [isLoaging, setIsLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true)
        try {
            const res = await loginUser(formData).unwrap();
            if (res.ok === true) {
                if (res?.data.role === "ADMIN") {
                    localStorage.setItem('X_auth_token', res.token)
                    getTokenFromLocalStorage(res.token)
                    setToken(res.token)
                    setIsLoading(false)
                    navigate('/')
                } else {
                    toast.error("Unauthorized User")
                }
            }
        } catch (error) {
            toast.error(error.data?.error)
            setIsLoading(false)
        }
    };

    return (
        <div className="flex justify-center bg-gray-100 min-h-screen text-gray-900">
            <div className="flex flex-1 justify-center bg-white shadow m-0 sm:m-10 sm:rounded-lg max-w-screen-xl">
                <div className="p-6 sm:p-12 lg:w-1/2 xl:w-5/12">
                    <div>
                        <img src={logo} className="w-mx-auto" />
                    </div>
                    <div className="flex flex-col items-center mt-12">
                        <form onSubmit={handleSubmit} className="flex-1 mt-8 w-full">
                            <div className="mx-auto max-w-xs">
                                <input
                                    className="border-gray-200 focus:border-gray-400 bg-gray-100 focus:bg-white px-8 py-4 border rounded-lg w-full font-medium text-sm placeholder-gray-500 focus:outline-none"
                                    type="email"
                                    placeholder="Email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    className="border-gray-200 focus:border-gray-400 bg-gray-100 focus:bg-white mt-5 px-8 py-4 border rounded-lg w-full font-medium text-sm placeholder-gray-500 focus:outline-none"
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                                <button className="flex justify-center items-center gap-3 bg-green-400 hover:bg-green-700 focus:shadow-outline mt-5 py-4 rounded-lg w-full font-semibold text-gray-700 text-white-500 hover:text-white tracking-wide transition-all duration-300 cursor-pointer ease-in-out focus:outline-none" disabled={isLoaging}>
                                    <svg className="-ml-2 w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                        <circle cx="8.5" cy={7} r={4} />
                                        <path d="M20 8v6M23 11h-6" />
                                    </svg>
                                    <span className="ml-">
                                        {isLoading ? "Loading..." : "Sign In"}

                                    </span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="lg:flex flex-1 hidden bg-green-100 text-center">
                    <div className="bg-contain bg-no-repeat bg-center m-12 xl:m-16 w-full" style={{ backgroundImage: `url(${backgroundImage})` }}>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Login