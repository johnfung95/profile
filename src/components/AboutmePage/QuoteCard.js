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
            className="text-center pb-4 mb-12 hover:cursor-grab active:cursor-grabbing"
          >
            <h1 className="quotes text-3xl my-8">{data.quote}</h1>
            <div className="text-center">
              <p>{data.from}</p>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default QuoteCard;
