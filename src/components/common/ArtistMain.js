import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Slider from "react-slick";
import artists from "../../data/artists.json";
import ArtistMainCard from "../ArtistMainCard";

function ArtistMain() {
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
              Our Artists
          </h2>
          <div className="artist_container">
            <Slider {...settings}>
              {artists.map((artist, index) => (
                <ArtistMainCard key={index} name={artist.name} link={artist.link} />
              ))}
            </Slider>
          </div>
        </div>
      </AnimationOnScroll>
    </section>
  );
}

export default ArtistMain;

