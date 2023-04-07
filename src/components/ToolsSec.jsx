import React from 'react'

export default function ToolsSec() {
    return (
        <>
            <div className='flex flex-col justify-center px-2 2xl:px-24 xl:px-24 lg:px-24 md:px-16 lg:w-1/2'>
                <div className='flex'>
                    <h1 className='text-2xl font-semibold text-[#545454] border-primary border-b-2 text-center'>
                        YOUR Business Transformation Toolbox
                    </h1>
                </div>
                <div className='p-5 flex flex-col gap-3 text-primary border-primary border mt-5 rounded-xl hover:bg-primary hover:text-white'>
                    {/* <h1 className='text-2xl font-bold flex-wrap'>BMC Module</h1> */}
                    <p className='font-semibold flex-wrap text-2xl'>FREE Tools to Support you in your business Transformation will be added here!</p>
                </div>
            </div>
            <div className='2xl:col-span-9 xl:col-span-9 lg:col-span-9 col-span-12'>
                <div className='p-5 flex flex-col justify-center items-center gap-1'>
                    <h1 className='text-3xl font-bold text-primary'>Here are your tools:</h1>
                    {/* <p className='font-semibold text-secondary text-xl'>Module Features Here:</p> */}
                    <ul className='list-disc text-secondary text-lg'>
                        <li className={`marker:text-primary before:contents-['_↗'] hover:text-primary`}>
                            Business Model Canvas (BMC)
                        </li>
                        <li className={`marker:text-primary before:contents-['_↗']`}>
                            More to Come...
                        </li>
                    </ul>
                    <p className='text-lg text-secondary font-bold mt-5'>Signup to save you BMC and stay up to date on future tools</p>
                </div>
            </div>
        </>
    )
}
