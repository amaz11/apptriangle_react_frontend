import React, { useState } from 'react';
import { MdDeleteOutline } from "react-icons/md";
import { FiEdit2 } from "react-icons/fi";
import { toast } from 'react-toastify';
import EmployeeUpdateModal from '../EmployeeModal/EmployeeUpdate';
import { useDeleteUserMutation } from '../../feature/employeeApi';
import TableSkeleton from '../skeleton/TableSkeleton';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";

const EmployeeTable = ({ employee, isLoading,
    isFetching,
    isError,
    error, page, setPage, limit, setLimit, data, setSearch }) => {
    const totalPage = Math.round(data?.total / data?.limit)
    const pageForward = () => {
        if (page === totalPage) {
            return
        }
        setPage(pre => pre + 1)
    }

    const pageBackward = () => {
        if (page <= 1) {
            return
        }
        setPage(pre => pre - 1)

    }

    const [deleteUser] = useDeleteUserMutation()
    const [isLoaging, setIsLoading] = useState(false)

    const userDelete = async (id) => {
        setIsLoading(true)
        try {
            const res = await deleteUser(id).unwrap();
            if (res.ok === true) {
                setIsLoading(false)
            }
        } catch (error) {
            toast.error(error.data.message)
            setIsLoading(false)
        }
    }


    if (isError) {
        toast.error(error.data.message)
    }
    return (
        <div className='mt-4 mb-4 border rounded-xl overflow-x-scroll lg:overflow-x-auto'>
            <div className='flex justify-end items-center py-3 pr-4'>
                <div className='relative'>
                    <input type="text" className='px-2 p-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' placeholder='Search....' onChange={(e) => setSearch(e.target.value)} />
                    <IoIosSearch className='top-1.5 right-2 absolute' size={18} />
                </div>
            </div>
            <table className="border-collapse w-full">
                <thead>
                    <tr className='bg-[##6e7bd9]'>
                        <th className="bg-[##6e7bd9] py-3 border font-bold text-[##ffffff] text-base text-center">SI</th>
                        <th className="bg-[##6e7bd9] py-3 border font-bold text-[##ffffff] text-base text-center">Name</th>
                        <th className="bg-[##6e7bd9] py-3 border font-bold text-[##ffffff] text-base text-center">Email</th>
                        <th className="bg-[##6e7bd9] py-3 border font-bold text-[##ffffff] text-base text-center">Address</th>
                        <th className="bg-[##6e7bd9] py-3 border font-bold text-[##ffffff] text-base text-center">Phone</th>
                        <th className="bg-[##6e7bd9] py-3 border font-bold text-[##ffffff] text-base text-center">Position</th>
                        <th className="bg-[##6e7bd9] py-3 border font-bold text-[##ffffff] text-base text-center">Role</th>
                        <th className="bg-[##6e7bd9] py-3 border font-bold text-[##ffffff] text-base text-center">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {isLoading || isFetching ? <TableSkeleton col={8} /> : employee?.lenght === 0 ? <tr><td colSpan="8" className='p-8 font-semibold text-center'>There No data Here</td></tr> : employee?.map((item, index) => (
                        <React.Fragment key={item.id}>
                            <tr className="border">
                                <td className="px-4 py-2 border text-center text-sm">{index + 1}</td>
                                <td className="py-2 border text-center text-sm">{item.name}</td>
                                <td className="flex justify-between items-center px-4 py-2 text-sm">
                                    {item.email}
                                </td>
                                <td className="px-4 py-2 border text-center text-sm">{item.address}</td>
                                <td className="px-4 py-2 border text-center text-sm">{item.phone}</td>
                                <td className="px-4 py-2 border text-center text-sm">{item.position}</td>
                                <td className="px-4 py-2 border text-center text-sm">{item.role}</td>
                                <td className="px-4 py-2 border">
                                    <div className='flex justify-center items-center gap-2'>
                                        <span className='pr-4 border-r'>
                                            <EmployeeUpdateModal name={<FiEdit2 className='cursor-pointer' size={21} />} employee={item} />
                                        </span>
                                        <hr />
                                        < MdDeleteOutline onClick={() => userDelete(item.id)} className='cursor-pointer' size={22} />
                                    </div>
                                </td>
                            </tr>
                        </React.Fragment>
                    ))}
                </tbody>
            </table>
            <div>
                <div className='flex justify-end items-center gap-10 py-2 pr-4'>
                    <div>
                        <span className='pr-3 font-semibold text-sm'>Limits</span>
                        <select className='p-1 border rounded text-sm focus:outline-none' name="limit" onChange={(e) => {
                            setLimit(e.target.value);
                            if (data?.skip < data?.total) {
                                setPage(1)
                            }
                        }} >
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={5}>5</option>
                        </select>
                    </div>

                    <IoIosArrowBack className={`cursor-pointer ${page === 1 ? "text-gray-400" : "text-gray-700"}`} size={20} onClick={() => { pageBackward() }} />
                    <span className='text-gray-700'>
                        {
                            data?.currentPage
                        }
                    </span>
                    < IoIosArrowForward className={`cursor-pointer ${page === totalPage ? "text-gray-400" : "text-gray-700"}`} size={20} onClick={() => pageForward()} />
                </div>
            </div>
        </div>
    );
};

export default EmployeeTable;