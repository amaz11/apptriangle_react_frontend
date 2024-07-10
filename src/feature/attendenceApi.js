import apiSlice from "./api";


const AttendeceApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllAttendece: builder.query({
            query: () => ({
                url: `/attendence/admin`,
            }),
            providesTags: ['Attendece'],
        }),
    }),
});

export const { useGetAllAttendeceQuery } = AttendeceApi;