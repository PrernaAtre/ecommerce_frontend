import { getToken } from "@/utils/AuthToken";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
    reducerPath : "",
    baseQuery : fetchBaseQuery({baseUrl : "http://localhost:3000",
        prepareHeaders : async(headers)=>{
            const token = await getToken();
            console.log("token in base api-----",token);
            
            if(token)
                {
                    headers.set("authorization", `Bearer ${token}`)
                }
                return headers;
        }
    }),
    endpoints : (builder)=>({})
})
