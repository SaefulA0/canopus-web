import { Swiper, SwiperSlide } from "swiper/react";

export default function CarouselContent() {
  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="h-32 w-32">Hel</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-32 w-32">Hel</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-32 w-32">Hel</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-32 w-32">Hel</div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
