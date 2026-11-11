
import { useState } from "react";
import {
  LuShoppingBag as ShoppingBag,
  LuMinus as Minus,
  LuPlus as Plus,
  LuTrash2 as Trash2,
  LuArrowRight as ArrowRight,
  LuTruck as Truck,
  LuShieldCheck as ShieldCheck,
  LuTag as Tag,
  LuChevronLeft as ChevronLeft,
  LuCreditCard as CreditCard,
  LuMapPin as MapPin,
  LuCheck as Check,
  LuTicket as Ticket,
  LuPackageCheck as PackageCheck,
} from "react-icons/lu";

import { Link } from "react-router";
import { useTheme } from "../../Context/ThemeContext";

type CartItem = {
  id: number;
  title: string;
  color: string;
  price: number;
  qty: number;
  image: string;
};

export default function Cart() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [items, setItems] = useState<CartItem[]>([
    {
      id: 1,
      title: "گوشی موبایل اپل iPhone 15 Pro Max ظرفیت ۲۵۶ گیگابایت",
      color: "تیتانیوم طبیعی",
      price: 85000000,
      qty: 1,
      image: "/1.webp",
    },
    {
      id: 2,
      title: "هدفون بی سیم سونی WH-1000XM5 با نویز کنسلینگ",
      color: "مشکی",
      price: 15200000,
      qty: 2,
      image: "/products/2.webp",
    },
    {
      id: 3,
      title: "اپل واچ سری ۹ سایز ۴۵ میلیمتری بند ورزشی",
      color: "نقره‌ای",
      price: 22500000,
      qty: 1,
      image: "/2.png",
    },
  ]);

  const [coupon, setCoupon] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);

  const updateQty = (id: number, delta: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, qty: Math.max(1, item.qty + delta) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const discount = Math.min(5000000, subtotal);
  const shipping = subtotal >= 5000000 || subtotal === 0 ? 0 : 150000;
  const total = Math.max(0, subtotal - discount + shipping);

  const itemCount = items.reduce((sum, item) => sum + item.qty, 0);

  const formatPrice = (price: number) =>
    price.toLocaleString("fa-IR");

  const freeShippingProgress = Math.min(
    (subtotal / 5000000) * 100,
    100
  );

  const surface = isDark
    ? "bg-[#0D1930] border-[#243653]"
    : "bg-white border-gray-100";

  const muted = isDark
    ? "text-gray-400"
    : "text-gray-500";

  return (
    <div
      dir="rtl"
      className={`min-h-screen transition-colors duration-300 ${
        isDark
          ? "bg-[#080F20] text-[#EAF2FF]"
          : "bg-[#F6F8FC] text-gray-800"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 py-8 lg:py-12">

        {/* Breadcrumb */}
        <nav className={`flex items-center gap-2 text-xs mb-8 ${muted}`}>
          <Link
            to="/"
            className="hover:text-blue-500 transition-colors"
          >
            خانه
          </Link>

          <ChevronLeft size={14} />

          <span className="text-blue-500 font-bold">
            سبد خرید
          </span>
        </nav>

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 mb-9">

          <div className="flex items-center gap-4">
            <div
              className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                isDark
                  ? "bg-blue-500/15 border border-blue-400/20"
                  : "bg-blue-100"
              }`}
            >
              <ShoppingBag
                size={27}
                className="text-blue-500"
              />
            </div>

            <div>
              <h1 className="text-2xl lg:text-3xl font-black">
                سبد خرید من
              </h1>

              <p className={`text-xs mt-2 ${muted}`}>
                {itemCount.toLocaleString("fa-IR")} محصول برای خرید انتخاب کرده‌اید
              </p>
            </div>
          </div>

          {/* Checkout Steps */}
          <div className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-xs font-bold">

            <span className="flex items-center gap-2 text-blue-500">
              <span className="w-7 h-7 rounded-full bg-blue-500/10 flex items-center justify-center">
                ۱
              </span>
              سبد خرید
            </span>

            <div
              className={`w-5 sm:w-8 h-px ${
                isDark ? "bg-gray-700" : "bg-gray-300"
              }`}
            />

            <span className={muted}>
              ۲. اطلاعات ارسال
            </span>

            <div
              className={`w-5 sm:w-8 h-px ${
                isDark ? "bg-gray-700" : "bg-gray-300"
              }`}
            />

            <span className={muted}>
              ۳. پرداخت
            </span>
          </div>
        </div>

        {/* Empty Cart */}
        {items.length === 0 ? (
          <div
            className={`rounded-[28px] border p-12 flex flex-col items-center text-center gap-5 ${surface}`}
          >
            <div
              className={`w-28 h-28 rounded-full flex items-center justify-center ${
                isDark ? "bg-blue-500/10" : "bg-blue-50"
              }`}
            >
              <ShoppingBag
                size={48}
                className="text-blue-500"
              />
            </div>

            <h2 className="text-xl font-black">
              سبد خرید شما خالی است!
            </h2>

            <p className={`text-sm ${muted}`}>
              هنوز محصولی به سبد خرید خود اضافه نکرده‌اید.
            </p>

            <Link
              to="/"
              className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-3 rounded-xl transition-all shadow-lg shadow-blue-500/20"
            >
              مشاهده محصولات
            </Link>
          </div>
        ) : (

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">

            {/* Products Section */}
            <div className="lg:col-span-2 flex flex-col gap-5">

              {/* Free Shipping Progress */}
              <div
                className={`rounded-2xl border p-5 ${surface}`}
              >
                <div className="flex items-center justify-between gap-3 mb-4">

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                      <Truck
                        className="text-emerald-500"
                        size={21}
                      />
                    </div>

                    <div>
                      <p className="text-sm font-bold">
                        {subtotal >= 5000000
                          ? "تبریک! ارسال سفارش شما رایگان است"
                          : "تا ارسال رایگان خرید کنید"}
                      </p>

                      <p className={`text-xs mt-1 ${muted}`}>
                        {subtotal >= 5000000
                          ? "هزینه ارسال برای شما صفر است."
                          : `${formatPrice(5000000 - subtotal)} تومان تا ارسال رایگان`}
                      </p>
                    </div>
                  </div>

                  <PackageCheck
                    className="text-emerald-500"
                    size={24}
                  />
                </div>

                <div
                  className={`h-2 rounded-full overflow-hidden ${
                    isDark ? "bg-[#1B2C47]" : "bg-gray-100"
                  }`}
                >
                  <div
                    className="h-full bg-gradient-to-l from-emerald-400 to-green-500 rounded-full transition-all duration-500"
                    style={{
                      width: `${freeShippingProgress}%`,
                    }}
                  />
                </div>
              </div>

              {/* Product Cards */}
              {items.map((item) => (
                <div
                  key={item.id}
                  className={`group relative rounded-2xl border p-4 sm:p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                    isDark
                      ? "bg-[#0D1930] border-[#243653] hover:border-blue-500/50"
                      : "bg-white border-gray-100 hover:border-blue-200 hover:shadow-blue-900/5"
                  }`}
                >
                  <div className="flex gap-4 sm:gap-5">

                    {/* Product Image */}
                    <div
                      className={`w-24 h-24 sm:w-32 sm:h-32 rounded-2xl shrink-0 flex items-center justify-center p-2 ${
                        isDark
                          ? "bg-[#142440]"
                          : "bg-gray-50"
                      }`}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 min-w-0 flex flex-col justify-between gap-4">

                      <div>
                        <div className="flex items-start justify-between gap-2">

                          <h3 className="text-sm sm:text-base font-bold leading-7 line-clamp-2">
                            {item.title}
                          </h3>

                          <button
                            type="button"
                            onClick={() => removeItem(item.id)}
                            aria-label="حذف محصول"
                            className={`shrink-0 p-2 rounded-xl transition-all ${
                              isDark
                                ? "text-gray-500 hover:text-red-400 hover:bg-red-500/10"
                                : "text-gray-400 hover:text-red-500 hover:bg-red-50"
                            }`}
                          >
                            <Trash2 size={17} />
                          </button>
                        </div>

                        <div className={`flex items-center gap-2 mt-2 text-xs ${muted}`}>
                          <span
                            className={`w-2.5 h-2.5 rounded-full border ${
                              isDark
                                ? "border-gray-500"
                                : "border-gray-300"
                            }`}
                          />

                          رنگ: {item.color}
                        </div>

                        <div className="flex items-center gap-2 mt-2">
                          <span className="flex items-center gap-1 text-[10px] text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded-lg">
                            <Check size={12} />
                            موجود در انبار
                          </span>
                        </div>
                      </div>

                      {/* Quantity and Price */}
                      <div className="flex flex-wrap items-center justify-between gap-3">

                        <div
                          className={`flex items-center gap-3 rounded-xl border p-1 ${
                            isDark
                              ? "bg-[#142440] border-[#263D60]"
                              : "bg-gray-50 border-gray-200"
                          }`}
                        >
                          <button
                            type="button"
                            onClick={() => updateQty(item.id, 1)}
                            aria-label="افزایش تعداد"
                            className="w-8 h-8 flex items-center justify-center rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition-colors"
                          >
                            <Plus size={15} />
                          </button>

                          <span className="text-sm font-black min-w-5 text-center">
                            {item.qty.toLocaleString("fa-IR")}
                          </span>

                          <button
                            type="button"
                            onClick={() => updateQty(item.id, -1)}
                            disabled={item.qty <= 1}
                            aria-label="کاهش تعداد"
                            className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-red-500/10 text-red-500 disabled:opacity-30 transition-colors"
                          >
                            <Minus size={15} />
                          </button>
                        </div>

                        <div className="text-left">
                          <p className="text-base sm:text-lg font-black text-blue-500">
                            {formatPrice(item.price * item.qty)}
                          </p>

                          <p className={`text-[10px] mt-1 ${muted}`}>
                            تومان
                            {item.qty > 1 &&
                              ` • هر عدد ${formatPrice(item.price)} تومان`}
                          </p>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Store Benefits */}
              <div
                className={`rounded-2xl border p-5 grid grid-cols-1 sm:grid-cols-3 gap-5 ${surface}`}
              >
                {[
                  {
                    icon: Truck,
                    title: "ارسال سریع",
                    desc: "تحویل در کوتاه‌ترین زمان",
                  },
                  {
                    icon: ShieldCheck,
                    title: "ضمانت اصالت",
                    desc: "تضمین اصالت تمامی محصولات",
                  },
                  {
                    icon: Tag,
                    title: "قیمت مناسب",
                    desc: "خرید با بهترین قیمت",
                  },
                ].map((feature, index) => {
                  const Icon = feature.icon;

                  return (
                    <div
                      key={index}
                      className="flex items-center gap-3"
                    >
                      <div className="w-11 h-11 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0">
                        <Icon
                          className="text-blue-500"
                          size={21}
                        />
                      </div>

                      <div>
                        <p className="text-xs font-bold">
                          {feature.title}
                        </p>

                        <p className={`text-[10px] mt-1 ${muted}`}>
                          {feature.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div
                className={`rounded-2xl border p-5 sm:p-6 sticky top-5 shadow-xl ${
                  isDark
                    ? "bg-[#0D1930] border-[#243653] shadow-black/10"
                    : "bg-white border-gray-100 shadow-blue-900/5"
                }`}
              >

                {/* Summary Header */}
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-base font-black">
                    خلاصه سفارش
                  </h2>

                  <span className="text-xs text-blue-500 bg-blue-500/10 px-3 py-1.5 rounded-lg">
                    {itemCount.toLocaleString("fa-IR")} کالا
                  </span>
                </div>

                {/* Coupon */}
                <div className="mb-6">

                  <label
                    className={`text-xs font-bold flex items-center gap-2 mb-3 ${muted}`}
                  >
                    <Ticket
                      size={15}
                      className="text-blue-500"
                    />
                    کد تخفیف دارید؟
                  </label>

                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={coupon}
                      onChange={(e) => {
                        setCoupon(e.target.value);
                        setCouponApplied(false);
                      }}
                      placeholder="کد تخفیف را وارد کنید"
                      className={`min-w-0 flex-1 rounded-xl px-3 py-3 text-xs outline-none border transition-all ${
                        isDark
                          ? "bg-[#142440] border-[#263D60] text-white placeholder:text-gray-500 focus:border-blue-500"
                          : "bg-gray-50 border-gray-200 text-gray-700 placeholder:text-gray-400 focus:border-blue-500"
                      }`}
                    />

                    <button
                      type="button"
                      onClick={() => {
                        if (coupon.trim()) {
                          setCouponApplied(true);
                        }
                      }}
                      className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-4 rounded-xl transition-colors"
                    >
                      اعمال
                    </button>
                  </div>

                  {couponApplied && (
                    <p className="text-[10px] text-emerald-500 mt-2">
                      کد وارد شده ثبت شد؛ اعتبار آن باید در سرور بررسی شود.
                    </p>
                  )}
                </div>

                {/* Price Details */}
                <div
                  className={`flex flex-col gap-4 pb-5 border-b border-dashed ${
                    isDark
                      ? "border-[#30415C]"
                      : "border-gray-200"
                  }`}
                >
                  <div className="flex justify-between text-sm">
                    <span className={muted}>
                      جمع کالاها
                    </span>

                    <span className="font-bold">
                      {formatPrice(subtotal)}

                      <small className={`mr-1 font-normal ${muted}`}>
                        تومان
                      </small>
                    </span>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className={muted}>
                      تخفیف
                    </span>

                    <span className="font-bold text-red-500">
                      {formatPrice(discount)}

                      <small className="mr-1 font-normal">
                        تومان
                      </small>
                    </span>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className={muted}>
                      هزینه ارسال
                    </span>

                    <span className="font-bold text-emerald-500">
                      {shipping === 0
                        ? "رایگان"
                        : `${formatPrice(shipping)} تومان`}
                    </span>
                  </div>
                </div>

                {/* Total */}
                <div className="py-5">
                  <p className={`text-xs mb-2 ${muted}`}>
                    مبلغ قابل پرداخت
                  </p>

                  <div className="flex items-end justify-between gap-2">
                    <span className="text-2xl font-black text-blue-500">
                      {formatPrice(total)}
                    </span>

                    <span className={`text-xs mb-1 ${muted}`}>
                      تومان
                    </span>
                  </div>
                </div>

                {/* Checkout Button */}
                <button
                  type="button"
                  className="w-full bg-gradient-to-l from-blue-700 to-blue-500 hover:from-blue-600 hover:to-blue-400 text-white font-bold py-4 rounded-xl transition-all duration-300 shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2 hover:-translate-y-0.5"
                >
                  <CreditCard size={19} />
                  ادامه فرآیند خرید
                  <ArrowRight size={17} />
                </button>

                {/* Back To Shop */}
                <Link
                  to="/"
                  className={`mt-3 w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold transition-colors ${
                    isDark
                      ? "text-gray-400 hover:text-blue-400 hover:bg-[#142440]"
                      : "text-gray-500 hover:text-blue-600 hover:bg-gray-50"
                  }`}
                >
                  <ArrowRight size={15} />
                  بازگشت به فروشگاه
                </Link>

                {/* Address */}
                <div
                  className={`mt-5 pt-5 border-t flex items-start gap-3 ${
                    isDark
                      ? "border-[#243653]"
                      : "border-gray-100"
                  }`}
                >
                  <div className="w-9 h-9 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0">
                    <MapPin
                      size={17}
                      className="text-blue-500"
                    />
                  </div>

                  <div className="flex-1">
                    <p className="text-xs font-bold">
                      آدرس تحویل سفارش
                    </p>

                    <p className={`text-[11px] mt-2 leading-6 ${muted}`}>
                      تهران، خیابان ولیعصر...
                    </p>

                    <button
                      type="button"
                      className="text-[11px] text-blue-500 hover:text-blue-400 mt-1 font-bold"
                    >
                      تغییر آدرس
                    </button>
                  </div>
                </div>

                {/* Trust Box */}
                <div
                  className={`mt-5 rounded-xl p-3 flex items-center gap-2 ${
                    isDark
                      ? "bg-emerald-500/5"
                      : "bg-emerald-50"
                  }`}
                >
                  <ShieldCheck
                    size={19}
                    className="text-emerald-500 shrink-0"
                  />

                  <p
                    className={`text-[10px] leading-5 ${
                      isDark
                        ? "text-emerald-400"
                        : "text-emerald-700"
                    }`}
                  >
                    پرداخت امن و تضمین خرید مطمئن از فروشگاه
                  </p>
                </div>

              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}


