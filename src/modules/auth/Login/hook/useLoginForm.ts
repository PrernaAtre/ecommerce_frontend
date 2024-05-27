import React from 'react'
import { loginData } from "../../../../config/authQuery"
import { JobRole, loginSchema } from '../schema/loginSchema';

export const useLoginForm = () => {
    const handleSubmit = async (data : { role: JobRole | null; email: string; password: string })=>{
        try
        {
            console.log("data in handle submit incoming------", data);
            
            const sanitizeInput = loginSchema.cast(data, {
                assert: false,
                stripUnknown: true,
              });
              console.log("sanitizeInput-------", sanitizeInput);
              
              const response = await loginData(sanitizeInput)
              console.log("response login in hook------", response); 
        }
        catch(error)
        {
            console.log("error---", error);
        }
    }
  return {
    initialValues: loginSchema.cast({}, { assert: false, stripUnknown: false }),
    validationSchema : loginSchema,
    handleSubmit
    }
}
