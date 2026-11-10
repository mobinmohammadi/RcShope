import React from "react";

const BellIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-500">
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
  </svg>
);

const InfoIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-gray-400">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
  </svg>
);

const UserOutlineIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
  </svg>
);

const ChevronLeftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
  </svg>
);

const BoxIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white opacity-80">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
  </svg>
);

const UserDashboardContent: React.FC = () => {
  return (
    <div className="w-full flex flex-col gap-4 font-sans text-sm" dir="rtl">
      
      <div className="bg-white rounded-2xl border border-gray-100 p-4 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center">
            <BellIcon />
          </div>
          <div>
            <h3 className="font-bold text-gray-800 mb-0.5">اعلان‌های مرورگر</h3>
            <p className="text-xs text-gray-500">برای دریافت اطلاعات سفارش‌ها و پیشنهادها حتی بیرون از سایت</p>
          </div>
        </div>
        <button className="bg-[#1e2b4d] hover:bg-[#15203b] text-white px-5 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer">
          فعال کردن
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 p-4 flex flex-col gap-3 shadow-sm">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-gray-800">کاربر گرامی سلام</h3>
          <InfoIcon />
        </div>
        <p className="text-xs text-gray-500 leading-6">
          کاربر گرامی سلام جهت سهولت و دسترسی به کلیه اطلاعات و پردازش سفارشات میتوانید از طریق پنل کاربری موارد مربوطه را بررسی فرمایید.
        </p>
        <div>
          <button className="bg-[#1e2b4d] hover:bg-[#15203b] text-white px-5 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer">
            ویرایش
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 p-4 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-2">
          <UserOutlineIcon />
          <span className="font-bold text-gray-700 text-xs">مشخصات فردی</span>
        </div>

        <div className="flex-1 flex justify-around items-center px-4 divide-x divide-x-reverse divide-gray-200">
          <div className="flex flex-col items-center gap-1 px-4">
            <span className="text-[11px] text-gray-400">نام و نام خانوادگی</span>
            <span className="text-xs font-bold text-gray-700">demo</span>
          </div>
          <div className="flex flex-col items-center gap-1 px-4">
            <span className="text-[11px] text-gray-400">شماره موبایل</span>
            <span className="text-xs font-bold text-gray-700 font-mono">۰۹۱۲۰۰۰۰۰۰۰</span>
          </div>
          <div className="flex flex-col items-center gap-1 px-4">
            <span className="text-[11px] text-gray-400">پست الکترونیک</span>
            <span className="text-xs font-bold text-gray-700 font-mono">demo@pixaa.ir</span>
          </div>
        </div>

        <button className="flex items-center gap-1 text-xs font-bold text-gray-600 hover:text-gray-900 transition-colors cursor-pointer">
          <span>ویرایش اطلاعات</span>
          <ChevronLeftIcon />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-[#00c853] text-white rounded-xl p-4 flex items-center justify-between shadow-sm cursor-pointer hover:opacity-90 transition-opacity">
          <div className="flex items-center gap-2">
            <BoxIcon />
            <div className="flex flex-col">
              <span className="font-bold text-sm">تکمیل شده</span>
              <span className="text-[10px] opacity-80 mt-0.5">۰ سفارش</span>
            </div>
          </div>
          <ChevronLeftIcon />
        </div>

        <div className="bg-[#ffb300] text-white rounded-xl p-4 flex items-center justify-between shadow-sm cursor-pointer hover:opacity-90 transition-opacity">
          <div className="flex items-center gap-2">
            <BoxIcon />
            <div className="flex flex-col">
              <span className="font-bold text-sm">انتظار پرداخت</span>
              <span className="text-[10px] opacity-80 mt-0.5">۰ سفارش</span>
            </div>
          </div>
          <ChevronLeftIcon />
        </div>

        <div className="bg-[#2979ff] text-white rounded-xl p-4 flex items-center justify-between shadow-sm cursor-pointer hover:opacity-90 transition-opacity">
          <div className="flex items-center gap-2">
            <BoxIcon />
            <div className="flex flex-col">
              <span className="font-bold text-sm">در حال انجام</span>
              <span className="text-[10px] opacity-80 mt-0.5">۰ سفارش</span>
            </div>
          </div>
          <ChevronLeftIcon />
        </div>

        <div className="bg-[#ef4444] text-white rounded-xl p-4 flex items-center justify-between shadow-sm cursor-pointer hover:opacity-90 transition-opacity">
          <div className="flex items-center gap-2">
            <BoxIcon />
            <div className="flex flex-col">
              <span className="font-bold text-sm">مرجوع شده</span>
              <span className="text-[10px] opacity-80 mt-0.5">۰ سفارش</span>
            </div>
          </div>
          <ChevronLeftIcon />
        </div>
      </div>

      <div className="w-full rounded-2xl overflow-hidden shadow-sm relative bg-gradient-to-l from-[#ff8c00] via-[#ff6b00] to-[#ff4500] min-h-[200px] flex items-center justify-between p-8">
        <div className="text-white z-10">
          <h2 className="text-xl md:text-2xl font-extrabold mb-2">بهترین گوشی‌های شیائومی</h2>
          <p className="text-sm md:text-base opacity-90 mb-4">با بهترین قیمت و گارانتی</p>
          <button className="bg-[#1e2b4d] hover:bg-[#15203b] text-white px-6 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer">
            خرید
          </button>
        </div>

        <div className="absolute left-0 top-0 bottom-0 w-1/2 flex items-center justify-center overflow-hidden">
          <div className="flex gap-4 items-end opacity-80 z-0 -rotate-6 translate-y-8 translate-x-10">
            <div className="w-16 h-32 bg-gray-100 rounded-lg shadow-xl border-4 border-gray-300"></div>
            <div className="w-20 h-40 bg-gray-200 rounded-lg shadow-xl border-4 border-gray-400 -translate-y-4"></div>
            <div className="w-16 h-32 bg-gray-100 rounded-lg shadow-xl border-4 border-gray-300"></div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default UserDashboardContent;