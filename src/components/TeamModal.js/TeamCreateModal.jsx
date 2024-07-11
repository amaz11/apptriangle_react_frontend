import React, { useState } from 'react'
import { toast } from 'react-toastify';
import Modal from '../Modal';
import { useGetAllUsersQuery } from '../../feature/employeeApi';
import { FaChevronDown, FaPlus } from "react-icons/fa6";
import { RxCross2 } from 'react-icons/rx';
import { usePostTeamMutation } from '../../feature/teamApi';

const TeamCreateModal = () => {
    const [postTeam, { isLoading }] = usePostTeamMutation()
    const { data: employee,
        isLoading: isEmLoading,
        isFetching: isEmFetching,
        isError,
        error, } = useGetAllUsersQuery()
    const [formData, setFormData] = useState({
        name: '',
        teamheadID: '',
    });
    const [teamMeamber, setTeamMember] = useState([])
    const [dropdown, setDropdown] = useState(false)

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newFormData = { ...formData, memberIDs: teamMeamber }
            const res = await postTeam(newFormData).unwrap();
            if (res.ok) {
                toast.success('Task has been Created');
            }
            setFormData({
                name: "",
                teamheadID: ""

            })
            setTeamMember([])

        } catch (error) {
            toast.error(error.data.error)
        }
    };

    const addTeamMeamber = (id) => {
        const teamMeamberFind = teamMeamber.find(value => value.id === id)
        if (teamMeamberFind) {
            return
        }
        const newObject = { 'id': id }
        const arr = [...teamMeamber, newObject]
        setTeamMember(arr)
    }

    const deleteTeamMeamber = (id) => {
        const filtterArr = teamMeamber.filter(value => value.id !== id)
        setTeamMember(filtterArr)
    }

    return (

        <Modal title={"Create Team"} name={<div className='flex items-center gap-2 bg-blue-500 px-2 py-1.5 rounded font-semibold text-white'><FaPlus />  Team</div>}>
            <div className="">
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="title" className="block text-gray-700">Name</label>
                        <input type="text" name="name" className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Task Title" required
                            value={formData.name}
                            onChange={handleChange} />
                    </div>

                    <div className="mb-4 grow">
                        <label htmlFor="priority" className="block text-gray-700">Team Head</label>
                        <select name="teamheadID" value={formData.teamheadID}
                            onChange={handleChange} className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option value="">Select Option</option>
                            {employee?.data.map(item => item.role === "TEAMLEADER" ? <option key={item.id} value={item.id}>{item.name}</option> : null)}
                        </select>
                    </div>
                    <div className='mb-4'>
                        <label className="text-gray-700" htmlFor="passwordConfirmation">Member</label>
                        <div className='flex items-center gap-4 my-2'>
                            {teamMeamber.map(({ id }, index) => {
                                return employee?.data?.map((item) => {
                                    if (item.id === id)
                                        return <span className='flex items-center gap-2 bg-[#eaeaea] px-4 py-1 rounded-full text-[12px] text-gray-700' key={index}><span> {item.name}</span> <RxCross2 size={12} className='text-gray-700 cursor-pointer'
                                            onClick={() => deleteTeamMeamber(id)} />
                                        </span>
                                    else
                                        return
                                })
                            })}
                        </div>

                        <div className='relative'>
                            <div className='block border-gray-600 mt-2 px-4 py-2 border rounded-md w-full text-gray-700 cursor-pointer' onClick={() => setDropdown(!dropdown)}>
                                <span>Select Member</span>
                                <FaChevronDown size={18} className="top-3 right-3 absolute" />
                            </div>
                            {
                                dropdown ? <div className={`absolute bg-white p-0 w-full left-0 top-11 z-10 scroll-bar  ${employee?.data?.length > 4 ? 'h-[200px] overflow-y-scroll' : 'h-auto'} shadow-md rounded-sm`}>
                                    {employee?.data?.map((item) => item.role === "EMPLOYEE" ? <div className='flex justify-start items-center hover:bg-[#eaeaea] mb-3 last:mb-0 px-4 py-2 hover:text-gray-700' key={item.id} onClick={() => addTeamMeamber(item.id)}>
                                        <span> {item.name}</span>

                                    </div> : null
                                    )}
                                </div> : null
                            }


                        </div>

                    </div>

                    <button type="submit" className="bg-blue-500 hover:bg-blue-600 py-2 rounded-md w-full text-white transition">
                        {isLoading ? "Loading..." : "Create Team"
                        }</button>
                </form>
            </div>
        </Modal>
    )
}

export default TeamCreateModal