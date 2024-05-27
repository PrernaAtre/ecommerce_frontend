import React, { useState } from 'react';
import { Modal } from 'antd';
import { useFormik } from "formik";
import { Button, Grid, TextField } from '@mui/material';
import { useLoginForm } from './hook/useLoginForm';
import { JobRole } from './schema/loginSchema';

const LoginModal: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedRole, setSelectedRole] = useState<JobRole | null>(null);
    const [email, setEmail] = useState<String>("");
    const [password, setPassword] = useState<String>("");
    const {handleSubmit, initialValues, validationSchema} = useLoginForm();
    const formik = useFormik({
        initialValues : { ...initialValues, role: selectedRole },
        validationSchema,
        onSubmit : (values) => {
            console.log("values========", values);
            handleSubmit(values)
        }
    })

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
        <Button onClick={showModal} style={{ borderRadius: '9999px', backgroundColor:'green', color:'white', width:"30%"}}>Login</Button>
            <Modal open={isModalOpen} maskClosable={true} onCancel={handleCancel} footer={null}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                    <Button
                        onClick={() => handleRoleSelect(JobRole.JobSeeker)}
                        style={{
                            backgroundColor: selectedRole === JobRole.JobSeeker ? 'white' : 'green',
                            color: selectedRole === JobRole.JobSeeker ? 'green' : 'white',
                            borderRadius: '9999px',
                            marginRight: '10px'
                        }}
                    >
                        Job Seeker
                    </Button>
                    <Button
                        onClick={() => handleRoleSelect(JobRole.JobProvider)}
                        style={{
                            backgroundColor: selectedRole === JobRole.JobProvider ? 'white' : 'green',
                            color: selectedRole === JobRole.JobProvider ? 'green' : 'white',
                            borderRadius: '9999px'
                        }}
                    >
                        Job Provider
                    </Button>
                </div>
                <form onSubmit={formik.handleSubmit}>
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
                            <Button type="submit" variant="contained">
                                Login
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Modal>
        </>
    );
};

export default LoginModal;