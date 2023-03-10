import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const dummyData = [
  {
    quote: "He is a good boy",
    person: "Anonymous A",
    from: "A Company",
  },
  {
    quote: "A bit stupid but a honest person",
    person: "Anonymous B",
    from: "Yoho",
  },
  {
    quote: "A shy toxic rubbish",
    person: "Anonymous C",
    from: "TT",
  },
];

const QuoteCard = () => {
  return (
    <Carousel className="w-full h-100">
      <div>
        <img src="assets/1.jpeg" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src="assets/2.jpeg" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src="assets/3.jpeg" />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  );
};

export default QuoteCard;
