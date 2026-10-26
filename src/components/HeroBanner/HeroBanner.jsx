import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { LuVolume2 } from 'react-icons/lu'; // برای آیکون بلندگو

// ایمپورت استایل‌های Swiper
import 'swiper/css';
import 'swiper/css/pagination';

export default function HeroBanner() {
  // دیتای بنرها (می‌توانید چند بنر مختلف اینجا اضافه کنید)
  const banners = [
    {
      id: 1,
      title: 'از جدیدترین گوشی‌ها تا کنسول‌های بازی، ارتقای دنیای دیجیتال شما',
      discount: 'تا ۴۰٪ تخفیف لوازم دیجیتال',
      buttonText: 'خرید',
      // ⚠️ اینجا باید آدرس عکس گرافیکی خودتان (مثل گوشی ها و جعبه) را قرار دهید
      image: 'https://via.placeholder.com/600x400/00000000/00000000?text=Your+PNG+Image+Here', 
      bgColor: 'bg-[#e77318]', // رنگ پس‌زمینه نارنجی
    },
    {
      id: 2,
      title: 'جدیدترین لپ‌تاپ‌ها با پردازنده‌های نسل جدید',
      discount: 'تا ۲۰٪ تخفیف ویژه دانشجویی',
      buttonText: 'مشاهده',
      image: 'https://via.placeholder.com/600x400/00000000/00000000?text=Laptop+Image',
      bgColor: 'bg-[#1e3a8a]', // رنگ پس‌زمینه آبی
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-6" dir="rtl">
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
            // استایل دادن به نقطه‌های پایین بنر
            bulletClass: 'swiper-pagination-bullet !bg-white/50 !w-6 !h-2 !rounded-full transition-all',
            bulletActiveClass: '!bg-white !w-8',
          }}
          className="w-full h-[250px] md:h-[350px]"
        >
          {banners.map((banner) => (
            <SwiperSlide key={banner.id}>
              {/* کانتینر اصلی بنر */}
              <div className={`w-full h-full ${banner.bgColor} flex items-center justify-between relative px-6 md:px-12 py-4 overflow-hidden`}>
                
                {/* بخش راست: متن‌ها و دکمه */}
                <div className="flex flex-col items-start z-10 w-1/2 md:w-3/5">
                  <h2 className="text-white text-lg md:text-3xl font-bold leading-relaxed mb-2 md:mb-4">
                    {banner.title}
                  </h2>
                  <p className="text-white/90 text-sm md:text-xl font-medium mb-4 md:mb-6">
                    {banner.discount}
                  </p>
                  
                  {/* دکمه خرید */}
                  <div className="flex items-center gap-2">
                    <button className="bg-white text-gray-800 font-bold py-1.5 px-8 md:py-2 md:px-12 rounded-full hover:bg-gray-100 transition-colors shadow-sm">
                      {banner.buttonText}
                    </button>
                    <button className="bg-white/20 p-2 rounded-full text-white hover:bg-white/30 transition-colors hidden md:block">
                      <LuVolume2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                {/* بخش چپ: عکس بنر */}
                <div className="absolute left-0 bottom-0 w-1/2 md:w-[55%] h-full flex items-end justify-start z-0">
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

      {/* استایل اختصاصی برای جابجایی نقطه‌های Swiper به سمت راست (مطابق عکس) */}
      <style dangerouslySetInnerHTML={{__html: `
        .swiper-pagination {
          text-align: right !important;
          padding-right: 3rem !important;
          bottom: 1rem !important;
        }
        @media (max-width: 768px) {
          .swiper-pagination {
             padding-right: 1.5rem !important;
          }
        }
      `}} />
    </div>
  );
}