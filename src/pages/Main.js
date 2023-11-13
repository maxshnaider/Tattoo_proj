import AboutUs from "../components/common/AboutUs";
import Care from "../components/common/Care";
import HeadSection from "../components/common/HeadSection";
import Reviews from "../components/common/Reviews";
import ContactsMap from "../components/common/ContactsMap";
import { Parallax } from "react-parallax";
import bg2 from "../assets/img/bg2_3.png";
import ArtistMain from "../components/common/ArtistMain";
function Main() {
  return (
    <main>
      <HeadSection />
      <Parallax bgImage={bg2} strength={500}>
        <ArtistMain />
        <AboutUs />
      </Parallax>
      <Care />
      <Reviews />
      <ContactsMap />
    </main>
  );
}

export default Main;
