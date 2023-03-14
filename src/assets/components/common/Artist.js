import { Link } from "react-router-dom";
import Atropos from "atropos/react";
import { AnimationOnScroll } from "react-animation-on-scroll";

import Slider from "react-slick";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Artist() {
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="our_artist">
      <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
        <div className="container artist">
          <h2 className="title_h2">
            <Atropos shadow={false} highlight={false} rotateTouch={false}>
              Our Artists
            </Atropos>
          </h2>

          <div className="artist_container">
            <Slider {...settings}>
              <div className="artist_item">
                <Atropos shadow={false} highlight={false} rotateTouch={false}>
                  <div className="artist_img terry_card">
                    <div className="book">
                      <span className="icon-arrow-right2"></span>
                      <Link to={"/application"} className="book_text">
                        <span>Make an appointment</span>
                      </Link>
                    </div>
                  </div>
                </Atropos>

                <h3 className="title_h3">Terry</h3>
                <p>Work experience: 15 years</p>
              </div>

              <div className="artist_item">
                <Atropos rotateTouch={false}>
                  <div className="artist_img nick_card">
                    <div className="book">
                      <span className="icon-arrow-right2"></span>
                      <Link to={"/application"} className="book_text">
                        <span>Make an appointment</span>
                      </Link>
                    </div>
                  </div>
                </Atropos>
                <h3 className="title_h3">Nick</h3>
                <p>Work experience: 10 years</p>
              </div>
              <div className="artist_item">
                <Atropos rotateTouch={false}>
                  <div className="artist_img sandra_card">
                    <div className="book">
                      <span className="icon-arrow-right2"></span>
                      <Link to={"/application"} className="book_text">
                        <span>Make an appointment</span>
                      </Link>
                    </div>
                  </div>
                </Atropos>
                <h3 className="title_h3">Sandra</h3>
                <p>Work experience: 5 years</p>
              </div>
            </Slider>
          </div>
        </div>
      </AnimationOnScroll>
    </section>
  );
}

export default Artist;
