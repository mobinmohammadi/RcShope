import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';

export default function CategorySlider() {
  // دیتای نمونه با عکس‌های واقعی و معتبر (Pexels)
  const items = [
    { id: 1, title: 'راهنمای خرید', image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=200' },
    { id: 2, title: 'iPhone duo', image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=200' },
    { id: 3, title: 'مقایسه‌ها', image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=200' },
    { id: 4, title: 'پاوربانک', image: 'https://images.pexels.com/photos/4526407/pexels-photo-4526407.jpeg?auto=compress&cs=tinysrgb&w=200' },
    { id: 5, title: 'تبدیل نقاشی', image: 'https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?auto=compress&cs=tinysrgb&w=200' },
    { id: 6, title: 'ایموجی', image: 'https://images.pexels.com/photos/2072165/pexels-photo-2072165.jpeg?auto=compress&cs=tinysrgb&w=200' },
    { id: 7, title: 'حذف صدا', image: 'https://images.pexels.com/photos/164829/pexels-photo-164829.jpeg?auto=compress&cs=tinysrgb&w=200' },
    { id: 8, title: 'آیفون ۱۴', image: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=200' },
    { id: 9, title: 'کنسول PS4', image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=200' },
    { id: 10, title: 'جام جهانی', image: 'https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=200' },
    { id: 11, title: 'موبایل', image: 'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=200' },
    { id: 12, title: 'هدفون', image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=200' },
  ];

  return (
    // overflow-hidden باعث می‌شود صفحه اصلی به صورت افقی اسکرول نخورد
    <div className="w-full max-w-7xl mx-auto py-6 px-4 overflow-hidden" dir="rtl">
      
      <Swiper
        modules={[FreeMode]}
        slidesPerView="auto"
        spaceBetween={12} // فاصله کمی کمتر برای موبایل
        freeMode={true}
        className="w-full !py-2" // کلاس !py-2 برای اینکه سایه یا حاشیه دایره ها در بالا و پایین بریده نشود
      >
        {items.map((item) => (
          <SwiperSlide key={item.id} className="!w-auto">
            
            {/* سایز دایره در موبایل 80px و در دسکتاپ 96px است */}
            <div className="flex flex-col items-center gap-3 cursor-pointer group w-[80px] md:w-[100px]">
              
              {/* دایره عکس با حاشیه آبی */}
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-blue-500 p-[2px] bg-white group-hover:border-blue-700 transition-colors">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full rounded-full object-cover"
                  loading="lazy" // برای افزایش سرعت لود شدن
                />
              </div>
              
              {/* متن زیر عکس */}
              <span className="text-[11px] md:text-[13px] text-gray-700 text-center font-medium group-hover:text-black transition-colors truncate w-full">
                {item.title}
              </span>
              
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}