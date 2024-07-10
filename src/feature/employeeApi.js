import apiSlice from "./api";


const UserApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        postUser: builder.mutation({
            query: (data) => ({
                method: "POST",
                url: "/auth/create/employee",
                body: data,
            }),
            invalidatesTags: ['User'],

        }),
        getAllUser: builder.query({
            query: ({ page, limit, search }) => ({
                url: `/users?page=${page}&limit=${limit}&search=${search}`,
            }),
            providesTags: ['User'],
        }),
        getUserID: builder.query({
            query: (id) => ({
                url: `/users/${id}`,
            }),
        }),
        updateUser: builder.mutation({
            query: ({ id, data }) => ({
                url: `users/${id}`,
                method: 'PUT',
                body: data,
            }),
            invalidatesTags: ['User'],
        }),
        deleteUser: builder.mutation({
            query: (id) => ({
                url: `users/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['User'],
        })
    }),
});

export const { useDeleteUserMutation, useGetUserIDQuery, usePostUserMutation, useUpdateUserMutation, useGetAllUserQuery } = UserApi;