import AboutUs from "../components/common/AboutUs";
import Care from "../components/common/Care";
import HeadSection from "../components/common/HeadSection";
import ContactsMap from "../components/common/ContactsMap";
import { Parallax } from "react-parallax";
import bg2 from "../assets/img/bg2_3.png";
import ArtistMain from "../components/common/ArtistMain";
import OurWorks from "../components/common/OurWorks";

function Main() {
  return (
    <main>
      <HeadSection />
      <Parallax bgImage={bg2} strength={500}>
        <ArtistMain />
        <AboutUs />
      </Parallax>
      <Care />
      <OurWorks />
      <ContactsMap />
    </main>
  );
}

export default Main;
