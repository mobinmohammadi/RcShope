import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./hero-swiper.css"; 

// کامپوننت داخلی برای مدیریت ترانزیشن تصویر
function SlideImage({ src, alt, isPriority }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative w-full h-[180px] sm:h-[250px] md:h-[320px] lg:h-[400px] bg-gray-200 dark:bg-gray-800 overflow-hidden rounded-2xl">
      {/* اسکلتون لودینگ (قبل از لود کامل) */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200 dark:bg-gray-800 animate-pulse">
          {/* می‌توانید یک آیکون لودینگ یا لوگو اینجا بگذارید */}
        </div>
      )}

      {/* تصویر اصلی با ترانزیشن نرم */}
      <img
        src={src}
        alt={alt}
        loading={isPriority ? "eager" : "lazy"}
        fetchPriority={isPriority ? "high" : "auto"}
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        // object-cover + object-center برای پوشش کامل و بدون کشیدگی
        // transition-all + duration-700 برای نرمی انیمیشن
        className={`
          w-full h-full object-cover object-center 
          transition-all duration-700 ease-out
          image-rendering-high-quality
          ${isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105"}
        `}
      />
    </div>
  );
}

const heroBanners = [
  {
    id: 1,
    src: "https://digital.pixaa.ir/wp-content/uploads/2026/08/banner-apple-1024x506.webp",
    href: "/",
    alt: "خرید موبایل",
  },
  {
    id: 2,
    src: "https://digital.pixaa.ir/wp-content/uploads/2026/08/watch-1024x506.webp",
    href: "/",
    alt: "خرید ساعت هوشمند",
  },
  {
    id: 3,
    src: "https://digital.pixaa.ir/wp-content/uploads/2026/08/speaker-1024x506.webp",
    href: "/",
    alt: "خرید اسپیکر",
  },
  {
    id: 4,
    src: "https://digital.pixaa.ir/wp-content/uploads/2026/08/digitalmobile-1024x506.jpg",
    href: "/",
    alt: "خرید لوازم دیجیتال",
  },
];

export default function HeroSlider() {
  return (
    <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 py-4">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        navigation={true}
        pagination={{ clickable: true }}
        dir="rtl"
        className="hero-swiper rounded-2xl overflow-hidden shadow-md"
      >
        {heroBanners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <a href={banner.href} className="block w-full outline-none group">
              <SlideImage 
                src={banner.src} 
                alt={banner.alt} 
                isPriority={banner.id === 1} 
              />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}