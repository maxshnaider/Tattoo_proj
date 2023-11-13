import reviewsItems from "../../data/reviewsItems.json";
import ReviewsItem from "../ReviewsItem";
import Slider from "react-slick";
import React, { useEffect, useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Parallax } from "react-parallax";
import bg4 from "../../assets/img/bg_reviews.png";
import Atropos from "atropos/react";
import { AnimationOnScroll } from "react-animation-on-scroll";

function Reviews() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;

    const intervalId = setInterval(() => {
      slider.slickNext();
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Parallax bgImage={bg4} strength={300}>
      <section className="reviews" id="reviews">
        <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
          <div className="container">
            <h2 className="title_h2 title_reviews">
              <Atropos shadow={false} highlight={false} rotateTouch={false}>
                Our Reviews
              </Atropos>
            </h2>

            <div className="reviews_slider">
              <Slider ref={sliderRef} {...settings}>
                {reviewsItems.map((item, index) => (
                  <ReviewsItem img={item.img} title={item.title} key={index} />
                ))}
              </Slider>
            </div>
          </div>
        </AnimationOnScroll>
      </section>
    </Parallax>
  );
}

export default Reviews;
