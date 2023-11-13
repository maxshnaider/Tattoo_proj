import about_img from "../../assets/img/about_us_main.png";
import { Link } from "react-router-dom";
import React from "react";
import LazyLoad from "react-lazy-load";
import "atropos/css";
import Atropos from "atropos/react";
import { AnimationOnScroll } from "react-animation-on-scroll";

function AboutUs() {
  return (
    <section className="about_us">
      <div className="container">
        <div className="about_us_flex">
          <AnimationOnScroll
            animateIn="animate__slideInLeft"
            animateOnce={true}
          >
            <div className="about_us_left">
              <Atropos shadow={false} highlight={false} rotateTouch={false}>
                <h2 className="title_h2 title_about">About us</h2>
              </Atropos>

              <p>
                Custom Concepts is ready to design, develop and tattoo your
                first, or next tattoo. Shop owner and Head Artist, Terry Dutra,
                has honed his craft over the last 17 years providing tattoos in
                Ft Walton, Destin and surrounding areas, and he is ready to make
                your next big tattoo idea a reality! Of course, walk-ins are
                welcome and our friendly staff of full time...
              </p>

              <Link to={"/about"}>
                <button type="button" className="btn btn_see btn_about">
                  See more
                </button>
              </Link>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__slideInRight"
            animateOnce={true}
          >
            <div className="about_us_right">
              <LazyLoad height={548} offset={100}>
                <img src={about_img} alt="tattoo_chair" />
              </LazyLoad>
            </div>
          </AnimationOnScroll>
        </div>
        <Link to={"/about"}>
          <button type="button" className="btn btn_see btn_about_res btn_long">
            See more
          </button>
        </Link>
      </div>
    </section>
  );
}

export default AboutUs;
