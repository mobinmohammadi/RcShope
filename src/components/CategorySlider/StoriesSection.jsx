import { useCallback, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import StoryViewer from "./StoryViewer";

const stories = [
  {
    id: "ps5",
    type: "video",
    title: "PS5",
    src: "/video/1.mp4",
    poster: "https://digital.pixaa.ir/wp-content/uploads/2026/10/playstation.jpg",
    cta: "خرید PS5",
    href: "/product/ps5",
  },
  {
    id: "tecno",
    type: "image",
    title: "موبایل تکنو",
    src: "https://digital.pixaa.ir/wp-content/uploads/2026/10/tecno.jpg",
    cta: "مشاهده",
    href: "/product/tecno",
  },
  {
    id: "worldcup",
    type: "image",
    title: "جام جهانی",
    src: "https://digital.pixaa.ir/wp-content/uploads/2026/10/worldcup.jpg",
    cta: "بیشتر بدانید",
    href: "/blog/worldcup",
  },
  {
    id: "iphone18",
    type: "image",
    title: "آیفون ۱۸",
    src: "https://digital.pixaa.ir/wp-content/uploads/2026/09/iPhone-18-Pro-Max-1TB-Burgundy-e1789200160101.webp",
    cta: "خرید",
    href: "/product/iphone18",
  },
  {
    id: "game",
    type: "image",
    title: "Game",
    src: "https://digital.pixaa.ir/wp-content/uploads/2026/10/487479399180602452852861133685988693836400027n-67e7cecf512e6b0eecebd0ce.webp",
    cta: "مشاهده بازی",
    href: "/games",
  },
];

export default function StoriesSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const openStory = (i) => setActiveIndex(i);
  const closeStory = () => setActiveIndex(null);

  const nextStory = useCallback(() => {
    setActiveIndex((i) =>
      i === null ? null : i < stories.length - 1 ? i + 1 : null
    );
  }, []);

  const prevStory = useCallback(() => {
    setActiveIndex((i) => (i === null ? null : i > 0 ? i - 1 : 0));
  }, []);

  return (
    <>
      <div className="w-full py-4">
        <Swiper
          modules={[FreeMode]}
          freeMode
          slidesPerView="auto"
          spaceBetween={12}
          grabCursor
          dir="rtl"
          className="px-3 sm:px-4"
          breakpoints={{
            640: { spaceBetween: 16 },
            1024: { spaceBetween: 20 },
          }}
        >
          {stories.map((item, index) => (
            <SwiperSlide key={item.id} className="!w-auto">
              <button
                onClick={() => openStory(index)}
                className="group flex flex-col items-center shrink-0 focus:outline-none"
              >
                <div className="rounded-full p-[2.5px] bg-gradient-to-tr from-[var(--color-primary)] to-[var(--color-primary-400)] transition-transform duration-300 group-hover:scale-105">
                  <div className="w-[60px] h-[60px] sm:w-[68px] sm:h-[68px] md:w-[78px] md:h-[78px] rounded-full bg-white dark:bg-gray-900 p-[2.5px]">
                    <img
                      src={item.poster || item.src}
                      alt={item.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                </div>
                <p className="mt-2 text-center text-[10px] sm:text-[11px] md:text-xs font-medium text-gray-700 dark:text-gray-200 truncate max-w-[64px] sm:max-w-[72px] md:max-w-[82px] group-hover:text-primary transition-colors">
                  {item.title}
                </p>
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <StoryViewer
        isOpen={activeIndex !== null}
        story={activeIndex !== null ? stories[activeIndex] : null}
        onClose={closeStory}
        onNext={nextStory}
        onPrev={prevStory}
      />
    </>
  );
}