import React from 'react'
import AttendecTable from '../components/table/AttendenceTable'
import { useGetAllAttendeceQuery } from '../feature/attendenceApi';


const Attendence = () => {
    const { data,
        isLoading,
        isFetching,
        isError,
        error, } = useGetAllAttendeceQuery()
    console.log(data);
    return (
        <div>
            <AttendecTable attendence={data?.data} isFetching={isFetching} isLoading={isLoading} error={error} isError={isError} />
        </div>
    )
}

export default Attendence