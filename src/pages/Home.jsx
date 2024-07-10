// import { Line } from "@react-pdf/renderer";
import React from "react";
import { BsClipboardCheck, BsPeople, BsPersonPlus } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { TbCurrencyTaka } from "react-icons/tb";
import {
    BarChart,
    Bar,
    Cell,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    PieChart,
    Pie,
    Sector,
    ResponsiveContainer,
    Area,
    ComposedChart,
} from "recharts";


const Home = () => {
    const data = [
        {
            name: "Page A",
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: "Page B",
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: "Page C",
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: "Page D",
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: "Page E",
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: "Page F",
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: "Page G",
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];

    const data01 = [
        { name: "Group A", value: 400 },
        { name: "Group B", value: 300 },
        { name: "Group C", value: 300 },
        { name: "Group D", value: 200 },
    ];
    const data02 = [
        { name: "A1", value: 100 },
        { name: "A2", value: 300 },
        { name: "B1", value: 100 },
        { name: "B2", value: 80 },
        { name: "B3", value: 40 },
        { name: "B4", value: 30 },
        { name: "B5", value: 50 },
        { name: "C1", value: 100 },
        { name: "C2", value: 200 },
        { name: "D1", value: 150 },
        { name: "D2", value: 50 },
    ];

    const Businessdata = [
        {
            name: "Page A",
            uv: 590,
            pv: 800,
            amt: 1400,
        },
        {
            name: "Page B",
            uv: 868,
            pv: 967,
            amt: 1506,
        },
        {
            name: "Page C",
            uv: 1397,
            pv: 1098,
            amt: 989,
        },
        {
            name: "Page D",
            uv: 1480,
            pv: 1200,
            amt: 1228,
        },
        {
            name: "Page E",
            uv: 1520,
            pv: 1108,
            amt: 1100,
        },
        {
            name: "Page F",
            uv: 1400,
            pv: 680,
            amt: 1700,
        },
    ];
    return (
        <div>
            <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                <div className="flex justify-between gap-5 bg-white shadow-sm p-4 rounded-md">
                    <div>
                        <p className="font-[500] common-text-color-body text-[13px]">
                            Total Employess
                        </p>
                        <h4 className="common-text-color-body text-base">4</h4>
                    </div>
                    <div>
                        <BsPeople className="common-text-color-body" size={30} />
                    </div>
                </div>
                <div className="flex justify-between gap-5 bg-white shadow-sm p-4 rounded-md">
                    <div>
                        <p className="font-[500] common-text-color-body text-[13px]">
                            Today's Presents
                        </p>
                        <h4 className="common-text-color-body text-base">4</h4>
                    </div>
                    <div>
                        <BsPersonPlus className="common-text-color-body" size={30} />
                    </div>
                </div>
                <div className="flex justify-between gap-5 bg-white shadow-sm p-4 rounded-md">
                    <div>
                        <p className="font-[500] common-text-color-body text-[13px]">
                            Today's Absents
                        </p>
                        <h4 className="common-text-color-body text-base">4</h4>
                    </div>
                    <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            fill="currentColor"
                            className="common-text-color-body bi bi-person-dash"
                            viewBox="0 0 16 16"
                        >
                            {" "}
                            <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />{" "}
                            <path
                                fillRule="evenodd"
                                d="M11 7.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5z"
                            />{" "}
                        </svg>
                    </div>
                </div>

                <div className="flex justify-between gap-5 bg-white shadow-sm p-4 rounded-md">
                    <div>
                        <p className="font-[500] common-text-color-body text-[13px]">
                            Today's Leave
                        </p>
                        <h4 className="common-text-color-body text-base">4</h4>
                    </div>
                    <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            fill="currentColor"
                            className="common-text-color-body bi bi-person"
                            viewBox="0 0 16 16"
                        >
                            {" "}
                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />{" "}
                        </svg>
                    </div>
                </div>
            </div>

            <div className="gap-4 grid grid-cols-1 md:grid-cols-3 mt-5">
                <div className="bg-white shadow-sm rounded-md">
                    <div className="p-4 border-b">
                        <div className="flex items-center gap-2 common-text-color-body">
                            <IoMdNotificationsOutline size={20} />
                            <h5 className="font-[500] text-[15px]">Leatest Notice</h5>
                        </div>
                    </div>
                    <div className="p-4 h-72 common-text-color-body overflow-scroll overflow-x-hidden">
                        <div className="flex items-center gap-4 mb-3">
                            <p className="font-[500] text-[12px]">3/24/2023</p>
                            <p className="font-[500] text-[13px]">New Task Do </p>
                        </div>
                        <div className="flex items-center gap-4 mb-3">
                            <p className="font-[500] text-[12px]">3/24/2023</p>
                            <p className="font-[500] text-[13px]">New Task Do </p>
                        </div>
                        <div className="flex items-center gap-4 mb-3">
                            <p className="font-[500] text-[12px]">3/24/2023</p>
                            <p className="font-[500] text-[13px]">New Task Do </p>
                        </div>
                        <div className="flex items-center gap-4 mb-3">
                            <p className="font-[500] text-[12px]">3/24/2023</p>
                            <p className="font-[500] text-[13px]">New Task Do </p>
                        </div>
                        <div className="flex items-center gap-4 mb-3">
                            <p className="font-[500] text-[12px]">3/24/2023</p>
                            <p className="font-[500] text-[13px]">New Task Do </p>
                        </div>
                        <div className="flex items-center gap-4 mb-3">
                            <p className="font-[500] text-[12px]">3/24/2023</p>
                            <p className="font-[500] text-[13px]">New Task Do </p>
                        </div>
                        <div className="flex items-center gap-4 mb-3">
                            <p className="font-[500] text-[12px]">3/24/2023</p>
                            <p className="font-[500] text-[13px]">New Task Do </p>
                        </div>
                        <div className="flex items-center gap-4 mb-3">
                            <p className="font-[500] text-[12px]">3/24/2023</p>
                            <p className="font-[500] text-[13px]">New Task Do </p>
                        </div>
                        <div className="flex items-center gap-4 mb-3">
                            <p className="font-[500] text-[12px]">3/24/2023</p>
                            <p className="font-[500] text-[13px]">New Task Do </p>
                        </div>
                        <div className="flex items-center gap-4 mb-3">
                            <p className="font-[500] text-[12px]">3/24/2023</p>
                            <p className="font-[500] text-[13px]">New Task Do </p>
                        </div>
                        <div className="flex items-center gap-4 mb-3">
                            <p className="font-[500] text-[12px]">3/24/2023</p>
                            <p className="font-[500] text-[13px]">New Task Do </p>
                        </div>
                        <div className="flex items-center gap-4 mb-3">
                            <p className="font-[500] text-[12px]">3/24/2023</p>
                            <p className="font-[500] text-[13px]">New Task Do </p>
                        </div>
                        <div className="flex items-center gap-4 mb-3">
                            <p className="font-[500] text-[12px]">3/24/2023</p>
                            <p className="font-[500] text-[13px]">New Task Do </p>
                        </div>
                        <div className="flex items-center gap-4 mb-3">
                            <p className="font-[500] text-[12px]">3/24/2023</p>
                            <p className="font-[500] text-[13px]">New Task Do </p>
                        </div>
                        <div className="flex items-center gap-4 mb-3">
                            <p className="font-[500] text-[12px]">3/24/2023</p>
                            <p className="font-[500] text-[13px]">New Task Do </p>
                        </div>
                        <div className="flex items-center gap-4 mb-3">
                            <p className="font-[500] text-[12px]">3/24/2023</p>
                            <p className="font-[500] text-[13px]">New Task Do </p>
                        </div>
                    </div>

                    <div></div>
                </div>
                <div className="col-span-2 bg-white shadow-sm rounded-md">
                    <div className="p-4 border-b">
                        <div className="flex items-center gap-2 common-text-color-body">
                            <BsClipboardCheck size={20} />
                            <h5 className="font-[500] text-[15px]">Monthly Attendence</h5>
                        </div>
                    </div>
                    <div className="h-72">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart width={150} height={40} data={data}>
                                <Bar dataKey="uv" fill="#8884d8" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

            <div className="gap-4 grid grid-cols-1 md:grid-cols-3 mt-5 mb-5">
                <div className="col-span-2 bg-white shadow-sm rounded-md">
                    <div className="p-4 border-b">
                        <div className="flex items-center gap-2 common-text-color-body">
                            <TbCurrencyTaka size={20} />
                            <h5 className="font-[500] text-[15px]">Monthly Payment</h5>
                        </div>
                    </div>
                    <div className="h-72">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart width={400} height={400}>
                                <Pie
                                    data={data01}
                                    dataKey="value"
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={60}
                                    fill="#8884d8"
                                />
                                <Pie
                                    data={data02}
                                    dataKey="value"
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={70}
                                    outerRadius={90}
                                    fill="#82ca9d"
                                    label
                                />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                <div className="bg-white shadow-sm rounded-md">
                    <div className="p-4 border-b">
                        <div className="flex items-center gap-2 common-text-color-body">
                            <BsPersonPlus size={20} />
                            <h5 className="font-[500] text-[15px]">New Recruited</h5>
                        </div>
                    </div>
                    <div className="p-4 h-72 common-text-color-body overflow-scroll overflow-x-hidden">
                        <div className="flex items-center gap-4 mb-3">
                            <p className="font-[500] text-[12px]">3/24/2023</p>
                            <p className="font-[500] text-[13px]">New Task Do </p>
                        </div>
                        <div className="flex items-center gap-4 mb-3">
                            <p className="font-[500] text-[12px]">3/24/2023</p>
                            <p className="font-[500] text-[13px]">New Task Do </p>
                        </div>
                        <div className="flex items-center gap-4 mb-3">
                            <p className="font-[500] text-[12px]">3/24/2023</p>
                            <p className="font-[500] text-[13px]">New Task Do </p>
                        </div>
                        <div className="flex items-center gap-4 mb-3">
                            <p className="font-[500] text-[12px]">3/24/2023</p>
                            <p className="font-[500] text-[13px]">New Task Do </p>
                        </div>
                        <div className="flex items-center gap-4 mb-3">
                            <p className="font-[500] text-[12px]">3/24/2023</p>
                            <p className="font-[500] text-[13px]">New Task Do </p>
                        </div>
                        <div className="flex items-center gap-4 mb-3">
                            <p className="font-[500] text-[12px]">3/24/2023</p>
                            <p className="font-[500] text-[13px]">New Task Do </p>
                        </div>
                        <div className="flex items-center gap-4 mb-3">
                            <p className="font-[500] text-[12px]">3/24/2023</p>
                            <p className="font-[500] text-[13px]">New Task Do </p>
                        </div>
                        <div className="flex items-center gap-4 mb-3">
                            <p className="font-[500] text-[12px]">3/24/2023</p>
                            <p className="font-[500] text-[13px]">New Task Do </p>
                        </div>
                        <div className="flex items-center gap-4 mb-3">
                            <p className="font-[500] text-[12px]">3/24/2023</p>
                            <p className="font-[500] text-[13px]">New Task Do </p>
                        </div>
                        <div className="flex items-center gap-4 mb-3">
                            <p className="font-[500] text-[12px]">3/24/2023</p>
                            <p className="font-[500] text-[13px]">New Task Do </p>
                        </div>
                        <div className="flex items-center gap-4 mb-3">
                            <p className="font-[500] text-[12px]">3/24/2023</p>
                            <p className="font-[500] text-[13px]">New Task Do </p>
                        </div>
                        <div className="flex items-center gap-4 mb-3">
                            <p className="font-[500] text-[12px]">3/24/2023</p>
                            <p className="font-[500] text-[13px]">New Task Do </p>
                        </div>
                        <div className="flex items-center gap-4 mb-3">
                            <p className="font-[500] text-[12px]">3/24/2023</p>
                            <p className="font-[500] text-[13px]">New Task Do </p>
                        </div>
                        <div className="flex items-center gap-4 mb-3">
                            <p className="font-[500] text-[12px]">3/24/2023</p>
                            <p className="font-[500] text-[13px]">New Task Do </p>
                        </div>
                        <div className="flex items-center gap-4 mb-3">
                            <p className="font-[500] text-[12px]">3/24/2023</p>
                            <p className="font-[500] text-[13px]">New Task Do </p>
                        </div>
                        <div className="flex items-center gap-4 mb-3">
                            <p className="font-[500] text-[12px]">3/24/2023</p>
                            <p className="font-[500] text-[13px]">New Task Do </p>
                        </div>
                    </div>

                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default Home;
