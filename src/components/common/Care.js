import bg3 from "../../assets/img/bg_care.png";
import { Parallax } from "react-parallax";
import Atropos from "atropos/react";
import { Link } from "react-router-dom";
import { AnimationOnScroll } from "react-animation-on-scroll";

function Care() {
  return (
    <Parallax bgImage={bg3} strength={300}>
      <section className="care" id="care">
        <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
          <div className="container">
            <h2 className="title_h2 title_care">
              <Atropos shadow={false} highlight={false} rotateTouch={false}>
                Tattoo Care
              </Atropos>
            </h2>

            <div className="care_text">
              <p>TATTOO CARE FIRST STEP'S</p>
              <ol>
                <li>Remove Bandage after 2 hours</li>
                <li>
                  Wash tattoo with warm water and a mild fragrance free
                  antibacterial soap, such as Ivory
                </li>
                <li>Rinse soap off tattoo and air dry or pat dry.</li>
                <li>Do not cover tattoo again.</li>
                <li>
                  Apply a very thin coat of Bacitracin to the tattoo 3 to 4
                  times daily for the first 3 days.
                </li>
                <li>
                  After day 3, switch from Bacitracin to a colorless and
                  fragrance free lotion.
                </li>
                <li>
                  No swimming, soaking, tanning, picking or scratching your
                  tattoo for the first 2 weeks.
                </li>
              </ol>
              <p>
                DAY 1:
                <br />
                Your new tattoo will be somewhat tender, and will feel like a
                new sunburn.The care of your tattoo is your responsibility. How
                you care for it in the first few days determines the way it will
                look forever.
              </p>
            </div>
            <Link to={"/error"}>
              <button type="button" className="btn btn_long">
                Know more
              </button>
            </Link>
          </div>
        </AnimationOnScroll>
      </section>
    </Parallax>
  );
}

export default Care;
