import AboutUs from "../assets/components/common/AboutUs";
// import AboutUsPage from "./assets/components/common/AboutUsPage";
import Artist from "../assets/components/common/Artist";
import Care from "../assets/components/common/Care";
import HeadSection from "../assets/components/common/HeadSection";
import Reviews from "../assets/components/common/Reviews";
import ContactsMap from "../assets/components/common/ContactsMap";
import { Parallax } from "react-parallax";
import bg2 from "./../assets/img/bg2_3.png";
function Main() {
  return (
    <main>
      <HeadSection />
      <Parallax bgImage={bg2} strength={500}>
        <Artist />
        <AboutUs />
      </Parallax>
      <Care />
      <Reviews />
      <ContactsMap />
    </main>
  );
}

export default Main;
