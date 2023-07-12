import { TfiMicrosoftAlt } from 'react-icons/tfi'
import { FcGoogle } from 'react-icons/fc'
import { SlClose } from 'react-icons/sl'
import { AnimatePresence, motion } from 'framer-motion'
import useOAuth from "../../Hooks/useOAuth";
import { useEffect } from 'react';
import { redirect } from 'react-router-dom';
import { useGlobalState } from '../../Hooks/useGlobalState';
import Cookies from "js-cookie";



export default function Model({ ModelName, setIsModalOpen, setModalType }) {
    const { handleOAuth, handleSignup, microsoftLogin, microsoftSignup } = useOAuth();
    // const { user } = useGlobalState()

    useEffect(() => {
        const handleEsc = (event) => {
            if (event.keyCode === 27) {
                setIsModalOpen(false)
            }
        };
        window.addEventListener('keydown', handleEsc);
        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, [setIsModalOpen]);

    const handleGoogleAuth = () => {
        if (ModelName === 'Signup') {
            handleSignup()
        } else {
            handleOAuth()
            setIsModalOpen(false)
        }
    }

    const handleMicrosoftAuth = () => {
        if (ModelName === 'Signup') {
            microsoftSignup()
        } else {
            microsoftLogin(`${process.env.REACT_APP_API}/login`)
            setIsModalOpen(false)
        }
    }

    const handleCloseModal = () => {
        setIsModalOpen(false)
        setModalType(null)
    }
    return (
        <>
            {/* component */}
            <AnimatePresence>
                <motion.div
                    initial={{ opacity: 0, scale: 0.2 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.2 }}
                    className="fixed top-0 backdrop-blur-sm min-h-screen flex justify-center items-center min-w-full py-12 z-30">
                    <div className="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40 flex justify-center items-center ">
                        <div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
                            <div className="rounded-xl bg-white shadow-xl relative border border-primary">
                                <span
                                    onClick={handleCloseModal}
                                    className='absolute top-4 right-4 text-3xl cursor-pointer hover:text-primary font-bold'>
                                    <SlClose />
                                </span>
                                <div className="p-6 sm:p-16 overflow-visible">
                                    <div className="space-y-4">
                                        <img
                                            src="../../assets/SteveOnDigital-Logo.png"
                                            loading="lazy"
                                            className="w-40 mx-auto"
                                            alt="Steve On Digital logo"
                                        />
                                        <h2 className="mb-2 text-2xl text-secondary font-bold text-center">
                                            {ModelName} and unlock the best tools for your business.
                                        </h2>
                                    </div>
                                    <div className="mt-8 grid space-y-4 place-items-center">
                                        <button
                                            onClick={handleGoogleAuth}
                                            className="group w-full lg:w-80 h-12 px-6 border border-gray-300 rounded-full transition duration-300 hover:border-primary focus:bg-blue-50 active:bg-blue-100"
                                        >
                                            <div className="relative flex items-center space-x-4 justify-center">
                                                <FcGoogle className='text-2xl' />
                                                <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-primary sm:text-base">
                                                    {ModelName} with Google
                                                </span>
                                            </div>
                                        </button>
                                        <button
                                            onClick={handleMicrosoftAuth}
                                            className="group w-full lg:w-80 sm:w-full h-12 px-6 border border-gray-300 rounded-full transition duration-300 hover:border-primary focus:bg-blue-50 active:bg-blue-100"
                                        >
                                            <div className="relative flex items-center space-x-4 justify-center">
                                                <TfiMicrosoftAlt className='text-[#0078d4] text-2xl' />
                                                <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-primary sm:text-base">
                                                    {ModelName} with Microsoft
                                                </span>
                                            </div>
                                        </button>
                                    </div>
                                    <div className="mt-12 space-y-4 text-gray-600 text-center sm:-mb-8">
                                        <p className="text-xs">By proceeding, you agree to our <span className='font-bold'>Terms of Use</span> and confirm you have read our <span className='font-bold'>Privacy and Cookie Statement.</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </>

    )
}
