import React from 'react'
import { useGetAllLeavesQuery } from '../feature/leavesApi'
import LeavesTable from '../components/table/LeavesTable';

const Leaves = () => {
    const { data,
        isLoading,
        isFetching,
        isError,
        error, } = useGetAllLeavesQuery()
    return (
        <div>
            <LeavesTable leaves={data?.data} isFetching={isFetching} isLoading={isLoading} error={error} isError={isError} />
        </div>
    )
}

export default Leaves