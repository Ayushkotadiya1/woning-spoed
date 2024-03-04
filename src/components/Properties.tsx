"use client"
import { PropertySwiperData } from '@/utils/constant';
import Image from 'next/image'
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
// import { Swiper as SwiperType } from "swiper";
// import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Properties = () => {
    const [swiper, setSwiper] = useState<SwiperType | null>(null);
    return (
        <div className='bg-[#f9f8ff] pt-[120px]'>
            <div className='container mx-auto'>
                <div className='flex flex-col gap-[18px]'>
                    <div className='flex flex-col gap-[25px] max-w-[450px]'>
                        <span className='text-sm text-gray-500 font-bold'>Properties for you</span>
                        <span className='text-[#2e2d4b] text-[38px] font-bold'>Explore Our Popular Property Listings</span>
                    </div>
                    <div className='flex justify-between'>
                        <div className='text-sm text-gray-500 max-w-[450px]'>
                            <span>Welcome to the exclusive property listing that offers a perfact home for you to rent at reasonable pricing.</span>
                        </div>
                        <div className='flex gap-2'>
                            <div onClick={() => swiper?.slidePrev()}>
                                <Image
                                    src={"/svg/leftarrow.svg"}
                                    width={40}
                                    height={40}
                                    alt="Line"
                                />
                            </div>
                            <div onClick={() => swiper?.slideNext()}>
                                <Image
                                    src={"/svg/rightarrow.svg"}
                                    width={40}
                                    height={40}
                                    alt="Line"
                                />
                            </div>
                        </div>
                    </div>
                    <Swiper
                        spaceBetween={30}
                        speed={1000}
                        slidesPerView={4}
                        onSwiper={(swiper) => setSwiper(swiper)}
                        className="h-full w-full rounded-lg mt-[35px]"
                        effect="slide"
                        draggable={true}
                    >
                        {PropertySwiperData.map((item, index) => (
                            <SwiperSlide key={index} className="flex flex-col items-center text-black">
                                <div className="rounded-[12px]">
                                    <Image
                                        alt={item.alt}
                                        src={item.img}
                                        width={400}
                                        height={0}
                                        className="rounded-[40px] h-[360px]"
                                    />
                                    <div className='flex flex-col gap-[13px] pt-[15px] mx-[25px]'>
                                        <div className='flex flex-col gap-[4px]'>
                                            <div className='flex justify-between items-end'>
                                                <span className='text-black font-bold text-[18px]'>$ {item.price}</span>
                                                <span className='text-blue-500 text-sm'>view more</span>
                                            </div>
                                            <div className='text-black text-[18px]'>
                                                <span>{item.description}</span>
                                            </div>
                                        </div>
                                        <div className='flex text-sm gap-[30px]'>
                                            <div className='flex gap-3'>
                                                <svg xmlns="http://www.w3.org/2000/svg" className='w-5' viewBox="0 0 640 512"><path d="M32 32c17.7 0 32 14.3 32 32V320H288V160c0-17.7 14.3-32 32-32H544c53 0 96 43 96 96V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V416H352 320 64v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V64C0 46.3 14.3 32 32 32zm144 96a80 80 0 1 1 0 160 80 80 0 1 1 0-160z" /></svg>
                                                <span>{item.beds} Beds</span>
                                            </div>
                                            <div className='flex gap-3'>
                                                <svg xmlns="http://www.w3.org/2000/svg" className='w-5' viewBox="0 0 512 512"><path d="M96 77.3c0-7.3 5.9-13.3 13.3-13.3c3.5 0 6.9 1.4 9.4 3.9l14.9 14.9C130 91.8 128 101.7 128 112c0 19.9 7.2 38 19.2 52c-5.3 9.2-4 21.1 3.8 29c9.4 9.4 24.6 9.4 33.9 0L289 89c9.4-9.4 9.4-24.6 0-33.9c-7.9-7.9-19.8-9.1-29-3.8C246 39.2 227.9 32 208 32c-10.3 0-20.2 2-29.2 5.5L163.9 22.6C149.4 8.1 129.7 0 109.3 0C66.6 0 32 34.6 32 77.3V256c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H96V77.3zM32 352v16c0 28.4 12.4 54 32 71.6V480c0 17.7 14.3 32 32 32s32-14.3 32-32V464H384v16c0 17.7 14.3 32 32 32s32-14.3 32-32V439.6c19.6-17.6 32-43.1 32-71.6V352H32z" /></svg>
                                                <span>{item.baths} Baths</span>
                                            </div>
                                            <div className='flex gap-3'>
                                                <svg xmlns="http://www.w3.org/2000/svg" className='w-5' viewBox="0 0 448 512"><path d="M64 128V96H192l0 128H176c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H256l0-128H384v32c0 17.7 14.3 32 32 32s32-14.3 32-32V80c0-26.5-21.5-48-48-48H224 48C21.5 32 0 53.5 0 80v48c0 17.7 14.3 32 32 32s32-14.3 32-32zM9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3l64 64c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V416H320v32c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l64-64c12.5-12.5 12.5-32.8 0-45.3l-64-64c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6v32H128V320c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9l-64 64z" /></svg>
                                                <span>{item.sqft} sqft</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Properties
