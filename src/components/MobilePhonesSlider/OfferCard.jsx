import React from 'react';
import { LuHeart, LuShoppingCart } from 'react-icons/lu';

export default function OfferCard({ product }) {
  return (
    <div className="relative group h-full">
      {/* خط گرادیانت هاور در پایین کارت */}
      <div 
        className="hidden md:block pointer-events-none absolute bottom-px z-10 inset-x-0 h-[2px] rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden="true" 
        style={{ 
          background: "radial-gradient(70px circle at 50% 0%, var(--primary, #3b82f6) 0%, color-mix(in srgb, var(--primary, #3b82f6) 45%, transparent) 45%, transparent 75%)",
          maskImage: "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)"
        }}
      ></div>

      <div className="relative z-10 bg-white dark:bg-gray-800 rounded-2xl ring-1 ring-gray-200 dark:ring-gray-700 shadow-sm overflow-hidden p-3 flex flex-col h-full transition-all duration-300 group-hover:shadow-md group-hover:-translate-y-1">
        
        {/* دکمه علاقه‌مندی */}
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
          <div className="absolute top-2 right-2 z-10 flex items-center gap-1 bg-white/80 dark:bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-xl shadow-sm text-sm">
            <span className="text-yellow-400 text-xs">★</span>
            <span className="text-gray-800 dark:text-gray-100 font-medium text-xs lg:text-sm pt-0.5">{product.rating}</span>
          </div>
        )}

        {/* تصویر */}
        <div className="relative w-full mb-3 text-center rounded-xl overflow-hidden bg-gray-50 dark:bg-gray-900">
          <a className="block w-full h-full aspect-square" href={product.href}>
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
        <h3 className="text-sm font-semibold leading-6 line-clamp-2 min-h-[3rem] mb-1">
          <a className="text-gray-800 dark:text-gray-100 hover:text-primary-600 transition-colors" href={product.href}>
            {product.title}
          </a>
        </h3>

        {/* قیمت و دکمه */}
        <div className="flex flex-col sm:flex-row-reverse sm:items-end justify-between mt-auto pt-3 gap-3 sm:gap-1 w-full">
          <div className="flex flex-col flex-1 items-center sm:items-end">
            {product.discount && (
              <div className="flex items-center text-gray-400 text-xs mt-0.5 gap-1">
                <del className="line-through">{product.oldPrice}</del>
                <span className="p-1.5 py-px flex items-center justify-center font-medium bg-red-600 text-white rounded-xl text-xs z-10">
                  {product.discount}
                </span>
              </div>
            )}

            <p className="text-base font-bold text-primary-600 dark:text-primary-400 flex items-center gap-1">
              {product.price}
              <span className="text-sm">تومان</span>
            </p>
          </div>

          <div className="flex justify-center sm:justify-start w-full sm:w-auto">
            <button 
              type="button" 
              className="w-full sm:w-auto sm:min-w-0 sm:px-3 rounded-xl h-9 flex items-center justify-center bg-primary-600 hover:bg-primary-700 text-white transition"
            >
              <span className="sm:hidden text-sm">افزودن به سبد</span>
              <LuShoppingCart className="w-5 h-5 hidden sm:block" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}