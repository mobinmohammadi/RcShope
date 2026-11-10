import React, { useState } from 'react';

export default function SortBar() {
  // گزینه‌های مرتب‌سازی
  const sortOptions = [
    { id: 'newest', label: 'جدیدترین' },
    { id: 'popular', label: 'محبوب‌ترین' },
    { id: 'bestseller', label: 'پرفروش‌ترین' },
    { id: 'cheapest', label: 'ارزان‌ترین' },
    { id: 'most_expensive', label: 'گران‌ترین' },
  ];

  // استیت برای نگهداری گزینه انتخاب شده (پیش‌فرض: جدیدترین)
  const [activeSort, setActiveSort] = useState('newest');

  return (
    <div 
      className="w-full bg-white border border-gray-100 rounded-xl px-4 py-3 flex items-center  shadow-sm " 
    >
      {/* آیکون و عنوان مرتب‌سازی */}
      <div className="flex items-center gap-2 text-gray-500">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-5 w-5" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor" 
          strokeWidth={1.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
        </svg>
        <span className="text-sm font-medium">مرتب‌سازی:</span>
      </div>

      {/* لیست گزینه‌ها */}
      <div className="flex mr-5  items-center gap-2 md:gap-4 overflow-x-auto hide-scrollbar">
        {sortOptions.map((option) => (
          <button
            key={option.id}
            onClick={() => setActiveSort(option.id)}
            className={`text-sm cursor-pointer transition-colors duration-200 whitespace-nowrap px-3 py-1.5 rounded-lg
              ${activeSort === option.id 
                ? 'bg-blue-50 text-[#2b4c8c] font-bold' // استایل حالت فعال
                : 'text-gray-500 hover:text-gray-800 font-medium' // استایل حالت غیرفعال
              }`}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}