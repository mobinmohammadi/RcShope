import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { LuChevronLeft, LuClock } from 'react-icons/lu';

import 'swiper/css';
import 'swiper/css/navigation';

export default function BlogSlider() {
  // دیتای نمونه مقالات
  const articles = [
    {
      id: 1,
      category: 'کسب و کار',
      title: 'چطور بروس، برای زندگی بهتر باید صنایع دستی را به عنوان یک شغل انتخاب کرد؟',
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=600&auto=format&fit=crop',
      author: 'حامد صادقی',
      date: '۱۴۰۳/۰۵/۱۲',
      readTime: '۵ دقیقه'
    },
    {
      id: 2,
      category: 'ورزشی',
      title: 'مهندسی چنین؛ زیرساخت‌های جام جهانی فوتبال ۲۰۲۴ چطور ساخته شدند؟',
      image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=600&auto=format&fit=crop',
      author: 'حامد صادقی',
      date: '۱۴۰۳/۰۵/۱۰',
      readTime: '۸ دقیقه'
    },
    {
      id: 3,
      category: 'فناوری',
      title: 'جاذبه‌ترین استادیوم‌های جام جهانی ۲۰۲۴؛ سفره‌هایی شباهت زیادی به برج‌های...',
      image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=600&auto=format&fit=crop',
      author: 'حامد صادقی',
      date: '۱۴۰۳/۰۵/۰۸',
      readTime: '۴ دقیقه'
    },
    {
      id: 4,
      category: 'فناوری',
      title: 'بهترین گوشی‌های موبایل بازار ایران (خرداد ۱۴۰۳) مناسب همه سنین و بودجه‌ها',
      image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=600&auto=format&fit=crop',
      author: 'حامد صادقی',
      date: '۱۴۰۳/۰۵/۰۵',
      readTime: '۱۰ دقیقه'
    },
    {
      id: 5,
      category: 'فناوری',
      title: 'راهنمای خرید لپ‌تاپ برای کاربران گرافیکی و خرید مناسب برای رندرگیری',
      image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=600&auto=format&fit=crop',
      author: 'حامد صادقی',
      date: '۱۴۰۳/۰۵/۰۱',
      readTime: '۷ دقیقه'
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto py-8 px-4" dir="rtl">
      
      {/* هدر بخش (عنوان و لینک مشاهده همه) */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-[#0a3187]">مجله پیکسا</h2>
        
        <a href="#" className="flex items-center gap-1 text-gray-500 hover:text-[#0a3187] transition-colors text-sm font-medium">
          <span>مشاهده همه</span>
          <LuChevronLeft className="h-4 w-4" />
        </a>
      </div>

      {/* کانتینر اسلایدر */}
      <div className="relative group">
        <Swiper
          modules={[Navigation]}
          spaceBetween={16}
          slidesPerView={1} // موبایل: ۱ کارت
          navigation={{
            nextEl: '.blog-next',
            prevEl: '.blog-prev',
          }}
          breakpoints={{
            640: { slidesPerView: 2 }, // تبلت کوچک: ۲ کارت
            1024: { slidesPerView: 3 }, // لپ تاپ: ۳ کارت
            1280: { slidesPerView: 4 }, // دسکتاپ بزرگ: ۴ کارت
          }}
          className="w-full !pb-4"
        >
          {articles.map((article) => (
            <SwiperSlide key={article.id} className="h-auto">
              
              {/* کارت مقاله */}
              <div className="flex flex-col h-full bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group/card cursor-pointer">
                
                {/* عکس مقاله */}
                <div className="relative w-full h-40 overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-110" 
                  />
                  {/* برچسب دسته بندی */}
                  <span className="absolute bottom-3 right-3 bg-[#22c55e] text-white text-[10px] px-2.5 py-1 rounded-full font-medium shadow-sm">
                    {article.category}
                  </span>
                </div>

                {/* محتوای کارت */}
                <div className="flex flex-col flex-1 p-4">
                  
                  {/* عنوان */}
                  <h3 className="text-sm font-bold text-gray-800 leading-relaxed mb-3 line-clamp-2 group-hover/card:text-[#0a3187] transition-colors">
                    {article.title}
                  </h3>
                  
                  {/* توضیحات کوتاه (اختیاری) */}
                  <p className="text-xs text-gray-500 leading-relaxed line-clamp-2 mb-4">
                    توضیحات کوتاهی درباره این مقاله در این بخش قرار می‌گیرد که کاربر را ترغیب به خواندن بیشتر کند...
                  </p>

                  {/* فوتر کارت (نویسنده و زمان) */}
                  <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-3">
                    <span className="text-[11px] text-gray-500 font-medium">
                      {article.author}
                    </span>
                    
                    <div className="flex items-center gap-1 text-gray-400 text-[10px]">
                      <span>{article.date}</span>
                      <span className="mx-1">|</span>
                      <LuClock className="h-3 w-3" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                </div>
              </div>

            </SwiperSlide>
          ))}
        </Swiper>

        {/* دکمه‌های ناوبری (فلش‌ها) */}
        <button className="blog-prev absolute top-1/2 -right-4 -translate-y-1/2 z-10 bg-white border border-gray-200 shadow-md rounded-full p-2 text-gray-600 hover:text-black opacity-0 group-hover:opacity-100 transition-opacity hidden md:flex items-center justify-center">
          <LuChevronLeft className="h-5 w-5 rotate-180" />
        </button>
        <button className="blog-next absolute top-1/2 -left-4 -translate-y-1/2 z-10 bg-white border border-gray-200 shadow-md rounded-full p-2 text-gray-600 hover:text-black opacity-0 group-hover:opacity-100 transition-opacity hidden md:flex items-center justify-center">
          <LuChevronLeft className="h-5 w-5" />
        </button>
      </div>

    </div>
  );
}