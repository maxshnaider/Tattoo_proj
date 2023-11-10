import { Link } from "react-router-dom";
import bg from "../../assets/img/bg_head.png";
import { Parallax } from "react-parallax";
import Atropos from "atropos/react";

function HeadSection() {
  return (
    <Parallax bgImage={bg} strength={300}>
      <section className="head_section">
        <div className="container">
          <h1>
            <Atropos shadow={false} highlight={false} rotateTouch={true}>
              Custom Concepts <br /> Tattoo and Design
            </Atropos>
          </h1>

          <p>we will be your first</p>
          <Link to={"/application"}>
            <button type="button" className="btn btn_head">
              Booking
            </button>
          </Link>
          <ul className="icons_contact">
            <li>
              <a href="https://www.instagram.com/">
                <span className="icon-instagram"></span>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/">
                <span className="icon-facebook"></span>
              </a>
            </li>
            <li>
              <a href="htpps://www.twitter.com/">
                <span className="icon-twitter"></span>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </Parallax>
  );
}

export default HeadSection;
