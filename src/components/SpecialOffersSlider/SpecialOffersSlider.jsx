import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { LuHeart, LuShoppingCart, LuStar, LuChevronRight, LuChevronLeft, LuGift } from 'react-icons/lu';

import 'swiper/css';
import 'swiper/css/navigation';

export default function SpecialOffersSlider() {
  // دیتای نمونه محصولات
  const products = [
    { id: 1, title: 'استیکر لپ تاپ پیکسل مدل نقشه ایران سنتی', price: '۶۰,۰۰۰', oldPrice: null, discount: null, image: 'https://via.placeholder.com/150', stars: 0 },
    { id: 2, title: 'دسته بازی پلی استیشن ۵ سونی مدل...', price: '۱۳,۸۵۰,۰۰۰', oldPrice: '۱۵,۰۰۰,۰۰۰', discount: '۸٪', image: 'https://via.placeholder.com/150', stars: 3 },
    { id: 3, title: 'گوشی موبایل اپل مدل iPhone 14 Pro Max...', price: '۵۶,۷۳۰,۰۰۰', oldPrice: '۶۵,۰۰۰,۰۰۰', discount: '۱۲٪', image: 'https://via.placeholder.com/150', stars: 4 },
    { id: 4, title: 'هارد اکسترنال اچ‌دی‌وی‌دی مدل HDVOG', price: '۱۲,۳۵۰,۰۰۰', oldPrice: '۱۴,۰۰۰,۰۰۰', discount: '۱۱٪', image: 'https://via.placeholder.com/150', stars: 5 },
    { id: 5, title: 'اسپیکر بلوتوثی قابل حمل جی بی ال مدل...', price: '۲۴,۵۰۰,۰۰۰', oldPrice: '۲۸,۰۰۰,۰۰۰', discount: '۱۲٪', image: 'https://via.placeholder.com/150', stars: 5 },
    { id: 6, title: 'گوشی موبایل اپل مدل iPhone Duo', price: '۸۴۰,۰۰۰,۰۰۰', oldPrice: '۹۰۰,۰۰۰,۰۰۰', discount: '۶٪', image: 'https://via.placeholder.com/150', stars: 5 },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto py-8 px-4" dir="rtl">
      
      {/* کانتینر اصلی با حاشیه قرمز و گوشه‌های گرد */}
      <div className="relative border-2 border-[#ef4056] rounded-2xl p-4 bg-white flex items-stretch">
        
        {/* ================= بخش تایمر و پیشنهاد شگفت‌انگیز (سمت راست) ================= */}
        {/* این بخش فقط در دسکتاپ (lg) نمایش داده می‌شود و در موبایل مخفی است */}
        <div className="hidden lg:flex flex-col items-center justify-center min-w-[180px] w-[180px] border-l border-gray-100 pl-4">
          <h2 className="text-[#ef4056] text-xl font-bold mb-1">پیشنهاد</h2>
          <h2 className="text-[#ef4056] text-xl font-bold mb-4">شگفت‌انگیز</h2>
          
          {/* آیکون هدیه */}
          <div className="mb-6 relative">
            <LuGift className="h-16 w-16 text-purple-600" />
            {/* می‌توانید یک عکس واقعی هدیه اینجا بگذارید */}
          </div>

          <h3 className="text-[#ef4056] font-bold mb-3">محصولات شگفت‌انگیز</h3>
          
          {/* تایمر شمارش معکوس (فقط ظاهر) */}
          <div className="flex items-center gap-1" dir="ltr">
            <div className="bg-[#ef4056] text-white w-7 h-8 rounded-md flex items-center justify-center text-sm font-bold">۱۷</div>
            <span className="text-[#ef4056] font-bold">:</span>
            <div className="bg-[#ef4056] text-white w-7 h-8 rounded-md flex items-center justify-center text-sm font-bold">۲۱</div>
            <span className="text-[#ef4056] font-bold">:</span>
            <div className="bg-[#ef4056] text-white w-7 h-8 rounded-md flex items-center justify-center text-sm font-bold">۱۰</div>
          </div>
        </div>

        {/* ================= بخش اسلایدر محصولات (سمت چپ) ================= */}
        <div className="flex-1 relative lg:pr-4 overflow-hidden">
          <Swiper
            modules={[Navigation]}
            spaceBetween={12}
            slidesPerView={2} // موبایل: ۲ تا
            navigation={{
              nextEl: '.custom-next',
              prevEl: '.custom-prev',
            }}
            breakpoints={{
              // در تبلت ۳ تا
              640: { slidesPerView: 3 },
              // در دسکتاپ ۴ تا
              1024: { slidesPerView: 4 },
            }}
            className="h-full w-full"
          >
            {products.map((product) => (
              <SwiperSlide key={product.id} className="h-auto">
                
                {/* کارت محصول */}
                <div className="flex flex-col h-full bg-white border border-gray-100 rounded-xl p-3 relative group hover:shadow-md transition-shadow">
                  
                  {/* آیکون قلب */}
                  <button className="absolute top-3 left-3 text-gray-300 hover:text-red-500 transition-colors z-10">
                    <LuHeart className="h-5 w-5" />
                  </button>

                  {/* برچسب تخفیف */}
                  {product.discount && (
                    <span className="absolute top-3 right-3 bg-[#ef4056] text-white text-[11px] px-1.5 py-0.5 rounded-md font-bold z-10">
                      {product.discount}
                    </span>
                  )}

                  {/* عکس محصول */}
                  <div className="w-full h-32 md:h-40 flex items-center justify-center mb-3">
                    <img src={product.image} alt={product.title} className="max-h-full object-contain" />
                  </div>

                  {/* عنوان محصول */}
                  <h3 className="text-xs md:text-sm text-gray-700 font-medium line-clamp-2 h-10 mb-2 leading-relaxed">
                    {product.title}
                  </h3>

                  {/* امتیاز ستاره‌ها */}
                  <div className="flex items-center gap-0.5 mb-3 h-4">
                    {product.stars > 0 ? (
                      Array(5).fill(0).map((_, i) => (
                        <LuStar key={i} className={`h-3 w-3 ${i < product.stars ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200'}`} />
                      ))
                    ) : null}
                  </div>

                  {/* بخش قیمت و دکمه سبد خرید */}
                  <div className="mt-auto flex items-end justify-between">
                    <div className="flex flex-col">
                      {/* قیمت قبلی */}
                      {product.oldPrice && (
                        <span className="text-gray-400 text-[11px] line-through decoration-gray-400 mb-0.5" dir="ltr">
                          {product.oldPrice}
                        </span>
                      )}
                      {/* قیمت جدید */}
                      <div className="flex items-center gap-1 text-[#0a3187] font-bold text-sm">
                        <span>{product.price}</span>
                        <span className="text-[10px] text-gray-500 font-normal">تومان</span>
                      </div>
                    </div>
                    
                    {/* دکمه افزودن به سبد خرید */}
                    <button className="bg-[#0a3187] text-white p-1.5 rounded-lg hover:bg-blue-800 transition-colors">
                      <LuShoppingCart className="h-4 w-4" />
                    </button>
                  </div>
                </div>

              </SwiperSlide>
            ))}
          </Swiper>

          {/* دکمه‌های ناوبری (فلش‌ها) - در دسکتاپ دیده می‌شوند */}
          <button className="custom-prev absolute top-1/2 -right-3 -translate-y-1/2 z-10 bg-white border border-gray-200 shadow-md rounded-full p-2 text-gray-500 hover:text-black opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">
            <LuChevronRight className="h-5 w-5" />
          </button>
          <button className="custom-next absolute top-1/2 -left-3 -translate-y-1/2 z-10 bg-white border border-gray-200 shadow-md rounded-full p-2 text-gray-500 hover:text-black opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">
            <LuChevronLeft className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}