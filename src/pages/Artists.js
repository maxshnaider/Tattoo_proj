import terry_img from "../assets/img/artist_page_terry.png";
import nick_img from "../assets/img/artist_page_nick.png";
import sandra_img from "../assets/img/artist_page_sandra.png";

// import Header from "../assets/components/common/Header";
import { Link } from "react-router-dom";
import ScrollToTop from "../assets/components/common/ScrollToTop";
// import FootMain from "../assets/components/common/FootMain";
import React from "react";
import LazyLoad from "react-lazy-load";
import bg_artist from "./../assets/img/bg_artists_page.png";
import { Parallax } from "react-parallax";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "atropos/css";
import Atropos from "atropos/react";

function Artists() {
  return (
    <Parallax bgImage={bg_artist} strength={1000}>
      {/* <Header /> */}
      <main>
        <section className="artists_page">
          <div className="container">
            <div className="artist_page_item">
              <div className="artist_page_info animate__animated animate__slideInLeft">
                <Atropos shadow={false} highlight={false} rotateTouch={false}>
                  <h2 className="title_h2">Terry Dutra</h2>
                </Atropos>
                <p className="text1">
                  Terry has been tattooing and studying the principles and
                  elements of the arts for more than 13 years and is among the
                  best tattoo artists in and around Destin, Florida. Everyday is
                  a new day and a new challenge.
                </p>
                <p className="text2">
                  Nothing in life is cookie cut, so why should your tattoos be
                  pre-shaped, or prefabbed. Every design from Destin's best
                  tattoo artist, Terry Dutra, is unique and customized to the
                  liking and wants of the client, and with a personal touch that
                  can only be found at Custom Concepts. Terry always puts the
                  focus on the client and the art they want to illustrate their
                  ideas with.
                </p>
                <Link to={"/error"}>
                  <button type="button" className="btn btn_see btn_artist">
                    See works
                  </button>
                </Link>
              </div>
              <div className="artist_photo animate__animated animate__slideInRight">
                <Atropos shadow={false} highlight={false} rotateTouch={false}>
                  <LazyLoad height={648} offset={100}>
                    <img src={terry_img} alt="terry_master" />
                  </LazyLoad>
                </Atropos>
              </div>
              <Link to={"/error"}>
                <button type="button" className="btn btn_see btn_artist_resp">
                  See works
                </button>
              </Link>
            </div>
            <div className="artist_page_item reverse">
              <AnimationOnScroll
                animateIn="animate__slideInRight"
                animateOnce={true}
              >
                <div className="artist_page_info">
                  <Atropos shadow={false} highlight={false} rotateTouch={false}>
                    <h2 className="title_h2">Nick Holt</h2>
                  </Atropos>
                  <p className="text1">
                    Nick Holt, a local native to the emerald coast; who has been
                    tattooing with Custom Concepts over 3 years now. Continues
                    studying all elements of tattooing and art, he enjoys
                    vibrant wild color schemes along with elements of
                    Traditional, Neo traditional and new school styles of
                    tattooing.
                  </p>
                  <p className="text2">
                    Always wanting and willing to expand in his profession, he
                    will tackle your next project. Book now for a consultation
                    and come say "Hi!"
                  </p>
                  <Link to={"/nick"}>
                    <button type="button" className="btn btn_see btn_artist">
                      See works
                    </button>
                  </Link>
                </div>
              </AnimationOnScroll>
              <AnimationOnScroll
                animateIn="animate__slideInLeft"
                animateOnce={true}
              >
                <div className="artist_photo">
                  <Atropos shadow={false} highlight={false} rotateTouch={false}>
                    <LazyLoad height={648} offset={100}>
                      <img src={nick_img} alt="nick_master" />
                    </LazyLoad>
                  </Atropos>
                </div>
              </AnimationOnScroll>
              <Link to={"/nick"}>
                <button type="button" className="btn btn_see btn_artist_resp">
                  See works
                </button>
              </Link>
            </div>
            <div className="artist_page_item sandra">
              <AnimationOnScroll
                animateIn="animate__slideInLeft"
                animateOnce={true}
              >
                <div className="artist_page_info">
                  <Atropos shadow={false} highlight={false} rotateTouch={false}>
                    <h2 className="title_h2">Sandra</h2>
                  </Atropos>
                  <p className="text1">
                    Nick Holt, a local native to the emerald coast; who has been
                    tattooing with Custom Concepts over 3 years now. Continues
                    studying all elements of tattooing and art, he enjoys
                    vibrant wild color schemes along with elements of
                    Traditional, Neo traditional and new school styles of
                    tattooing.
                  </p>
                  <p className="text2">
                    Always wanting and willing to expand in his profession, he
                    will tackle your next project. Book now for a consultation
                    and come say "Hi!"
                  </p>
                  <Link to={"/error"}>
                    <button type="button" className="btn btn_see btn_artist">
                      See works
                    </button>
                  </Link>
                </div>
              </AnimationOnScroll>
              <AnimationOnScroll
                animateIn="animate__slideInRight"
                animateOnce={true}
              >
                <div className="artist_photo">
                  <Atropos shadow={false} highlight={false} rotateTouch={false}>
                    <LazyLoad height={648} offset={100}>
                      <img src={sandra_img} alt="sandra_master" />
                    </LazyLoad>
                  </Atropos>
                </div>
              </AnimationOnScroll>
              <Link to={"/error"}>
                <button type="button" className="btn btn_see btn_artist_resp">
                  See works
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      {/* <FootMain /> */}
      <ScrollToTop />
    </Parallax>
  );
}

export default Artists;
