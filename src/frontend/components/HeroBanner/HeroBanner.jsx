import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "./hero-swiper.css";

function SlideImage({ src, alt, isPriority }) {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <div className="relative w-full h-[180px] sm:h-[250px] md:h-[320px] lg:h-[400px] overflow-hidden rounded-2xl">
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center animate-pulse" />
      )}
      <img
        src={src}
        alt={alt}
        loading={isPriority ? "eager" : "lazy"}
        fetchPriority={isPriority ? "high" : "auto"}
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full object-cover transition-all duration-700 ease-out ${
          isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105"
        }`}
      />
    </div>
  );
}

const heroBanners = [
  { id: 1, src: "/banner/1.gif", href: "/", alt: "خرید موبایل" },
  { id: 2, src: "/banner/2.webp", href: "/", alt: "خرید ساعت هوشمند" },
];

export default function HeroSlider() {
  const swiperRef = useRef(null);

  return (
    <div className="relative  w-full mx-auto px-2 sm:px-0">
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[Autoplay, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 500000, disableOnInteraction: false, pauseOnMouseEnter: true }}
        pagination={{ clickable: true }}
        dir="rtl"
        className="hero-swiper w-full rounded-2xl overflow-hidden shadow-md"
      >
        {heroBanners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <a href={banner.href} className="block w-full outline-none">
              <SlideImage src={banner.src} alt={banner.alt} isPriority={banner.id === 1} />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute bottom-16 right-7 flex items-center gap-2 z-20">
        <button
          type="button"
          aria-label="قبلی"
          onClick={() => swiperRef.current?.slideNext()}
          className="hidden md:flex w-13 h-13 items-center justify-center cursor-pointer rounded-full bg-white text-zinc-900 transition-colors"
        >
          <span className=" text-[40px] leading-none">‹</span>
        </button>

        <button
          type="button"
          aria-label="بعدی"
          onClick={() => swiperRef.current?.slidePrev()}
          className="hidden md:flex w-13 h-13 items-center justify-center cursor-pointer rounded-full bg-white text-zinc-900  transition-colors"
        >
          <span className=" text-[40px] leading-none">›</span>
        </button>
      </div>
    </div>
  );
}