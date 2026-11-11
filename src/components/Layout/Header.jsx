import { useState } from "react";
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
  LuBatteryCharging as BatteryCharging,
} from "react-icons/lu";

import { useSelector } from "react-redux";
import { Link } from "react-router";
import { useTheme } from "../../Context/ThemeContext";
import { Sun } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("موبایل");

  const { theme, toggleSwitchTheme, themeButtonRef } = useTheme();
  const isDark = theme === "dark";

  const { userInfo } = useSelector((state) => state.auth);

  const categories = [
    {
      id: "mobile",
      title: "موبایل",
      icon: <Smartphone className="h-4 w-4" />,
      subItems: [
        "مشاهده همه موبایل",
        "موبایل اپل",
        "موبایل سامسونگ",
        "موبایل شیائومی",
      ],
    },
    {
      id: "accessories",
      title: "لوازم جانبی",
      icon: <Headphones className="h-4 w-4" />,
      subItems: ["هدفون", "هندزفری", "پاوربانک", "کیف و کاور"],
    },
    {
      id: "storage",
      title: "ابزار ذخیره سازی",
      icon: <BatteryCharging className="h-4 w-4" />,
      subItems: ["هارد اکسترنال", "فلش مموری", "کارت حافظه"],
    },
    {
      id: "speaker",
      title: "اسپیکر",
      icon: <Monitor className="h-4 w-4" />,
      subItems: ["اسپیکر بلوتوثی", "اسپیکر کامپیوتر"],
    },
    {
      id: "laptop",
      title: "لپ تاپ",
      icon: <Laptop className="h-4 w-4" />,
      subItems: ["لپ تاپ اپل", "لپ تاپ ایسوس", "لپ تاپ لنوو"],
    },
    {
      id: "headphone",
      title: "هدفون",
      icon: <Headphones className="h-4 w-4" />,
      subItems: ["هدفون بی سیم", "هدفون سیمی"],
    },
    {
      id: "tablet",
      title: "تبلت",
      icon: <Tablet className="h-4 w-4" />,
      subItems: ["تبلت سامسونگ", "تبلت اپل"],
    },
    {
      id: "console",
      title: "کنسول بازی",
      icon: <Gamepad2 className="h-4 w-4" />,
      subItems: ["پلی استیشن", "ایکس باکس"],
    },
    {
      id: "modem",
      title: "مودم",
      icon: <Router className="h-4 w-4" />,
      subItems: ["مودم ای‌دی‌اس‌ال", "مودم ۴G"],
    },
    {
      id: "smartwatch",
      title: "ساعت هوشمند",
      icon: <Watch className="h-4 w-4" />,
      subItems: ["ساعت اپل", "ساعت سامسونگ"],
    },
  ];

  const activeSubItems =
    categories.find((category) => category.title === activeCategory)
      ?.subItems || [];

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const mobileMenuItems = [
    { title: "فروشگاه", icon: ShoppingBag, href: "/" },
    { title: "دسته‌بندی کالاها", icon: LayoutGrid, href: "/category" },
    { title: "وبلاگ", icon: Flame, href: "/blogs" },
    { title: "علاقه‌مندی‌ها", icon: Heart, href: "/profile/favorites" },
    { title: "درباره ما", icon: User, href: "/about" },
    { title: "تماس با ما", icon: Phone, href: "/contact" },
  ];

  return (
    <header
      dir="rtl"
      className={`relative z-50 w-full border-b transition-colors duration-300 ${
        isDark
          ? "bg-[#080F20] border-[#243653] text-[#EAF2FF]"
          : "bg-white border-gray-200 text-gray-800"
      }`}
    >
      <div className="mx-auto flex sm:max-w-7xl items-center justify-between px-4 py-3 lg:py-4 gap-2 lg:gap-4">
        <div className="flex items-center gap-2 lg:gap-3 shrink-0">
          <button
            type="button"
            aria-label="باز کردن منو"
            className={`lg:hidden p-1 transition-colors ${
              isDark
                ? "text-gray-300 hover:text-blue-400"
                : "text-gray-700"
            }`}
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          <Link to="/" className="flex items-center">
            <span className="text-2xl lg:text-3xl font-black text-blue-500 tracking-tighter">
              مبین شاپ
            </span>
          </Link>
        </div>

        <div className="relative hidden md:flex flex-1 max-w-2xl mx-auto px-2">
          <div
            className={`flex w-full items-center rounded-full px-4 py-2 transition-colors border ${
              isDark
                ? "bg-[#142440] border-[#263D60] focus-within:bg-[#1B3152] focus-within:ring-1 focus-within:ring-blue-500"
                : "bg-gray-100 border-transparent focus-within:bg-gray-200 focus-within:ring-1 focus-within:ring-gray-300"
            }`}
          >
            <Search className="h-4 w-4 text-gray-400 ml-2 shrink-0" />

            <input
              type="text"
              placeholder="دنبال چی می‌گردی؟"
              className={`w-full bg-transparent text-sm outline-none ${
                isDark
                  ? "text-white placeholder:text-gray-500"
                  : "text-gray-700 placeholder:text-gray-400"
              }`}
            />
          </div>
        </div>

        <div className="flex items-center gap-2 lg:gap-4 shrink-0">
          <div className="flex items-center gap-2 rounded-full bg-blue-600 px-3 py-1.5 lg:px-4 lg:py-2 text-sm text-white transition-colors hover:bg-blue-500">
            {userInfo?.fullName ? (
              <Link to="/profile" className="text-[13px]">
                <span className="hidden lg:inline">
                  {userInfo.fullName}
                </span>
                <User className="h-5 w-5 lg:hidden" />
              </Link>
            ) : (
              <Link to="/login" className="flex items-center gap-2">
                <LogIn className="h-4 w-4 lg:hidden" />
                <span className="hidden lg:block text-[13px]">
                  ورود | ثبت نام
                </span>
              </Link>
            )}
          </div>

          <button
            ref={themeButtonRef}
            type="button"
            aria-label="تغییر تم"
            onClick={toggleSwitchTheme}
            className={`flex items-center justify-center transition-colors ${
              isDark
                ? "text-yellow-400 hover:text-yellow-300"
                : "text-gray-700 hover:text-blue-600"
            }`}
          >
            {isDark ? (
              <Sun className="h-5 w-5 lg:h-6 lg:w-6" />
            ) : (
              <Moon className="h-5 w-5 lg:h-6 lg:w-6" />
            )}
          </button>

          <button
            type="button"
            aria-label="جستجو"
            className={`md:hidden transition-colors p-1 ${
              isDark
                ? "text-gray-300 hover:text-blue-400"
                : "text-gray-700 hover:text-black"
            }`}
            onClick={() => setIsSearchOpen((prev) => !prev)}
          >
            <Search className="h-5 w-5" />
          </button>

          <button
            type="button"
            aria-label="سبد خرید"
            className={`relative transition-colors p-1 ${
              isDark
                ? "text-gray-300 hover:text-blue-400"
                : "text-gray-700 hover:text-black"
            }`}
          >
            <ShoppingBag className="h-5 w-5 lg:h-6 lg:w-6" />

            <span className="absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 text-[10px] font-bold text-white">
              ۰
            </span>
          </button>
        </div>
      </div>

      {isSearchOpen && (
        <div className="md:hidden px-4 pb-3 w-full">
          <div
            className={`flex items-center rounded-full px-4 py-2 border ${
              isDark
                ? "bg-[#142440] border-[#263D60]"
                : "bg-gray-100 border-gray-200"
            }`}
          >
            <Search className="h-4 w-4 text-gray-400 ml-2 shrink-0" />

            <input
              type="text"
              placeholder="دنبال چی می‌گردی؟"
              className={`w-full bg-transparent text-sm outline-none ${
                isDark
                  ? "text-white placeholder:text-gray-500"
                  : "text-gray-700 placeholder:text-gray-400"
              }`}
              autoFocus
            />
          </div>
        </div>
      )}

      <div
        className={`hidden lg:flex mx-auto max-w-7xl items-center justify-between border-t px-4 ${
          isDark ? "border-[#243653]" : "border-gray-100"
        }`}
      >
        <div
          className={`flex items-center gap-6 text-[13px] ${
            isDark ? "text-gray-300" : "text-gray-600"
          }`}
        >
          <div
            className="relative"
            onMouseEnter={() => setIsCategoryOpen(true)}
            onMouseLeave={() => setIsCategoryOpen(false)}
          >
            <button
              type="button"
              onClick={() => setIsCategoryOpen((prev) => !prev)}
              className={`flex items-center gap-1.5 transition-colors font-medium py-3 ${
                isDark ? "hover:text-blue-400" : "hover:text-black"
              }`}
            >
              <LayoutGrid className="h-4 w-4 text-blue-500" />
              <span>دسته‌بندی کالاها</span>

              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-200 ${
                  isCategoryOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isCategoryOpen && (
              <div
                className={`absolute top-full right-0 w-[600px] xl:w-[700px] rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.2)] border flex overflow-hidden z-50 ${
                  isDark
                    ? "bg-[#111F38] border-[#243653]"
                    : "bg-white border-gray-100"
                }`}
              >
                <div
                  className={`w-1/2 p-3 flex flex-col gap-0.5 border-l overflow-y-auto max-h-[70vh] ${
                    isDark ? "border-[#243653]" : "border-gray-100"
                  }`}
                >
                  {categories.map((category) => (
                    <button
                      type="button"
                      key={category.id}
                      onMouseEnter={() =>
                        setActiveCategory(category.title)
                      }
                      onClick={() =>
                        setActiveCategory(category.title)
                      }
                      className={`flex items-center justify-between px-3 py-2.5 rounded-lg cursor-pointer transition-colors ${
                        activeCategory === category.title
                          ? isDark
                            ? "bg-blue-500/15 text-blue-400"
                            : "bg-blue-50 text-[#0a3187]"
                          : isDark
                            ? "hover:bg-[#1B3152] text-gray-300"
                            : "hover:bg-gray-50 text-gray-700"
                      }`}
                    >
                      <span className="flex items-center gap-2.5">
                        <span
                          className={
                            activeCategory === category.title
                              ? "text-blue-500"
                              : isDark
                                ? "text-gray-500"
                                : "text-gray-400"
                          }
                        >
                          {category.icon}
                        </span>

                        <span className="font-medium text-[13px]">
                          {category.title}
                        </span>
                      </span>

                      <ChevronLeft className="h-3.5 w-3.5" />
                    </button>
                  ))}
                </div>

                <div
                  className={`w-1/2 p-5 ${
                    isDark ? "bg-[#0D1930]" : "bg-[#f8f9fa]"
                  }`}
                >
                  <div
                    className={`flex items-center gap-1.5 text-blue-500 font-bold text-sm mb-4 pb-3 border-b ${
                      isDark ? "border-[#243653]" : "border-gray-200"
                    }`}
                  >
                    <ChevronLeft className="h-4 w-4" />
                    <span>{activeCategory}</span>
                  </div>

                  <div className="flex flex-col gap-3.5">
                    {activeSubItems.map((sub, index) => (
                      <Link
                        key={index}
                        to="/category"
                        onClick={() => setIsCategoryOpen(false)}
                        className={`flex items-center gap-2.5 transition-colors text-[13px] ${
                          isDark
                            ? "text-gray-300 hover:text-blue-400"
                            : "text-gray-600 hover:text-[#0a3187]"
                        }`}
                      >
                        <LayoutGrid
                          className={`h-3.5 w-3.5 ${
                            isDark ? "text-blue-400" : "text-gray-400"
                          }`}
                        />
                        <span>{sub}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <div
            className={`h-4 w-px ${
              isDark ? "bg-[#304563]" : "bg-gray-300"
            }`}
          />

          <nav className="flex items-center gap-5 py-3">
            {[
              { title: "فروشگاه", href: "/" },
              { title: "وبلاگ", href: "/blogs" },
              { title: "درباره ما", href: "/about" },
              { title: "تماس با ما", href: "/contact" },
            ].map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`transition-colors ${
                  isDark
                    ? "hover:text-blue-400"
                    : "hover:text-black"
                }`}
              >
                {item.title}
              </Link>
            ))}
          </nav>

          <div
            className={`h-4 w-px ${
              isDark ? "bg-[#304563]" : "bg-gray-300"
            }`}
          />

          <Link
            to="/"
            className="flex items-center gap-1 text-[#c42f2f] font-medium hover:text-red-500 transition-colors py-3"
          >
            <Flame className="h-4 w-4" />
            <span>فروش ویژه</span>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link
            to="/profile/favorites"
            aria-label="علاقه‌مندی‌ها"
            className="text-red-500 hover:text-red-400 transition-colors"
          >
            <Heart className="h-4 w-4" />
          </Link>

          <a
            href="tel:"
            aria-label="تماس با ما"
            className={`transition-colors ${
              isDark
                ? "text-gray-300 hover:text-blue-400"
                : "text-gray-600 hover:text-black"
            }`}
          >
            <Phone className="h-4 w-4" />
          </a>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-[100]">
          <button
            type="button"
            aria-label="بستن منو"
            className="absolute inset-0 w-full h-full bg-black/50 backdrop-blur-sm"
            onClick={closeMobileMenu}
          />

          <div
            className={`absolute right-0 top-0 h-full w-[85%] max-w-[340px] shadow-2xl flex flex-col ${
              isDark
                ? "bg-[#0D1930] text-gray-100 border-l border-[#243653]"
                : "bg-white text-gray-800 border-l border-gray-100"
            }`}
          >
            <div
              className={`flex items-center justify-between p-5 border-b ${
                isDark ? "border-[#243653]" : "border-gray-100"
              }`}
            >
              <div>
                <h2 className="text-xl font-black text-blue-500">
                  مبین شاپ
                </h2>

                <p
                  className={`text-xs mt-1 ${
                    isDark ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  تجربه خرید هوشمند
                </p>
              </div>

              <button
                type="button"
                onClick={closeMobileMenu}
                aria-label="بستن منو"
                className={`p-2 rounded-xl transition-colors ${
                  isDark
                    ? "bg-[#1B3152] text-gray-300 hover:bg-red-500/20 hover:text-red-400"
                    : "bg-gray-100 text-gray-600 hover:bg-red-50 hover:text-red-500"
                }`}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="px-5 pt-5">
              <div
                className={`flex items-center gap-3 rounded-xl px-4 py-3 border ${
                  isDark
                    ? "bg-[#142440] border-[#263D60]"
                    : "bg-gray-50 border-gray-200"
                }`}
              >
                <Search className="w-4 h-4 text-gray-400" />

                <input
                  type="text"
                  placeholder="جستجوی محصولات..."
                  className={`w-full bg-transparent outline-none text-sm ${
                    isDark
                      ? "text-white placeholder:text-gray-500"
                      : "text-gray-700 placeholder:text-gray-400"
                  }`}
                />
              </div>
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-5">
              <p
                className={`text-xs font-bold mb-4 ${
                  isDark ? "text-gray-500" : "text-gray-400"
                }`}
              >
                منوی اصلی
              </p>

              <div className="flex flex-col gap-2">
                {mobileMenuItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <Link
                      key={item.href}
                      to={item.href}
                      onClick={closeMobileMenu}
                      className={`group flex items-center justify-between p-3.5 rounded-xl transition-all duration-200 ${
                        isDark
                          ? "hover:bg-[#1B3152] text-gray-300 hover:text-blue-400"
                          : "hover:bg-blue-50 text-gray-700 hover:text-blue-600"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                            isDark
                              ? "bg-[#1B3152] text-blue-400 group-hover:bg-blue-500/20"
                              : "bg-blue-50 text-blue-600 group-hover:bg-blue-100"
                          }`}
                        >
                          <Icon className="w-5 h-5" />
                        </div>

                        <span className="text-sm font-semibold">
                          {item.title}
                        </span>
                      </div>

                      <ChevronLeft className="w-4 h-4 opacity-40 group-hover:opacity-100 transition-all group-hover:-translate-x-1" />
                    </Link>
                  );
                })}
              </div>

              <div className="mt-6 rounded-2xl bg-gradient-to-l from-blue-700 to-blue-500 p-4 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <Flame className="w-5 h-5" />
                  <span className="font-bold text-sm">
                    پیشنهادهای ویژه
                  </span>
                </div>

                <p className="text-xs text-blue-100 leading-6">
                  جدیدترین تخفیف‌ها و پیشنهادهای جذاب مبین‌شاپ را ببینید.
                </p>
              </div>
            </div>

            <div
              className={`p-5 border-t ${
                isDark ? "border-[#243653]" : "border-gray-100"
              }`}
            >
              <button
                type="button"
                onClick={toggleSwitchTheme}
                className={`w-full flex items-center justify-between p-3 rounded-xl ${
                  isDark
                    ? "bg-[#142440] text-yellow-400"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                <div className="flex items-center gap-3">
                  {isDark ? (
                    <Sun className="w-5 h-5" />
                  ) : (
                    <Moon className="w-5 h-5" />
                  )}

                  <span className="text-sm font-semibold">
                    {isDark ? "حالت روشن" : "حالت تاریک"}
                  </span>
                </div>

                <ChevronLeft className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}   