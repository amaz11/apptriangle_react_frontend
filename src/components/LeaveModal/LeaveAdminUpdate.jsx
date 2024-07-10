import React, { useState } from 'react'
import Modal from '../Modal'
import { useUpdateLeavesMutation } from '../../feature/leavesApi';

const LeaveAdminUpdate = ({ leave, name }) => {
    const [updateLeaves, { isLoading }] = useUpdateLeavesMutation()
    const [formData, setFormData] = useState({
        adminStatus: leave.adminStatus || '',
        noteAdmin: leave.noteAdmin || '',
    });
    const [isRejected, setIsRejected] = useState(false)

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (e.target.name === 'adminStatus') {
            if (e.target.value === 'REJECTED') {
                setIsRejected(true)
            } else {
                setIsRejected(false);
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await updateLeaves({ id: leave.id, data: formData }).unwrap();
            if (res.ok) {
                toast.success('Update Complete');
            }
        } catch (error) {
            toast.error(error.data.error)
        }
    };

    return (
        <Modal title={"Update Admin Approval"} name={name}>
            <div className="">
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col items-start gap-1 mb-4">
                        <label htmlFor="adminStatus" className="text-gray-700">Admin Status</label>
                        <select name="adminStatus" value={formData.adminStatus}
                            onChange={handleChange} className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option value="" onClick={() => setIsRejected(false)}>Select Option</option>
                            <option value="PENDING" onClick={() => setIsRejected(false)} >Pending</option>
                            <option value="ACCEPTED" onClick={() => setIsRejected(false)}>Accepted</option>
                            <option value="REJECTED" onClick={() => setIsRejected(true)}> Rejected</option>
                        </select>
                    </div>
                    {isRejected ? <input type='text' className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4" placeholder='Note' onChange={handleChange} value={formData.noteAdmin} /> : null}
                    <button type="submit" disabled={isLoading} className="bg-blue-500 hover:bg-blue-600 py-2 rounded-md w-full text-white transition">Update Status</button>
                </form>
            </div>
        </Modal>
    )
}

export default LeaveAdminUpdate