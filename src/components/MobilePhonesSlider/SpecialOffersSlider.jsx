import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { LuChevronRight, LuChevronLeft, LuGift } from 'react-icons/lu';
import OfferCard from './OfferCard';

import 'swiper/css';
import 'swiper/css/navigation';

export default function SpecialOffersSlider({ products }) {
  return (
    <div className="w-full max-w-7xl mx-auto py-6 px-3 sm:px-4 overflow-hidden" dir="rtl">
      
      <div className="relative border-[1.5px] border-[#ef4056] rounded-2xl p-3 md:p-4 bg-white flex flex-col lg:flex-row items-stretch group">
        
        {/* ================= بخش تایمر (اسلاید ثابت) ================= */}
        <div className="flex lg:flex-col items-center justify-between w-full lg:w-[170px] lg:min-w-[170px] lg:border-l lg:border-gray-100 lg:pl-4 pb-2 mb-3 lg:pb-0 lg:mb-0 border-b border-gray-100">
          <div className="flex items-center gap-1.5 lg:flex-col lg:gap-0">
            <h2 className="text-[#ef4056] text-sm md:text-lg font-bold">پیشنهاد</h2>
            <h2 className="text-[#ef4056] text-sm md:text-lg font-bold">شگفت‌انگیز</h2>
          </div>
          
          <div className="mx-2 lg:my-4">
            <LuGift className="h-7 w-7 lg:h-12 lg:w-12 text-purple-600" />
          </div>

          <div className="flex flex-col items-center">
            <h3 className="hidden lg:block text-[#ef4056] font-bold mb-2 text-xs">محصولات شگفت‌انگیز</h3>
            <div className="flex items-center gap-1" dir="ltr">
              <div className="bg-[#ef4056] text-white w-5 h-5 md:w-6 md:h-7 rounded flex items-center justify-center text-[10px] md:text-xs font-bold">۱۷</div>
              <span className="text-[#ef4056] font-bold text-xs">:</span>
              <div className="bg-[#ef4056] text-white w-5 h-5 md:w-6 md:h-7 rounded flex items-center justify-center text-[10px] md:text-xs font-bold">۲۱</div>
              <span className="text-[#ef4056] font-bold text-xs">:</span>
              <div className="bg-[#ef4056] text-white w-5 h-5 md:w-6 md:h-7 rounded flex items-center justify-center text-[10px] md:text-xs font-bold">۱۰</div>
            </div>
          </div>
        </div>

        {/* ================= بخش اسلایدر محصولات ================= */}
        <div className="flex-1 relative lg:pr-4 overflow-hidden">
          <Swiper
            modules={[Navigation]}
            spaceBetween={8}
            slidesPerView={2.2}
            slidesOffsetBefore={12}
            slidesOffsetAfter={12}
            navigation={{
              nextEl: '.custom-next',
              prevEl: '.custom-prev',
            }}
            breakpoints={{
              480: { slidesPerView: 2.5 },
              640: { slidesPerView: 3, spaceBetween: 10 },
              1024: { slidesPerView: 4, spaceBetween: 12, slidesOffsetBefore: 16 },
              1280: { slidesPerView: 5, spaceBetween: 12, slidesOffsetBefore: 16 },
            }}
            className="h-full w-full !py-1"
          >
            {products.map((product) => (
              <SwiperSlide key={product.id} className="h-auto">
                <OfferCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* دکمه‌های ناوبری */}
          <button className="custom-prev absolute top-1/2 right-1 -translate-y-1/2 z-10 bg-white border border-gray-200 shadow-sm rounded-full p-1.5 text-gray-500 hover:text-black opacity-0 group-hover:opacity-100 transition-opacity hidden md:flex items-center justify-center">
            <LuChevronRight className="h-4 w-4" />
          </button>
          <button className="custom-next absolute top-1/2 left-1 -translate-y-1/2 z-10 bg-white border border-gray-200 shadow-sm rounded-full p-1.5 text-gray-500 hover:text-black opacity-0 group-hover:opacity-100 transition-opacity hidden md:flex items-center justify-center">
            <LuChevronLeft className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}