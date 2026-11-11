import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import ProductModal from "../../../utils/ModalAddToBasket";

// --- آیکون‌ها ---
const HeartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-5 h-5 text-red-400 hover:text-red-500 transition-colors"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
    />
  </svg>
);

const CartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-5 h-5 text-white"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
    />
  </svg>
);

// --- داده‌های نمونه ---
const tabs = ["محصولات مرتبط", "لپ تاپ", "لوازم جانبی", "هارد اکسترنال"];

const products = [
  {
    id: 1,
    title: "اس اس دی اینترنال سیلیکون پاور مدل A55 ظرفیت 512 گیگابایت",
    price: "۹,۹۰۰,۰۰۰",
    oldPrice: "۱۲,۴۰۰,۰۰۰",
    discount: "۲۰٪",
    image: "/products/2.webp", // تصویر مشکی
    isSpecial: false,
  },
  {
    id: 2,
    title: "فلش مموری ۲۵۶ گیگابایت سیلیکون پاور مدل Blaze B10",
    price: "۴,۰۰۰,۰۰۰",
    oldPrice: "۵,۲۰۰,۰۰۰",
    discount: "۲۳٪",
    image: "/2.png", // تصویر سفید
    isSpecial: true,
  },
  {
    id: 3,
    title: "هارد اکسترنال ای دیتا مدل HD710 Pro ظرفیت ۱ ترابایت",
    price: "۱۲,۵۰۰,۰۰۰",
    oldPrice: "۱۵,۰۰۰,۰۰۰",
    discount: "۱۷٪",
    image: "/1.webp",
    isSpecial: false,
  },
  {
    id: 4,
    title: "فلش مموری سیلیکون پاور مدل Touch T06 ظرفیت ۶۴ گیگابایت",
    price: "۹۲۱,۰۰۰",
    oldPrice: "۱,۱۰۰,۰۰۰",
    discount: "۱۶٪",
    image: "/products/1.jpg", // تصویر تیره
    isSpecial: true,
  },
  {
    id: 5,
    title:
      "حافظه اس اس دی اینترنال وسترن دیجیتال مدل Green ظرفیت ۲۴۰ گیگابایت با رابط SATA III",
    price: "۶,۹۰۰,۰۰۰",
    oldPrice: "۸,۲۰۰,۰۰۰",
    discount: "۱۶٪",
    image: "/2.png", // تصویر سبز
    isSpecial: true,
  },
];

const RelatedProducts = () => {
  const [activeTab, setActiveTab] = useState("محصولات مرتبط");

  const [isOpen, setIsOpen] = useState < Boolean > false;

  const onClose = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full bg-[#f8f9fa] py-8 px-4  font-Dana">
      <div className=" mx-auto bg-white rounded-3xl shadow-sm border border-gray-100 p-4 md:p-6">
        {/* هدر بخش (عنوان و تب‌ها) */}
        <div className="flex flex-col md:flex-row items-centrg mb-6 gap-4 border-b border-gray-100 pb-4">
          <h2 className="text-lg md:text-xl font-extrabold text-gray-800">
            محصولات مرتبط
          </h2>
          <div className="flex flex-wrap gap-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-1.5 rounded-lg text-xs md:text-sm font-medium transition-colors cursor-pointer
                  ${
                    activeTab === tab
                      ? "bg-[#2c3e6b] text-white"
                      : "bg-gray-50 text-gray-500 hover:bg-gray-100"
                  }
                `}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* اسلایدر محصولات */}
        <Swiper
          modules={[FreeMode]}
          spaceBetween={16}
          slidesPerView={1}
          freeMode={true}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 5 },
          }}
          className="!pb-4 cursor-grab active:cursor-grabbing"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id} className="h-auto">
              <div className="bg-white rounded-2xl border border-gray-200 flex flex-col h-[470px] overflow-hidden relative group">
                {product.isSpecial && (
                  <div className="bg-[#fff1f2] text-red-500 text-[11px] font-bold py-1.5 px-3 flex items-center justify-between w-full border-b border-red-100">
                    <span>فروش ویژه</span>
                    <span className="font-mono tracking-wider" dir="ltr">
                      ۱۲ : ۴۵ : ۰۲
                    </span>
                  </div>
                )}

                <div className="p-4 flex flex-col flex-1">
                  {/* آیکون قلب */}
                  <div className="flex justify-start mb-2 z-10">
                    <button className="p-1.5 bg-white rounded-full cursor-pointer hover:bg-red-50 transition-colors">
                      <HeartIcon />
                    </button>
                  </div>

                  {/* تصویر محصول */}
                  <div className="relative w-full h-40 flex items-center justify-center mb-4 pointer-events-none">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* عنوان محصول */}
                  <h3 className="text-xs md:text-[13px] font-bold text-gray-700 text-center line-clamp-2 leading-6 mb-4 h-12">
                    {product.title}
                  </h3>

                  {/* بخش قیمت و دکمه خرید */}
                  <div className="flex items-end justify-between mt-auto pt-3 border-t border-gray-100">
                    <div className="flex flex-col">
                      {/* قیمت قبلی و درصد تخفیف */}
                      <div className="flex items-center gap-1.5 mb-1">
                        <span className="bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded font-bold">
                          {product.discount}
                        </span>
                        <span className="text-xs text-gray-400 line-through">
                          {product.oldPrice}
                        </span>
                      </div>
                      {/* قیمت جدید */}
                      <div className="flex items-center gap-1 text-[#2c3e6b] font-extrabold">
                        <span className="text-sm">{product.price}</span>
                        <span className="text-[10px] font-normal text-gray-500">
                          تومان
                        </span>
                      </div>
                    </div>

                    {/* دکمه سبد خرید */}
                    <button onClick={onClose} className="bg-[#2c3e6b] hover:bg-[#1e2b4d] text-white p-2.5 rounded-xl transition-colors shadow-sm cursor-pointer">
                      <CartIcon />
                    </button>
                  </div>
                </div>
              </div>
              <ProductModal isOpen={isopen} onClose={onclose} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default RelatedProducts;
