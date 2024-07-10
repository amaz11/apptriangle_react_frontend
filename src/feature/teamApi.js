import { getTokenFromLocalStorage } from "../utils/token";
import apiSlice from "./api";


const TeamApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        postTeam: builder.mutation({
            query: (data) => ({
                method: "POST",
                url: "/team",
                headers: {
                    Authorization: `Bearer ${getTokenFromLocalStorage()}`
                },
                body: data,
            }),
            invalidatesTags: ['Team'],

        }),
        getAllTeam: builder.query({
            query: () => ({
                url: `/team`,
                headers: {
                    Authorization: `Bearer ${getTokenFromLocalStorage()}`
                }
            }),
            providesTags: ['Team'],
        }),
        getTeamID: builder.query({
            query: (id) => ({
                url: `/team/${id}`,
                headers: {
                    Authorization: `Bearer ${getTokenFromLocalStorage()}`
                }
            }),
        }),
        updateTeam: builder.mutation({
            query: ({ id, data }) => ({
                url: `team/${id}`,
                headers: {
                    Authorization: `Bearer ${getTokenFromLocalStorage()}`
                },
                method: 'PUT',
                body: data,
            }),
            invalidatesTags: ['Team'],
        }),
        deleteTeam: builder.mutation({
            query: (id) => ({
                url: `team/${id}`,
                headers: {
                    Authorization: `Bearer ${getTokenFromLocalStorage()}`
                },
                method: 'DELETE',
            }),
            invalidatesTags: ['Team'],
        })
    }),
});

export const { useDeleteTeamMutation, useGetTeamIDQuery, usePostTeamMutation, useUpdateTeamMutation, useGetAllTeamQuery } = TeamApi;