import React, { useState } from 'react';
import { FiEdit2 } from "react-icons/fi";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { toast } from 'react-toastify';
import LeaveAdminUpdate from '../LeaveModal/LeaveAdminUpdate';
import TableSkeleton from '../skeleton/TableSkeleton';


const LeavesTable = ({ leaves, isLoading,
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
                        <th className="bg-[#6e7bd9] py-3 border font-bold text-[#ffffff] text-center text-base">SI</th>
                        <th className="bg-[#6e7bd9] py-3 border font-bold text-[#ffffff] text-center text-base">Name</th>
                        <th className="bg-[#6e7bd9] py-3 border font-bold text-[#ffffff] text-center text-base">Email</th>
                        <th className="bg-[#6e7bd9] py-3 border font-bold text-[#ffffff] text-center text-base">Phone</th>
                        <th className="bg-[#6e7bd9] py-3 border font-bold text-[#ffffff] text-center text-base">Position</th>
                        <th className="bg-[#6e7bd9] py-3 border font-bold text-[#ffffff] text-center text-base">Type</th>
                        <th className="bg-[#6e7bd9] py-3 border font-bold text-[#ffffff] text-center text-base">Reason</th>
                        <th className="bg-[#6e7bd9] py-3 border font-bold text-[#ffffff] text-center text-base">Total Days</th>
                        <th className="bg-[#6e7bd9] py-3 border font-bold text-[#ffffff] text-center text-base">Leaves Days</th>
                        <th className="bg-[#6e7bd9] py-3 border font-bold text-[#ffffff] text-center text-base">TL Approval</th>
                        <th className="bg-[#6e7bd9] py-3 border font-bold text-[#ffffff] text-center text-base">Admin Approval</th>
                        <th className="bg-[#6e7bd9] py-3 border font-bold text-[#ffffff] text-center text-base">More</th>
                    </tr>
                </thead>
                <tbody>
                    {isLoading || isFetching ? <TableSkeleton col={12} /> : leaves?.length === 0 ? <tr><td colSpan="12" className='p-8 font-semibold text-center'>There No data Here</td></tr> : leaves?.map((leave, index) => (
                        <React.Fragment key={leave.id}>
                            <tr className="border">
                                <td className="px-4 py-2 border text-center text-sm">{index + 1}</td>
                                <td className="py-2 border text-center text-sm">{leave?.applicant.name}</td>
                                <td className="flex justify-between items-center text-sm px-4 py-2">{leave?.applicant.email}</td>
                                <td className="px-4 py-2 border text-center text-sm">{leave?.applicant.phone}</td>
                                <td className="px-4 py-2 border text-center text-sm">{leave?.applicant.position}</td>
                                <td className="px-4 py-2 border text-center text-sm">{leave.type}</td>
                                <td className="px-4 py-2 border text-center text-sm">{leave.reason}</td>
                                <td className="px-4 py-2 border text-center text-sm">{leave.dayCount}</td>
                                <td className="px-4 py-2 border text-center text-sm">{leave.leaveDays}</td>
                                <td className="px-4 py-2 border text-center text-sm">{leave.status}</td>
                                <td className="px-4 py-2 border text-center text-sm">
                                    <div className='flex justify-between items-center text-sm gap-4'>
                                        <span>{leave.adminStatus}</span>
                                        <LeaveAdminUpdate leave={leave} name={<FiEdit2 />} />
                                    </div>
                                </td>
                                <td className="flex justify-center text-sm items-center py-2">
                                    {showToggle && singletaskId === leave.id ? <FaAngleUp size={22} onClick={() => toggleDetails(leave.id)} /> : <FaAngleDown className='cursor-pointer'
                                        size={22} onClick={() => toggleDetails(leave.id)}
                                    />}
                                </td>
                            </tr>
                            {showToggle && singletaskId === leave.id && (
                                <tr>
                                    <td colSpan="12" className="bg-gray-50 p-4 text-black transform origin-top transition-all duration-300 ease-in-out scale-y-100">
                                        <Details leave={leave} />
                                    </td>
                                </tr>
                            )}
                        </React.Fragment>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

const Details = ({ leave }) => {
    return <div>
        <p className='font-medium'><span className='font-semibold'>Name:</span> {leave?.applicant.name}</p>
        <p className='font-medium'><span className='font-semibold'>Email:</span> {leave?.applicant.email}</p>
        <p className='font-medium'><span className='font-semibold'>Phone:</span> {leave?.applicant.phone}</p>
        <p className='font-medium'><span className='font-semibold'>Position:</span> {leave?.applicant.position}</p>
        <p className='font-medium'><span className='font-semibold'>Type:</span> {leave?.type}</p>
        <p className='font-medium'><span className='font-semibold'>Reason:</span> {leave?.reason}</p>
        <p className='font-medium'><span className='font-semibold'>Total Days:</span>  {leave?.dayCount}</p>
        <p className='font-medium'><span className='font-semibold'>Leaves Days:</span>  {leave?.leaveDays}</p>
        <p className='font-medium'><span className='font-semibold'>Weenked and Holidays:</span>  {leave?.dayCount - leave?.leaveDays}</p>
        <p className='font-medium'><span className='font-semibold'>Team Leader Approval:</span>{leave?.status}</p>
        <p className='font-medium'><span className='font-semibold'>Admin Approval:</span>  {leave?.adminStatus}</p>
    </div>;
};


export default LeavesTable