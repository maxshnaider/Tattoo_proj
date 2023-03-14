import Header from "../assets/components/common/Header";
// import AboutUs from "../assets/components/common/AboutUs";
// import AboutUsPage from "./assets/components/common/AboutUsPage";
// import Artist from "../assets/components/common/Artist";
// import Care from "../assets/components/common/Care";
import FootMain from "../assets/components/common/FootMain";
// import HeadSection from "../assets/components/common/HeadSection";
// import Reviews from "../assets/components/common/Reviews";
// import ContactsMap from "../assets/components/common/ContactsMap";
import ScrollToTop from "../assets/components/common/ScrollToTop";
// import { Parallax } from "react-parallax";
// import bg2 from "./../assets/img/bg2_3.png";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <FootMain />
      <ScrollToTop />
    </div>
  );
}

export default App;
