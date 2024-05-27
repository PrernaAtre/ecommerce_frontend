import React, { useState } from 'react';
import { Modal } from 'antd';
import { useFormik } from "formik";
import { Button, Grid, TextField } from '@mui/material';
import { useSignUpForm } from './hook/useSignUpForm';
import { JobRole } from './schema/signupSchema';

const SignUpModal: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedRole, setSelectedRole] = useState<JobRole>(JobRole.JobSeeker); // Default selection
    const { handleSubmit, initialValues, validationSchema } = useSignUpForm();
    const formik = useFormik({
        initialValues: { ...initialValues, role: selectedRole },
        validationSchema,
        onSubmit: (values) => {
            console.log("SignUp values========", values);
            handleSubmit(values);
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
            <Button onClick={showModal} style={{ borderRadius: '9999px', backgroundColor: 'blue', color: 'white', width: "30%" }}>Sign Up</Button>
            <Modal open={isModalOpen} maskClosable={true} onCancel={handleCancel} footer={null}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
                    <div style={{ width: '100%', backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '10px', display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                        <Button
                            onClick={() => handleRoleSelect(JobRole.JobSeeker)}
                            style={{
                                backgroundColor: selectedRole === JobRole.JobSeeker ? 'blue' : 'white',
                                color: selectedRole === JobRole.JobSeeker ? 'white' : 'blue',
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
                                backgroundColor: selectedRole === JobRole.JobProvider ? 'blue' : 'white',
                                color: selectedRole === JobRole.JobProvider ? 'white' : 'blue',
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
                                {formik.errors.firstname && formik.touched.firstname && (
                                    <p className="text-red-700">{formik.errors.firstname}</p>
                                )}
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
                                {formik.errors.lastname && formik.touched.lastname && (
                                    <p className="text-red-700">{formik.errors.lastname}</p>
                                )}
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
                                {formik.errors.email && formik.touched.email && (
                                    <p className="text-red-700">{formik.errors.email}</p>
                                )}
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
                                    <p className="text-red-700">{formik.errors.password}</p>
                                )}
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    type="password"
                                    label="Confirm Password"
                                    value={formik.values.confirmPassword}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    fullWidth
                                    placeholder="Confirm your password"
                                    variant="outlined"
                                />
                                {formik.errors.confirmPassword && formik.touched.confirmPassword && (
                                    <p className="text-red-700">{formik.errors.confirmPassword}</p>
                                )}
                            </Grid>
                            <Grid item xs={12}>
                                <Button type="submit" variant="contained">
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
