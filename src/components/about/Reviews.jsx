import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Mousewheel, Keyboard } from 'swiper/modules';

export default function App() {
    return (
        <div className='w-full h-[45vh] md:h-[60vh]'>
            <Swiper
                csmdode={true}
                navigation={true} // Enables navigation arrows
                mousewheel={true} // Allows mouse wheel control
                keyboard={true} // Allows keyboard control
                loop={true}
                modules={[Navigation, Mousewheel, Keyboard]}
                className="mySwiper"
                slidesPerView={3} // Default slides per view for large screens
                spaceBetween={30} // Default space between slides
                breakpoints={{
                    0: { // Mobile settings
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    640: { // Tablet settings
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: { // Desktop settings
                        slidesPerView: 3,
                        spaceBetween: 30,
                    }
                }}
            >
                {[0, 1, 2, 3, 4, 5, 6].map((_, i) => (
                    <SwiperSlide key={i}>
                        <div className='w-full h-full p-[5vw] md:p-[2vw] flex flex-col items-center justify-between'>
                            <div>
                                <span>
                                    <i className="ri-double-quotes-l mb-[2vw] md:mb-[1vw] text-[8vw] sm:text-[6vw] md:text-[3vw] inline-block text-white/30"></i>
                                </span>
                                <p className='font-[font1] text-[4vw] sm:text-[2vw] md:text-[1vw] lg:text-[1.2vw] text-white/60'>WineeMedia brought creativity and professionalism that elevated our marketing and deeply connected with our audience. We’re excited to work with them again.</p>
                            </div>
                            <div>
                                <h2 className='text-[4vw] sm:text-[1.8vw] md:text-[1.2vw] capitalize'>Mike Green</h2>
                                <h4 className='text-[3.5vw] sm:text-[1.5vw] md:text-[1vw] leading-none'>Manager at Comdic</h4>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
