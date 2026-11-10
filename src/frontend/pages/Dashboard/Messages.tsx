import React, { useState, useEffect } from "react";

const SettingsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-500">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-500">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const BellIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-500">
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
  </svg>
);

const CheckCircleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-blue-500">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const AllIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
  </svg>
);

const ActivityIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
  </svg>
);

const OrdersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
  </svg>
);

const DiscountIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185zM9.75 9h.008v.008H9.75V9zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 4.5h.008v.008h-.008V13.5zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
  </svg>
);

const EmptyMailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-gray-400">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
);

const tabs = [
  { id: "all", label: "همه", icon: <AllIcon />, active: true },
  { id: "activity", label: "فعالیت‌ها", icon: <ActivityIcon /> },
  { id: "orders", label: "سفارش‌ها", icon: <OrdersIcon /> },
  { id: "discounts", label: "تخفیف‌ها", icon: <DiscountIcon /> },
];

const messagesSettings = [
  { id: 1, title: "وضعیت و به‌روزرسانی سفارش‌ها", desc: "اطلاع‌رسانی درباه ثبت، پرداخت، آماده‌سازی و ارسال سفارش‌های شما", icon: <OrdersIcon />, defaultSms: true, defaultEmail: true },
  { id: 2, title: "موجود شدن کالاهای موجود", desc: "درخواست ثبت درخواست خرید شما از کالاهایی که در حال حاضر ناموجود شده‌اند", icon: <BellIcon />, defaultSms: true, defaultEmail: false },
  { id: 3, title: "یادآوری ثبت نظر سفارش", desc: "درخواست ثبت نظر، خرید شما پس از تحویل موفق مرسوله", icon: <BellIcon />, defaultSms: true, defaultEmail: false },
  { id: 4, title: "کاهش قیمت و تخفیف‌های ویژه", desc: "اطلاع از اتمام تخفیف روی محصولات موردعلاقه", icon: <DiscountIcon />, defaultSms: false, defaultEmail: true },
  { id: 5, title: "اخبار و جشنواره‌های فروشگاهی", desc: "تخفیف‌ها، رویدادها و پیشنهادهای ویژه در روزهای خاص", icon: <ActivityIcon />, defaultSms: true, defaultEmail: false },
];

const ToggleSwitch = ({ isOn, onToggle }) => (
  <button
    type="button"
    onClick={onToggle}
    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 focus:outline-none cursor-pointer ${
      isOn ? "bg-[#1e2b4d]" : "bg-gray-200"
    }`}
  >
    <span
      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${
        isOn ? "-translate-x-6" : "-translate-x-1"
      }`}
    />
  </button>
);

const SettingsModal = ({ isOpen, onClose }) => {
  const [settings, setSettings] = useState(messagesSettings);
  const [isRendering, setIsRendering] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsRendering(true);
      const timer = setTimeout(() => {
        setAnimate(true);
      }, 50);
      return () => clearTimeout(timer);
    } else {
      setAnimate(false);
      const timer = setTimeout(() => {
        setIsRendering(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleToggle = (id, type) => {
    setSettings((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, [type]: !item[type] } : item
      )
    );
  };

  if (!isRendering) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-start" dir="rtl">
      
      <div 
        className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-500 ease-in-out ${
          animate ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      ></div>

      <div 
        className={`relative w-full max-w-[400px] h-full bg-white shadow-2xl flex flex-col overflow-y-auto transition-transform duration-500 ease-in-out ${
          animate ? "translate-x-0" : "translate-x-full"
        }`}
      >
        
        <div className="sticky top-0 bg-white z-10 flex items-center justify-between p-5 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <SettingsIcon />
            <h2 className="text-sm font-bold text-gray-800">تنظیمات پیام‌ها</h2>
          </div>
          <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-full transition-colors cursor-pointer">
            <CloseIcon />
          </button>
        </div>

        <div className="p-5 flex flex-col gap-4">
          
          <div className="border border-gray-200 rounded-2xl p-4 bg-[#f8f9fa] flex flex-col gap-3">
            <div className="flex items-start justify-between">
              <div className="flex flex-col gap-1 ml-4">
                <h3 className="text-sm font-bold text-gray-800">اعلان‌های مرورگر</h3>
                <p className="text-xs text-gray-500 leading-5">
                  برای دریافت اطلاعات سفارش‌های سفارش و پیشنهادها حتی بیرون از سایت
                </p>
              </div>
              <div className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center flex-shrink-0">
                <BellIcon />
              </div>
            </div>
            <div className="flex justify-end mt-1">
              <button className="bg-[#1e2b4d] hover:bg-[#15203b] text-white px-6 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer">
                فعال کردن
              </button>
            </div>
          </div>

          <div className="border border-gray-200 rounded-2xl p-4 flex flex-col gap-3">
            <div className="flex items-start justify-between">
              <div className="flex flex-col gap-1 ml-4">
                <h3 className="text-sm font-bold text-gray-800">تنظیمات و ترجیحات دریافت پیام‌ها</h3>
                <p className="text-xs text-gray-500 leading-5">
                  شخصی‌سازی نوع پیام‌ها و کانال‌های دریافت اعلان در سایت و مرورگر
                </p>
              </div>
              <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center flex-shrink-0">
                <SettingsIcon />
              </div>
            </div>
            <div className="flex justify-end mt-1">
              <button onClick={onClose} className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-5 py-1.5 rounded-xl text-xs transition-colors cursor-pointer">
                بستن تنظیمات
              </button>
            </div>
          </div>

          <div className="border border-gray-200 rounded-2xl divide-y divide-gray-100">
            {settings.map((item) => (
              <div key={item.id} className="p-4 flex flex-col gap-4">
                <div className="flex items-start justify-between">
                  <div className="flex flex-col gap-1 ml-4">
                    <h3 className="text-xs font-bold text-gray-800">{item.title}</h3>
                    <p className="text-[11px] text-gray-500 leading-5">{item.desc}</p>
                  </div>
                  <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 text-gray-400">
                    {item.icon}
                  </div>
                </div>
                
                <div className="flex items-center justify-start gap-6 mt-1">
                  <div className="flex items-center gap-2">
                    <ToggleSwitch isOn={item.defaultSms} onToggle={() => handleToggle(item.id, "defaultSms")} />
                    <span className="text-[11px] text-gray-600">پیام سایت</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ToggleSwitch isOn={item.defaultEmail} onToggle={() => handleToggle(item.id, "defaultEmail")} />
                    <span className="text-[11px] text-gray-600">پوش</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

const Messages = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="w-full flex flex-col gap-6 text-sm relative" dir="rtl">
      
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center hover:bg-gray-100 transition-colors cursor-pointer"
          >
            <SettingsIcon />
          </button>
          <div className="flex items-center gap-1.5 text-xs text-blue-500 cursor-pointer">
            <CheckCircleIcon />
            <span>همه را خوانده‌ام</span>
          </div>
        </div>
        <div className="text-right">
          <h2 className="text-lg font-extrabold text-gray-800 mb-1">پیام‌ها</h2>
          <p className="text-xs text-gray-500">آخرین اطلاعیه‌ها و رویدادهای حساب شما</p>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-1.5 px-5 py-2 rounded-xl text-xs font-medium transition-colors cursor-pointer
              ${
                activeTab === tab.id
                  ? "bg-[#1e2b4d] text-white shadow-sm"
                  : "bg-gray-50 text-gray-600 border border-gray-200 hover:bg-gray-100"
              }
            `}
          >
            <span className={activeTab === tab.id ? "text-white" : "text-gray-400"}>
              {tab.icon}
            </span>
            {tab.label}
          </button>
        ))}
      </div>

      <div className="w-full min-h-[300px] border-2 border-dashed border-gray-200 rounded-3xl flex flex-col items-center justify-center p-8 bg-gray-50/30">
        <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
          <EmptyMailIcon />
        </div>
        <h3 className="text-sm font-bold text-gray-700 mb-2">پیامی برای نمایش وجود ندارد</h3>
        <p className="text-xs text-gray-500 text-center">اطلاعیه‌ها، رویدادها و تخفیف‌ها در این بخش نمایش داده خواهند شد.</p>
      </div>

      <SettingsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

    </div>
  );
};

export default Messages;