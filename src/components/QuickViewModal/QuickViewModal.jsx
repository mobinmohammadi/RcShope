import React, { useState } from 'react';
import { 
  LuHeart, 
  LuShoppingCart, 
  LuStar, 
  LuZap
} from 'react-icons/lu';

export default function QuickViewSection() {
  const products = [
    { id: 1, title: 'گوشی موبایل اپل مدل iPhone Duo دوسیم‌کارت ظرفیت ۲۵۶ گیگابایت', price: '۸۴۰,۰۰۰,۰۰۰', oldPrice: '۹۰۰,۰۰۰,۰۰۰', discount: '۶٪', image: 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-pro-max-1.jpg' },
    { id: 2, title: 'گوشی موبایل اپل مدل iPhone 16 Pro Max تک سیم‌کارت', price: '۵۶۷,۳۰۰,۰۰۰', oldPrice: '۶۰۰,۰۰۰,۰۰۰', discount: '۵٪', image: 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-16-pro-max-1.jpg' },
    { id: 3, title: 'دسته بازی پلی استیشن ۵ سونی مدل DualSense CFI-ZCT1W', price: '۱۳,۸۵۰,۰۰۰', oldPrice: '۱۵,۰۰۰,۰۰۰', discount: '۸٪', image: 'https://fdn2.gsmarena.com/vv/pics/sony/sony-dualsense-1.jpg' },
    { id: 4, title: 'استیکر لپ تاپ پیکسل مدل نقشه ایران سنتی', price: '۶۰,۰۰۰', oldPrice: null, discount: null, image: 'https://via.placeholder.com/150' },
    { id: 5, title: 'رابط‌کارت‌خوان ام‌آر‌آی مدل MRP', price: '۴۵۰,۰۰۰', oldPrice: null, discount: null, image: 'https://via.placeholder.com/150' },
    { id: 6, title: 'کیت تمرکزدهنده عدسی multifunctional', price: '۱,۲۰۰,۰۰۰', oldPrice: null, discount: null, image: 'https://via.placeholder.com/150' },
  ];

  // محصول پیش‌فرض انتخاب شده (محصول شماره ۳)
  const [selectedProduct, setSelectedProduct] = useState(products[2]);

  return (
    <div className="w-full max-w-7xl mx-auto py-6 px-4" dir="rtl">
      
      <div className="border border-gray-200 rounded-2xl p-4 bg-white grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* ================= ۱. ستون راست: لیست محصولات ================= */}
        <div className="lg:col-span-4 flex flex-col gap-2 lg:border-l lg:border-gray-100 lg:pl-6 max-h-[500px] overflow-y-auto custom-scrollbar">
          {products.map((item) => {
            const isSelected = selectedProduct.id === item.id;

            return (
              <div 
                key={item.id}
                // تغییر محصول فقط با کلیک
                onClick={() => setSelectedProduct(item)}
                className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all duration-200 border-2 ${
                  isSelected 
                    ? 'border-[#0a3187] bg-blue-50/50 shadow-sm' 
                    : 'border-transparent hover:bg-gray-50'
                }`}
              >
                <div className="w-16 h-16 shrink-0 flex items-center justify-center bg-white rounded-lg p-1 border border-gray-100">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="max-h-full object-contain mix-blend-multiply" 
                  />
                </div>
                
                <p className={`text-xs leading-relaxed line-clamp-2 ${
                  isSelected ? 'text-[#0a3187] font-bold' : 'text-gray-600'
                }`}>
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>

        {/* ================= ۲. ستون وسط: جزئیات محصول ================= */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          
          <div>
            {/* هدر جزئیات */}
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="text-lg font-bold text-gray-800 mb-2 min-h-[56px]">
                  {selectedProduct.title}
                </h2>
                <div className="flex items-center gap-1">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <LuStar key={star} className={`h-4 w-4 ${star <= 4 ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200'}`} />
                    ))}
                  </div>
                  <span className="text-xs text-gray-400 mr-2">(۴ نظر)</span>
                </div>
              </div>
            </div>

            {/* کادر قیمت */}
            <div className="bg-gray-50 rounded-xl p-4 mb-6 flex items-center justify-between border border-gray-100">
              <div className="flex items-center gap-2 text-xs text-green-600 font-medium bg-green-50 px-3 py-1.5 rounded-lg">
                <LuZap className="h-4 w-4" />
                <span>موجود در انبار</span>
              </div>
              <div className="flex flex-col items-end">
                {selectedProduct.oldPrice && (
                  <span className="text-[11px] text-gray-400 line-through mb-1">
                    {selectedProduct.oldPrice}
                  </span>
                )}
                <div className="flex items-center gap-1 text-gray-800 font-bold text-xl">
                  <span>{selectedProduct.price}</span>
                  <span className="text-xs text-gray-500 font-normal">تومان</span>
                </div>
              </div>
            </div>

            {/* ویژگی‌های محصول */}
            <div className="mb-6">
              <h3 className="text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
                <span className="w-1 h-4 bg-[#0a3187] rounded-full inline-block"></span>
                مشخصات و ویژگی‌های کلیدی
              </h3>
              <ul className="text-xs text-gray-500 space-y-3">
                <li className="flex items-center justify-between border-b border-gray-100 pb-2">
                  <span>نوع اتصال:</span>
                  <span className="text-gray-700">بلوتوث / کابل USB</span>
                </li>
                <li className="flex items-center justify-between border-b border-gray-100 pb-2">
                  <span>وضعیت موجودی:</span>
                  <span className="text-gray-700">موجود در انبار</span>
                </li>
              </ul>
            </div>
          </div>

          {/* دکمه‌های عملیات */}
          <div className="flex items-center gap-3 mt-4">
            <button className="flex-1 bg-[#0a3187] text-white py-3.5 rounded-xl hover:bg-blue-800 transition-colors flex items-center justify-center gap-2 text-sm font-bold shadow-md shadow-blue-900/20">
              <LuShoppingCart className="h-5 w-5" />
              مشاهده و خرید محصول
            </button>
            <button className="p-3.5 border border-gray-200 rounded-xl text-gray-400 hover:text-red-500 hover:border-red-200 transition-colors">
              <LuHeart className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* ================= ۳. ستون چپ: عکس بزرگ و پیشنهاد ================= */}
        <div className="lg:col-span-3 flex flex-col gap-4">
          
          {/* باکس تایمر */}
          <div className="flex items-center justify-between bg-blue-50/50 border border-blue-100 rounded-xl p-2 px-3">
             <div className="flex items-center gap-1 text-xs text-blue-700 font-bold">
                <LuZap className="h-4 w-4 fill-blue-700" />
                پیشنهاد شگفت‌انگیز
             </div>
             <div className="flex gap-1" dir="ltr">
                <div className="bg-white border border-gray-200 text-gray-700 w-6 h-6 rounded flex items-center justify-center text-[10px] font-bold">۱۷</div>
                <div className="bg-white border border-gray-200 text-gray-700 w-6 h-6 rounded flex items-center justify-center text-[10px] font-bold">۲۱</div>
             </div>
          </div>

          {/* عکس بزرگ (با افکت زوم روی هاور) */}
          <div className="bg-white border border-gray-100 rounded-2xl p-4 flex items-center justify-center relative h-[250px] shadow-sm overflow-hidden group">
            {selectedProduct.discount && (
              <span className="absolute top-3 right-3 bg-[#ef4056] text-white text-[11px] px-2 py-1 rounded-md font-bold z-10">
                {selectedProduct.discount} تخفیف
              </span>
            )}
            
            {/* 
              کلاس‌های مهم برای افکت هاور:
              transition-transform duration-300 ease-in-out: انیمیشن نرم
              group-hover:scale-110: بزرگ شدن ۱۰ درصدی وقتی روی کادر کلیک/هاور می‌شود
            */}
            <img 
              src={selectedProduct.image} 
              alt={selectedProduct.title} 
              className="max-h-full max-w-full object-contain mix-blend-multiply transition-transform duration-300 ease-in-out group-hover:scale-110 cursor-pointer" 
            />
          </div>

          {/* راهنمای خرید */}
          <div className="flex items-center justify-between text-[11px] text-gray-500 bg-gray-50 rounded-xl p-3">
            <span>راهنمای خرید امن</span>
            <div className="flex gap-2">
              <div className="w-5 h-5 bg-white border border-gray-200 rounded"></div>
              <div className="w-5 h-5 bg-white border border-gray-200 rounded"></div>
            </div>
          </div>
        </div>

      </div>
      
      {/* اسکرول بار سفارشی */}
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #f1f1f1; border-radius: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #94a3b8; }
      `}} />
    </div>
  );
}