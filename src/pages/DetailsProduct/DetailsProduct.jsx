import BreadCrumbBasic from "../../utils/BreadCrumbBasic";
import RelatedProducts from "../../components/detailsProduct/RelatedProducts/RelatedProducts";

export default function DetailsProduct() {
  return (
    <div className="flex flex-col gap-5 container mx-auto" >
      {/* <BreadCrumbBasic /> */}
      <div className="w-full max-w-7xl mx-auto px-4 py-8 font-Dana text-gray-800 bg-white">

        <div className="grid sm:flex grid-cols-1 flex-row-reverse  justify-between lg:grid-cols-12 sm:gap-0 gap-8">
          <div className="lg:col-span-4 lg:order-last">
            <div className="sticky top-4">
              {/* تصویر اصلی */}
              <div className="border w-[350px] border-gray-200 rounded-2xl p-4 mb-4 relative bg-white shadow-sm flex items-center justify-center">
                <img
                  src="/3.webp"
                  alt="لپ تاپ اچ پی"
                  className="w-full h-auto object-contain rounded-xl max-h-[300px]"
                />
                <div className="absolute top-4 right-4 flex flex-col gap-3 bg-white p-2 rounded-full shadow-sm border border-gray-100">
                  <button className="text-gray-400 hover:text-red-500 transition">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      ></path>
                    </svg>
                  </button>
                  <button className="text-gray-400 hover:text-blue-500 transition">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      ></path>
                    </svg>
                  </button>
                  <button className="text-gray-400 hover:text-gray-600 transition">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>

              {/* تصاویر کوچک (Thumbnails) */}
              <div className="flex gap-3 justify-center lg:justify-start">
                <div className="w-20 h-16 border-2 border-blue-600 rounded-lg p-1 cursor-pointer bg-white">
                  <img
                    src="/3.webp"
                    alt="thumb1"
                    className="w-full h-full object-cover rounded"
                  />
                </div>
                <div className="w-20 h-16 border border-gray-200 rounded-lg p-1 cursor-pointer hover:border-blue-400 bg-white">
                  <img
                    src="/2.png"
                    alt="thumb2"
                    className="w-full h-full object-cover rounded"
                  />
                </div>
                <div className="w-20 h-16 border border-gray-200 rounded-lg p-1 cursor-pointer hover:border-blue-400 bg-white">
                  <img
                    src="/products/2.webp"
                    alt="thumb3"
                    className="w-full h-full object-cover rounded"
                  />
                </div>
                <div className="w-20 h-16 border border-gray-200 rounded-lg p-1 cursor-pointer hover:border-blue-400 bg-white">
                  <img
                    src="/3.webp"
                    alt="thumb4"
                    className="w-full h-full object-cover rounded"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ---------------- ستون چپ: خدمات و خرید ---------------- */}
          <div className="w-full">
            <div className="flex flex-col pb-4 pr-6 text-right items-start gap-4 items-end order-1 md:order-2 shrink-0 w-full md:w-auto">
              <div className=" flex-col gap-2 flex">
                <h1 className="text-lg md:text-[17px] font-bold text-gray-800 leading-relaxed">
                  لپ تاپ اچ پی مدل Victus 15 FB3093DX RV VF4A5HS 16GB 512GB RTX
                  4050
                </h1>
              </div>

              {/* دسته بندی */}
            </div>

            <div className="lg:col-span-7   space-y-6 sm:flex sm:w-full justify-around">
              {/* باکس ویژگی‌های محصول */}

              {/* باکس قیمت و خرید */}
             
              <div className="w-[60%] flex flex-col">
                <div className="flex flex-col md:flex-row items-start justify-between gap-4 ">
                  {/* عنوان محصول */}

                  {/* دسته بندی و رنگ */}
                </div>
                <div className="w-full gap-3 text-right border-b border-b-slate-200 pb-4 flex flex-col items-end justify-start ">
                  <div class="text-[10px] text-slate-500 text-right border-b border-b-slate-200 w-full pb-4">
                    Apple iPhone 18 Pro Max Dual eSIM 256GB RAM 12GB Mobile
                    Phone - Not Activated
                  </div>
                  <div className="flex items-center  gap-2 text-sm text-gray-500">
                    <div className="flex gap-1">
                      <span className="bg-gray-100 px-3 py-1 rounded-md text-gray-600 text-xs">
                        لپ‌تاپ
                      </span>
                      <span className="bg-gray-100 px-3 py-1 rounded-md text-gray-600 text-xs">
                        hp لپ‌تاپ
                      </span>
                    </div>

                    <span> : دسته‌بندی‌ها</span>
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                      ></path>
                    </svg>
                  </div>

                  {/* رنگ بندی */}
                  <div className="flex items-center gap-3 mt-1 ">
                    <div className="w-7 h-7 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center p-1">
                      <div className="w-full h-full rounded-full bg-[#d4d4d4]"></div>
                    </div>
                    <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center bg-white shadow-sm">
                      <svg
                        className="w-5 h-5 text-gray-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                    <span className="text-sm text-gray-700">
                      رنگ‌بندی: نقره‌ای
                    </span>
                  </div>
                </div>
                <div className="w-full">
                  <div className="mb-4 text-right pt-6 pb-2">
                    <h2 className="text-sm font-bold text-gray-800">
                      ویژگی‌های محصول
                    </h2>
                  </div>
                  <div className="grid grid-cols-3 w-full gap-3">
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                      <div className="bg-[#f4f7f9] px-4 py-2 text-right rounded-xl  flex flex-col items-end justify-center gap-1">
                        <span className="text-xs text-gray-400">رنگ‌بندی</span>
                        <span className="text-[10px] font-bold text-gray-700">
                          نقره‌ای
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-center items-center mt-6 gap-2">
                    <span className="w-[25%] bg-slate-200 h-0.5"></span>
                    <button className="border border-slate-300 text-zinc-700 rounded-full px-6 py-1 text-center text-[10px] font-bold flex items-center gap-0.5 hover:bg-blue-50 transition">
                      <svg
                        className="w-4.5 h-4.5 pb-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 19l-7-7 7-7"
                        ></path>
                      </svg>
                      <span>مشاهده همه ویژگی‌ها</span>
                    </button>
                    <span className="w-[25%] bg-slate-200 h-0.5"></span>
                  </div>
                </div>

                {/* باکس خدمات محصول */}
                <div className="border text-right text-[10px] mt-5 max-w-full border-sky-500 rounded-2xl p-4 bg-white">
                  <div className=" pb-2    ">
                    <span className="pb-2 font-bold text-xs ">پیکربندی</span>
                  </div>
                  <span className="text-slate-500 ">
                    امکان برگشت کالا در گروه موبایل با دلیل "انصراف از خرید"
                    تنها در صورتی مورد قبول است که پلمب کالا باز نشده باشد. تمام
                    گوشی‌های دیجی‌کالا ضمانت رجیستری دارند. در صورت وجود مشکل
                    رجیستری، می‌توانید بعد از مهلت قانونی ۳۰ روزه، گوشی
                    خریداری‌شده را مرجوع .کنید
                  </span>
                </div>
              </div>
               <div className="border w-[260px] h-80 border-gray-200 rounded-2xl p-5 bg-white shadow-sm">
                {/* کد کالا و برند */}

                <div className="flex items-end flex-col justify-between text-xs text-gray-500 mb-4 pb-4 border-b border-gray-100">
                  <div className="flex items-center gap-1">
                    <span className="font-bold text-gray-700 text-xs">
                      px-Victus15
                    </span>
                    کد کالا:{" "}
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="font-bold text-gray-700 ">اچ پی</span>{" "}
                    برند:
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      ></path>
                    </svg>
                  </div>
                </div>

                {/* قیمت */}
                <div className="flex flex-col items-center justify-center mb-4">
                  <div className="flex items-center gap-2 text-2xl font-bold text-gray-900 mb-2">
                    <span className="text-[15px]">۱۴۶,۹۰۰,۰۰۰</span>
                    <svg
                      className="w-5 h-5 text-blue-800"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
                    </svg>
                  </div>
                  <div className="flex items-center gap-2 ">
                    <span className="bg-red-500  text-white text-[8px] px-3 py-0.5 rounded-full font-bold">
                      ۱۲% تخفیف
                    </span>
                    <div className="flex gap-0.5 items-center">
                      <svg
                        class="fill-content3 size-4"
                        viewBox="0 0 25 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.00517365 12.0161C0.00517365 11.3654 -0.0707631 10.6389 0.359211 9.93605C0.967636 8.94144 3.02292 8.58757 3.02292 8.58757L3.91512 9.0349C4.40918 9.28262 4.5809 9.88913 4.11692 10.1894C3.25141 10.7496 2.0321 11.0238 2.11254 12.0161C2.11254 12.8481 2.31485 13.4721 2.71946 13.8881C3.13531 14.2934 3.82653 14.4961 4.79311 14.4961H6.24297C6.92857 14.4961 7.4512 14.4427 7.81085 14.3361C8.17051 14.2294 8.42339 14.0481 8.5695 13.7921C8.71561 13.5254 8.78867 13.1467 8.78867 12.6561V2.83205C8.78867 1.02939 9.71029 0.128052 11.5535 0.128052H12.0593C12.9922 0.128052 13.6834 0.368052 14.1329 0.848052C14.5825 1.31739 14.8073 1.96805 14.8073 2.80005V12.1281C14.8073 12.5334 14.8354 12.8214 14.8916 12.9921C14.9478 13.1627 15.0602 13.2801 15.2288 13.3441C15.4086 13.3974 15.7064 13.4241 16.1223 13.4241H16.5438C16.7573 13.4241 16.9203 13.3761 17.0327 13.2801C17.1563 13.1734 17.2518 13.0027 17.3193 12.7681L17.7408 11.2321C17.988 10.3041 18.4039 9.59472 18.9883 9.10405C19.584 8.61338 20.2864 8.36805 21.0957 8.36805C21.7476 8.36805 22.3264 8.53872 22.8321 8.88005C23.3492 9.21072 23.7538 9.67472 24.046 10.2721C24.3382 10.8587 24.4843 12.2561 24.4843 12.2561C24.4843 12.2561 24.3326 13.8507 24.0291 14.4161C23.7257 14.9814 23.3435 15.3921 22.8827 15.6481C22.4332 15.8934 21.9667 16.0161 21.4834 16.0161C21.1013 16.0161 20.6967 15.9467 20.2696 15.8081C19.8425 15.6587 19.2131 15.3974 18.3814 15.0241C18.1229 15.2481 17.8363 15.4241 17.5216 15.5521C17.2069 15.6694 16.8866 15.7281 16.5606 15.7281H16.0717C14.9028 15.7281 14.043 15.4027 13.4923 14.7521C12.9416 14.1014 12.6662 13.2267 12.6662 12.1281V2.99205C12.6662 2.81072 12.6213 2.67205 12.5313 2.57605C12.4414 2.48005 12.2785 2.43205 12.0424 2.43205H11.5704C11.3344 2.43205 11.1658 2.48005 11.0646 2.57605C10.9747 2.66139 10.9298 2.80005 10.9298 2.99205V12.6561C10.9298 13.9254 10.542 14.9334 9.76649 15.6801C8.99098 16.4267 7.81647 16.8001 6.24297 16.8001H4.79311C3.79281 16.8001 2.92739 16.5867 2.19683 16.1601C1.47752 15.7334 0.932414 15.1574 0.561518 14.4321C0.190622 13.7067 0.00517365 12.9014 0.00517365 12.0161ZM19.4266 13.0881C20.0336 13.3547 20.4775 13.5361 20.7585 13.6321C21.0507 13.7281 21.3148 13.7761 21.5509 13.7761C22.169 13.7761 22.4781 13.2747 22.4781 12.2721C22.4781 11.7281 22.3545 11.3121 22.1072 11.0241C21.8599 10.7361 21.534 10.5921 21.1294 10.5921C20.8035 10.5921 20.5169 10.7041 20.2696 10.9281C20.0336 11.1521 19.8594 11.4721 19.747 11.8881L19.4266 13.0881Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M6.68349 11.4922L5.84086 10.6496C5.6456 10.4543 5.32901 10.4543 5.13375 10.6496L4.35876 11.4246C4.1635 11.6198 4.1635 11.9364 4.35876 12.1317L5.20139 12.9743C5.39665 13.1696 5.71324 13.1696 5.9085 12.9743L6.68349 12.1993C6.87875 12.004 6.87875 11.6875 6.68349 11.4922Z"
                          fill="currentColor"
                          fill-opacity="0.5"
                        ></path>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M8.06877 7.328C8.06877 7.97867 7.9339 8.48 7.66416 8.832C7.39441 9.19467 6.99542 9.47733 6.46717 9.68C5.95017 9.89333 5.11284 10.1653 3.95519 10.496L3.01109 10.768L2.67052 9.6282C2.50712 9.08139 3.06167 8.56059 3.06167 8.56059C3.76258 8.37597 4.63638 8.02124 5.03416 7.888C5.61861 7.696 5.91083 7.50933 5.91083 7.328V7.248H4.49468C3.41571 7.248 2.56152 6.95467 1.93212 6.368C1.31396 5.77067 1.00488 4.93867 1.00488 3.872C1.00488 3.11467 1.15099 2.44267 1.44321 1.856C1.74668 1.26933 2.15691 0.815999 2.67392 0.495999C3.20216 0.165333 3.80346 0 4.47782 0C5.18589 0 5.80967 0.16 6.34916 0.48C6.89988 0.8 7.32136 1.25333 7.61358 1.84C7.91704 2.42667 8.06877 3.104 8.06877 3.872V4.944H20.1087C21.0753 4.944 21.5305 4.624 21.4743 3.984C21.4353 3.52561 21.3532 2.95961 21.2278 2.286C21.1285 1.75196 21.458 1.22787 21.9865 1.10247L23.059 0.848C23.1939 1.41333 23.3175 2.016 23.4299 2.656C23.5535 3.296 23.6154 3.81333 23.6154 4.208C23.6154 4.74133 23.4917 5.23733 23.2445 5.696C22.9972 6.15467 22.6207 6.528 22.1149 6.816C21.6091 7.104 20.9966 7.248 20.2773 7.248H8.06877V7.328ZM3.39885 4.736C3.17406 4.52267 3.06167 4.19733 3.06167 3.76C3.06167 3.29067 3.17968 2.90667 3.41571 2.608C3.66297 2.30933 4.01701 2.16 4.47782 2.16C5.4444 2.16 5.92769 2.71467 5.92769 3.824V5.04H4.49468C3.98891 5.04 3.62363 4.93867 3.39885 4.736Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M16.4508 1.296C16.1746 1.296 15.9508 1.51986 15.9508 1.796V2.636C15.9508 2.91214 16.1746 3.136 16.4508 3.136H19.6655C19.9416 3.136 20.1655 2.91214 20.1655 2.636V1.796C20.1655 1.51986 19.9416 1.296 19.6655 1.296H16.4508Z"
                          fill="currentColor"
                          fill-opacity="0.5"
                        ></path>
                      </svg>
                      <span className="text-sm pt-1 text-gray-400 line-through">
                        ۱۴۸,۰۰۰,۰۰۰
                      </span>
                    </div>
                  </div>
                </div>

                {/* موجودی */}
                <div className="flex border-b text-[10px] border-b-slate-200 pb-5 items-center justify-center gap-1 text-green-600 font-bold text-sm mb-6">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  موجود در انبار
                </div>

                {/* هشدار موجودی */}
                <div className="text-center text-[10px] text-red-500 mb-4">
                  فقط ۵ عدد باقی‌مانده
                </div>

                {/* دکمه خرید */}
                <button className="w-full  bg-[#1e3a8a] hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-md cursor-pointer transition duration-300 text-[10px]">
                  افزودن به سبد خرید
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
              <RelatedProducts/>

    </div>
  );
}
