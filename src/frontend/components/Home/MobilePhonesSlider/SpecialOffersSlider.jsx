import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import OfferCard from "./OfferCard";
import ProductModal from "../../../../utils/ModalAddToBasket"; // مسیر را چک کنید

import "swiper/css";
import "swiper/css/navigation";

export default function SpecialOffersSlider({ products }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div
      className="w-full rounded-lg mx-auto py-4 sm:py-6 px-2 sm:px-4 overflow-hidden"
      dir="rtl"
    >
      <div className="relative border-[1.5px] bg-[#CD003E] border-[#ef4056] rounded-2xl p-2 sm:p-3 md:p-4 flex flex-row items-stretch gap-2 sm:gap-3">
        {/* ... بخش لوگو و تایمر بدون تغییر ... */}

        <div className="flex-1 min-w-0 relative overflow-hidden">
          <Swiper
            modules={[Navigation]}
            spaceBetween={6}
            slidesPerView={1.8}
            slidesOffsetBefore={4}
            slidesOffsetAfter={4}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            breakpoints={{
              400: { slidesPerView: 2, spaceBetween: 6, slidesOffsetBefore: 6 },
              480: { slidesPerView: 2.3, spaceBetween: 8, slidesOffsetBefore: 8 },
              640: { slidesPerView: 3, spaceBetween: 10, slidesOffsetBefore: 10 },
              768: { slidesPerView: 3.3, spaceBetween: 10 },
              1024: { slidesPerView: 4, spaceBetween: 12, slidesOffsetBefore: 16 },
              1280: { slidesPerView: 5, spaceBetween: 12, slidesOffsetBefore: 16 },
            }}
            className="h-full w-full !py-1"
          >
            {products.map((product) => (
              <SwiperSlide key={product.id} className="h-auto">
                <OfferCard
                  product={product}
                  onClick={handleOpenModal}   
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="custom-prev ...">...</button>
          <button className="custom-next ...">...</button>
        </div>
      </div>

      <ProductModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        product={selectedProduct}
      />
    </div>
  );
}