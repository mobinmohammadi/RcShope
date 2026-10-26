    import React from 'react';
    import { Swiper, SwiperSlide } from 'swiper/react';
    import { Navigation } from 'swiper/modules';
    import { LuHeart, LuShoppingCart, LuStar, LuChevronLeft } from 'react-icons/lu';

    import 'swiper/css';
    import 'swiper/css/navigation';

    export default function MobilePhonesSlider() {
    // دیتای نمونه محصولات (عکس‌ها و مشخصات)
    const products = [
        { 
        id: 1, 
        title: 'گوشی موبایل شیائومی مدل Redmi Note 14 4G ظرفیت ۲۵۶...', 
        price: '۲۵,۰۰۰,۰۰۰', 
        oldPrice: '۲۸,۰۰۰,۰۰۰', 
        discount: '۱۰٪', 
        image: 'https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-redmi-note-14-4g-1.jpg', // عکس واقعی
        stars: 4 
        },
        { 
        id: 2, 
        title: 'گوشی موبایل سامسونگ مدل 5G ظرفیت ۱۲۸ گیگابایت...', 
        price: '۹۸,۴۰۰,۰۰۰', 
        oldPrice: '۱۰۵,۰۰۰,۰۰۰', 
        discount: '۶٪', 
        image: 'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s24-ultra-1.jpg', 
        stars: 5 
        },
        { 
        id: 3, 
        title: 'گوشی موبایل شیائومی مدل Poco X7 Pro دو سیم کارت...', 
        price: '۹۰,۰۰۰,۰۰۰', 
        oldPrice: '۹۵,۰۰۰,۰۰۰', 
        discount: '۵٪', 
        image: 'https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-poco-x7-pro-1.jpg', 
        stars: 5 
        },
        { 
        id: 4, 
        title: 'گوشی موبایل اپل مدل iPhone 16 Pro Max تک سیم‌کارت...', 
        price: '۵۶۷,۳۰۰,۰۰۰', 
        oldPrice: '۶۰۰,۰۰۰,۰۰۰', 
        discount: '۵٪', 
        image: 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-16-pro-max-1.jpg', 
        stars: 5 
        },
        { 
        id: 5, 
        title: 'گوشی موبایل اپل مدل iPhone Duo ظرفیت ۲۵۶ گیگابایت...', 
        price: '۸۴۰,۰۰۰,۰۰۰', 
        oldPrice: null, 
        discount: null, 
        image: 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-pro-max-1.jpg', 
        stars: 5 
        },
    ];

    return (
        <div className="w-full max-w-7xl mx-auto py-6 px-4" dir="rtl">
        
        {/* کانتینر اصلی با حاشیه آبی روشن و گوشه‌های گرد */}
        <div className="border border-blue-200 rounded-2xl p-4 md:p-6 bg-white">
            
            {/* ================= هدر بخش (عنوان و لینک مشاهده همه) ================= */}
            <div className="flex items-center justify-between mb-6">
            {/* عنوان */}
            <h2 className="text-xl md:text-2xl font-bold text-gray-800">
                موبایل‌ها در پیکسل
            </h2>
            
            {/* لینک مشاهده همه */}
            <a href="#" className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors text-sm font-medium">
                <span>مشاهده همه</span>
                <LuChevronLeft className="h-4 w-4" />
            </a>
            </div>

            {/* ================= اسلایدر محصولات ================= */}
            <div className="relative group overflow-hidden">
            <Swiper
                modules={[Navigation]}
                spaceBetween={16}
                slidesPerView={2} // موبایل: ۲ تا
                navigation={{
                nextEl: '.custom-next-mobile',
                prevEl: '.custom-prev-mobile',
                }}
                breakpoints={{
                640: { slidesPerView: 3 }, // تبلت: ۳ تا
                1024: { slidesPerView: 4 }, // دسکتاپ: ۴ تا
                }}
                className="w-full !pb-2" // پدینگ برای سایه
            >
                {products.map((product) => (
                <SwiperSlide key={product.id} className="h-auto">
                    
                    {/* کارت محصول */}
                    <div className="flex flex-col h-full bg-white border border-gray-200 rounded-2xl p-3 relative hover:shadow-lg transition-shadow duration-300">
                    
                    {/* آیکون قلب */}
                    <button className="absolute top-3 left-3 text-gray-300 hover:text-red-500 transition-colors z-10 p-1">
                        <LuHeart className="h-5 w-5" />
                    </button>

                    {/* برچسب تخفیف */}
                    {product.discount && (
                        <span className="absolute top-3 right-3 bg-[#ef4056] text-white text-[11px] px-2 py-0.5 rounded-full font-bold z-10 shadow-sm">
                        {product.discount}
                        </span>
                    )}

                    {/* عکس محصول */}
                    <div className="w-full h-40 md:h-48 flex items-center justify-center mb-4 mt-2">
                        <img 
                        src={product.image} 
                        alt={product.title} 
                        className="max-h-full object-contain mix-blend-multiply" 
                        // mix-blend-multiply برای حذف پس زمینه سفید عکس های محصولات
                        />
                    </div>

                    {/* عنوان محصول */}
                    <h3 className="text-xs md:text-sm text-gray-700 font-medium line-clamp-2 h-10 mb-2 leading-relaxed">
                        {product.title}
                    </h3>

                    {/* امتیاز ستاره‌ها */}
                    <div className="flex items-center justify-end gap-0.5 mb-3 h-4">
                        {product.stars > 0 ? (
                        Array(5).fill(0).map((_, i) => (
                            <LuStar key={i} className={`h-3.5 w-3.5 ${i < product.stars ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200'}`} />
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
                        <button className="bg-[#0a3187] text-white p-2 rounded-xl hover:bg-blue-800 transition-colors">
                        <LuShoppingCart className="h-4 w-4 md:h-5 md:w-5" />
                        </button>
                    </div>
                    </div>

                </SwiperSlide>
                ))}
            </Swiper>
            </div>
        </div>
        </div>
    );
    }