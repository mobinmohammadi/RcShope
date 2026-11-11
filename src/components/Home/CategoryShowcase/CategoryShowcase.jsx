import React, { useState } from "react";
// ایمپورت‌های Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel } from "swiper/modules";
// ایمپورت استایل‌های Swiper
import "swiper/css";
import "swiper/css/free-mode";

// --- آیکون‌های SVG ---

const HeartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-gray-400 hover:text-red-500 transition-colors">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
  </svg>
);

const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-yellow-500">
    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
  </svg>
);

const CartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-white">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
  </svg>
);

// --- داده‌های نمونه ---

const categories = [
  { id: "apple", label: "اپل", icon: "📱" },
  { id: "samsung", label: "سامسونگ", icon: "📞" },
  { id: "xiaomi", label: "شیائومی", icon: "📟" },
  { id: "honor", label: "آنر", icon: "📲" },
  { id: "google", label: "گوگل", icon: "🔍" },
  { id: "nothing", label: "ناتینگ", icon: "📞" },
];

const products = [
  {
    id: 1,
    title: "گوشی موبایل اپل مدل iPhone 17 Pro Max ZAA تک سیم کارت + eSim ظرفیت ۲۵۶ گیگابایت و رم ۱۲...",
    price: "۱۳۰,۰۰۰,۰۰۰",
    oldPrice: "۱۴۰,۰۰۰,۰۰۰",
    discount: "۷٪",
    image: "/2.png",
    isSpecial: true,
    colors: ["#f97316", "#000000", "#9ca3af"],
  },
  {
    id: 2,
    title: "گوشی موبایل اپل مدل iPhone 17 Pro Max تک سیم کارت + eSIM ظرفیت ۲۵۶ گیگابایت و رم ۱۲...",
    price: "۹۷۳,۰۰۰,۰۰۰",
    oldPrice: "۱,۰۵۰,۰۰۰,۰۰۰",
    discount: "۵٪",
    image: "/2.png",
    isSpecial: false,
    colors: ["#4c1d95", "#000000", "#e5e7eb"],
  },
  {
    id: 3,
    title: "گوشی موبایل اپل مدل iPhone 17 Pro Max تک سیم کارت + eSIM ظرفیت ۲۵۶ گیگابایت و رم ۱۲...",
    price: "۴۸۰,۰۰۰,۰۰۰",
    oldPrice: "۵۰۰,۰۰۰,۰۰۰",
    discount: "۴٪",
    image: "/2.png",
    isSpecial: false,
    colors: ["#1f2937", "#6b7280"],
  },
  // برای تست بهتر اسلایدر، چند محصول تکراری اضافه کردم تا اسلاید شدن دیده شود
  {
    id: 4,
    title: "گوشی موبایل اپل مدل iPhone 16 Pro Max تک سیم کارت",
    price: "۱۲۰,۰۰۰,۰۰۰",
    oldPrice: "۱۳۰,۰۰۰,۰۰۰",
    discount: "۸٪",
    image: "/2.png",
    isSpecial: true,
    colors: ["#10b981", "#000000"],
  },
  {
    id: 5,
    title: "گوشی موبایل اپل مدل iPhone 15 Pro",
    price: "۹۰,۰۰۰,۰۰۰",
    oldPrice: "۱۰۰,۰۰۰,۰۰۰",
    discount: "۱۰٪",
    image: "/2.png",
    isSpecial: false,
    colors: ["#3b82f6", "#e5e7eb"],
  },
];

// --- کامپوننت اصلی ---

const CategoryShowcase = () => {
  const [activeTab, setActiveTab] = useState("apple");

  return (
    <div className="w-full  bg-[#f8f9fa] py-10 px-4 md:px-8 " dir="rtl">
      <div className="mx-auto ">
        
        {/* بخش هدر و تب‌ها */}
        <div className="flex flex-col items-center mb-10">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-8">
            دنبال چه محصولی هستی؟
          </h2>

          {/* نوار تب‌ها */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => {
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 border cursor-pointer
                    ${
                      isActive
                        ? "bg-[#2c3e6b] text-white border-[#2c3e6b] shadow-md"
                        : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50 hover:border-gray-300"
                    }
                  `}
                >
                  <span className={`${isActive ? "bg-white/20" : "bg-gray-100"} p-1 rounded-md flex items-center justify-center`}>
                    {cat.icon}
                  </span>
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* اسلایدر محصولات با Swiper */}
        <div className="w-full relative">
          <Swiper
            modules={[FreeMode, Mousewheel]}
            spaceBetween={24} // فاصله بین کارت‌ها
            slidesPerView={1} // پیش‌فرض موبایل: 1 کارت
            freeMode={true} // اجازه اسکرول آزاد
            mousewheel={{ forceToAxis: true }} // اسکرول با ماوس
            breakpoints={{
              // تنظیمات ریسپانسیو
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
            }}
            className="!pb-4 cursor-grab active:cursor-grabbing" // استایل کرسر برای درگ کردن
          >
            {products.map((product) => (
              <SwiperSlide key={product.id} className="h-auto">
                {/* کارت محصول */}
                <div className="bg-white rounded-2xl p-4 flex flex-col justify-between border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 relative group h-full">
                  
                  {/* هدر کارت: قلب و ستاره */}
                  <div className="flex justify-between items-center mb-2 z-10">
                    <button className="p-2 bg-white border border-gray-200 rounded-full hover:bg-gray-50 transition-colors cursor-pointer">
                      <HeartIcon />
                    </button>

                    {product.isSpecial && (
                      <div className="flex items-center gap-1 bg-yellow-50 border border-yellow-200 px-2 py-1 rounded-md">
                        <StarIcon />
                        <span className="text-xs text-gray-600 font-medium">ویژه</span>
                      </div>
                    )}
                  </div>

                  {/* تصویر محصول */}
                  <div className="relative w-full h-64 flex items-center justify-center mb-2 overflow-hidden pointer-events-none">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* نقطه‌های رنگ */}
                  <div className="flex justify-center items-center gap-2 mb-3">
                    {product.colors.map((color, idx) => (
                      <span
                        key={idx}
                        className="w-3.5 h-3.5 rounded-full border border-gray-300 shadow-sm cursor-pointer hover:scale-110 transition-transform"
                        style={{ backgroundColor: color }}
                      ></span>
                    ))}
                  </div>

                  {/* عنوان محصول */}
                  <h3 className="text-sm font-bold text-gray-800 text-center line-clamp-2 leading-6 mb-4 h-12 px-2 pointer-events-none">
                    {product.title}
                  </h3>

                  {/* بخش قیمت و دکمه خرید */}
                  <div className="flex items-end justify-between mt-auto pt-4 border-t border-gray-100">
                    <button className="bg-[#2c3e6b] cursor-pointer hover:bg-[#1e2b4d] text-white p-3 rounded-xl transition-colors shadow-md hover:shadow-lg">
                      <CartIcon />
                    </button>
                    
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-xs text-gray-400 line-through">
                          {product.oldPrice}
                        </span>
                        <span className="bg-red-500 text-white text-[11px] px-2 py-0.5 rounded-md font-bold">
                          {product.discount}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-[#2c3e6b] font-extrabold">
                        <span className="text-base">{product.price}</span>
                        <span className="text-[11px] font-normal text-gray-500">تومان</span>
                      </div>
                    </div>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* دکمه مشاهده همه محصولات */}
        <div className="flex justify-center mt-12">
          <button className="flex items-center gap-2 cursor-pointer bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-xl text-sm font-bold hover:bg-gray-50 transition-colors shadow-sm">
            مشاهده همه محصولات اپل
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 pb-0.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default CategoryShowcase;