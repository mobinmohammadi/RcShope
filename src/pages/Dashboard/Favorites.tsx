import React from "react";

const TrashIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
  </svg>
);

const CartPlusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-white">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75v4.5m0-4.5h4.5m-4.5 0h-4.5" />
  </svg>
);

const favorites = [
  {
    id: 1,
    title: "هارد اکسترنال ای دیتا مدل HD710 Pro ظرفیت ۱ ترابایت",
    price: "۱۲,۵۰۰,۰۰۰",
    image: "/1.webp",
  },
];

const Favorites = () => {
  return (
    <div className="w-full flex flex-col gap-6 text-sm" dir="rtl">
      
      <div className="text-right">
        <h2 className="text-lg font-extrabold text-gray-800 mb-1">علاقه‌مندی‌های من</h2>
        <p className="text-xs text-gray-500">محصولات خریداری‌شده برای بررسی و خرید بعدی</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2  gap-4">
        {favorites.map((item) => (
          <div key={item.id} className="bg-white rounded-2xl border border-gray-200 p-4 flex flex-col justify-between shadow-sm relative">
            
            <div className="w-full h-56 flex items-center justify-center mb-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-contain"
              />
            </div>

            <h3 className="text-xs font-bold text-gray-800 text-right leading-6 mb-6 line-clamp-2 h-12">
              {item.title}
            </h3>

            <div className="flex items-end justify-between mt-auto pt-4 border-t border-gray-100">
              
              <div className="flex items-center gap-2">
                <button className="bg-gray-50 hover:bg-gray-100 text-gray-500 border border-gray-200 px-3 py-2 rounded-xl text-xs flex items-center gap-1.5 transition-colors cursor-pointer">
                  <TrashIcon />
                  <span>حذف</span>
                </button>
                <button className="bg-[#1e2b4d] hover:bg-[#15203b] text-white px-4 py-2 rounded-xl text-xs flex items-center gap-1.5 transition-colors cursor-pointer shadow-sm">
                  <CartPlusIcon />
                  <span>افزودن به سبد</span>
                </button>
              </div>

              <div className="flex items-center gap-1 text-[#1e2b4d] font-extrabold">
                <span className="text-sm">{item.price}</span>
                <span className="text-[10px] font-normal text-gray-500">تومان</span>
              </div>

            </div>

          </div>
        ))}
      </div>

    </div>
  );
};

export default Favorites;