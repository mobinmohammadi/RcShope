import React from 'react';
// ایمپورت کامپوننت‌های Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
// ایمپورت ماژول‌های مورد نیاز
import { FreeMode } from 'swiper/modules';

// ایمپورت استایل‌های پایه Swiper
import 'swiper/css';
import 'swiper/css/free-mode';

export default function CategorySlider() {
  // دیتای نمونه
  const items = [
    { id: 1, title: 'راهنمای خرید', image: 'https://picsum.photos/100/100?random=1' },
    { id: 2, title: 'iPhone duo', image: 'https://picsum.photos/100/100?random=2' },
    { id: 3, title: 'مقایسه‌ها', image: 'https://picsum.photos/100/100?random=3' },
    { id: 4, title: 'دانلاینک آبلند', image: 'https://picsum.photos/100/100?random=4' },
    { id: 5, title: 'تبدیل نقاشی به...', image: 'https://picsum.photos/100/100?random=5' },
    { id: 6, title: 'ایموجی آیکون...', image: 'https://picsum.photos/100/100?random=6' },
    { id: 7, title: 'حذف صدای مزاحم', image: 'https://picsum.photos/100/100?random=7' },
    { id: 8, title: 'آیفون ۱۴', image: 'https://picsum.photos/100/100?random=8' },
    { id: 9, title: 'PS4', image: 'https://picsum.photos/100/100?random=9' },
    { id: 10, title: 'جام جهانی', image: 'https://picsum.photos/100/100?random=10' },
    { id: 11, title: 'موبایل تکنو', image: 'https://picsum.photos/100/100?random=11' },
    { id: 12, title: 'هدفون', image: 'https://picsum.photos/100/100?random=12' },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto py-6 px-4" dir="rtl">
      {/* 
        تنظیمات Swiper:
        slidesPerView="auto": باعث می‌شود عرض اسلایدها بر اساس محتوای آن‌ها تنظیم شود (ریسپانسیو خودکار)
        spaceBetween={16}: فاصله بین اسلایدها
        freeMode={true}: اجازه می‌دهد اسلایدر آزادانه و نرم با موس/لمس اسکرول شود (مثل عکس)
      */}
      <Swiper
        modules={[FreeMode]}
        slidesPerView="auto"
        spaceBetween={16}
        freeMode={true}
        className="w-full"
      >
        {items.map((item) => (
          <SwiperSlide key={item.id} className="!w-auto">
            <div className="flex flex-col items-center gap-3 cursor-pointer group w-[90px] md:w-[110px]">
              
              {/* دایره عکس با حاشیه آبی */}
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-blue-500 p-1 bg-white group-hover:border-blue-700 transition-colors">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              
              {/* متن زیر عکس */}
              <span className="text-xs md:text-sm text-gray-600 text-center font-medium group-hover:text-black transition-colors truncate w-full">
                {item.title}
              </span>
              
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}