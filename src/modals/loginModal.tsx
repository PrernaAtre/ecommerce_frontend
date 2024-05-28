import React, { useState } from 'react';
import { Modal } from 'antd';
import { Button, Grid, TextField } from '@mui/material';

const LoginModal: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [email, setEmail] = useState<String>("");
    const [password, setPassword] = useState<String>("");

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    function handleSubmit(): void 
    {
        
    }

    return (
        <>
            <Button onClick={showModal} className="bg-green-500 text-white rounded-full hover:bg-green-700 px-8 py-[-20]">
                Login
            </Button>
            <Modal title="Login" open={isModalOpen} maskClosable={true} onCancel={handleCancel} footer={null}>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={4}>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                autoComplete="email"
                                autoFocus
                                onChange={(e) => setEmail(e.target.value)}
                                label="Your e-mail address"
                                placeholder="Your e-mail address"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                onChange={(e) => setPassword(e.target.value)}
                                label="Your password"
                                placeholder="Your password"
                                type="password"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button type="submit" variant="contained" color="primary">
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Modal>
        </>
    );
};

export default LoginModal;