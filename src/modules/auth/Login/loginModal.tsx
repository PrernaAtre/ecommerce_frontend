import React, { useState } from 'react';
import { Modal } from 'antd';
import { useFormik } from "formik";
import { Button, Grid, TextField } from '@mui/material';
import { useLoginForm } from './hook/useLoginForm';
import { JobRole } from './schema/loginSchema';

const LoginModal: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedRole, setSelectedRole] = useState<JobRole>(JobRole.JobSeeker); // Default selection
    const { handleSubmit, initialValues, validationSchema } = useLoginForm();
    const formik = useFormik({
        initialValues: { ...initialValues, role: selectedRole },
        validationSchema,
        onSubmit: (values) => {
            console.log("values========", values);
            handleSubmit(values, setIsModalOpen);
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
            <Button onClick={showModal} style={{ borderRadius: '9999px', backgroundColor: 'green', color: 'white', width: "30%" }}>Login</Button>
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
                            <Grid item xs={12}>
                                <TextField
                                    id="email"
                                    name="email"
                                    type="email"
                                    label="Email address"
                                    fullWidth
                                    autoComplete="email"
                                    autoFocus
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
                          
                            </Grid>
                            <Grid item xs={12}>
                                <Button type="submit" variant="contained" disabled={!(formik.isValid && formik.dirty)}>
                                    Login
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Modal>
        </>
    );
};

export default LoginModal;
