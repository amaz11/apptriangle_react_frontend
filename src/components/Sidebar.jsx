import React from 'react'
import { Link } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { BsPersonPlus } from "react-icons/bs";
import { IoTimerOutline } from "react-icons/io5";
import { AiOutlineTeam } from "react-icons/ai";
import { BsClipboardCheck } from "react-icons/bs";

const Sidebar = ({ sideBarTogle, setsideBarTogle }) => {
    return (
        <div className="relative py-4">
            <div className="block top-0 right-2 absolute md:hidden">
                <RxCross2 size={18} onClick={() => setsideBarTogle(!sideBarTogle)} />
            </div>
            <div className="font-bold text-[clamp(10px,5.6vw,24px)] text-center">
                Task Maganment
            </div>
            <div className="pt-5">
                <ul className="flex flex-col gap-4">

                    <li>
                        <Link className="flex items-center gap-3 hover:bg-gray-100 px-4 py-2 cursor-pointer" to="/">
                            <AiOutlineDashboard size={22} />
                            <span className='font-semibold'>Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        <Link className="flex items-center gap-3 hover:bg-gray-100 px-4 py-2 cursor-pointer" to="/attendance">
                            <BsClipboardCheck size={20} />
                            <span className='font-semibold'>
                                Attendance
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link className="flex items-center gap-3 hover:bg-gray-100 px-4 py-2 cursor-pointer" to="/leaves">
                            <IoTimerOutline size={20} />
                            <span className='font-semibold'>
                                Leaves
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link className="flex items-center gap-3 hover:bg-gray-100 px-4 py-2 cursor-pointer" to="/employee">
                            <BsPersonPlus size={22} />
                            <span className='font-semibold'>
                                Employee
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link className="flex items-center gap-3 hover:bg-gray-100 px-4 py-2 cursor-pointer" to="/team">
                            < AiOutlineTeam size={22} />
                            <span className='font-semibold'>
                                Team
                            </span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar