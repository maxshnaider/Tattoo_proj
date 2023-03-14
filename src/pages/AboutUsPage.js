import img1 from "./../assets/img/about_us_gall1.png";
import img2 from "./../assets/img/about_us_gall2.png";
import img3 from "./../assets/img/about_us_gall3.png";
import img4 from "./../assets/img/about_us_gall4.png";

// import Header from "../assets/components/common/Header";
import custom_img from "../assets/img/Custom_Concepts.png";
import tattoo_chair from "../assets/img/about_us_page_first.png";
import ScrollToTop from "../assets/components/common/ScrollToTop";
// import FootMain from "../assets/components/common/FootMain";
import { Parallax } from "react-parallax";
import bg_about from ".//../assets/img/bg_page_about_us.png";
import { Link } from "react-router-dom";
import React from "react";
// import { useState, useEffect } from "react";
// import { RiseLoader } from "react-spinners";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "atropos/css";
// import Atropos from "atropos/react";

function AboutUsPage() {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setLoading(false); // имитация завершения загрузки
  // }, []);

  // if (loading) {
  //   return (
  //     <div className="spinner-container">
  //       <RiseLoader />
  //     </div>
  //   );
  // }
  return (
    <Parallax bgImage={bg_about} strength={500}>
      {/* <Header /> */}
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
                Known to thousands of clients in the Southeast as one of "the
                Best tTattoo shops in Destin, FL ". Custom Concepts is ready to
                design, develop and tattoo your first, or next tattoo. Shop
                owner and Head Artist, Terry Dutra, has honed his craft over the
                last 17 years providing tattoos in Ft Walton, Destin and
                surrounding areas, and he is ready to make your next big tattoo
                idea a reality!
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateIn="animate__slideInRight"
              animateOnce={true}
            >
              <div className="second_text">
                Of course, walk-ins are welcome and our friendly staff of full
                time, in-house artists are standing by to help you get inked at
                nearly any time of day or night. So no matter what you're
                looking for, no matter how close you are to your final idea or
                design, you can book a free consultation with Custom Concepts to
                learn more about our Destin tattoo shop, the artists, and how we
                can help you with your tattoo.
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
                {/* {img.map((el) => {
                  return (
                    <div className="gallery_item">
                      <div>
                        <img
                          src={`/assets/img/about_us_page/${el.img}`}
                          alt="tattoo_photo"
                        />
                      </div>
                    </div>
                  );
                })} */}
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
      {/* <FootMain /> */}
      <ScrollToTop />
    </Parallax>
  );
}

export default AboutUsPage;
