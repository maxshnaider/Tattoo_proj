import Header from "../assets/components/common/Header";
import FootMain from "../assets/components/common/FootMain";
import ScrollToTop from "../assets/components/common/ScrollToTop";
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
