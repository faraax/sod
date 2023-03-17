import useOAuth from '../Hooks/useOAuth'

export default function Hero() {
    const { handleOAuth, handleSignup } = useOAuth();
    return (
        <div className="bg-cover bg-center h-screen flex gap-5 flex-col justify-center items-center hero_sec bg-blue-200">
            <h1 className="2xl:text-6xl xl:text-6xl lg:text-6xl md:text-6xl text-4xl font-bold text-white mb-4 text-center leading-tight">
                All Tools For Your Need!
                <br />
                Get yourself a free trial by signing up now!
            </h1>
            <div className="border-white border w-1/3" />
            <div className="flex gap-5 text-xl items-center justify-center pt-5">
                <button className="btn-primary bg-white text-primary hover:text-secondary hover:bg-white text-center font-bold" onClick={handleSignup}>Signup</button>
                <button className="btn-primary bg-white text-primary hover:text-secondary hover:bg-white text-center font-bold" onClick={handleOAuth}>Login</button>
            </div>
        </div>
    )
}
