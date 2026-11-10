import React, { useState } from 'react';
import { FaTimes, FaShoppingCart, FaShieldAlt, FaCheck } from 'react-icons/fa';

const ProductModal = ({ isOpen, onClose, product }) => {
  const [selectedColor, setSelectedColor] = useState('black');

  if (!isOpen || !product) return null;

  return (
    <div onClick={onClose} className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4" >
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
        
        <button
          onClick={onClose}
          className="absolute cursor-pointer top-4 right-4 p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors text-gray-500 z-10"
        >
          <FaTimes size={18} />
        </button>

        <div className="p-6 pt-10">
          
          <div className="relative flex items-start justify-center mb-8">
            <div className="text-center">
              <h2 className="text-xl font-bold text-gray-800 mb-2">انتخاب متغیر محصول</h2>
              <p className="text-sm text-gray-500">لطفاً یک گزینه را انتخاب کنید</p>
            </div>
            
            <div className="absolute left-0 top-0 w-16 h-12 rounded-lg overflow-hidden border border-gray-100 shadow-sm">
              <img
                src={product.image || "https://via.placeholder.com/64x48/1f2937/ffffff?text=Product"}
                alt={product.alt || "Product"}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <span className="text-gray-700 font-medium">رنگ‌بندی:</span>
              <span className="text-gray-800 text-sm">
                {selectedColor === 'black' ? 'آسمان شب' : 'سفید'}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setSelectedColor('black')}
                className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all ${
                  selectedColor === 'black'
                    ? 'border-gray-800 bg-gray-800 text-white'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                {selectedColor === 'black' && <FaCheck size={16} />}
              </button>

              <button
                onClick={() => setSelectedColor('white')}
                className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all ${
                  selectedColor === 'white'
                    ? 'border-gray-800 bg-white text-gray-800'
                    : 'border-gray-200 bg-gray-50 hover:border-gray-300'
                }`}
              >
                {selectedColor === 'white' && <FaCheck size={16} />}
              </button>
            </div>
          </div>

          <hr className="border-gray-100 mb-6" />

          {/* بخش قیمت */}
          <div className="flex justify-between items-end mb-8">
            <span className="text-gray-700 font-medium">قیمت محصول</span>
            <div className="flex flex-col items-end">
              {product.oldPrice && (
                <span className="text-xs text-gray-400 line-through mb-1 relative">
                  {product.oldPrice}
                </span>
              )}
              <div className="flex items-center gap-1">
                <span className="text-2xl font-bold text-blue-800">
                  {product.price || '۸۴۰,۰۰۰,۰۰۰'}
                </span>
                <span className="text-sm text-blue-800 mt-2">تومان</span>
              </div>
            </div>
          </div>

          {/* دکمه افزودن به سبد */}
          <button className="w-full bg-[#1e3a8a] hover:bg-blue-900 text-white font-bold text-lg py-4 rounded-2xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-900/20 active:scale-[0.98]">
            <FaShoppingCart size={20} />
            افزودن به سبد خرید
          </button>

          {/* تضمین */}
          <div className="mt-4 flex items-center justify-center gap-2 text-gray-500 text-xs">
            <FaShieldAlt size={14} />
            تضمین اصالت و کیفیت کالا
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;