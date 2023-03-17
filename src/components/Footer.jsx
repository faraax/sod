import { FiFacebook, FiTwitter, FiLinkedin, FiYoutube, FiPhone } from 'react-icons/fi'
import useOAuth from '../Hooks/useOAuth'

export default function Footer() {
    const { handleOAuth, handleSignup } = useOAuth();
    return (
        <footer className='bg-primary'>
            <div className='flex gap-4 2xl:flex-row xl:flex-row lg:flex-row flex-col justify-between items-center 2xl:px-20 2xl:py-5 xl:px-20 xl:py-5 lg:px-20 lg:py-5 md:px-20 md:py-5 px-0 py-0'>
                <h1 className='2xl:text-6xl xl:text-6xl lg:text-6xl md:text-6xl text-4xl font-medium text-white'>
                    Ready to grow?
                    <span className='font-bold'> Get Started Now!</span>
                </h1>
                <div className="flex gap-5 text-xl items-center justify-center">
                    <button className="btn-primary bg-white text-primary hover:text-secondary hover:bg-white text-center font-bold" onClick={handleSignup}>Signup</button>
                    <button className="btn-primary bg-white text-primary hover:text-secondary hover:bg-white text-center font-bold" onClick={handleOAuth}>Login</button>
                </div>
            </div>
            <div className='grid grid-cols-6 bg-[#F2F4F8] min-h-96 px-24 py-5'>
                <div className='flex flex-col justify-between gap-y-2  mb-7'>
                    <div>
                        <img
                            src={'../../assets/FooterLogo.png'}
                            alt="Steve On Digital"
                            className="w-80 h-48" />
                        <p className='text-xs w-2/3 text-justify text-secondary'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>
                <div className='col-start-4 col-span-4 flex items-center'>
                    {/* <div className='grid grid-cols-2 text-2xl font-medium gap-x-16 gap-y-7 text-secondary'>
                        <h1 className='hover:text-primary transition-all cursor-pointer'>Tools</h1>
                        <h1 className='hover:text-primary transition-all cursor-pointer'>Contact Us</h1>
                        <h1 className='hover:text-primary transition-all cursor-pointer'>BMC Module</h1>
                        <h1 className='hover:text-primary transition-all cursor-pointer'>About US</h1>
                    </div> */}
                    <div className='flex gap-5 text-3xl text-secondary'>
                        <span className='bg-white shadow-xl flex items-center justify-center rounded-full p-2 hover:text-primary transition-all cursor-pointer'>
                            <FiFacebook />
                        </span>
                        <span className='bg-white shadow-xl flex items-center justify-center rounded-full p-2 hover:text-primary transition-all cursor-pointer'>
                            <FiTwitter />
                        </span>
                        <span className='bg-white shadow-xl flex items-center justify-center rounded-full p-2 hover:text-primary transition-all cursor-pointer'>
                            <FiLinkedin />
                        </span>
                        <span className='bg-white shadow-xl flex items-center justify-center rounded-full p-2 hover:text-primary transition-all cursor-pointer'>
                            <FiYoutube />
                        </span>
                        <span title='0XXXXXXXXX'
                            className='bg-white shadow-xl flex items-center justify-center rounded-full p-2 hover:text-primary transition-all cursor-pointer'>
                            <FiPhone />
                        </span>
                    </div>
                </div>
            </div>
            <div className='flex justify-between items-center px-24 py-5'>
                <p className='text-lg font-medium text-white'>
                    © 2023 BMC.  All Rights Reserved.
                </p>
                <div className="flex gap-5 text-xl items-center justify-center pt-5">
                    <p className='text-lg font-medium text-white'>Privacy Policy</p>
                    <p className='text-lg font-medium text-white'>Terms of Service</p>
                </div>
            </div>
        </footer>
    )
}
