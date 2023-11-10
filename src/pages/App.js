import Header from "../components/common/Header";
import FootMain from "../components/common/FootMain";
import ScrollToTop from "../components/common/ScrollToTop";
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
