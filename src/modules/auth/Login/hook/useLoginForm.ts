import React from 'react'
import { loginData } from "../../../../config/authQuery"
import { JobRole, loginSchema } from '../schema/loginSchema';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from '@/store/reducers/authSlice';
import AuthToken from '@/utils/AuthToken';
import { useRouter } from 'next/navigation';

export const useLoginForm = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const handleSubmit = async (data: { role: JobRole | null; email: string; password: string }, setModalOpen: (isOpen: boolean) => void) => {
        try {
            console.log("data in handle submit incoming------", data);

            const sanitizeInput = loginSchema.cast(data, {
                assert: false,
                stripUnknown: true,
            });
            console.log("sanitizeInput-------", sanitizeInput);

            const response = await loginData(sanitizeInput)
            console.log("response login in hook------", response);
            if (response) {
                toast.success('Login Successfully');
                dispatch(setCurrentUser(response?.data?.login));
                AuthToken.set(response?.data?.login?.token);
                setModalOpen(false);
                router.push("/landingPage");
            }
        }
        catch (error) {
            toast.error('Invalid Login');
        }
    }
    return {
        initialValues: loginSchema.cast({}, { assert: false, stripUnknown: false }),
        validationSchema: loginSchema,
        handleSubmit
    }
}
