import React, { useState } from 'react';
// جایگزینی lucide-react با react-icons (مجموعه Lu = Lucide)
import { 
  LuSearch as Search, 
  LuShoppingBag as ShoppingBag, 
  LuMoon as Moon, 
  LuLogIn as LogIn, 
  LuPhone as Phone, 
  LuHeart as Heart, 
  LuFlame as Flame, 
  LuLayoutGrid as LayoutGrid, 
  LuChevronDown as ChevronDown, 
  LuMenu as Menu, 
  LuX as X, 
  LuUser as User, 
  LuChevronLeft as ChevronLeft,
  LuSmartphone as Smartphone, 
  LuHeadphones as Headphones, 
  LuWatch as Watch, 
  LuGamepad2 as Gamepad2, 
  LuRouter as Router, 
  LuLaptop as Laptop, 
  LuMonitor as Monitor, 
  LuTablet as Tablet, 
  LuBatteryCharging as BatteryCharging
} from 'react-icons/lu';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('موبایل');

  // دقت کنید که کلاس‌های سایزدهی (className) دقیقا مثل قبل کار می‌کنند
  const categories = [
    { id: 'mobile', title: 'موبایل', icon: <Smartphone className="h-4 w-4" />, subItems: ['مشاهده همه موبایل', 'موبایل اپل', 'موبایل سامسونگ', 'موبایل شیائومی'] },
    { id: 'accessories', title: 'لوازم جانبی', icon: <Headphones className="h-4 w-4" />, subItems: ['هدفون', 'هندزفری', 'پاوربانک', 'کیف و کاور'] },
    { id: 'storage', title: 'ابزار ذخیره سازی', icon: <BatteryCharging className="h-4 w-4" />, subItems: ['هارد اکسترنال', 'فلش مموری', 'کارت حافظه'] },
    { id: 'speaker', title: 'اسپیکر', icon: <Monitor className="h-4 w-4" />, subItems: ['اسپیکر بلوتوثی', 'اسپیکر کامپیوتر'] },
    { id: 'laptop', title: 'لپ تاپ', icon: <Laptop className="h-4 w-4" />, subItems: ['لپ تاپ اپل', 'لپ تاپ ایسوس', 'لپ تاپ لنوو'] },
    { id: 'headphone', title: 'هدفون', icon: <Headphones className="h-4 w-4" />, subItems: ['هدفون بی سیم', 'هدفون سیمی'] },
    { id: 'tablet', title: 'تبلت', icon: <Tablet className="h-4 w-4" />, subItems: ['تبلت سامسونگ', 'تبلت اپل'] },
    { id: 'console', title: 'کنسول بازی', icon: <Gamepad2 className="h-4 w-4" />, subItems: ['پلی استیشن', 'ایکس باکس'] },
    { id: 'modem', title: 'مودم', icon: <Router className="h-4 w-4" />, subItems: ['مودم ای‌دی‌اس‌ال', 'مودم ۴G'] },
    { id: 'smartwatch', title: 'ساعت هوشمند', icon: <Watch className="h-4 w-4" />, subItems: ['ساعت اپل', 'ساعت سامسونگ'] },
  ];

  const activeSubItems = categories.find(c => c.title === activeCategory)?.subItems || [];

  return (
    <header className="w-full border-b border-gray-200 bg-white relative z-50" dir="rtl">
      
      {/* ================= بخش بالایی هدر ================= */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:py-4 gap-2 lg:gap-4">
        
        {/* سمت راست: لوگو و دکمه منو موبایل */}
        <div className="flex items-center gap-2 lg:gap-3 shrink-0">
          <button 
            className="lg:hidden text-gray-700 p-1"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          <div className="flex items-center">
            <span className="text-2xl lg:text-3xl font-black text-[#0a3187] tracking-tighter block">پیکسل</span>
          </div>
        </div>

        {/* وسط: نوار جستجو */}
        <div className="relative hidden md:flex flex-1 max-w-2xl mx-auto px-2">
          <div className="flex w-full items-center rounded-full bg-gray-100 px-4 py-2 transition-colors focus-within:bg-gray-200 focus-within:ring-1 focus-within:ring-gray-300">
            <Search className="h-4 w-4 text-gray-400 ml-2 shrink-0" />
            <input
              type="text"
              placeholder="دنبال چی می‌گردی؟"
              className="w-full bg-transparent text-sm text-gray-700 outline-none placeholder:text-gray-400"
            />
          </div>
        </div>

        {/* سمت چپ: آیکون‌ها و دکمه ورود */}
        <div className="flex items-center gap-2 lg:gap-4 shrink-0">
          
          <button className="flex items-center gap-2 rounded-full bg-[#0a3187] px-3 py-1.5 lg:px-4 lg:py-2 text-sm text-white transition-colors hover:bg-blue-800">
            <LogIn className="h-4 w-4 lg:hidden" />
            <User className="h-5 w-5 lg:hidden" />
            <span className="hidden lg:block text-[13px]">ورود | ثبت نام</span>
          </button>

          <button className="hidden sm:block text-gray-700 hover:text-black transition-colors">
            <Moon className="h-5 w-5 lg:h-6 lg:w-6" />
          </button>

          <button 
            className="md:hidden text-gray-700 hover:text-black transition-colors p-1"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          >
            <Search className="h-5 w-5" />
          </button>

          <button className="relative text-gray-700 hover:text-black transition-colors p-1">
            <ShoppingBag className="h-5 w-5 lg:h-6 lg:w-6" />
            <span className="absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 text-[10px] font-bold text-white">
              ۰
            </span>
          </button>
        </div>
      </div>

      {/* ================= نوار جستجوی کشویی برای موبایل ================= */}
      {isSearchOpen && (
        <div className="md:hidden px-4 pb-3 w-full animate-in slide-in-from-top-2 duration-200">
          <div className="flex items-center rounded-full bg-gray-100 px-4 py-2 border border-gray-200">
            <Search className="h-4 w-4 text-gray-400 ml-2 shrink-0" />
            <input
              type="text"
              placeholder="دنبال چی می‌گردی؟"
              className="w-full bg-transparent text-sm text-gray-700 outline-none placeholder:text-gray-400"
              autoFocus
            />
          </div>
        </div>
      )}

      {/* ================= بخش پایینی هدر (منوها) - دسکتاپ ================= */}
      <div className="hidden lg:flex mx-auto max-w-7xl items-center justify-between border-t border-gray-100 px-4">
        
        <div className="flex items-center gap-6 text-[13px] text-gray-600">
          
          {/* مگا منو */}
          <div 
            className="relative"
            onMouseEnter={() => setIsCategoryOpen(true)}
            onMouseLeave={() => setIsCategoryOpen(false)}
          >
            <div className="flex cursor-pointer items-center gap-1.5 hover:text-black transition-colors font-medium py-3">
              <LayoutGrid className="h-4 w-4" />
              <span>دسته‌بندی کالاها</span>
              <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${isCategoryOpen ? 'rotate-180' : ''}`} />
            </div>

            {/* بدنه منوی کشویی */}
            {isCategoryOpen && (
              <div className="absolute top-full right-0 w-[600px] xl:w-[700px] bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-gray-100 flex overflow-hidden z-50">
                
                <div className="w-1/2 p-3 flex flex-col gap-0.5 border-l border-gray-100 overflow-y-auto max-h-[70vh]">
                  {categories.map((cat) => (
                    <div 
                      key={cat.id}
                      onMouseEnter={() => setActiveCategory(cat.title)}
                      className={`flex items-center justify-between px-3 py-2.5 rounded-lg cursor-pointer transition-colors ${
                        activeCategory === cat.title ? 'bg-blue-50 text-[#0a3187]' : 'hover:bg-gray-50 text-gray-700'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className={activeCategory === cat.title ? 'text-[#0a3187]' : 'text-gray-400'}>
                          {cat.icon}
                        </span>
                        <span className="font-medium text-[13px]">{cat.title}</span>
                      </div>
                      <ChevronLeft className={`h-3.5 w-3.5 ${activeCategory === cat.title ? 'text-[#0a3187]' : 'text-gray-300'}`} />
                    </div>
                  ))}
                </div>

                <div className="w-1/2 bg-[#f8f9fa] p-5">
                  <div className="flex items-center gap-1.5 text-[#0a3187] font-bold text-sm mb-4 pb-3 border-b border-gray-200">
                    <ChevronLeft className="h-4 w-4" />
                    <span>{activeCategory}</span>
                  </div>
                  
                  <div className="flex flex-col gap-3.5">
                    {activeSubItems.map((sub, idx) => (
                      <a 
                        key={idx} 
                        href="#" 
                        className="flex items-center gap-2.5 text-gray-600 hover:text-[#0a3187] transition-colors text-[13px]"
                      >
                        <LayoutGrid className="h-3.5 w-3.5 text-gray-400" />
                        <span>{sub}</span>
                      </a>
                    ))}
                  </div>
                </div>

              </div>
            )}
          </div>
          {/* پایان مگا منو */}

          <div className="h-4 w-px bg-gray-300"></div>

          <nav className="flex items-center gap-5 py-3">
            <a href="#" className="hover:text-black transition-colors">فروشگاه</a>
            <a href="#" className="hover:text-black transition-colors">وبلاگ</a>
            <a href="#" className="hover:text-black transition-colors">درباره ما</a>
            <a href="#" className="hover:text-black transition-colors">تماس با ما</a>
          </nav>

          <div className="h-4 w-px bg-gray-300"></div>

          <a href="#" className="flex items-center gap-1 text-[#c42f2f] font-medium hover:text-red-700 transition-colors py-3">
            <Flame className="h-4 w-4" />
            <span>فروش ویژه</span>
          </a>
        </div>

        <div className="flex items-center gap-4">
          <button className="text-[#c42f2f] hover:text-red-700 transition-colors">
            <Heart className="h-4 w-4" />
          </button>
          <button className="text-gray-600 hover:text-black transition-colors">
            <Phone className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* ================= منوی کشویی موبایل (همبرگری) ================= */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-lg h-[calc(100vh-120px)] overflow-y-auto">
           <div className="flex flex-col p-4 space-y-4 text-sm text-gray-700">
            <a href="#" className="hover:text-black transition-colors">فروشگاه</a>
            <a href="#" className="hover:text-black transition-colors">وبلاگ</a>
            <a href="#" className="hover:text-black transition-colors">درباره ما</a>
            <a href="#" className="hover:text-black transition-colors">تماس با ما</a>
          </div>
        </div>
      )}
    </header>
  );
}