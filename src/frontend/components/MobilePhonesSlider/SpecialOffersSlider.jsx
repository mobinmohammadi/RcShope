import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { LuChevronRight, LuChevronLeft, LuGift } from "react-icons/lu";
import OfferCard from "./OfferCard";

import "swiper/css";
import "swiper/css/navigation";

export default function SpecialOffersSlider({ products }) {
  return (
<div
  className="w-full rounded-lg max-w-7xl mx-auto py-4 sm:py-6 px-2 sm:px-4 overflow-hidden"
  dir="rtl"
>
  <div className="relative border-[1.5px] bg-[#CD003E] border-[#ef4056] rounded-2xl p-2 sm:p-3 md:p-4 flex flex-row items-stretch gap-2 sm:gap-3">
    {/* بخش راست: لوگو + تایمر (در موبایل کنار محصولات، در دسکتاپ ستون) */}
    <div className="flex flex-col items-center justify-between w-35 sm:w-24 md:w-28 lg:w-45 flex-shrink-0 lg:border-gray-100 lg:pl-4">
      {/* لوگو */}
      <div className="my-1 sm:my-2 lg:my-4 flex-shrink-0">
        <img
          src="https://digital.pixaa.ir/wp-content/uploads/2026/06/incredible-offers.webp"
          alt="پیشنهاد شگفت‌انگیز"
          className="h-full sm:h-16 md:h-20 lg:min-h-48 w-auto object-contain"
        />
      </div>

      {/* تایمر و عنوان */}
      <div className="flex flex-col gap-1 sm:gap-2 pb-0 sm:pb-4 lg:pb-7 items-center flex-shrink-0 w-full">
        <h3 className="hidden lg:block max-w-10 text-white font-bold mb-2 text-sm text-center">
          محصولات شگفت‌انگیز
        </h3>
        <div className="flex items-center justify-center gap-0.5 sm:gap-1 w-full" dir="ltr">
          <div className="bg-white text-zinc-900 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded flex items-center justify-center text-[10px] sm:text-[11px] md:text-xs font-bold">
            00
          </div>
          <span className="text-white font-bold text-[10px] sm:text-xs lg:text-sm">:</span>
          <div className="bg-white text-zinc-900 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded flex items-center justify-center text-[10px] sm:text-[11px] md:text-xs font-bold">
            00
          </div>
          <span className="text-white font-bold text-[10px] sm:text-xs lg:text-sm">:</span>
          <div className="bg-white text-zinc-900 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded flex items-center justify-center text-[10px] sm:text-[11px] md:text-xs font-bold">
            00
          </div>
        </div>
      </div>
    </div>

    {/* ================= بخش اسلایدر محصولات ================= */}
    <div className="flex-1 min-w-0 relative overflow-hidden group">
      <Swiper
        modules={[Navigation]}
        spaceBetween={6}
        slidesPerView={1.8}
        slidesOffsetBefore={4}
        slidesOffsetAfter={4}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        breakpoints={{
          400: { slidesPerView: 2, spaceBetween: 6, slidesOffsetBefore: 6 },
          480: { slidesPerView: 2.3, spaceBetween: 8, slidesOffsetBefore: 8 },
          640: { slidesPerView: 3, spaceBetween: 10, slidesOffsetBefore: 10 },
          768: { slidesPerView: 3.3, spaceBetween: 10 },
          1024: {
            slidesPerView: 4,
            spaceBetween: 12,
            slidesOffsetBefore: 16,
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 12,
            slidesOffsetBefore: 16,
          },
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
