import React, { useState } from 'react'
import { toast } from 'react-toastify';
import Modal from '../Modal';
import { usePostUserMutation } from '../../feature/employeeApi';
import { FaPlus } from "react-icons/fa6";

const EmployeeCreateModal = () => {
    const [postUser, { isLoading }] = usePostUserMutation()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        phone: '',
        position: '',
        role: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await postUser(formData).unwrap();
            if (res.ok) {
                toast.success('Task has been Created');
            }

        } catch (error) {
            toast.error(error.data.error)
        }
    };

    return (

        <Modal title={"Create Employee"} name={<div className='flex items-center gap-2 bg-blue-500 px-2 py-1.5 rounded font-semibold text-white'><FaPlus />  Add Employee</div>}>
            <div className="">
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="title" className="block text-gray-700">Name</label>
                        <input type="text" name="name" className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Task Title" required
                            value={formData.name}
                            onChange={handleChange} />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="Email" className="block text-gray-700">Email</label>
                        <input type='email' name="email" value={formData.email}
                            onChange={handleChange} rows={4} className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Task Description" required />
                    </div>
                    <div className="mb-4 grow">
                        <label htmlFor="phone" className="block text-gray-700">Phone</label>
                        <input type="number" name="phone" value={formData.phone}
                            onChange={handleChange} className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                    </div>
                    <div className="mb-4 grow">
                        <label htmlFor="address" className="block text-gray-700">Address</label>
                        <input type="text" name="address" value={formData.address}
                            onChange={handleChange} className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div className="mb-4 grow">
                        <label htmlFor="position" className="block text-gray-700">Position</label>
                        <input type="text" name="position" value={formData.position}
                            onChange={handleChange} className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>

                    <div className="mb-4 grow">
                        <label htmlFor="priority" className="block text-gray-700">Role</label>
                        <select name="role" value={formData.role}
                            onChange={handleChange} className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option value="">Select Option</option>
                            <option value="ADMIN">Admin</option>
                            <option value="EMPLOYEE">Employee</option>
                            <option value="TEAMLEADER">Team Leader</option>
                        </select>
                    </div>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-600 py-2 rounded-md w-full text-white transition">
                        {isLoading ? "Loading..." : "Create Employee"
                        }</button>
                </form>
            </div>
        </Modal>
    )
}

export default EmployeeCreateModal