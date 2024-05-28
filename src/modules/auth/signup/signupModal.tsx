import React, { useState } from 'react';
import { Modal } from 'antd';
import { useFormik } from "formik";
import { Button, Grid, TextField } from '@mui/material';
import { useSignUp } from '../../../modules/auth/signup/hook/useSignupForm';
import { JobRole } from './schema/signupSchema';

const SignUpModal: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedRole, setSelectedRole] = useState<JobRole>(JobRole.JobSeeker); // Default selection
    const { handleSubmit, initialValues, validationSchema } = useSignUp();
    const formik = useFormik({
        initialValues: { ...initialValues, role: selectedRole },
        validationSchema,
        onSubmit: (values) => {
            console.log("SignUp values========", values);
            handleSubmit(values, setIsModalOpen); // Pass setIsModalOpen to handleSubmit
        }
    });

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handleRoleSelect = (role: JobRole) => {
        setSelectedRole(role);
        formik.setFieldValue('role', role); // Update formik value for role
    };

    return (
        <>
            <Button onClick={showModal} style={{ borderRadius: '9999px', backgroundColor: 'green', color: 'white', width: "40%" }}>Sign Up</Button>
            <Modal open={isModalOpen} maskClosable={true} onCancel={handleCancel} footer={null}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
                    <div style={{ width: '100%', backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '10px', display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                        <Button
                            onClick={() => handleRoleSelect(JobRole.JobSeeker)}
                            style={{
                                backgroundColor: selectedRole === JobRole.JobSeeker ? 'green' : 'white',
                                color: selectedRole === JobRole.JobSeeker ? 'white' : 'green',
                                borderRadius: '9999px',
                                marginRight: '10px',
                                flex: 1,
                                height: '50px'
                            }}
                        >
                            Job Seeker
                        </Button>
                        <Button
                            onClick={() => handleRoleSelect(JobRole.JobProvider)}
                            style={{
                                backgroundColor: selectedRole === JobRole.JobProvider ? 'green' : 'white',
                                color: selectedRole === JobRole.JobProvider ? 'white' : 'green',
                                borderRadius: '9999px',
                                flex: 1,
                                height: '50px'
                            }}
                        >
                            Job Provider
                        </Button>
                    </div>
                    <form onSubmit={formik.handleSubmit} style={{ width: '100%' }}>
                        <Grid container spacing={4}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    id="firstname"
                                    name="firstname"
                                    type="text"
                                    label="First Name"
                                    fullWidth
                                    autoComplete="given-name"
                                    autoFocus
                                    value={formik.values.firstname}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    placeholder="First Name"
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    id="lastname"
                                    name="lastname"
                                    type="text"
                                    label="Last Name"
                                    fullWidth
                                    autoComplete="family-name"
                                    value={formik.values.lastname}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    placeholder="Last Name"
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="email"
                                    name="email"
                                    type="email"
                                    label="Email address"
                                    fullWidth
                                    autoComplete="email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    placeholder="Your e-mail address"
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="password"
                                    name="password"
                                    type="password"
                                    label="Password"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    fullWidth
                                    placeholder="Your password"
                                    variant="outlined"
                                />
                                {formik.errors.password && formik.touched.password && (
                                    <p style={{color : "red"}}>{formik.errors.password}</p>
                                )}
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="confirm_password"
                                    name="confirm_password"
                                    type="password"
                                    label="confirm_password"
                                    value={formik.values.confirm_password}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    fullWidth
                                    placeholder="Confirm your password"
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button type="submit" variant="contained" disabled={!(formik.isValid && formik.dirty)}>
                                    Sign Up
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Modal>
        </>
    );
};

export default SignUpModal;
