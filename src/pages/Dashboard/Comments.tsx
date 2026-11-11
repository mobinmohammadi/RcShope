import React, { useState } from "react";

const StarIcon = ({ filled }: { filled: boolean }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth={1.5} className={`w-5 h-5 ${filled ? "text-yellow-400" : "text-gray-300"}`}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
  </svg>
);

const CommentIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-gray-500">
    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
  </svg>
);

const pendingComments = [
  {
    id: 1,
    title: "گوشی موبایل اپل مدل iPhone 17 Pro Max ZAA تک سیم کارت + eSIM ظرفیت ۲۵۶ گیگابایت و رم ۱۲...",
    date: "۱۶ شهریور ۱۴۰۵",
    orderCode: "۰۲۵۹۱",
    image: "/1.webp",
  },
  {
    id: 2,
    title: "هدفون بلوتوثی اپل مدل AirPods Pro 3",
    date: "۱۶ شهریور ۱۴۰۵",
    orderCode: "۰۲۵۹۱",
    image: "/3.webp",
  },
];

const myComments = [
  {
    id: 3,
    title: "کابل تبدیل USB-C به USB-C اینول طول ۱ متر",
    date: "۱۶ شهریور ۱۴۰۵",
    orderCode: "۰۲۵۹۱",
    image: "/products/2.webp",
  },
];

const Comments = () => {
  const [activeTab, setActiveTab] = useState("pending");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const renderStars = () => {
    return (
      <div className="flex items-center gap-1" dir="ltr">
        {[1, 2, 3, 4, 5].map((star) => (
          <StarIcon key={star} filled={true} />
        ))}
      </div>
    );
  };

  return (
    <div className="w-full flex flex-col gap-6 text-sm" dir="rtl">
      
      <div className="flex flex-col items-end gap-4">
        <h2 className="text-lg font-extrabold text-gray-800">دیدگاه‌ها</h2>
      </div>

      <div className="flex items-center w-full border-b border-gray-200">
        <button
          onClick={() => handleTabClick("pending")}
          className={`flex-1 text-center py-3 text-xs font-bold transition-colors border-b-2 ${
            activeTab === "pending" ? "border-[#1e2b4d] text-[#1e2b4d]" : "border-transparent text-gray-400 hover:text-gray-600"
          }`}
        >
          در انتظار دیدگاه
        </button>
        <button
          onClick={() => handleTabClick("mine")}
          className={`flex-1 text-center py-3 text-xs font-bold transition-colors border-b-2 ${
            activeTab === "mine" ? "border-[#1e2b4d] text-[#1e2b4d]" : "border-transparent text-gray-400 hover:text-gray-600"
          }`}
        >
          دیدگاه‌های من
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {(activeTab === "pending" ? pendingComments : myComments).map((comment) => (
          <div key={comment.id} className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm flex flex-col gap-4">
            
            <div className="flex items-start justify-between gap-4">
              <div className="flex flex-col gap-2 flex-1">
                <h3 className="text-xs font-bold text-gray-800 leading-6 line-clamp-2">
                  {comment.title}
                </h3>
                <p className="text-[10px] text-gray-400">
                  {comment.date} | سفارش {comment.orderCode}
                </p>
              </div>
              <div className="w-16 h-16 rounded-xl border border-gray-100 bg-gray-50 p-1 flex-shrink-0">
                <img src={comment.image} alt={comment.title} className="w-full h-full object-contain" />
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-gray-100 pt-4 mt-2">
              <span className="text-xs font-bold text-gray-700">امتیاز دهید!</span>
              {renderStars()}
            </div>

            <button className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-gray-300 text-gray-600 hover:bg-gray-50 transition-colors text-xs">
              <CommentIcon />
              ثبت دیدگاه
            </button>

          </div>
        ))}
      </div>

    </div>
  );
};

export default Comments;