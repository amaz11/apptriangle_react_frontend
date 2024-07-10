import { getTokenFromLocalStorage } from "../utils/token";
import apiSlice from "./api";


const LeavesApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllLeaves: builder.query({
            query: () => ({
                url: `/leaves`,
                headers: {
                    Authorization: `Bearer ${getTokenFromLocalStorage()}`
                }
            }),
            providesTags: ['Leaves'],
        }),

        updateLeaves: builder.mutation({
            query: ({ id, data }) => ({
                url: `leaves/admin/${id}`,
                method: 'PATCH',
                body: data,
                headers: {
                    Authorization: `Bearer ${getTokenFromLocalStorage()}`
                }
            }),
            invalidatesTags: ['Leaves'],
        }),
    }),
});

export const { useUpdateLeavesMutation, useGetAllLeavesQuery } = LeavesApi;