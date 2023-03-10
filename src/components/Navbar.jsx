import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav className="flex items-center gap-10 px-16 py-5 sticky top-0 bg-white h-28 shadow-md z-10">
                <div className="flex items-center gap-10 mr-auto">
                    <img
                        src={'../../assets/SteveOnDigital-Logo.png'}
                        alt="Steve On Digital"
                        className="w-44 h-24"
                    />
                    <ul className={`${isOpen ? 'block' : 'hidden'} lg:flex lg:items-center gap-10 lg:justify-between w-full lg:w-auto text-xl cursor-pointer font-medium`}>
                        <li className="hover:text-primary text-secondary">
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li className="hover:text-primary text-secondary group relative">
                            Tools
                            <ul className="absolute bg-white p-5 w-60 hidden group-hover:block">
                                <li className="hover:text-primary text-secondary">
                                    <NavLink to="BMC-Module">
                                        BMC Module System
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <button
                    className="lg:hidden block focus:outline-none"
                    onClick={toggleMenu}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>

                <div className="hidden gap-5 text-lg ml-auto lg:flex">
                    <button className="btn-primary">Signup</button>
                    <button className="btn-primary">Login</button>
                </div>
            </nav>
            <Outlet />
        </>
    )
}
