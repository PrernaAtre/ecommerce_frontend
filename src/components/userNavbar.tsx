"use client"
import useLoginModal from '@/hooks/useLogin';
import LoginModal from '@/modals/loginModal';
import { Button } from '@mui/material';
import Link from 'next/link';
import React, { useState } from 'react';

const UserNavbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState<Boolean>(false);
    const loginModal = useLoginModal();
    return (
        <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
            <a href="index.html" className="navbar-brand d-flex align-items-center text-center py-0 px-4 px-lg-5">
                <h1 className="m-0 text-primary">JobEntry</h1>
            </a>
            <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="ml-[45%]" id="navbarCollapse">
                <div className="navbar-nav ms-auto p-4 p-lg-0">
                    <Link href="index.html" className="nav-item nav-link active">Home</Link>
                    <Link href="about.html" className="nav-item nav-link">About</Link>
                    <div className="nav-item dropdown">
                        <Link href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Jobs</Link>
                        <div className="dropdown-menu rounded-0 m-0">
                            <Link href="job-list.html" className="dropdown-item">Job List</Link>
                            <Link href="job-detail.html" className="dropdown-item">Job Detail</Link>
                        </div>
                    </div>
                    <div className="nav-item dropdown">
                        <Link href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</Link>
                        <div className="dropdown-menu rounded-0 m-0">
                            <Link href="category.html" className="dropdown-item">Job Category</Link>
                            <Link href="testimonial.html" className="dropdown-item">Testimonial</Link>
                        </div>
                    </div>
                    <Link href="contact.html" className="nav-item nav-link">Contact</Link>
                </div>
            </div>

            <LoginModal />
        </nav>
    );
}

export default UserNavbar;
