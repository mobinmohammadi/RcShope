import React, { useState } from 'react';
import { Range, getTrackBackground } from 'react-range';

export default function FilterSidebar() {
  // استیت‌های مدیریت فیلترها
  const [activeFilters, setActiveFilters] = useState([{ id: 1, label: 'کنسول بازی' }]);
  const [priceRange, setPriceRange] = useState([0, 10000000]); // [min, max]
  const [onlyAvailable, setOnlyAvailable] = useState(false);
  
  const MIN_PRICE = 0;
  const MAX_PRICE = 20000000;
  const STEP = 500000;

  // استیت برای باز و بسته بودن آکاردئون‌ها
  const [openSections, setOpenSections] = useState({
    category: false,
    price: true,
    brand: false,
    color: false,
    subject: false,
  });

  const toggleSection = (section) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const removeFilter = (id) => {
    setActiveFilters(activeFilters.filter(f => f.id !== id));
  };

  const clearAllFilters = () => {
    setActiveFilters([]);
    setPriceRange([MIN_PRICE, 10000000]);
    setOnlyAvailable(false);
  };

  return (
    <div className="w-full max-w-[300px]  bg-white border border-gray-200 rounded-2xl p-5 font-[Vazirmatn]" dir="rtl">
      
      {/* === هدر: فیلترهای فعال === */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex flex-col gap-2">
          <span className="text-sm font-bold text-gray-800">فیلترهای فعال</span>
          <div className="flex flex-wrap gap-2">
            {activeFilters.map(filter => (
              <span key={filter.id} className="flex items-center gap-2 bg-gray-100 text-gray-700 text-xs px-3 py-1.5 rounded-full">
                {filter.label}
                <button 
                  onClick={() => removeFilter(filter.id)}
                  className="text-red-500 hover:text-red-700 bg-red-100 rounded-full w-4 h-4 flex items-center justify-center text-[10px]"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        </div>
        
        <button 
          onClick={clearAllFilters}
          className="text-red-500 text-xs font-medium hover:text-red-700 whitespace-nowrap mt-1"
        >
          پاک کردن همه فیلترها
        </button>
      </div>

      <hr className="border-gray-200 mb-4" />

      {/* === بخش ۱: دسته بندی ها === */}
      <div className="border border-gray-200 rounded-xl mb-3 overflow-hidden">
        <button 
          onClick={() => toggleSection('category')}
          className="w-full flex justify-between items-center p-4 bg-white hover:bg-gray-50 transition-colors"
        >
          <span className="text-sm font-bold text-gray-800">دسته بندی ها</span>
          <svg className={`w-4 h-4 text-gray-500 transition-transform ${openSections.category ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {openSections.category && (
          <div className="p-4 pt-0 text-sm text-gray-600">
            <label className="flex items-center gap-2 mb-2 cursor-pointer"><input type="checkbox" className="rounded text-[#2b4c8c]" /> کنسول بازی</label>
            <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="rounded text-[#2b4c8c]" /> لوازم جانبی</label>
          </div>
        )}
      </div>

      {/* === بخش ۲: فیلتر براساس قیمت (با پکیج react-range) === */}
      <div className="border border-gray-200 rounded-xl mb-3 overflow-hidden">
        <button 
          onClick={() => toggleSection('price')}
          className="w-full flex justify-between items-center p-4 bg-white hover:bg-gray-50 transition-colors"
        >
          <span className="text-sm font-bold text-gray-800">فیلتر براساس قیمت</span>
          <svg className={`w-4 h-4 text-gray-500 transition-transform ${openSections.price ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </button>
        
        {openSections.price && (
          <div className="p-4 pt-0">
            {/* اینپوت‌های قیمت */}
            <div className="flex flex-col gap-3 mb-6">
              <div className="flex items-center border border-gray-300 rounded-lg p-2 bg-gray-50">
                <span className="text-gray-400 text-xs ml-2">از</span>
                <span className="text-sm font-bold text-gray-700 w-full text-center">
                  {priceRange[0].toLocaleString('fa-IR')}
                </span>
              </div>
              <div className="flex items-center border border-gray-300 rounded-lg p-2 bg-gray-50">
                <span className="text-gray-400 text-xs ml-2">تا</span>
                <span className="text-sm font-bold text-gray-700 w-full text-center">
                  {priceRange[1].toLocaleString('fa-IR')}
                </span>
              </div>
            </div>

            {/* اسلایدر قیمت با پکیج react-range */}
            <div className="px-2 pb-6">
              <Range
                values={priceRange}
                step={STEP}
                min={MIN_PRICE}
                max={MAX_PRICE}
                rtl={true} // فعال‌سازی حالت راست‌چین
                onChange={(values) => setPriceRange(values)}
                renderTrack={({ props, children }) => (
                  <div
                    {...props}
                    style={{
                      ...props.style,
                      height: '4px',
                      width: '100%',
                      borderRadius: '2px',
                      background: getTrackBackground({
                        values: priceRange,
                        colors: ['#e5e7eb', '#2b4c8c', '#e5e7eb'],
                        min: MIN_PRICE,
                        max: MAX_PRICE,
                        rtl: true
                      }),
                    }}
                  >
                    {children}
                  </div>
                )}
                renderThumb={({ props }) => (
                  <div
                    {...props}
                    style={{
                      ...props.style,
                      height: '16px',
                      width: '16px',
                      borderRadius: '50%',
                      backgroundColor: 'white',
                      border: '2px solid #2b4c8c',
                      outline: 'none',
                    }}
                  />
                )}
              />
              <div className="flex justify-between text-[10px] text-gray-400 mt-4">
                <span>ارزان‌ترین</span>
                <span>گران‌ترین</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* === بخش ۳: فقط محصولات موجود (Toggle) === */}
      <div className="border border-gray-200 rounded-xl mb-3 p-4 flex items-center justify-between">
        <span className="text-sm font-bold text-gray-800">فقط محصولات موجود</span>
        <button 
          onClick={() => setOnlyAvailable(!onlyAvailable)}
          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${onlyAvailable ? 'bg-[#2b4c8c]' : 'bg-gray-200'}`}
        >
          <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${onlyAvailable ? '-translate-x-6' : '-translate-x-1'}`} />
        </button>
      </div>

      {/* === بخش ۴: برند === */}
      <div className="border border-gray-200 rounded-xl mb-3 overflow-hidden">
        <button onClick={() => toggleSection('brand')} className="w-full flex justify-between items-center p-4 bg-white hover:bg-gray-50 transition-colors">
          <span className="text-sm font-bold text-gray-800">برند</span>
          <svg className={`w-4 h-4 text-gray-500 transition-transform ${openSections.brand ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
        </button>
        {openSections.brand && (
          <div className="p-4 pt-0 text-sm text-gray-600">محتوای برند...</div>
        )}
      </div>

      {/* === بخش ۵: رنگ === */}
      <div className="border border-gray-200 rounded-xl mb-3 overflow-hidden">
        <button onClick={() => toggleSection('color')} className="w-full flex justify-between items-center p-4 bg-white hover:bg-gray-50 transition-colors">
          <span className="text-sm font-bold text-gray-800">رنگ</span>
          <svg className={`w-4 h-4 text-gray-500 transition-transform ${openSections.color ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
        </button>
        {openSections.color && (
          <div className="p-4 pt-0 text-sm text-gray-600">محتوای رنگ...</div>
        )}
      </div>

      {/* === بخش ۶: موضوع === */}
      <div className="border border-gray-200 rounded-xl mb-3 overflow-hidden">
        <button onClick={() => toggleSection('subject')} className="w-full flex justify-between items-center p-4 bg-white hover:bg-gray-50 transition-colors">
          <span className="text-sm font-bold text-gray-800">موضوع</span>
          <svg className={`w-4 h-4 text-gray-500 transition-transform ${openSections.subject ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
        </button>
        {openSections.subject && (
          <div className="p-4 pt-0 text-sm text-gray-600">محتوای موضوع...</div>
        )}
      </div>

    </div>
  );
}