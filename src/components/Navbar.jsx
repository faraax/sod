import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { useGlobalState } from "../Hooks/useGlobalState";
import useOAuth from "../Hooks/useOAuth";
import { ToastContainer } from 'react-toastify';
import { FiLogOut } from 'react-icons/fi';
import 'react-toastify/dist/ReactToastify.css';


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { user } = useGlobalState();
    const { notify, notifyHome, handleLogout, handleOAuth, handleSignup } = useOAuth();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav className="flex items-center gap-10 px-2 2xl:px-24 xl:px-24 lg:px-24 md:px-16 py-5 sticky top-0 bg-white h-28 shadow-md z-10">
                <div className="flex items-center gap-10 mr-auto">
                    <Link to="/">
                        <img
                            src={'../../assets/SteveOnDigital-Logo.png'}
                            alt="Steve On Digital"
                            className="w-44 h-24 cursor-pointer"
                        />
                    </Link>
                    <ul className={`hidden lg:flex lg:items-center gap-10 lg:justify-between w-full lg:w-auto text-xl cursor-pointer font-medium`}>
                        <li className="hover:text-primary text-secondary" onClick={user ? notifyHome : null}>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li className="hover:text-primary text-secondary group relative">
                            Tools
                            <ul className="absolute bg-white p-5 w-60 hidden group-hover:block">
                                <li className="hover:text-primary text-secondary" onClick={!user ? notify : null}>
                                    <NavLink to="BMC-Module">
                                        BMC Module System
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="relative">
                    <button className="lg:hidden block focus:outline-none"
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
                    {
                        isOpen && (
                            <div className="absolute top-10 bg-white right-0 p-7 w-[250px] shadow-lg flex flex-col gap-5">
                                {
                                    user ? (
                                        <>
                                            <div className="flex gap-5">
                                                <img src={user.data.picture} alt="Profile" srcSet="" className="w-12 h-12 rounded-full" />
                                                <h2>{user.data.name}</h2>
                                            </div>
                                            <button className="btn-primary flex justify-center items-center gap-3" onClick={handleLogout}>
                                                <FiLogOut /> Logout
                                            </button>
                                        </>
                                    ) : (
                                        <ul className={`lg:flex lg:items-center gap-16 lg:justify-between w-full lg:w-auto text-xl cursor-pointer font-medium`}>
                                            <li className="hover:text-primary text-secondary" onClick={user ? notifyHome : null}>
                                                <NavLink to="/">Home</NavLink>
                                            </li>
                                            <li className="hover:text-primary text-secondary ">
                                                Tools
                                                <ul className="bg-white flex">
                                                    <li className="hover:text-primary text-secondary" onClick={!user ? notify : null}>
                                                        <NavLink to="BMC-Module">
                                                            BMC Module System
                                                        </NavLink>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    )
                                }
                            </div>
                        )
                    }
                </div>
                {
                    user && (
                        <div className="lg:flex hidden justify-center items-center gap-5">
                            <img src={user.data.picture} alt="Profile" srcSet="" className="w-12 h-12 rounded-full" />
                            <h2>Welcome : {user.data.name}</h2>
                            <button className="btn-primary flex justify-center items-center gap-3" onClick={handleLogout}>
                                <FiLogOut /> Logout
                            </button>
                        </div>
                    )
                }
                {/* {
                    user && <button className="btn-primary flex justify-center items-center gap-3" onClick={handleLogout}><FiLogOut /> Logout</button>
                } */}
                {
                    !user && (
                        <div className="hidden gap-5 text-lg ml-auto lg:flex">
                            <button className="btn-primary" onClick={handleSignup}>Signup</button>
                            <button className="btn-primary" onClick={handleOAuth}>Login</button>
                        </div>
                    )
                }
            </nav>
            <ToastContainer
                position="bottom-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                // pauseOnFocusLoss
                // draggable
                theme="colored"
            />
            <Outlet />
        </>
    )
}
