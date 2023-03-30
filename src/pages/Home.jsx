import Footer from '../components/Footer'
import Hero from '../components/Hero'
import ToolsSec from '../components/ToolsSec'

export default function Home() {
    return (
        <>
            <Hero />
            <div className='flex gap-5 my-10 px-10 2xl:px-24 xl:px-24 lg:px-24 md:px-16 flex-col 2xl:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col xs:flex-col'>
                <ToolsSec />
            </div>
            <Footer />
        </>
    )
}
