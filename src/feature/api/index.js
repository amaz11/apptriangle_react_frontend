import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { getTokenFromLocalStorage } from "../../utils/token"
const apiSlice = createApi({
    reducePath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: `https://apptriangle-node-backend.onrender.com/api/v1/`,
    }),
    endpoints: (builder) => ({})
})

export default apiSlice