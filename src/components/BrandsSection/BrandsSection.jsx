import React from "react";
import css from "./BrandsSection.module.css";
import { Navigation, Pagination, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const BrandsSection = () => {
  return (
    <section>
      <h2>Btands We Offer</h2>
      <p>Select your favorite brand and discover available models.</p>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        loop
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        pagination={{
          el: ".custom-pagination",
          clickable: true,
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <img src="/images/CarBrands/Audi.png" alt="Audi" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/CarBrands/Toyota.png" alt="Toyota" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/CarBrands/Volkswagen.png" alt="Volkswagen" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/CarBrands/Nissan.png" alt="Nissan" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/CarBrands/Mersedes.png" alt="Mercedes" />
        </SwiperSlide>
        <div className={css.controls}>
          <div className="custom-prev">
            <svg className={css.icon} width={20} height={32}>
              <use href="/sprite.svg#icon-chevron"></use>
            </svg>
          </div>
          <div className="custom-pagination"></div>
          <div className="custom-next">
            <svg className={css.icon} width={20} height={32}>
              <use href="/sprite.svg#icon-chevron"></use>
            </svg>
          </div>
        </div>
      </Swiper>
    </section>
  );
};

export default BrandsSection;
