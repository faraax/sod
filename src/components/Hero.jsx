import { useState } from 'react';
// import useOAuth from '../Hooks/useOAuth'
import Model from './Login/Model';

export default function Hero() {
    // const { handleOAuth, handleSignup } = useOAuth();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalType, setModalType] = useState(null);

    const handleModal = (type) => {
        setIsModalOpen(!isModalOpen)
        setModalType(type)
    }
    

    return (
        <>
            <div className="bg-cover bg-center h-screen flex gap-5 flex-col justify-center items-center hero_sec bg-blue-200 px-2 2xl:px-24 xl:px-24 lg:px-24 md:px-16">
                <h1 className="2xl:text-6xl xl:text-6xl lg:text-6xl md:text-6xl text-4xl font-bold text-white mb-4 text-center leading-tight">
                    All Tools For Your Need!
                    <br />
                    Get yourself a free trial by signing up now!
                </h1>
                <div className="border-white border w-1/3" />
                <div className="flex gap-5 text-xl items-center justify-center pt-5">
                    <button className="btn-primary bg-white text-primary hover:text-secondary hover:bg-white text-center font-bold" onClick={() => handleModal('Signup')}>Signup</button>
                    <button className="btn-primary bg-white text-primary hover:text-secondary hover:bg-white text-center font-bold" onClick={() => handleModal('Login')}>Login</button>
                </div>
            </div>
            {
                isModalOpen && <Model ModelName={modalType} setIsModalOpen={setIsModalOpen} setModalType={setModalType} />
            }
        </>
    )
}
