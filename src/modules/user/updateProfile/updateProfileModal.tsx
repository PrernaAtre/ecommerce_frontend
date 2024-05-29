import { useUser } from '@/hooks/useUser';
import { Avatar, Button, Grid, TextField } from '@mui/material';
import { Modal } from 'antd';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { useUserProfile } from '../updateProfile/hook/useUserProfile';
import { updateFormSchema } from './schema/updateProfileSchema';
import { ReloadIcon } from "@radix-ui/react-icons";

const UpdateProfileModal = () => {
    const { user } = useUser();
    const { handleSubmit, initialValues, isLoading, data } = useUserProfile();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState<string | null>(
        user?.profile_image || null
    );

    const formik = useFormik({
        initialValues,
        validationSchema: updateFormSchema,
        onSubmit: (values) => {
            console.log("values in onsubmit=", values);

            handleSubmit(values);
        },
    });
    console.log("formik erroes-------",formik.errors);
    
    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.currentTarget.files;
        if (files && files.length > 0) {
            const selectedImage = files[0];
            formik.setFieldValue("profile_image", selectedImage);
            setPreviewImage(URL.createObjectURL(selectedImage)); // Set preview image
        }
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const showModal = () => {
        setIsModalOpen(true);
    };

    return (
        <div className="flex items-center gap-2">
            <button
                className="flex items-center gap-2"
                onClick={showModal}
            >
                <Avatar alt="Profile Picture" src={user?.profile_image} />
                <span className="hidden md:inline-block">{user?.name}</span>
            </button>
            <Modal open={isModalOpen} maskClosable={true} onCancel={handleCancel} footer={null}>
                <div className="w-80">
                    <Grid
                        container
                        className="w-full"
                        direction="column"
                        alignItems="center"
                        spacing={0}
                    >
                        <form
                            encType="multipart/form-data"
                            className="w-full"
                            onSubmit={formik.handleSubmit}
                        >
                            <Grid item>
                                <label htmlFor="profile_image">
                                    {

                                        <img
                                            className="h-24 rounded-full mb-4 cursor-pointer mx-auto"
                                            src={previewImage || user?.profile_image}
                                            alt='profile image'
                                        />

                                    }

                                </label>
                                <input
                                    id="profile_image"
                                    name="profile_image"
                                    type="file"
                                    style={{ display: "none" }}
                                    onChange={handleImageChange}
                                    onBlur={formik.handleBlur}
                                />
                            </Grid>
                            <Grid item>
                                <Grid container direction="column" spacing={2}>
                                    <Grid item>
                                        <TextField
                                            label="First Name"
                                            variant="outlined"
                                            name="firstname"
                                            className="w-full"
                                            value={formik.values.firstname}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            error={formik.touched.firstname && Boolean(formik.errors.firstname)}
                                        />
                                    </Grid>
                                    <Grid item>
                                        <TextField
                                            label="Last Name"
                                            variant="outlined"
                                            name="lastname"
                                            className="w-full"
                                            value={formik.values.lastname}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            error={formik.touched.lastname && Boolean(formik.errors.lastname)}
                                        />
                                    </Grid>
                                    <Grid item>
                                        <Button
                                            type="submit"
                                            className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                                        >
                                            {isLoading ? (
                                                <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                                            ) : (
                                                "Save Changes"
                                            )}
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </form>
                    </Grid>
                </div>
            </Modal>
        </div>
    );
}

export default UpdateProfileModal;
