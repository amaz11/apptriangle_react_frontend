import { getTokenFromLocalStorage } from "../utils/token";
import apiSlice from "./api";


const AttendeceApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllAttendece: builder.query({
            query: () => ({
                url: `/attendence/admin`,
                headers: {
                    Authorization: `Bearer ${getTokenFromLocalStorage()}`
                }
            }),
            providesTags: ['Attendece'],
        }),
    }),
});

export const { useGetAllAttendeceQuery } = AttendeceApi;