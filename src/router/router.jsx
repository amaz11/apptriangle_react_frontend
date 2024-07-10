import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layout/Dashboard";
import Login from "../pages/Login";
import Errorpage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Authentic, { ISLogin } from "../hoc/Authentic";
import Employee from "../pages/Employee";
import Leaves from "../pages/Leaves";
import Team from "../pages/Team";
import Attendence from "../pages/Attendence";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Dashboard />,
        errorElement: <Errorpage />,
        children: [
            {
                index: true,
                element: <Authentic><Home /></Authentic>
            },
            {
                path: 'attendance',
                element: <Authentic><Attendence /></Authentic>
            },
            {
                path: 'leaves',
                element: <Authentic><Leaves /></Authentic>
            },
            {
                path: 'employee',
                element: <Authentic><Employee /></Authentic>
            },
            {
                path: 'team',
                element: <Authentic><Team /></Authentic>
            },

        ]
    },

    {
        path: 'login',
        element: <ISLogin><Login /></ISLogin>
    }
])