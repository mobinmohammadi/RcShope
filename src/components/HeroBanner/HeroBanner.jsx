import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { LuVolume2 } from 'react-icons/lu';

import 'swiper/css';
import 'swiper/css/pagination';

export default function HeroBanner() {
  const banners = [
    {
      id: 1,
      title: 'از جدیدترین گوشی‌ها تا کنسول‌های بازی، ارتقای دنیای دیجیتال شما',
      discount: 'تا ۴۰٪ تخفیف لوازم دیجیتال',
      buttonText: 'خرید',
      // ⚠️ عکس واقعی خود را اینجا بگذارید
      image: 'https://via.placeholder.com/600x400/00000000/00000000?text=PNG+Image', 
      bgColor: 'bg-[#e77318]', 
    },
    {
      id: 2,
      title: 'جدیدترین لپ‌تاپ‌ها با پردازنده‌های نسل جدید',
      discount: 'تا ۲۰٪ تخفیف ویژه دانشجویی',
      buttonText: 'مشاهده',
      image: 'https://via.placeholder.com/600x400/00000000/00000000?text=Laptop+Image',
      bgColor: 'bg-[#1e3a8a]',
    }
  ];

  return (
    // max-w-full و overflow-hidden برای جلوگیری از بیرون زدگی
    <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 py-6 overflow-hidden" dir="rtl">
      
      <div className="rounded-2xl overflow-hidden shadow-sm">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            bulletClass: 'swiper-pagination-bullet !bg-white/50 !w-4 !h-1.5 md:!w-6 md:!h-2 !rounded-full transition-all',
            bulletActiveClass: '!bg-white !w-6 md:!w-8',
          }}
          // ارتفاع بنر
          className="w-full h-[200px] sm:h-[260px] md:h-[320px]"
        >
          {banners.map((banner) => (
            <SwiperSlide key={banner.id}>
              
              {/* کانتینر اصلی بنر */}
              <div className={`w-full h-full ${banner.bgColor} flex items-center justify-between relative px-4 sm:px-8 md:px-12 py-3 sm:py-4 overflow-hidden`}>
                
                {/* بخش راست: متن‌ها و دکمه */}
                <div className="flex flex-col items-start z-10 w-[60%] sm:w-[55%] md:w-[50%]">
                  <h2 className="text-white text-xs sm:text-sm md:text-2xl lg:text-3xl font-bold leading-snug md:leading-relaxed mb-1 sm:mb-2 md:mb-4 line-clamp-2 md:line-clamp-none">
                    {banner.title}
                  </h2>
                  <p className="text-white/90 text-[10px] sm:text-xs md:text-lg font-medium mb-2 sm:mb-4 md:mb-6">
                    {banner.discount}
                  </p>
                  
                  {/* دکمه خرید */}
                  <div className="flex items-center gap-1 sm:gap-2">
                    <button className="bg-white text-gray-800 font-bold text-[10px] sm:text-xs md:text-base py-1 px-4 sm:py-1.5 sm:px-6 md:py-2 md:px-10 rounded-full hover:bg-gray-100 transition-colors shadow-sm whitespace-nowrap">
                      {banner.buttonText}
                    </button>
                    <button className="bg-white/20 p-1 md:p-2 rounded-full text-white hover:bg-white/30 transition-colors hidden md:block">
                      <LuVolume2 className="h-4 w-4 md:h-5 md:w-5" />
                    </button>
                  </div>
                </div>

                {/* بخش چپ: عکس بنر */}
                <div className="absolute left-0 bottom-0 w-[45%] sm:w-[50%] md:w-[55%] h-full flex items-end justify-start z-0 pointer-events-none">
                  <img 
                    src={banner.image} 
                    alt="Banner" 
                    className="w-full h-full object-contain object-left-bottom"
                  />
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* استایل نقطه‌های پایین */}
      <style dangerouslySetInnerHTML={{__html: `
        .swiper-pagination {
          text-align: right !important;
          padding-right: 1.5rem !important;
          bottom: 0.5rem !important;
        }
        @media (min-width: 768px) {
          .swiper-pagination {
            padding-right: 3rem !important;
            bottom: 1rem !important;
          }
        }
      `}} />
    </div>
  );
}