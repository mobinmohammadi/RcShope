import React from "react";
import { useSelector } from "react-redux";

const BellIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-500">
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
  </svg>
);

const InfoIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-gray-400 shrink-0">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
  </svg>
);

const UserOutlineIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400 shrink-0">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
  </svg>
);

const ChevronLeftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 shrink-0">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
  </svg>
);

const BoxIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 sm:w-8 sm:h-8 text-white opacity-80 shrink-0">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
  </svg>
);

const orderStats = [
  { label: "تکمیل شده", count: "۰ سفارش", bg: "bg-[#00c853]" },
  { label: "انتظار پرداخت", count: "۰ سفارش", bg: "bg-[#ffb300]" },
  { label: "در حال انجام", count: "۰ سفارش", bg: "bg-[#2979ff]" },
  { label: "مرجوع شده", count: "۰ سفارش", bg: "bg-[#ef4444]" },
];

const UserDashboardContent = () => {
  const { userInfo } = useSelector((state) => state.auth);

  const personalInfo = [
    { label: "نام و نام خانوادگی", value: userInfo?.fullName || "-", mono: false },
    { label: "شماره موبایل", value: userInfo?.phone || "-", mono: true },
    { label: "پست الکترونیک", value: userInfo?.email || "-", mono: true },
  ];

  return (
    <div className="w-full flex flex-col gap-3 sm:gap-4 text-sm" dir="rtl">

      {/* اعلان مرورگر */}
      <div className="bg-white rounded-2xl border border-gray-100 p-3 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-sm">
        <div className="flex items-start sm:items-center gap-3 flex-1 min-w-0">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-50 flex items-center justify-center shrink-0">
            <BellIcon />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="font-bold text-gray-800 mb-0.5 text-xs sm:text-sm">اعلان‌های مرورگر</h3>
            <p className="text-[11px] sm:text-xs text-gray-500 leading-5">
              برای دریافت اطلاعات سفارش‌ها و پیشنهادها حتی بیرون از سایت
            </p>
          </div>
        </div>
        <button className="bg-[#1e2b4d] hover:bg-[#15203b] text-white px-5 py-2.5 rounded-xl text-xs font-bold transition-colors cursor-pointer w-full sm:w-auto shrink-0">
          فعال کردن
        </button>
      </div>

      {/* خوش‌آمد */}
      <div className="bg-white rounded-2xl border border-gray-100 p-3 sm:p-4 flex flex-col gap-3 shadow-sm">
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-bold text-gray-800 text-sm">کاربر گرامی سلام</h3>
          <InfoIcon />
        </div>
        <p className="text-xs text-gray-500 leading-6">
          کاربر گرامی سلام جهت سهولت و دسترسی به کلیه اطلاعات و پردازش سفارشات میتوانید از طریق پنل کاربری موارد مربوطه را بررسی فرمایید.
        </p>
        <div>
          <button className="bg-[#1e2b4d] hover:bg-[#15203b] text-white px-5 py-2.5 rounded-xl text-xs font-bold transition-colors cursor-pointer w-full sm:w-auto">
            ویرایش
          </button>
        </div>
      </div>

      {/* مشخصات فردی */}
      <div className="bg-white rounded-2xl border border-gray-100 p-3 sm:p-4 flex flex-col lg:flex-row lg:items-center justify-between gap-4 shadow-sm">
        <div className="flex items-center gap-2">
          <UserOutlineIcon />
          <span className="font-bold text-gray-700 text-xs">مشخصات فردی</span>
        </div>

        {/* موبایل: هر آیتم یک ردیف با justify-between — تبلت/دسکتاپ: ردیفی با divider */}
        <div className="flex-1 flex flex-col sm:flex-row sm:justify-around sm:items-center gap-2 sm:gap-0 sm:divide-x sm:divide-x-reverse sm:divide-gray-200 lg:px-4">
          {personalInfo.map((item) => (
            <div
              key={item.label}
              className="flex sm:flex-col items-center justify-between sm:justify-center gap-2 sm:gap-1 sm:px-4 py-1.5 sm:py-0 border-b border-gray-100 sm:border-0 last:border-0"
            >
              <span className="text-[11px] text-gray-400 shrink-0">{item.label}</span>
              <span
                className={`text-xs font-bold text-gray-700 text-left sm:text-center truncate max-w-[60%] sm:max-w-full ${item.mono ? "font-mono" : ""}`}
                title={item.value}
              >
                {item.value}
              </span>
            </div>
          ))}
        </div>

        <button className="flex items-center justify-center lg:justify-start gap-1 text-xs font-bold text-gray-600 hover:text-gray-900 transition-colors cursor-pointer shrink-0">
          <span>ویرایش اطلاعات</span>
          <ChevronLeftIcon />
        </button>
      </div>

      {/* آمار سفارش‌ها: ۱ ستون (خیلی کوچک) → ۲ ستون → ۴ ستون */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3 lg:gap-4">
        {orderStats.map((stat) => (
          <div
            key={stat.label}
            className={`${stat.bg} text-white rounded-xl p-3 sm:p-4 flex items-center justify-between gap-2 shadow-sm cursor-pointer hover:opacity-90 transition-opacity`}
          >
            <div className="flex items-center gap-2 min-w-0">
              <BoxIcon />
              <div className="flex flex-col min-w-0">
                <span className="font-bold text-xs sm:text-sm truncate">{stat.label}</span>
                <span className="text-[10px] opacity-80 mt-0.5 truncate">{stat.count}</span>
              </div>
            </div>
            <ChevronLeftIcon />
          </div>
        ))}
      </div>

      {/* بنر تبلیغاتی */}
      <div className="w-full rounded-2xl overflow-hidden shadow-sm relative bg-gradient-to-l from-[#ff8c00] via-[#ff6b00] to-[#ff4500] min-h-[150px] sm:min-h-[200px] flex items-center p-4 sm:p-6 md:p-8">
        {/* تصویر پس‌زمینه — روی موبایل کم‌رنگ‌تر و کوچک‌تر */}
        <div className="absolute left-0 top-0 bottom-0 w-1/2 flex items-center justify-center overflow-hidden opacity-40 sm:opacity-70 md:opacity-90 pointer-events-none">
          <div className="flex gap-2 sm:gap-4 items-end -rotate-6 translate-y-6 sm:translate-y-8 translate-x-6 sm:translate-x-10 scale-75 sm:scale-100 origin-center">
            <div className="w-12 h-24 sm:w-16 sm:h-32 bg-gray-100 rounded-lg shadow-xl border-4 border-gray-300"></div>
            <div className="w-16 h-32 sm:w-20 sm:h-40 bg-gray-200 rounded-lg shadow-xl border-4 border-gray-400 -translate-y-4"></div>
            <div className="w-12 h-24 sm:w-16 sm:h-32 bg-gray-100 rounded-lg shadow-xl border-4 border-gray-300"></div>
          </div>
        </div>

        <div className="relative z-10 text-white max-w-[70%] sm:max-w-[55%] md:max-w-[50%]">
          <h2 className="text-sm sm:text-xl md:text-2xl font-extrabold mb-1 sm:mb-2 leading-6 sm:leading-normal">
            بهترین گوشی‌های شیائومی
          </h2>
          <p className="text-[11px] sm:text-sm md:text-base opacity-90 mb-3 sm:mb-4">
            با بهترین قیمت و گارانتی
          </p>
          <button className="bg-[#1e2b4d] hover:bg-[#15203b] text-white px-4 sm:px-6 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer">
            خرید
          </button>
        </div>
      </div>

    </div>
  );
};

export default UserDashboardContent;