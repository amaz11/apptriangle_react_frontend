import { getTokenFromLocalStorage } from "../utils/token";
import apiSlice from "./api";


const UserApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        postUser: builder.mutation({
            query: (data) => ({
                method: "POST",
                url: "/auth/create/employee",
                headers: {
                    Authorization: `Bearer ${getTokenFromLocalStorage()}`
                },
                body: data,
            }),
            invalidatesTags: ['User'],

        }),
        getAllUser: builder.query({
            query: ({ page, limit, search }) => ({
                url: `/users?page=${page}&limit=${limit}&search=${search}`,
                headers: {
                    Authorization: `Bearer ${getTokenFromLocalStorage()}`
                }
            }),
            providesTags: ['User'],
        }),
        getUserID: builder.query({
            query: (id) => ({
                url: `/users/${id}`,
                headers: {
                    Authorization: `Bearer ${getTokenFromLocalStorage()}`
                }
            }),
        }),
        updateUser: builder.mutation({
            query: ({ id, data }) => ({
                url: `users/${id}`,
                method: 'PUT',
                body: data,
                headers: {
                    Authorization: `Bearer ${getTokenFromLocalStorage()}`
                }
            }),
            invalidatesTags: ['User'],
        }),
        deleteUser: builder.mutation({
            query: (id) => ({
                url: `users/${id}`,
                headers: {
                    Authorization: `Bearer ${getTokenFromLocalStorage()}`
                },
                method: 'DELETE',
            }),
            invalidatesTags: ['User'],
        })
    }),
});

export const { useDeleteUserMutation, useGetUserIDQuery, usePostUserMutation, useUpdateUserMutation, useGetAllUserQuery } = UserApi;