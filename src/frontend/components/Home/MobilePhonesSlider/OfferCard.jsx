import React from 'react';
import { LuHeart, LuShoppingCart } from 'react-icons/lu';

export default function OfferCard({ product }) {
  return (
    <div className="relative group h-full">
      <div
        className="hidden md:block pointer-events-none absolute bottom-px z-10 inset-x-0 h-0.5 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(70px circle at 50% 0%, var(--primary, #3b82f6) 0%, color-mix(in srgb, var(--primary, #3b82f6) 45%, transparent) 45%, transparent 75%)",
          maskImage:
            "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
        }}
      ></div>

      <div className="relative z-10 bg-white dark:bg-gray-800 rounded-2xl ring-1 ring-gray-200 dark:ring-gray-700 shadow-sm overflow-hidden p-2 sm:p-3 flex flex-col h-full transition-all duration-300 group-hover:shadow-md group-hover:-translate-y-1">
        {/* علاقه‌مندی - فقط دسکتاپ */}
        <div className="hidden lg:block absolute top-2 left-2 z-10 transition-all">
          <button
            type="button"
            aria-label="افزودن به علاقه‌مندی"
            className="p-2 rounded-full shadow-md transition bg-white dark:bg-gray-700 hover:bg-rose-500 hover:text-white text-rose-500"
          >
            <LuHeart className="w-4 h-4" />
          </button>
        </div>

        {/* امتیاز */}
        {product.rating && (
          <div className="absolute top-2 right-2 z-10 flex items-center gap-1 bg-white/80 dark:bg-black/60 backdrop-blur-md px-1.5 sm:px-2 py-0.5 rounded-xl shadow-sm">
            <span className="text-yellow-400 text-[10px] sm:text-xs">★</span>
            <span className="text-gray-800 dark:text-gray-100 font-medium text-[10px] sm:text-xs lg:text-sm pt-0.5">
              {product.rating}
            </span>
          </div>
        )}

        {/* تصویر */}
        <div className="relative w-full mb-2 sm:mb-3 text-center rounded-xl overflow-hidden bg-gray-50 dark:bg-gray-900">
          <a
            className="flex items-center justify-center w-full aspect-square"
            href={product.href}
          >
            <img
              className="w-full h-full object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
              alt={product.alt}
              loading="lazy"
              decoding="async"
              src={product.image}
            />
          </a>
        </div>

        {/* عنوان */}
        <h3 className="text-xs sm:text-sm font-semibold leading-5 sm:leading-6 line-clamp-2 min-h-[2.5rem] sm:min-h-[3rem] mb-1">
          <a
            className="text-gray-800 dark:text-gray-100 hover:text-primary-600 transition-colors"
            href={product.href}
          >
            {product.title}
          </a>
        </h3>

        {/* قیمت و دکمه */}
        <div className="flex flex-col justify-between mt-auto pt-2 sm:pt-3 gap-2 w-full">
          {/* قیمت */}
          <div className="flex flex-col items-center sm:items-end w-full">
            {product.discount && (
              <div className="flex items-center text-gray-400 text-[10px] sm:text-xs mt-0.5 gap-1">
                <del className="line-through">{product.oldPrice}</del>
                <span className="px-1.5 py-px flex items-center justify-center font-medium bg-red-600 text-white rounded-xl text-[10px] sm:text-xs z-10">
                  {product.discount}
                </span>
              </div>
            )}

            <p className="text-sm sm:text-base font-bold text-primary-600 dark:text-primary-400 flex items-center gap-1">
              {product.price}
              <span className="text-[10px] sm:text-sm">تومان</span>
            </p>
          </div>

          {/* دکمه */}
          <div className="w-full">
            <button
              type="button"
              className="w-full bg-[#1B3F8D] hover:bg-[#062262] transition-all cursor-pointer rounded-xl h-8 sm:h-9 flex items-center justify-center gap-1.5 text-white"
            >
              <span className="text-xs sm:text-sm">افزودن به سبد</span>
              <LuShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}