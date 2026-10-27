import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { LuHeart, LuShoppingCart, LuStar, LuChevronRight, LuChevronLeft, LuGift } from 'react-icons/lu';

import 'swiper/css';
import 'swiper/css/navigation';

export default function SpecialOffersSlider() {
  const products = [
    { 
      id: 1, 
      title: 'استیکر لپ تاپ پیکسل مدل نقشه ایران سنتی', 
      price: '۶۰,۰۰۰', 
      oldPrice: null, 
      discount: null, 
      image: 'https://digital.pixaa.ir/wp-content/uploads/2026/08/d785465bdb8edeea7b0c4f035d3679f92fc0a30c_1776755004-1024x512.webp', // تصویر لپ تاپ
      stars: 0 
    },
    { 
      id: 2, 
      title: 'دسته بازی پلی استیشن ۵ سونی مدل...', 
      price: '۱۳,۸۵۰,۰۰۰', 
      oldPrice: '۱۵,۰۰۰,۰۰۰', 
      discount: '۸٪', 
      image: 'https://digital.pixaa.ir/wp-content/uploads/2026/10/playstation.jpg', // تصویر پلی استیشن
      stars: 3 
    },
    { 
      id: 3, 
      title: 'گوشی موبایل اپل مدل iPhone 14 Pro Max...', 
      price: '۵۶,۷۳۰,۰۰۰', 
      oldPrice: '۶۵,۰۰۰,۰۰۰', 
      discount: '۱۲٪', 
      image: 'https://digital.pixaa.ir/wp-content/uploads/2026/09/iPhone-18-Pro-Max-1TB-Burgundy-e1789200160101-300x300.webp', // تصویر آیفون
      stars: 4 
    },
    { 
      id: 4, 
      title: 'هارد اکسترنال اچ‌دی‌وی‌دی مدل HDVOG', 
      price: '۱۲,۳۵۰,۰۰۰', 
      oldPrice: '۱۴,۰۰۰,۰۰۰', 
      discount: '۱۱٪', 
      image: 'https://digital.pixaa.ir/wp-content/uploads/2026/03/گوشی-موبایل-شیائومی-مدل-Poco-X7-Pro-دو-سیم-کارت-ظرفیت-256-گیگابایت-و-رم-8-گیگابایت-مشکی-300x300.webp', // تصویر شیائومی
      stars: 5 
    },
    { 
      id: 5, 
      title: 'اسپیکر بلوتوثی قابل حمل جی بی ال مدل...', 
      price: '۲۴,۵۰۰,۰۰۰', 
      oldPrice: '۲۸,۰۰۰,۰۰۰', 
      discount: '۱۲٪', 
      image: 'https://digital.pixaa.ir/wp-content/uploads/2026/08/speaker-1024x506.webp', // تصویر اسپیکر
      stars: 5 
    },
    { 
      id: 6, 
      title: 'گوشی موبایل اپل مدل iPhone Duo', 
      price: '۸۴۰,۰۰۰,۰۰۰', 
      oldPrice: '۹۰۰,۰۰۰,۰۰۰', 
      discount: '۶٪', 
      image: 'https://digital.pixaa.ir/wp-content/uploads/2026/09/Verizon-iPhone-Duo-256GB-Night-Sky-300x300.avif', // تصویر iPhone Duo
      stars: 5 
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto py-6 px-3 sm:px-4 overflow-hidden" dir="rtl">
      
      <div className="relative border-[1.5px] border-[#ef4056] rounded-2xl p-3 md:p-4 bg-white flex flex-col lg:flex-row items-stretch group">
        
        {/* ================= بخش تایمر ================= */}
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
                
                <div className="flex flex-col h-full bg-white border border-gray-100 rounded-xl p-2 relative hover:shadow-md transition-shadow">
                  
                  <button className="absolute top-2 left-2 text-gray-300 hover:text-red-500 transition-colors z-10">
                    <LuHeart className="h-3.5 w-3.5 md:h-4 md:w-4" />
                  </button>

                  {product.discount && (
                    <span className="absolute top-2 right-2 bg-[#ef4056] text-white text-[9px] md:text-[10px] px-1.5 py-0.5 rounded font-bold z-10">
                      {product.discount}
                    </span>
                  )}

                  <div className="w-full h-20 sm:h-24 md:h-32 flex items-center justify-center mb-1 md:mb-2 mt-3">
                    <img 
                      src={product.image} 
                      alt={product.title} 
                      className="max-h-full max-w-full object-contain mix-blend-multiply" 
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  <h3 className="text-[10px] md:text-xs text-gray-700 font-medium line-clamp-2 h-7 md:h-8 mb-1 leading-relaxed">
                    {product.title}
                  </h3>

                  <div className="flex items-center gap-0.5 mb-1.5 h-3">
                    {product.stars > 0 ? (
                      Array(5).fill(0).map((_, i) => (
                        <LuStar key={i} className={`h-2 w-2 md:h-2.5 md:w-2.5 ${i < product.stars ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200'}`} />
                      ))
                    ) : null}
                  </div>

                  <div className="mt-auto flex items-end justify-between">
                    <div className="flex flex-col">
                      {product.oldPrice && (
                        <span className="text-gray-400 text-[9px] md:text-[10px] line-through decoration-gray-400 mb-0.5" dir="ltr">
                          {product.oldPrice}
                        </span>
                      )}
                      <div className="flex items-center gap-0.5 text-[#0a3187] font-bold text-[11px] md:text-xs">
                        <span>{product.price}</span>
                        <span className="text-[8px] md:text-[9px] text-gray-500 font-normal">تومان</span>
                      </div>
                    </div>
                    
                    <button className="bg-[#0a3187] text-white p-1 rounded-md md:rounded-lg hover:bg-blue-800 transition-colors">
                      <LuShoppingCart className="h-3 w-3 md:h-3.5 md:w-3.5" />
                    </button>
                  </div>
                </div>

              </SwiperSlide>
            ))}
          </Swiper>

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