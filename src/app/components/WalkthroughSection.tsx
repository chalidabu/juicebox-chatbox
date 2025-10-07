"use client";

import { useRef, useState } from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import { FaArrowLeft } from "react-icons/fa";

const WalkthroughSection = ({
  onNext,
  onBack,
}: {
  onNext: () => void;
  onBack: () => void;
}) => {
  const slides = [
    {
      text: "Professionals around the world shared how they feel about technology and I’ve listened. Now it’s your turn.",
    },
    {
      text: "I’ll ask you a handful of meaningful questions and compare your responses with people in your industry. ",
    },
    {
      text: "You’ll get insights into current industry sentiments and a reality check about technology in a few minutes. Deal? Great!",
    },
  ];

  const swiperRef = useRef<SwiperType>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isLastSlide = activeIndex === slides.length - 1;

  const buttonClass = isLastSlide
    ? "invert white"
    : "invert"

  const handleNext = () => {
    if (activeIndex === slides.length - 1) {
      onNext();
    } else {
      swiperRef.current?.slideNext();
    }
  };

  const handleBack = () => {
    if (activeIndex === 0) {
      onBack();
    } else {
      swiperRef.current?.slidePrev();
    }
  };

  return (
    <section>
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          textAlign: "center",
        }}
      >
        <div>
          <button className="back" onClick={handleBack}>
            <FaArrowLeft style={{ color: "white", width: "20px", height: "20px", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} />
          </button>
        </div>

        <div>
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            modules={[Pagination]}
            pagination={{ clickable: false }}
            onSwiper={(swiper: SwiperType) => (swiperRef.current = swiper)}
            onSlideChange={(swiper: SwiperType) =>
              setActiveIndex(swiper.activeIndex)
            }
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div>
                  <h2>{slide.text}</h2>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div>
          <button className={buttonClass} onClick={handleNext}>
            {isLastSlide ? "Get Started" : "Continue"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default WalkthroughSection;
