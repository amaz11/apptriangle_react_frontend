import React, { useState } from 'react'
import Modal from '../Modal';
import { toast } from 'react-toastify';
import { useUpdateUserMutation } from '../../feature/employeeApi';


const EmployeeUpdateModal = ({ name, employee }) => {
    const [updateUser] = useUpdateUserMutation()
    const [formData, setFormData] = useState({
        name: employee.name || '',
        email: employee.email || '',
        address: employee.address || '',
        phone: employee.phone || '',
        position: employee.position || '',
        role: employee.role || '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const id = employee.id
        try {
            const res = await updateUser({ id, data: formData }).unwrap();
            if (res.ok) {
                toast.success('employee has been Update');
            }

        } catch (error) {
            toast.error(error.data.message)
        }
    };

    return (
        <Modal title={"Update Employee"} name={name}>
            <div className="">
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="title" className="block text-gray-700">Name</label>
                        <input type="text" name="name" className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Employee Name" required
                            value={formData.name}
                            onChange={handleChange} />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="Email" className="block text-gray-700">Email</label>
                        <input type='email' name="email" value={formData.email}
                            onChange={handleChange} rows={4} className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Email" required />
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
                            <option value="TEAMLEADER">TeamLeader</option>
                        </select>
                    </div>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-600 py-2 rounded-md w-full text-white transition">Add Task</button>
                </form>
            </div>
        </Modal>
    )
}

export default EmployeeUpdateModal