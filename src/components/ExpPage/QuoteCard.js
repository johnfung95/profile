import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const dummyData = [
  {
    quote: "‘ He is a good boy ’",
    person: "Anonymous A",
    from: "A Company",
  },
  {
    quote: "‘ A bit stupid but a honest person ’",
    person: "Anonymous B",
    from: "Yoho",
  },
  {
    quote: "‘ A shy toxic rubbish ’",
    person: "Anonymous C",
    from: "TT",
  },
];

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
      {dummyData.map((data) => {
        return (
          <SwiperSlide className="text-center pb-4 mb-12 hover:cursor-grab active:cursor-grabbing">
            <h1 className="quotes text-3xl my-8">{data.quote}</h1>
            <div className="flex justify-center items-center gap-4">
              <p>{data.person}</p>
              <p>{data.from}</p>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default QuoteCard;
