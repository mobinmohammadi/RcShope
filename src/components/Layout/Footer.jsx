import React from 'react';
import { 
  FaTelegram, 
  FaInstagram, 
  FaLinkedin, 
  FaYoutube, 
  FaTwitter, 
  FaChevronUp,
  FaHeadphones,
  FaCode
} from 'react-icons/fa';
import { MdOutlineVerified } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-100 font-[Vazirmatn]" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* بخش بالایی فوتر (۴ ستون) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-center sm:text-right gap-8 lg:gap-12">
          
          {/* ستون ۱: لوگو و توضیحات */}
          <div className="flex flex-col">
            <div className="mb-6">
              <h1 className="text-3xl font-black text-[#1b3b6f] tracking-tighter">
                Rc Shope
              </h1>
            </div>
            
            <p className="text-gray-500 text-sm leading-7 text-justify mb-6">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد.
            </p>

            <div className="flex items-center gap-3">
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-lg text-gray-500 hover:bg-[#1b3b6f] hover:text-white transition-colors duration-300">
                <FaTelegram size={18} />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-lg text-gray-500 hover:bg-[#1b3b6f] hover:text-white transition-colors duration-300">
                <FaInstagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-lg text-gray-500 hover:bg-[#1b3b6f] hover:text-white transition-colors duration-300">
                <FaLinkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-lg text-gray-500 hover:bg-[#1b3b6f] hover:text-white transition-colors duration-300">
                <FaYoutube size={18} />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-lg text-gray-500 hover:bg-[#1b3b6f] hover:text-white transition-colors duration-300">
                <FaTwitter size={18} />
              </a>
            </div>
          </div>

          {/* ستون ۲: لینک‌های سریع */}
          <div>
            <h3 className="text-gray-900 font-bold text-lg mb-6">لینک های سریع</h3>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><a href="#" className="hover:text-[#1b3b6f] transition-colors">درباره ما</a></li>
              <li><a href="#" className="hover:text-[#1b3b6f] transition-colors">تماس با ما</a></li>
              <li><a href="#" className="hover:text-[#1b3b6f] transition-colors">فروشگاه</a></li>
              <li><a href="#" className="hover:text-[#1b3b6f] transition-colors">ورود</a></li>
              <li><a href="#" className="hover:text-[#1b3b6f] transition-colors">ثبت نام</a></li>
            </ul>
          </div>

          {/* ستون ۳: ناحیه کاربری */}
          <div>
            <h3 className="text-gray-900 font-bold text-lg mb-6">ناحیه کاربری</h3>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><a href="#" className="hover:text-[#1b3b6f] transition-colors">حساب کاربری</a></li>
              <li><a href="#" className="hover:text-[#1b3b6f] transition-colors">سفارشات</a></li>
              <li><a href="#" className="hover:text-[#1b3b6f] transition-colors">لیست پیگیری</a></li>
              <li><a href="#" className="hover:text-[#1b3b6f] transition-colors">حریم خصوصی</a></li>
              <li><a href="#" className="hover:text-[#1b3b6f] transition-colors">سبد خرید</a></li>
            </ul>
          </div>

          {/* ستون ۴: نمادها */}
          <div className="flex flex-col">
            <h3 className="text-gray-900 font-bold text-lg mb-6">نمادها</h3>
            
            <div className="flex flex-wrap gap-3">
              <div className="border border-gray-100 rounded-xl p-2 w-24 h-24 flex items-center justify-center bg-white shadow-sm">
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto bg-[#ffd700] rounded-lg relative overflow-hidden mb-1 flex items-center justify-center">
                    <div className="w-8 h-8 bg-[#0033cc] rounded-full absolute -top-2 -left-2"></div>
                    <span className="relative z-10 font-bold text-black text-xs">Z</span>
                  </div>
                  <span className="text-[10px] font-bold text-gray-800">زرین‌پال</span>
                </div>
              </div>
              
              <div className="border border-gray-100 rounded-xl p-2 w-24 h-24 flex items-center justify-center bg-white shadow-sm">
                <div className="text-center">
                  <MdOutlineVerified size={40} className="mx-auto text-[#b8860b] mb-1" />
                  <span className="text-[9px] font-bold text-gray-800 block leading-tight">نماد ملی<br/>ساماندهی</span>
                </div>
              </div>

              <div className="border border-gray-100 rounded-xl p-2 w-24 h-24 flex items-center justify-center bg-white shadow-sm">
                 <div className="text-center">
                  <div className="w-12 h-10 mx-auto mb-1 border-2 border-[#1b3b6f] rounded-md relative">
                     <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-orange-400 rounded-full"></div>
                  </div>
                  <span className="text-[9px] font-bold text-gray-800 block leading-tight">نماد اتحادیه<br/>الکترونیکی</span>
                </div>
              </div>
            </div>

            
          </div>
        </div>

        {/* بخش تماس‌ها (بالای نوار کپی‌رایت) */}
        <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-2">
            <span>تلفن پشتیبانی: <span className="font-bold text-gray-700" dir="ltr">09391177395</span></span>
            <span className="hidden md:inline text-gray-300">|</span>
            <span>ارتباط بیشتر: <span className="font-bold text-gray-700" dir="ltr">09391177395</span></span>
          </div>
          <div>
            <span>ساعت کاری: ۹ تا ۲۱</span>
          </div>
        </div>
      </div>

      {/* 🔥 بخش جدید: نوار کپی‌رایت با ترکیب زرد و آبی */}
      <div className="w-full bg-[#1b3b6f] relative overflow-hidden">
        {/* نوار زرد رنگی که در پس‌زمینه قرار می‌گیرد */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400"></div>
        
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-center gap-2 text-sm text-white">
          <span className="opacity-90">تمامی حقوق برای این وب‌سایت محفوظ است © 1405</span>
          <span className="hidden sm:inline opacity-50">|</span>
          <span className="flex items-center gap-1.5">
            طراحی شده با 
            <span className="text-yellow-400 animate-pulse">
              <FaCode size={14} />
            </span>
            توسط 
            <a href="#" className="text-yellow-400 font-bold hover:text-yellow-300 transition-colors">
              روژ وب
            </a>
          </span>
        </div>
      </div>

      {/* دکمه‌های شناور */}
      <div className="fixed bottom-6 left-6 flex flex-col gap-3 z-50">
        <button className="w-12 h-12 bg-blue-100 text-[#1b3b6f] rounded-xl flex items-center justify-center hover:bg-blue-200 transition-colors shadow-sm">
          <FaChevronUp size={20} />
        </button>
        <button className="w-14 h-14 bg-[#1b3b6f] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-900 transition-colors">
          <FaHeadphones size={24} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;