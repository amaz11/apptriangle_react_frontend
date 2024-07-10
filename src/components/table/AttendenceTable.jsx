import React, { useState } from 'react';
import { FiEdit2 } from "react-icons/fi";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { toast } from 'react-toastify';
import LeaveAdminUpdate from '../LeaveModal/LeaveAdminUpdate';
import TableSkeleton from '../skeleton/TableSkeleton';


const AttendecTable = ({ attendence, isLoading,
    isFetching,
    isError,
    error }) => {
    const [singletaskId, setSingleTaskId] = useState(null);
    const [showToggle, setShowToggle] = useState(false);

    const toggleDetails = (id) => {
        setSingleTaskId(id);
        setShowToggle((prev) => (prev && singletaskId === id ? false : true));
    };
    if (isError) {
        toast.error(error.data.message)
    }
    return (
        <div className='mt-4 rounded-lg overflow-x-scroll lg:overflow-x-auto'>
            <table className="border-collapse w-full">
                <thead className=''>
                    <tr>
                        <th className="bg-[#6e7bd9] p-3 border font-bold text-[#ffffff] text-center text-base">SI</th>
                        <th className="bg-[#6e7bd9] p-3 border font-bold text-[#ffffff] text-center text-base">Name</th>
                        <th className="bg-[#6e7bd9] p-3 border font-bold text-[#ffffff] text-center text-base">Email</th>
                        <th className="bg-[#6e7bd9] p-3 border font-bold text-[#ffffff] text-center text-base">Phone</th>
                        <th className="bg-[#6e7bd9] p-3 border font-bold text-[#ffffff] text-center text-base">Position</th>
                        <th className="bg-[#6e7bd9] p-3 border font-bold text-[#ffffff] text-center text-base">Checkin Time</th>
                        <th className="bg-[#6e7bd9] p-3 border font-bold text-[#ffffff] text-center text-base">Check In Status</th>
                        <th className="bg-[#6e7bd9] p-3 border font-bold text-[#ffffff] text-center text-base">Check Out Time</th>
                        <th className="bg-[#6e7bd9] p-3 border font-bold text-[#ffffff] text-center text-base">Check Out Status</th>
                        <th className="bg-[#6e7bd9] p-3 border font-bold text-[#ffffff] text-center text-base">Location</th>
                        {/* <th className="bg-[#6e7bd9] py-3 border font-bold text-[#ffffff] text-center text-lg">More</th> */}
                    </tr>
                </thead>
                <tbody>
                    {isLoading || isFetching ? <TableSkeleton col={10} /> : attendence?.length === 0 ? <tr><td colSpan="12" className='p-8 font-semibold text-center'>There No data Here</td></tr> : attendence?.map((item, index) => (
                        <React.Fragment key={item.id}>
                            <tr className="border">
                                <td className="px-4 py-2 border text-center text-sm">{index + 1}</td>
                                <td className="py-2 border text-center text-sm">{item?.user.name}</td>
                                <td className="flex justify-between items-center px-4 py-2 text-sm">{item?.user.email}</td>
                                <td className="px-4 py-2 border text-center text-sm">{item?.user.phone}</td>
                                <td className="px-4 py-2 border text-center text-sm">{item?.user.position}</td>
                                <td className="px-4 py-2 border text-center text-sm">{new Date(item.checkInTime).getHours()}:{new Date(item.checkInTime).getMinutes()}</td>
                                <td className={`px-4 py-2 border text-center text-sm `}><span className={`${item.checkIn === "ONTIME" || item.checkIn === "EARLY" ? "bg-green-600" : "bg-red-600"} text-[10px] px-2 pt-1 pb-1 rounded-full text-white font-semibold`}>{item.checkIn}</span></td>
                                <td className="px-4 py-2 border text-center text-sm">{item.checkOutTime === null ? "N/A" : new Date(item.checkOutTime).getHours()}{item.checkOutTime === null ? "" : ":"}{item.checkOutTime === null ? null : new Date(item.checkOutTime).getMinutes()}</td>
                                <td className="px-4 py-2 border text-center text-sm">{item.checkOut === null ? "N/A" : <span className={`${item.checkOut === "ONTIME" || item.checkIn === "LATE" ? "bg-green-600" : "bg-red-600"} text-[10px] px-2 pt-1 pb-1 rounded-full text-white font-semibold`}> {item.checkOut} </span>}</td>
                                <td className="px-4 py-2 border text-center text-sm">{item.location}</td>
                            </tr>

                        </React.Fragment>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

// const Details = ({ leave }) => {
//     return <div>
//         <p className='font-medium'><span className='font-semibold'>Name:</span> {leave?.applicant.name}</p>
//         <p className='font-medium'><span className='font-semibold'>Email:</span> {leave?.applicant.email}</p>
//         <p className='font-medium'><span className='font-semibold'>Phone:</span> {leave?.applicant.phone}</p>
//         <p className='font-medium'><span className='font-semibold'>Position:</span> {leave?.applicant.position}</p>
//         <p className='font-medium'><span className='font-semibold'>Type:</span> {leave?.type}</p>
//         <p className='font-medium'><span className='font-semibold'>Reason:</span> {leave?.reason}</p>
//         <p className='font-medium'><span className='font-semibold'>Total Days:</span>  {leave?.dayCount}</p>
//         <p className='font-medium'><span className='font-semibold'>Leaves Days:</span>  {leave?.leaveDays}</p>
//         <p className='font-medium'><span className='font-semibold'>Weenked and Holidays:</span>  {leave?.dayCount - leave?.leaveDays}</p>
//         <p className='font-medium'><span className='font-semibold'>Team Leader Approval:</span>{leave?.status}</p>
//         <p className='font-medium'><span className='font-semibold'>Admin Approval:</span>  {leave?.adminStatus}</p>
//     </div>;
// };


export default AttendecTable