'use client';

import { HiMenuAlt3 } from 'react-icons/hi';
import { Button } from '../ui/button';
import Link from 'next/link';
import { IoIosLogOut } from 'react-icons/io';
import { useEffect, useState } from 'react';
import { ModeToggle } from './mode-toggle';
import Image from 'next/image';

const navigation = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
];

const Navbar = () => {

    const user = "shivaji";
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [mobileMenuOpen]);

    return (
        <header className="fixed inset-x-0 top-0 z-50 border-b-2 bg-white">
            <nav aria-label="Global" className="mx-auto max-w-7xl flex items-center justify-between p-5 lg:px-8">
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <Image
                            height={80}
                            width={80}
                            alt="gdsc-logo"
                            src="/gdsc_black.png"
                            className="h-6 w-auto"
                        />
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    >
                        <span className="sr-only">Open main menu</span>
                        <HiMenuAlt3 className='h-6 w-6' />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item) => (
                        <Link key={item.name} href={item.href} className="text-md font-semibold leading-6 text-gray-900">
                            {item.name}
                        </Link>
                    ))}
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-4">
                    <ModeToggle />
                    <Button variant="outline">Sign in</Button>
                </div>
            </nav>

            {mobileMenuOpen && (
                <div
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="hide-scrollbar lg:hidden fixed inset-0 bg-opacity-30 backdrop-blur z-10"
                >
                    <aside className="flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l">
                        <Link href='/' className="flex items-center space-x-2">
                            <img className="w-auto h-6 sm:h-6" src="/gdsc_black.png" alt="" />
                        </Link>

                        <div className="flex flex-col justify-between flex-1 mt-6">
                            <nav>
                                <hr className="my-4 border-gray-200 " />

                                <Link href="/" className={`flex items-center px-4 py-2 rounded-md ${location.pathname === "/" ? "text-gray-700 bg-gray-100" : "text-gray-600 transition-colors duration-300 transform hover:bg-gray-100 hover:text-gray-700"}`}>
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17"
                                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>

                                    <span className="mx-4 font-medium">Home</span>
                                </Link>

                                <Link href="/plans" className={`flex items-center px-4 py-2 mt-5 rounded-md ${location.pathname === "/plans" ? "text-gray-700 bg-gray-100" : "text-gray-600 transition-colors duration-300 transform hover:bg-gray-100 hover:text-gray-700"}`}>
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>

                                    <span className="mx-4 font-medium">Pricing</span>
                                </Link>

                                <Link href="/about" className={`flex items-center px-4 py-2 mt-5 rounded-md ${location.pathname === "/about" ? "text-gray-700 bg-gray-100" : "text-gray-600 transition-colors duration-300 transform hover:bg-gray-100 hover:text-gray-700"}`}>
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15 5V7M15 11V13M15 17V19M5 5C3.89543 5 3 5.89543 3 7V10C4.10457 10 5 10.8954 5 12C5 13.1046 4.10457 14 3 14V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V14C19.8954 14 19 13.1046 19 12C19 10.8954 19.8954 10 21 10V7C21 5.89543 20.1046 5 19 5H5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>

                                    <span className="mx-4 font-medium">About Us</span>
                                </Link>

                                <Link href="/contact" className={`flex items-center px-4 py-2 mt-5 rounded-md ${location.pathname === "/contact" ? "text-gray-700 bg-gray-100" : "text-gray-600 transition-colors duration-300 transform hover:bg-gray-100 hover:text-gray-700"}`}>
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.3246 4.31731C10.751 2.5609 13.249 2.5609 13.6754 4.31731C13.9508 5.45193 15.2507 5.99038 16.2478 5.38285C17.7913 4.44239 19.5576 6.2087 18.6172 7.75218C18.0096 8.74925 18.5481 10.0492 19.6827 10.3246C21.4391 10.751 21.4391 13.249 19.6827 13.6754C18.5481 13.9508 18.0096 15.2507 18.6172 16.2478C19.5576 17.7913 17.7913 19.5576 16.2478 18.6172C15.2507 18.0096 13.9508 18.5481 13.6754 19.6827C13.249 21.4391 10.751 21.4391 10.3246 19.6827C10.0492 18.5481 8.74926 18.0096 7.75219 18.6172C6.2087 19.5576 4.44239 17.7913 5.38285 16.2478C5.99038 15.2507 5.45193 13.9508 4.31731 13.6754C2.5609 13.249 2.5609 10.751 4.31731 10.3246C5.45193 10.0492 5.99037 8.74926 5.38285 7.75218C4.44239 6.2087 6.2087 4.44239 7.75219 5.38285C8.74926 5.99037 10.0492 5.45193 10.3246 4.31731Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>

                                    <span className="mx-4 font-medium">Contact</span>
                                </Link>

                                {user && (
                                    <>
                                        <hr className="my-6 border-gray-200 dark:border-gray-600" />

                                        <Link href="/dashboard" className={`flex items-center px-4 py-2 mt-5 rounded-md ${location.pathname === "/dashboard" ? "text-gray-700 bg-gray-100" : "text-gray-600 transition-colors duration-300 transform hover:bg-gray-100 hover:text-gray-700"}`}>
                                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M15 5V7M15 11V13M15 17V19M5 5C3.89543 5 3 5.89543 3 7V10C4.10457 10 5 10.8954 5 12C5 13.1046 4.10457 14 3 14V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V14C19.8954 14 19 13.1046 19 12C19 10.8954 19.8954 10 21 10V7C21 5.89543 20.1046 5 19 5H5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>

                                            <span className="mx-4 font-medium">Dashboard</span>
                                        </Link>

                                        <Link href="/billing" className={`flex items-center px-4 py-2 mt-5 rounded-md ${location.pathname === "/billing" ? "text-gray-700 bg-gray-100" : "text-gray-600 transition-colors duration-300 transform hover:bg-gray-100 hover:text-gray-700"}`}>
                                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M15 5V7M15 11V13M15 17V19M5 5C3.89543 5 3 5.89543 3 7V10C4.10457 10 5 10.8954 5 12C5 13.1046 4.10457 14 3 14V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V14C19.8954 14 19 13.1046 19 12C19 10.8954 19.8954 10 21 10V7C21 5.89543 20.1046 5 19 5H5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>

                                            <span className="mx-4 font-medium">Billing</span>
                                        </Link>
                                    </>
                                )}
                            </nav>

                            {user ? (
                                <div className="flex items-center justify-between px-4 -mx-2">
                                    <Link href="/profile" className='flex items-center'>
                                        <img className='rounded-full h-10 w-10' src="https://github.com/shadcn.png" alt="avatar" />
                                        <span className="mx-2 font-medium text-gray-800 dark:text-gray-200">John Doe</span>
                                    </Link>
                                    <IoIosLogOut onClick={() => {}} className="object-cover mx-2 rounded-full h-6 w-6" />
                                </div>
                            ) : (
                                <Link href="/login" className="flex items-center px-4 py-2 rounded-md bg-gray-800 text-gray-200">
                                    Login
                                </Link>
                            )}
                        </div>
                    </aside>
                </div>
            )}
        </header>
    )
}

export default Navbar