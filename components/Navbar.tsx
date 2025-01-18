"use client";
import Image from 'next/image';
import React, {useState} from 'react';
import NavButton from './NavButton';
import Link from 'next/link';

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div className='w-full min-h-[11vh] bg-[#f4f4f4] top-0 shadow-lg fixed rounded-b-2xl'>
            <div className='flex w-full items-center'>
                <div className='w-1/2 h-[11vh] overflow-hidden flex items-center'>
                <Image src='/ivyprojectsLogo.JPG' alt='Logo' width={70} height={70} />
                </div>
                <div className='w-1/2 h-full flex items-center justify-end pr-4'>
                    <NavButton handleToggle={handleToggle} isOpen={isOpen} />
                </div>
            </div>
            {isOpen && 
                <div className='w-full h-[20vh] px-[5vw] justify-center space-y-2 flex flex-col'>
                    <Link 
                        href={'/Gallery'} 
                        className="px-[2vw] rounded-md bg-[#c6a48e] text-[#f6ece1] transition-all duration-300"
                    >
                        Gallery
                    </Link>
                    <Link 
                        href={'/AboutUs'} 
                        className="px-[2vw] rounded-md bg-[#c6a48e] text-[#f6ece1] transition-all duration-300"
                    >
                        About Us
                    </Link>
                    <Link 
                        href={'/How'} 
                        className="px-[2vw] rounded-md bg-[#c6a48e] text-[#f6ece1] transition-all duration-300"
                    >
                        How It Works
                    </Link>
                </div>
            }
        </div>
    );
};

export default Navbar;