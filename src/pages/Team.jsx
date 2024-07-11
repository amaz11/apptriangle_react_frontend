import React from 'react'
import { useGetAllTeamQuery } from '../feature/teamApi';
import TeamTable from '../components/table/TeamTable';
import TeamCreateModal from '../components/TeamModal.js/TeamCreateModal';


const Team = () => {
    const { data,
        isLoading,
        isFetching,
        isError,
        error, } = useGetAllTeamQuery()
    return (
        <div>
            <TeamCreateModal />
            <TeamTable team={data?.data} isFetching={isFetching} isLoading={isLoading} error={error} isError={isError} />
        </div>
    )
}

export default Team