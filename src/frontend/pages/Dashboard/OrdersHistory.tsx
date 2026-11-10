import React, { useState } from "react";

const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-gray-400">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
  </svg>
);

const ChevronLeftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-gray-400">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
  </svg>
);

const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-yellow-500">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const ProcessingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-blue-500">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
  </svg>
);

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-green-500">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const ReturnIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-gray-500">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
  </svg>
);

const AllOrdersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
  </svg>
);

const tabs = [
  { id: "all", label: "همه", icon: <AllOrdersIcon />, active: true },
  { id: "pending", label: "در انتظار پرداخت", icon: <ClockIcon /> },
  { id: "processing", label: "در حال انجام", icon: <ProcessingIcon /> },
  { id: "completed", label: "تکمیل شده", icon: <CheckIcon /> },
  { id: "returned", label: "مرجوع/لغو شده", icon: <ReturnIcon /> },
];

const orders = [
  {
    id: "۰۲۶۶۹",
    date: "۱۳ آبان ۱۴۰۵",
    time: "۱۴:۳۰",
    status: "در انتظار پرداخت",
    statusColor: "text-yellow-600 bg-yellow-50 border-yellow-100",
    statusIcon: <ClockIcon />,
    total: "۷۴۰,۹۰۰,۰۰۰",
    itemsCount: "۴ کالا",
    images: [
      "https://placehold.co/100x100/ef4444/ffffff?text=1",
      "https://placehold.co/100x100/1f2937/ffffff?text=2",
      "https://placehold.co/100x100/10b981/ffffff?text=3",
    ],
    action: "پرداخت سفارش",
  },
  {
    id: "۰۲۵۹۷",
    date: "۱۶ شهریور ۱۴۰۵",
    status: "در انتظار پرداخت",
    statusColor: "text-yellow-600 bg-yellow-50 border-yellow-100",
    statusIcon: <ClockIcon />,
    total: "۱۹۷,۸۰۰,۰۰۰",
    itemsCount: "۱ کالا",
    images: ["https://placehold.co/100x100/3b82f6/ffffff?text=4"],
    action: "پرداخت سفارش",
  },
  {
    id: "۰۲۵۹۱",
    date: "۱۶ شهریور ۱۴۰۵",
    status: "در حال آماده‌سازی",
    statusColor: "text-blue-600 bg-blue-50 border-blue-100",
    statusIcon: <ProcessingIcon />,
    total: "۱۳۶,۶۳۳,۰۰۰",
    itemsCount: "۳ کالا",
    images: [
      "https://placehold.co/100x100/e5e7eb/374151?text=5",
      "https://placehold.co/100x100/f3f4f6/374151?text=6",
      "https://placehold.co/100x100/f97316/ffffff?text=7",
    ],
    action: null,
  },
];

const OrdersHistory = () => {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className="w-full flex flex-col gap-5 text-sm" dir="rtl">
      
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-extrabold text-gray-800 mb-1">سفارش‌های من</h2>
          <p className="text-xs text-gray-500">جزئیات پرداخت، ارسال، رهگیری و اقلام هر سفارش</p>
        </div>
        <div className="relative w-full md:w-64">
          <input 
            type="text" 
            placeholder="جستجو در سفارش‌ها" 
            className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2 pr-10 pl-4 text-xs outline-none focus:border-blue-400 focus:bg-white transition-colors"
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <SearchIcon />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2 border-b border-gray-100 pb-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-medium transition-colors cursor-pointer
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

      <div className="flex flex-col gap-4">
        {orders.map((order) => (
          <div key={order.id} className="bg-white rounded-2xl border border-gray-200 p-4 shadow-sm flex flex-col gap-4">
            
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-100 pb-3">
              <div className="flex items-center gap-2">
                <div className={`flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-bold border ${order.statusColor}`}>
                  {order.statusIcon}
                  <span>{order.status}</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-gray-500">
                <div className="flex items-center gap-1">
                  <span className="text-gray-400">کد سفارش:</span>
                  <span className="font-bold text-gray-700">{order.id}</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-gray-400">مبلغ:</span>
                  <span className="font-bold text-gray-700">{order.total} تومان</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-gray-400">تاریخ:</span>
                  <span className="font-bold text-gray-700">{order.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-gray-400">اقلام:</span>
                  <span className="font-bold text-gray-700">{order.itemsCount}</span>
                </div>
              </div>

              <button className="text-gray-400 hover:text-gray-700 transition-colors cursor-pointer">
                <ChevronLeftIcon />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {order.action && (
                  <button className="bg-[#1e2b4d] hover:bg-[#15203b] text-white px-6 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer">
                    {order.action}
                  </button>
                )}
              </div>

              <div className="flex items-center gap-2">
                {order.images.map((img, idx) => (
                  <div key={idx} className="w-12 h-12 rounded-lg border border-gray-100 bg-gray-50 p-1">
                    <img src={img} alt="product" className="w-full h-full object-contain" />
                  </div>
                ))}
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};

export default OrdersHistory;