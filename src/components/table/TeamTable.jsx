import React, { useState } from 'react';
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { toast } from 'react-toastify';
import { useDeleteTeamMutation } from '../../feature/teamApi';
import { MdDeleteOutline } from 'react-icons/md';
import TableSkeleton from '../skeleton/TableSkeleton';



const TeamTable = ({ team, isLoading,
    isFetching,
    isError,
    error }) => {
    const [deleteTeam] = useDeleteTeamMutation()
    const [singletaskId, setSingleTaskId] = useState(null);
    const [showToggle, setShowToggle] = useState(false);

    const toggleDetails = (id) => {
        setSingleTaskId(id);
        setShowToggle((prev) => (prev && singletaskId === id ? false : true));
    };

    const teamDelete = async (id) => {
        try {
            const res = await deleteTeam(id).unwrap();
            if (res.ok === true) {
                toast.success("Deleted successfully");
            }
        } catch (error) {
            toast.error(error.data.message)
        }
    }

    if (isError) {
        toast.error(error.data.message)
    }
    return (
        <div className='mt-4 rounded-lg overflow-x-scroll lg:overflow-x-auto'>
            <table className="border-collapse w-full">
                <thead className=''>
                    <tr>
                        <th className="bg-[#6e7bd9] py-3 border font-bold text-[#ffffff] text-center text-base">SI</th>
                        <th className="bg-[#6e7bd9] py-3 border font-bold text-[#ffffff] text-center text-base">Tean Name</th>
                        <th className="bg-[#6e7bd9] py-3 border font-bold text-[#ffffff] text-center text-base">Team Lead</th>
                        <th className="bg-[#6e7bd9] py-3 border font-bold text-[#ffffff] text-center text-base">Member</th>
                        <th className="bg-[#6e7bd9] py-3 border font-bold text-[#ffffff] text-center text-base">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {isLoading || isFetching ? <TableSkeleton col={5} /> : team?.length === 0 ? <tr><td colSpan="4" className='p-8 font-semibold text-center'>There No data Here</td></tr> : team?.map((item, index) => (
                        <React.Fragment key={item.id}>
                            <tr className="border">
                                <td className="px-4 py-2 border text-center text-sm">{index + 1}</td>
                                <td className="py-2 border text-center text-sm">{item.name}</td>
                                <td className="px-4 py-2 border text-sm">{item.teamhead.name}</td>
                                <td className="flex justify-center items-center py-2 text-sm">
                                    {showToggle && singletaskId === item.id ? <FaAngleUp size={22} onClick={() => toggleDetails(item.id)} /> : <FaAngleDown className='cursor-pointer'
                                        size={22} onClick={() => toggleDetails(item.id)}
                                    />}
                                </td>
                                <td className="px-4 py-2 border text-sm">
                                    <div className='flex justify-center items-center gap-2'>
                                        <span className='pr-4 border-r'>
                                            {/* <EmployeeUpdateModal name={<FiEdit2 className='cursor-pointer' size={21} />} employee={item} /> */}
                                        </span>
                                        <hr />
                                        < MdDeleteOutline onClick={() => teamDelete(item.id)} className='cursor-pointer' size={22} />
                                    </div>
                                </td>
                            </tr>
                            {showToggle && singletaskId === item.id && (
                                <tr>
                                    <td colSpan="4" className="bg-gray-50 p-4 text-black transform origin-top transition-all duration-300 ease-in-out scale-y-100">
                                        <Details team={item} />
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

const Details = ({ team }) => {
    return <div>
        <p className='font-medium'><span className='font-semibold'>Name:</span> {team.name}</p>
        <p className='font-medium'><span className='font-semibold'>Team Lead:</span> {team.teamhead.name}</p>
        <p className='font-medium'><span className='font-semibold'>Meambers:</span> {team?.members?.map(item => <span className='after:content-[","] after:last:content-[""] mr-2 last:mr-0' key={item.id}>{item.name}</span>)}</p>
    </div>;
};


export default TeamTable