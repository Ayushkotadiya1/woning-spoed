import Image from 'next/image';
import React from 'react'

const Navbar = () => {
    return (
        <div className='pt-[25px] bg-gradient-to-t from-[#d1dffe] to-[#f9f8ff]'>
            <div className='w-full flex justify-between items-center'>
                <div className='text-blue-500 ml-44 font-bold text-xl' >
                    <span>WoningSpoed</span>
                </div>
                <div className='flex gap-10 items-center mr-[48px]'>
                    <span className='text-black'>Rent out home for free</span>
                    <span className='text-black'>Find a home</span>
                    <div className='bg-blue-600 text-white px-[45px] py-[4px] flex items-center'>
                        <span className=''>Login</span>
                    </div>
                    <div className='rounded-full p-2 shadow-lg'>
                        <Image
                            src={"/images/worldwide.png"}
                            width={30}
                            height={30}
                            alt="globe"
                        />
                    </div>
                </div>
            </div>
            <div className='w-full flex flex-col items-center mt-[130px] gap-[30px]'>
                <div className='max-w-[650px] flex flex-col items-center gap-[25px] justify-center'>
                    <span className='text-gray-400 text-lg'>Get everything you need to pick the right agent.</span>
                    <p className='text-[45px] text-black font-bold rubik'>Your first and <span className='text-[45px] rubik font-bold text-blue-500'>last</span> stop for all rental properties in the area.</p>
                </div>
                <div className='text-black bg-white flex gap-[55px] rounded-[25px] items-center pl-[50px] pr-[15px] py-[15px]'>
                    <div className='flex gap-[20px]'>
                        <div>
                            <input type="text" className='outline-none pb-1 bg-none border-b w-[300px] border-gray-200 border-solid text-sm' placeholder='Search location e.g city or area' />
                        </div>
                        <div className='relative'>
                            <input type="text" className='pb-1 outline-none bg-none border-b border-gray-200 border-solid text-sm' placeholder='Price from' />
                            <Image
                                src={"/images/downarrow.png"}
                                width={30}
                                height={30}
                                alt="down arrow"
                                className='absolute top-0 right-0 text-white'
                            />
                        </div>
                        <div className='relative'>
                            <input type="text" className='outline-none pb-1 bg-none border-b border-gray-200 border-solid text-sm' placeholder='Price to' />
                            <Image
                                src={"/images/downarrow.png"}
                                width={30}
                                height={30}
                                alt="down arrow"
                                className='absolute top-0 right-0 text-white'
                            />
                        </div>
                    </div>
                    <div className='bg-blue-600 rounded-[15px] p-[15px]'>
                        <Image
                            src={"/images/searchicon.png"}
                            width={30}
                            height={30}
                            alt="search"
                        />
                    </div>
                </div>
                <div className=' bg-blue-600 px-[35px] py-[12px] flex items-center gap-3'>
                    <Image
                        src={"/images/play.png"}
                        width={20}
                        height={20}
                        alt="Line"
                        className=''
                    />
                    <button className='text-white font-medium text-[14px]'>Watch More</button>
                </div>
                <div>
                    <span className='text-sm text-gray-500 font-bold'>Create Search Agent</span>
                </div>
            </div>
            <div className='bg-[#2e2d4b] mt-[180px] grid grid-cols-4 w-full px-[200px] py-[110px]'>
                <div>
                    <Image
                        src={"/images/bedroom.jpg"}
                        width={350}
                        height={700}
                        alt="Line"
                        className='h-[508px] rounded-[30px]'
                    />
                </div>
                <div className='flex flex-col gap-2'>
                    <Image
                        src={"/images/bedroom.jpg"}
                        width={350}
                        height={115}
                        alt="Line"
                        className='rounded-[30px]'
                    />
                    <Image
                        src={"/images/bedroom.jpg"}
                        width={350}
                        height={115}
                        alt="Line"
                        className='rounded-[30px]'
                    />
                </div>
                <div className='col-span-2 flex flex-col gap-[70px] text-white'>
                    <div className='font-bold text-[50px]'>
                        <span>Your Trusted Partners in Rental Properties</span>
                    </div>
                    <div className='flex flex-col gap-[36px] text-gray-400 text-[18px]'>
                        <span>We are a top company providing services to our customers.</span>
                        <span>An excellent real estate professionals, integrity, in-depth community and market knowledge, marketing savvy, effective houses for you to rent</span>
                        <span>Whether you are finding a tenant for your home or finding A home for yourself to rent, we have paved the smoothest Process to do that for you. Let's contact.</span>
                        <button className='bg-blue-600 text-white font-medium text-[14px] w-[170px] px-[35px] py-[12px]'>Watch More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;