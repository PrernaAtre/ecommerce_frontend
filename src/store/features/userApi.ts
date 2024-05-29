import { baseApi } from "../baseApi";

export const userApi = baseApi.injectEndpoints({
    endpoints : (builder) => ({
        updateProfile : builder.mutation({
            query : (data : any)=>({
                url: "user",
                method : 'PUT',
                body : data
            })
        })
    })
})

export const { useUpdateProfileMutation } = userApi;