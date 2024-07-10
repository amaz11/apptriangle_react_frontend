import React from 'react'
import { useGetAllTeamQuery } from '../feature/teamApi';
import TeamTable from '../components/table/TeamTable';


const Team = () => {
    const { data,
        isLoading,
        isFetching,
        isError,
        error, } = useGetAllTeamQuery()
    return (
        <div>
            <TeamTable team={data?.data} isFetching={isFetching} isLoading={isLoading} error={error} isError={isError} />
        </div>
    )
}

export default Team