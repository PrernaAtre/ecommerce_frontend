"use client"
import useLoginModal from '@/hooks/useLogin';
import Link from 'next/link';
import React, { useState } from 'react';
import LoginModal from "@/modules/auth/Login/loginModal"

const UserNavbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isJobsOpen, setIsJobsOpen] = useState<boolean>(false); // State for jobs dropdown
    const [isPagesOpen, setIsPagesOpen] = useState<boolean>(false); // State for pages dropdown

    return (
        <nav className="bg-white shadow-lg sticky top-0 z-50 h-[60px] pt-2">
            <div className="container mx-auto flex justify-between items-center">
                <a href="index.html" className="text-primary font-bold text-lg">JobEntry</a>
                <button
                    className="block lg:hidden focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
                <div className={`lg:flex flex-grow ${isOpen ? "block" : "hidden"}`} id="navbarCollapse">
                    <div className="flex flex-col lg:flex-row lg:ml-auto lg:space-x-8 items-center"> {/* Added 'items-center' class */}
                        <Link href="/landingPage" className="nav-item text-gray-700 hover:text-primary py-2 ">Home</Link>
                        <Link href="/about" className="nav-item text-gray-700 hover:text-primary py-2">About</Link>
                        <div className="nav-item dropdown relative" onClick={() => setIsJobsOpen(!isJobsOpen)}> {/* Added onClick handler */}
                        <a href="#" className="nav-link text-gray-700 hover:text-primary py-2">Jobs</a>
                            <div className={`dropdown-menu absolute bg-white rounded-md mt-2 w-40 ${isJobsOpen ? "block" : "hidden"}`}> {/* Used isJobsOpen state to toggle visibility */}
                                <Link href="job-list.html" className="dropdown-item text-gray-700 hover:text-primary py-2 block">Job List</Link>
                                <Link href="job-detail.html" className="dropdown-item text-gray-700 hover:text-primary py-2 block">Job Detail</Link>
                            </div>
                        </div>
                        <div className="nav-item dropdown relative" onClick={() => setIsPagesOpen(!isPagesOpen)}> {/* Added onClick handler */}
                            <Link href="#" className="nav-link text-gray-700 hover:text-primary py-2 ">Pages</Link>
                            <div className={`dropdown-menu absolute bg-white rounded-md mt-2 w-40 ${isPagesOpen ? "block" : "hidden"}`}> {/* Used isPagesOpen state to toggle visibility */}
                                <Link href="category.html" className="dropdown-item text-gray-700 hover:text-primary py-2 block">Job Category</Link>
                                <Link href="testimonial.html" className="dropdown-item text-gray-700 hover:text-primary py-2 block">Testimonial</Link>
                            </div>
                        </div>
                        <Link href="contact.html" className="nav-item text-gray-700 hover:text-primary py-2 px-4">Contact</Link>
                        <LoginModal />
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default UserNavbar;
