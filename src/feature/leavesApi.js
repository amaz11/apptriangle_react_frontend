import apiSlice from "./api";


const LeavesApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllLeaves: builder.query({
            query: () => ({
                url: `/leaves`,
            }),
            providesTags: ['Leaves'],
        }),

        updateLeaves: builder.mutation({
            query: ({ id, data }) => ({
                url: `leaves/admin/${id}`,
                method: 'PATCH',
                body: data,
            }),
            invalidatesTags: ['Leaves'],
        }),
    }),
});

export const { useUpdateLeavesMutation, useGetAllLeavesQuery } = LeavesApi;