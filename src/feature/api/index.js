import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { getTokenFromLocalStorage } from "../../utils/token"
// https://apptriangle-node-backend.onrender.com
const apiSlice = createApi({
    reducePath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: `http://localhost:8000/api/v1/`,
    }),
    endpoints: (builder) => ({})
})

export default apiSlice