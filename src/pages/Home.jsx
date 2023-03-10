import Footer from '../components/Footer'
import Hero from '../components/Hero'
import ToolsSec from '../components/ToolsSec'

export default function Home() {
    return (
        <>
            <Hero />
            <div className='grid grid-cols-12 2xl:px-20 2xl:py-5 xl:px-20 xl:py-5 lg:px-20 lg:py-5 md:px-20 md:py-5 sm:px-20 sm:py-5 px-0 py-0 gap-x-10'>
                <div className='col-span-12 2xl:w-96 xl:w-96 flex justify-center items-center flex-col gap-3'>
                    <h1 className='text-3xl font-semibold text-[#545454]'>
                        We Provide Multiple Tools
                    </h1>
                    <div className='border-primary border-2 w-96' />
                </div>
                <ToolsSec />
            </div>
            <Footer />
        </>
    )
}
