import React from 'react'
import AttendecTable from '../components/table/AttendenceTable'
import { useGetAllAttendeceQuery } from '../feature/attendenceApi';


const Attendence = () => {
    const { data,
        isLoading,
        isFetching,
        isError,
        error, } = useGetAllAttendeceQuery()
    return (
        <div>
            <AttendecTable attendence={data?.data} isFetching={isFetching} isLoading={isLoading} error={error} isError={isError} />
        </div>
    )
}

export default Attendence