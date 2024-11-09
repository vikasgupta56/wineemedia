import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { FreeMode, Pagination } from 'swiper/modules';

export default function App() {
    return (
        <div className='w-full h-[35vh] sm:h-[45vh]'>
            <Swiper
                slidesPerView={3} // Default for larger screens
                spaceBetween={30}
                freeMode={true}
                pagination={{ clickable: true }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
                breakpoints={{
                    0: { // Mobile settings
                        slidesPerView: 1,
                        spaceBetween: 10
                    },
                    640: { // Larger screens (e.g., tablets)
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    1024: { // Desktop settings
                        slidesPerView: 3,
                        spaceBetween: 30
                    }
                }}
            >
                {[0, 1, 2, 3, 4, 5, 6].map((r, i) => (<div key={i}>
                    <SwiperSlide>
                        <div className='w-full h-full p-[2vw] flex flex-col items-center justify-between'>
                            <div>
                                <span><i class="ri-double-quotes-l mb-[2vw] sm:mb-[1vw]  text-[8vw] sm:text-[3vw] inline-block text-white/30"></i></span>
                                <p className='font-[font4] text-[3.5vw] sm:text-[.8vw] text-white/60'>The LuxeFrame team has brought their exceptional talent and charm to our properties. Their remarkable work resonated wonderfully with our audience and enhanced our marketing efforts. We eagerly anticipate their return.</p>
                            </div>
                            <div>
                                <h2 className='text-[4vw] smtext-[1.2vw] capitalize'>mike green</h2>
                                <h4 className='text-[3vw] sm:text-[1vw] leading-none'>manager at cosmic</h4>
                            </div>
                        </div>
                    </SwiperSlide>
                </div>))}
            </Swiper>
        </div>
    );
}
