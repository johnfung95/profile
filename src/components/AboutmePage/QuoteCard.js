import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { quotes } from "../../data/quotes";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const QuoteCard = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={100}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      {quotes.map((data) => {
        return (
          <SwiperSlide
            key={data.id}
            className="-z-10 text-center mb-4 pb-4 hover:cursor-grab active:cursor-grabbing"
          >
            <div className="flex flex-col justify-center items-center contents-center">
              <h1 className="quotes text-lg my-8 md:text-2xl">{data.quote}</h1>
              <div className="text-center">
                <p className="text-sm md:text-base">{data.from}</p>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default QuoteCard;
