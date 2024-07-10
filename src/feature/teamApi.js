import apiSlice from "./api";


const TeamApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        postTeam: builder.mutation({
            query: (data) => ({
                method: "POST",
                url: "/team",
                body: data,
            }),
            invalidatesTags: ['Team'],

        }),
        getAllTeam: builder.query({
            query: () => ({
                url: `/team`,
            }),
            providesTags: ['Team'],
        }),
        getTeamID: builder.query({
            query: (id) => ({
                url: `/team/${id}`,
            }),
        }),
        updateTeam: builder.mutation({
            query: ({ id, data }) => ({
                url: `team/${id}`,
                method: 'PUT',
                body: data,
            }),
            invalidatesTags: ['Team'],
        }),
        deleteTeam: builder.mutation({
            query: (id) => ({
                url: `team/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Team'],
        })
    }),
});

export const { useDeleteTeamMutation, useGetTeamIDQuery, usePostTeamMutation, useUpdateTeamMutation, useGetAllTeamQuery } = TeamApi;