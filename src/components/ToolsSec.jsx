import React from 'react'

export default function ToolsSec() {
    return (
        <>
            <div className='flex flex-col justify-center px-2 2xl:px-24 xl:px-24 lg:px-24 md:px-16'>
                <div className='flex'>
                    <h1 className='text-3xl font-semibold text-[#545454] border-primary border-b-2 text-center'>
                        We Provide Multiple Tools
                    </h1>
                </div>
                <div className='p-5 flex flex-col gap-3 text-primary border-primary border mt-5 rounded-xl hover:bg-primary hover:text-white'>
                    <h1 className='text-2xl font-bold flex-wrap'>BMC Module</h1>
                    <p className='font-semibold flex-wrap'>Create your own BMC business canvas with our premium online tool specializes in business module planning</p>
                </div>
            </div>
            <div className='2xl:col-span-9 xl:col-span-9 lg:col-span-9 col-span-12'>
                <div className='p-5 flex flex-col gap-1'>
                    <h1 className='text-3xl font-bold text-primary'>BMC Module System</h1>
                    <p className='font-semibold text-secondary text-xl'>Module Features Here:</p>
                    <ul className='list-disc text-secondary text-lg'>
                        <li className={`marker:text-primary before:contents-['_↗']`}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quis minus modi temporibus. Nobis impedit velit, praesentium id incidunt quam.
                        </li>
                        <li className={`marker:text-primary before:contents-['_↗']`}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quis minus modi temporibus. Nobis impedit velit, praesentium id incidunt quam.
                        </li>
                        <li className={`marker:text-primary before:contents-['_↗']`}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quis minus modi temporibus. Nobis impedit velit, praesentium id incidunt quam.
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
