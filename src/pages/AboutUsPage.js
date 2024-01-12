import img1 from "./../assets/img/about_us_gall1.png";
import img2 from "./../assets/img/about_us_gall2.png";
import img3 from "./../assets/img/about_us_gall3.png";
import img4 from "./../assets/img/about_us_gall4.png";
import custom_img from "../assets/img/Custom_Concepts.png";
import tattoo_chair from "../assets/img/about_us_page_first.png";
import ScrollToTop from "../components/common/ScrollToTop";
import { Parallax } from "react-parallax";
import bg_about from ".//../assets/img/bg_page_about_us.png";
import { Link } from "react-router-dom";
import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "atropos/css";

function AboutUsPage() {

  return (
    <Parallax bgImage={bg_about} strength={500}>
      <main>
        <section className="about_us_page">
          <div className="about_page_first container_1440">
            <div className="animate__animated animate__zoomInLeft">
              <img src={custom_img} alt="customs_img" />
            </div>

            <div className="aa animate__animated animate__zoomInRight">
              <img src={tattoo_chair} alt="tattoo_chair" />
            </div>
          </div>
          <div className="about_page_text container">
            <AnimationOnScroll
              animateIn="animate__slideInLeft"
              animateOnce={true}
            >
              <div className="firts_text">
              Renowned among Southeastern clients as a top-tier tattoo haven in Destin, Florida, Custom Ink Studios is primed to breathe life into your inaugural or subsequent tattoo vision. Terry Green, the visionary owner and Head Artist, has finely honed his craft over 13 years, leaving indelible marks in Ft Walton, Destin, and nearby areas. Eager to transform your next tattoo idea into a personalized masterpiece!
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateIn="animate__slideInRight"
              animateOnce={true}
            >
              <div className="second_text">
              Certainly, walk-ins are welcomed, and our cordial team of full-time, in-house artists is poised to guide you through the tattooing process at nearly any hour. Whether you're refining your design or set on a specific idea, book a free consultation with Custom Ink Studios to delve into our unique Destin tattoo studio, meet our artists, and explore how we can make your tattoo vision a reality.
              </div>
            </AnimationOnScroll>
          </div>
          <div className="about_us_gallery container_1440">
            <AnimationOnScroll animateIn="animate__pulse" animateOnce={true}>
              <div className="gallery_about">
                <div>
                  <div className="about_gal_left">
                    <img src={img1} alt="tattoo_gallery" />
                  </div>
                </div>
                <div className="about_gal_right">
                  <div>
                    <img src={img2} alt="tattoo_gallery" />
                  </div>
                  <div>
                    <img src={img3} alt="tattoo_gallery" />
                  </div>
                  <div>
                    <img src={img4} alt="tattoo_gallery" />
                  </div>
                </div>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__zoomIn" animateOnce={true}>
              <div className="btn_about_page">
                <Link to={"/application"}>
                  <button type="button" className="btn btn_long">
                    Make an appointment
                  </button>
                </Link>
              </div>
            </AnimationOnScroll>
          </div>
        </section>
      </main>
      <ScrollToTop />
    </Parallax>
  );
}

export default AboutUsPage;
