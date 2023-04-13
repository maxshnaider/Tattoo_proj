import nick_img from "../assets/img/artist_page_nick.png";
import { Link } from "react-router-dom";
import nick_gallery from "../data/nick_gallery.json";
import ScrollToTop from "../assets/components/common/ScrollToTop";
// import { AnimationOnScroll } from "react-animation-on-scroll";
import "atropos/css";
import Atropos from "atropos/react";

import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

function NickHoltPage() {
  return (
    <div className="nick_wrap">
      <main>
        <section className="artists_page">
          <div className="container">
            <div className="artist_page_item reverse">
              <div className="artist_page_info animate__animated animate__slideInRight">
                <Atropos shadow={false} highlight={false}>
                  <h2 className="title_h2">Nick Holt</h2>
                </Atropos>
                <p className="text1">
                  Nick Holt, a local native to the emerald coast; who has been
                  tattooing with Custom Concepts over 3 years now. Continues
                  studying all elements of tattooing and art, he enjoys vibrant
                  wild color schemes along with elements of Traditional, Neo
                  traditional and new school styles of tattooing.
                </p>
                <p className="text2">
                  Always wanting and willing to expand in his profession, he
                  will tackle your next project. Book now for a consultation and
                  come say "Hi!"
                </p>
                <Link to={"/application"}>
                  <button type="button" className="btn btn_long btn_nick">
                    Make an appointment
                  </button>
                </Link>
              </div>
              <div className="artist_photo animate__animated animate__slideInLeft">
                <img src={nick_img} alt="nick_muster" />
              </div>
            </div>
          </div>
          <div className="nick_gallery">
            <div className="container_1440">
              <div className="grid_gallery">
                <LightGallery
                  speed={500}
                  plugins={[lgThumbnail, lgZoom]}
                  thumbWidth={100}
                  className="lightgallery"
                >
                  {nick_gallery.map((el, index) => {
                    return (
                      <a
                        key={index}
                        href={`./assets/img/gallery/${el.src}`}
                        className="grid_item"
                      >
                        <img
                          src={`./assets/img/gallery/${el.src}`}
                          alt="tattoo_item"
                        />
                      </a>
                    );
                  })}{" "}
                </LightGallery>
              </div>
            </div>
          </div>
        </section>
      </main>
      <ScrollToTop />
    </div>
  );
}

export default NickHoltPage;
