import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// ایمپورت استایل‌های Swiper
import 'swiper/css';
import 'swiper/css/navigation';

export default function LaptopSwiper() {
  // استیت برای فیلتر فعال
  const [activeFilter, setActiveFilter] = useState('همه');

  // لیست فیلترها
  const filters = ['همه', 'مک بوک', 'لپ‌تاپ hp', 'لپ‌تاپ ایسوس', 'لپ‌تاپ لنوو'];

  // داده‌های نمونه برای محصولات (با اضافه کردن دسته‌بندی برای فیلتر شدن)
  const products = [
    {
      id: 1,
      category: 'مک بوک',
      title: 'لپ تاپ ۱۴ اینچی اپل مدل MacBook Pro MDE1F-LA-M۵-۱۶GB RAM-1TB SSD',
      image: '/products/2.webp',
      discount: null,
      oldPrice: null,
      price: '۳۱۵,۰۸۶,۰۰۰',
    },
    {
      id: 2,
      category: 'لپ‌تاپ hp',
      title: 'لپ تاپ ۱۶ اینچی اچ پی مدل OmniBook X Flip 16-a... a۵۰۰P۷۳dx-Core Ultra ۷ ۱۵۵H-۱۶GB LPDDR۵X',
      image: '/products/2.webp',
      discount: '۴۱٪',
      oldPrice: '۲۶۰,۰۰۰,۰۰۰',
      price: '۱۵۶,۷۰۰,۰۰۰',
    },
    {
      id: 3,
      category: 'لپ‌تاپ hp',
      title: 'لپ تاپ اچ پی مدل Victus 15a FB۳۰۹۳DX RTX ۴۰۵۰-FA۵۰۴۵H ۱۶GB ۵۱۲GB',
      image: '/products/2.webp',
      discount: '۴۱٪',
      oldPrice: '۲۶۰,۰۰۰,۰۰۰',
      price: '۱۴۶,۹۰۰,۰۰۰',
    },
    {
      id: 4,
      category: 'لپ‌تاپ ایسوس',
      title: 'لپ تاپ ۱۶ اینچی ایسوس مدل TUF Gaming A16 FA۶۰۸UP-A۱۶.R۹۵۰۰v-R۹ ۱۶GB-RTX۵۰۶۰V-AGB',
      image: '/products/2.webp',
      discount: '۴۱٪',
      oldPrice: '۲۶۰,۰۰۰,۰۰۰',
      price: '۱۴۷,۹۵۰,۰۰۰',
    },
    {
      id: 5,
      category: 'لپ‌تاپ لنوو',
      title: 'لپ تاپ لنوو مدل IdeaPad 1 ۱۵ALV7 Celeron N۴۵۰۰ ۸GB ۲۵۶GB',
      image: '/products/2.webp',
      discount: '۴۱٪',
      oldPrice: '۲۶۰,۰۰۰,۰۰۰',
      price: '۱۴۹,۹۰۰,۰۰۰',
    },
    // یک محصول اضافه برای تست اسکرول
    {
      id: 6,
      category: 'لپ‌تاپ ایسوس',
      title: 'لپ تاپ ۱۵ اینچی ایسوس مدل VivoBook',
      image: '/products/2.webp',
      discount: null,
      oldPrice: null,
      price: '۱۲۰,۰۰۰,۰۰۰',
    }
  ];

  // فیلتر کردن محصولات بر اساس دکمه اکتیو
  const filteredProducts = activeFilter === 'همه' 
    ? products 
    : products.filter(p => p.category === activeFilter);

  return (
    <div className="w-full   py-6 px-4 ">
      <div className=" mx-auto bg-[#f0f4f8] rounded-2xl p-4 md:p-6">
        
        {/* === هدر بخش (عنوان و فیلترها) === */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          
          <div className="flex flex-col md:flex-row items-center gap-4">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 whitespace-nowrap">
              لپ‌تاپ‌ها در پیکسل
            </h2>
            
            {/* دکمه‌های فیلتر با قابلیت اکتیو */}
            <div className="flex flex-wrap gap-2 items-center justify-center">
              {filters.map((filter) => (
                <button 
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`text-xs px-4 py-1.5 rounded-full font-medium transition-colors duration-200
                    ${activeFilter === filter 
                      ? 'bg-[#2b4c8c] text-white' 
                      : 'bg-white text-gray-600 hover:bg-gray-50'
                    }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <a href="#" className="text-[#2b4c8c] text-sm font-medium flex items-center gap-1 hover:text-blue-800 transition">
            <span>مشاهده همه</span>
            <span className="text-lg leading-none">‹</span>
          </a>
        </div>

        {/* === اسلایدر محصولات با Swiper === */}
        {/* دکمه‌های ناوبری سفارشی برای قرارگیری در هدر */}
        <div className="relative">
          <Swiper
            modules={[Navigation]}
            spaceBetween={16}
            slidesPerView={1.2}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            breakpoints={{
              // تنظیم تعداد اسلایدها در سایزهای مختلف صفحه
              640: { slidesPerView: 2.2 },
              768: { slidesPerView: 3.2 },
              1024: { slidesPerView: 4.2 },
              1280: { slidesPerView: 5 },
            }}
            className="pb-4"
          >
            {filteredProducts.map((product) => (
              <SwiperSlide key={product.id}>
                <div className="bg-white rounded-2xl p-4 flex flex-col h-full border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  
                  {/* تصویر محصول و دکمه علاقه‌مندی */}
                  <div className="relative mb-4 flex justify-center">
                    <button className="absolute top-0 right-0 text-red-500 hover:scale-110 transition-transform z-10">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                    <img 
                      src={product.image} 
                      alt={product.title} 
                      className="w-full h-[160px] object-contain rounded-lg"
                    />
                  </div>

                  {/* عنوان محصول */}
                  <h3 className="text-xs text-gray-800 font-medium leading-6 line-clamp-2 h-[48px] mb-4">
                    {product.title}
                  </h3>

                  {/* بخش قیمت و دکمه خرید */}
                  <div className="mt-auto flex justify-between items-end">
                    
                    <div className="flex flex-col">
                      {product.discount && (
                        <div className="flex items-center gap-2 mb-1">
                          <span className="bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold">
                            {product.discount}
                          </span>
                          <span className="text-gray-400 line-through text-[10px]">
                            {product.oldPrice}
                          </span>
                        </div>
                      )}
                      <div className="flex items-baseline gap-1">
                        <span className="text-sm font-extrabold text-gray-800">{product.price}</span>
                        <span className="text-[10px] text-gray-500">تومان</span>
                      </div>
                    </div>

                    <button className="bg-[#2b4c8c] text-white p-2 rounded-xl hover:bg-[#1e3a70] transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </button>

                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* دکمه‌های ناوبری Swiper (به صورت شناور در دو طرف) */}
          <div className="swiper-button-prev-custom absolute top-1/2 -right-4 z-10 w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center cursor-pointer text-gray-600 hover:bg-gray-50 -translate-y-1/2 hidden md:flex">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </div>
          <div className="swiper-button-next-custom absolute top-1/2 -left-4 z-10 w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center cursor-pointer text-gray-600 hover:bg-gray-50 -translate-y-1/2 hidden md:flex">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </div>
        </div>

      </div>
    </div>
  );
}