import { useUser } from '@/hooks/useUser';
import { useUpdateProfileMutation } from '@/store/features/userApi';
import React from 'react'
import { updateFormSchema } from '../schema/updateProfileSchema';
import { map } from "lodash";


export const useUserProfile = () => {
  const { user } = useUser();
  const [updateProfile, { data, isLoading, isError }] = useUpdateProfileMutation();
  const handleSubmit = async (input: any) => {
    const sanitizeInput = updateFormSchema.cast(input, {
      assert: false,
      stripUnknown: false,
    });
    const formData = new FormData();

    map(sanitizeInput, (value: string | File, key: string) => formData.append(key, value))

    const response = await updateProfile(formData);
    console.log("response in update hook======", response);

  }

  const initialValues = {
    firstname: user?.firstname || null,
    lastname: user?.lastname || null,
    profile_image: user?.profile_image || null
  };

  return {
    handleSubmit,
    initialValues,
    isLoading,
    data
  };

}
