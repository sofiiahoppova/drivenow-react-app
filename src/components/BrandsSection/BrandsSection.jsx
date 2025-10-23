import React from "react";
import css from "./BrandsSection.module.css";
import { Navigation, Pagination, A11y, EffectCoverflow } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-coverflow";

const BrandsSection = () => {
  return (
    <section className={css.container}>
      <h2 className={css.title}>Btands We Offer</h2>
      <p className={css.description}>
        Select your favorite brand and discover available models.
      </p>
      <div className={css.wrapper}>
        <div className="custom-prev">
          <svg className={css.icon} width={20} height={32}>
            <use href="/sprite.svg#icon-chevron"></use>
          </svg>
        </div>
        <Swiper
          modules={[Navigation, Pagination, A11y, EffectCoverflow]}
          //   effect="coverflow"
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
          <SwiperSlide className={css.item}>
            <img
              className={css.image}
              src="/images/CarBrands/Audi.png"
              alt="Audi"
            />
          </SwiperSlide>
          <SwiperSlide className={css.item}>
            <img
              className={css.image}
              src="/images/CarBrands/Toyota.png"
              alt="Toyota"
            />
          </SwiperSlide>
          <SwiperSlide className={css.item}>
            <img
              className={css.image}
              src="/images/CarBrands/Volkswagen.png"
              alt="Volkswagen"
            />
          </SwiperSlide>
          <SwiperSlide className={css.item}>
            <img
              className={css.image}
              src="/images/CarBrands/Nissan.png"
              alt="Nissan"
            />
          </SwiperSlide>
          <SwiperSlide className={css.item}>
            <img
              className={css.image}
              src="/images/CarBrands/Mersedes.png"
              alt="Mercedes"
            />
          </SwiperSlide>
        </Swiper>
        <div className="custom-next">
          <svg className={css.icon} width={20} height={32}>
            <use href="/sprite.svg#icon-chevron"></use>
          </svg>
        </div>
      </div>
      <div className="custom-pagination"></div>
    </section>
  );
};

export default BrandsSection;
