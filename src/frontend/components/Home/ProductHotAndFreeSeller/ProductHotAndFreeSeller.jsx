import React, { useState } from "react";
import ProductModal from "../../../../utils/ModalAddToBasket";

const products = [
  { id: 1, title: "هارد اکسترنال ۱ ترابایت ای دیتا مدل HDV6G", price: "۱۲,۳۵۰,۰۰۰", image: "/2.png" },
  { id: 2, title: "دسته بازی پلی استیشن ۵ سونی مدل CFI-ZCT1W سری DualSense", price: "۱۳,۸۶۰,۰۰۰", image: "/2.png" },
  { id: 3, title: "فلش مموری سیلیکون پاور مدل Touch T06 ظرفیت ۶۴ گیگابایت", price: "۹۲۱,۰۰۰", image: "/2.png" },
  { id: 4, title: "فلش مموری ۲۵۶ گیگابایت سیلیکون پاور مدل Blaze B10", price: "۴,۰۰۰,۰۰۰", image: "/2.png" },
  { id: 5, title: "حافظه اس اس دی اینترنال وسترن دیجیتال مدل Green ظرفیت ۲۴۰ گیگابایت با رابط...", price: "۶,۹۰۰,۰۰۰", image: "/2.png" },
  { id: 6, title: "اس اس دی اینترنال سیلیکون پاور مدل A55 ظرفیت ۵۱۲ گیگابایت", price: "۹,۹۰۰,۰۰۰", image: "/2.png" },
  { id: 7, title: "لپ تاپ اپل مدل MacBook Pro 14 اینچی MDE14 2025 LLA-M5-16GB RAM-1TB SSD", price: "۳۱۵,۸۶۰,۰۰۰", image: "/2.png" },
  { id: 8, title: "گوشی موبایل اپل مدل iPhone 17 Pro Max ظرفیت 256 گیگ با کارت eSim", price: "۳۱۰,۰۰۰,۰۰۰", image: "/2.png" },
  { id: 9, title: "کابل تبدیل USB-C به USB-C اینول طول ۱ متر", price: "۲,۱۰۰,۰۰۰", image: "/2.png" },
  { id: 10, title: "هدفون بلوتوثی اپل مدل AirPods Pro 3", price: "۳۶,۰۰۰,۰۰۰", image: "/2.png" },
  { id: 11, title: "اپل واچ مدل SE Gen2 2024 سایز ۴۴ میلی متری", price: "۳۱,۵۵۴,۰۰۰", image: "/2.png" },
  { id: 12, title: "استیکر لپ تاپ پیکسل مدل نقشه ایران سنتی", price: "۶۰,۰۰۰", image: "/2.png" },
];

const FireIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 80"
      className="w-10 h-12 mb-2 md:w-12 md:h-14"
      fill="none"
    >
      <defs>
        <linearGradient id="fireGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFD700" />
          <stop offset="40%" stopColor="#FF8C00" />
          <stop offset="100%" stopColor="#FF4500" />
        </linearGradient>
        <linearGradient id="smokeGradient" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#9CA3AF" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#E5E7EB" stopOpacity="0" />
        </linearGradient>
      </defs>

      <style>
        {`
          @keyframes smokeRise {
            0% { transform: translateY(0) scale(1); opacity: 0.8; }
            100% { transform: translateY(-20px) scale(1.8); opacity: 0; }
          }
          @keyframes flameFlicker {
            0%, 100% { transform: scale(1) rotate(0deg); }
            25% { transform: scale(1.05) rotate(-2deg); }
            50% { transform: scale(0.95) rotate(2deg); }
            75% { transform: scale(1.02) rotate(-1deg); }
          }
          .smoke-1 { animation: smokeRise 2.5s ease-out infinite; }
          .smoke-2 { animation: smokeRise 2.5s ease-out 0.5s infinite; }
          .smoke-3 { animation: smokeRise 2.5s ease-out 1s infinite; }
          .flame-main { animation: flameFlicker 1.2s ease-in-out infinite; transform-origin: center bottom; }
        `}
      </style>

      <circle cx="32" cy="20" r="6" fill="url(#smokeGradient)" className="smoke-1" />
      <circle cx="26" cy="18" r="5" fill="url(#smokeGradient)" className="smoke-2" />
      <circle cx="38" cy="16" r="5" fill="url(#smokeGradient)" className="smoke-3" />

      <g className="flame-main">
        <path
          d="M32 75C21.5 75 13 66.5 13 56C13 48 17 41 22 35C22 35 21 43 26 46C26 46 25 38 30 30C30 30 29 38 33 42C33 42 31 33 36 25C36 25 35 34 39 39C39 39 38 30 43 22C43 22 42 31 46 37C50 43 51 48 51 56C51 66.5 42.5 75 32 75Z"
          fill="url(#fireGradient)"
        />
        <path
          d="M32 70C25 70 20 64.5 20 57.5C20 52 23 47 26.5 43C26.5 43 26 48 29 50C29 50 28.5 44.5 32 39C32 39 31.5 45 34.5 48C34.5 48 33.5 42 37 37C37 37 36.5 43 39.5 47C43 51 44 54 44 57.5C44 64.5 39 70 32 70Z"
          fill="#FCD34D"
          opacity="0.8"
        />
        <ellipse cx="32" cy="62" rx="6" ry="8" fill="#FEF3C7" opacity="0.9" />
      </g>
    </svg>
  );
};

const ProductCard = ({ product, index, onClick }) => {
  return (
    <div
      onClick={() => onClick(product)}
      className="flex items-center justify-between bg-white border border-gray-200 rounded-2xl p-3 hover:shadow-lg transition-all duration-300 min-h-[110px] cursor-pointer"
    >
      <div className="flex flex-col justify-between h-full flex-1 pl-2">
        <h3 className="text-[13px] font-bold text-gray-800 line-clamp-2 leading-6 mb-3">
          {product.title}
        </h3>
        <div className="flex items-center mt-auto">
          <span className="text-[#008eb2] font-bold text-sm">
            {product.price}{" "}
            <span className="text-[10px] font-normal text-gray-500">تومان</span>
          </span>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between h-full min-w-[70px] relative">
        <div className="absolute top-0 left-0 bg-[#008eb2] text-white w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shadow-sm z-10">
          {index + 1}
        </div>
        <div className="w-20 h-20 flex items-center justify-center mt-2">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

const ProductHotAndFreeSeller = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <div className="w-full mx-auto p-4 bg-gray-50/50">
      <div className="flex flex-col items-center justify-center mb-10 mt-4">
        <div className="flex items-center gap-2">
          <FireIcon />
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900">
            محصولات داغ و پرفروش
          </h2>
        </div>
        <p className="text-gray-400 text-xs md:text-sm">سه ماه گذشته</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        {products.map((product, index) => (
          <ProductCard
            key={product.id}
            product={product}
            index={index}
            onClick={handleProductClick}
          />
        ))}
      </div>

      <ProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={selectedProduct}
      />
    </div>
  );
};

export default ProductHotAndFreeSeller;