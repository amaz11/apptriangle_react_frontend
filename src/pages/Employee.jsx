import React, { useState } from 'react'
import EmployeeCreateModal from '../components/EmployeeModal/EmployeeCreateModal'
import EmployeeTable from '../components/table/EmployeeTable'
import { useGetAllUserQuery } from '../feature/employeeApi'

const Employee = () => {
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(2)
    const [search, setSearch] = useState("")
    const { data: employee,
        isLoading,
        isFetching,
        isError,
        error, } = useGetAllUserQuery({ page, limit, search })
    console.log(employee);
    return (
        <div>
            <EmployeeCreateModal />
            <EmployeeTable
                employee={employee?.data}
                isFetching={isFetching}
                isLoading={isLoading}
                error={error}
                isError={isError}
                page={page}
                setPage={setPage}
                limit={limit}
                setLimit={setLimit}
                data={employee}
                search={search}
                setSearch={setSearch}
            />
        </div>
    )
}

export default Employee