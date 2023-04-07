import { FiFacebook, FiTwitter, FiLinkedin, FiYoutube, FiInstagram } from 'react-icons/fi'
import { TfiWorld } from 'react-icons/tfi'
import useOAuth from '../Hooks/useOAuth'
import { useGlobalState } from '../Hooks/useGlobalState';

export default function Footer() {
    const { handleOAuth, handleSignup } = useOAuth();
    const { user } = useGlobalState();
    return (
        <footer className='bg-primary overflow-hidden'>
            {
                !user && (
                    <div className='flex gap-4 2xl:flex-row xl:flex-row lg:flex-row flex-col justify-between items-center 2xl:px-20 2xl:py-5 xl:px-20 xl:py-5 lg:px-20 lg:py-5 md:px-20 md:py-5 px-0 py-5'>
                        <h1 className='2xl:text-6xl xl:text-6xl lg:text-6xl md:text-6xl text-4xl font-medium text-white text-center'>
                            Start YOUR transformation now!
                            {/* <span className='font-bold'> Get Started Now!</span> */}
                        </h1>
                        <div className="flex gap-5 text-xl items-center justify-center">
                            <button className="btn-primary bg-white text-primary hover:text-secondary hover:bg-white text-center font-bold" onClick={handleSignup}>Signup</button>
                            <button className="btn-primary bg-white text-primary hover:text-secondary hover:bg-white text-center font-bold" onClick={handleOAuth}>Login</button>
                        </div>
                    </div>
                )
            }
            <div className='grid grid-cols-1 2xl:grid-cols-6 xl:grid-cols-6 lg:grid-cols-6 md:grid-cols-1 bg-[#F2F4F8] min-h-96 px-16 py-5'>
                <div className='gap-y-2 col-span-3 flex 2xl:flex xl:flex lg:flex md:hidden sm:hidden xs:hidden'>
                    <div className='flex items-center justify-center flex-col'>
                        <img
                            src={'../../assets/FooterLogo.png'}
                            alt="Steve On Digital"
                            className="w-60 h-28 2xl:w-80 2xl:h-48 xl:w-80 xl:h-48 lg:w-80 lg:h-48 md:w-60 md:h-28" />
                        <p className='text-base font-bold text-center text-secondary mr-7'>
                            Business Transformation Digitally
                        </p>
                    </div>
                </div>
                <div className='col-span-3 flex items-center justify-center gap-5 flex-col 2xl:flex xl:flex lg:flex md:hidden sm:hidden xs:hidden relative'>
                    <div className='flex gap-5 text-3xl text-secondary'>
                        <a href="https://www.facebook.com/steveondigital/" target="_blank" rel="noopener noreferrer">
                            <span className='bg-white shadow-xl flex items-center justify-center rounded-full p-2 hover:text-primary transition-all cursor-pointer'>
                                <FiFacebook />
                            </span>
                        </a>
                        <a href="https://twitter.com/SteveOnDigital1" target="_blank" rel="noopener noreferrer">
                            <span className='bg-white shadow-xl flex items-center justify-center rounded-full p-2 hover:text-primary transition-all cursor-pointer'>
                                <FiTwitter />
                            </span>
                        </a>
                        <a href="https://www.linkedin.com/company/steveondigital-digital-transformation-simplified/" target="_blank" rel="noopener noreferrer">
                            <span className='bg-white shadow-xl flex items-center justify-center rounded-full p-2 hover:text-primary transition-all cursor-pointer'>
                                <FiLinkedin />
                            </span>
                        </a>
                        <a href="https://www.youtube.com/@steveondigital" target="_blank" rel="noopener noreferrer">
                            <span className='bg-white shadow-xl flex items-center justify-center rounded-full p-2 hover:text-primary transition-all cursor-pointer'>
                                <FiYoutube />
                            </span>
                        </a>
                        <a href="https://www.instagram.com/steveondigital/" target="_blank" rel="noopener noreferrer">
                            <span className='bg-white shadow-xl flex items-center justify-center rounded-full p-2 hover:text-primary transition-all cursor-pointer'>
                                <FiInstagram />
                            </span>
                        </a>
                        <a href="https://steveondigital.com/" target="_blank" rel="noopener noreferrer">
                            <span className='bg-white shadow-xl flex items-center justify-center rounded-full p-2 hover:text-primary transition-all cursor-pointer'>
                                <TfiWorld />
                            </span>
                        </a>
                    </div>
                    <img
                        src={'../../assets/Steve - Black Shirt.png'}
                        alt="Steve On Digital"
                        className="h-64 absolute right-0 footer-img:-right-10 btn:-right-24 lg:-right-20"
                    />
                    <div className='flex flex-col'>
                        <h2 className='text-end text-2xl font-bold'>Steve Johnston</h2>
                        <p className='text-lg'>Founder of SteveOnDigital.com</p>
                    </div>
                </div>
                <div className='hidden 2xl:hidden xl:hidden lg:hidden md:flex sm:flex xs:flex items-center justify-center flex-col gap-5'>
                    <img
                        src={'../../assets/FooterLogo.png'}
                        alt="Steve On Digital"
                        className="w-80 h-48" />
                    <p className='text-xs w-2/3 text-center text-secondary'>
                        test
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <div className='flex gap-5 text-3xl text-secondary'>
                        <a href="https://www.facebook.com/steveondigital/" target="_blank" rel="noopener noreferrer">
                            <span className='bg-white shadow-xl flex items-center justify-center rounded-full p-2 hover:text-primary transition-all cursor-pointer'>
                                <FiFacebook />
                            </span>
                        </a>
                        <a href="https://twitter.com/SteveOnDigital1" target="_blank" rel="noopener noreferrer">
                            <span className='bg-white shadow-xl flex items-center justify-center rounded-full p-2 hover:text-primary transition-all cursor-pointer'>
                                <FiTwitter />
                            </span>
                        </a>
                        <a href="https://www.linkedin.com/company/steveondigital-digital-transformation-simplified/" target="_blank" rel="noopener noreferrer">
                            <span className='bg-white shadow-xl flex items-center justify-center rounded-full p-2 hover:text-primary transition-all cursor-pointer'>
                                <FiLinkedin />
                            </span>
                        </a>
                        <a href="https://www.youtube.com/@steveondigital" target="_blank" rel="noopener noreferrer">
                            <span className='bg-white shadow-xl flex items-center justify-center rounded-full p-2 hover:text-primary transition-all cursor-pointer'>
                                <FiYoutube />
                            </span>
                        </a>
                        <a href="https://www.instagram.com/steveondigital/" target="_blank" rel="noopener noreferrer">
                            <span className='bg-white shadow-xl flex items-center justify-center rounded-full p-2 hover:text-primary transition-all cursor-pointer'>
                                <FiInstagram />
                            </span>
                        </a>
                        <a href="https://steveondigital.com/" target="_blank" rel="noopener noreferrer">
                            <span className='bg-white shadow-xl flex items-center justify-center rounded-full p-2 hover:text-primary transition-all cursor-pointer'>
                                <TfiWorld />
                            </span>
                        </a>
                    </div>
                </div>
            </div>
            <div className='flex justify-between items-center px-16 py-5 flex-row 2xl:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col xs:flex-col'>
                {/* <div className='flex gap-5 text-xl items-center justify-center'> */}
                <p className='text-lg font-medium text-white'>
                    © 2023 StemJee Inc. All Rights Reserved.
                </p>
                {/* </div> */}
                {/* <div className="flex gap-5 text-xl items-center justify-center">
                    <p className='text-lg font-medium text-white'>Privacy Policy</p>
                    <p className='text-lg font-medium text-white'>Terms of Service</p>
                </div> */}
            </div>
        </footer >
    )
}
