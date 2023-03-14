import { Link, useLocation } from "react-router-dom";
import logo from "./../../img/Logo.png";
import Atropos from "atropos/react";

function Header() {
  const pathname = useLocation();

  const clickHandler = (e) => {
    if (`#${pathname.pathname}` === e.target.getAttribute("href")) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  function toggle() {
    document.getElementById("mobile_menu").classList.toggle("open");
    document.getElementById("ham_btn").classList.toggle("is-active");
  }

  return (
    <header id="header">
      <div className="header_top">
        <div className="container">
          <div className="head_flex">
            <div className="logo">
              <Link to={"/"} onClick={clickHandler}>
                <img src={logo} alt="logo" />
              </Link>
            </div>
            <ul className="nav">
              <li>
                {/* <a href="/">Home</a> */}

                <Link to={"/"} onClick={clickHandler}>
                  <Atropos shadow={false} highlight={false}>
                    Home
                  </Atropos>
                </Link>
              </li>
              <li>
                {/* <a href="#">Artists</a> */}
                <Link to="/artists" onClick={clickHandler}>
                  <Atropos shadow={false} highlight={false}>
                    Artists
                  </Atropos>
                </Link>
              </li>
              <li>
                {/* <a href={"/about"}>About us</a> */}
                <Link to={"/about"}>
                  <Atropos shadow={false} highlight={false}>
                    About us
                  </Atropos>
                </Link>
              </li>
              <li>
                <Link to={"/error"}>
                  <Atropos shadow={false} highlight={false}>
                    Care
                  </Atropos>
                </Link>
              </li>
              <li>
                <Link to={"/error"}>
                  {" "}
                  <Atropos shadow={false} highlight={false}>
                    Contact
                  </Atropos>
                </Link>
              </li>
              <li>
                <Link to={"/error"}>
                  {" "}
                  <Atropos shadow={false} highlight={false}>
                    Reviews
                  </Atropos>
                </Link>
              </li>
            </ul>
            <button
              onClick={toggle}
              className="hamburger hamburger--collapse"
              type="button"
              id="ham_btn"
            >
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
            <div id="mobile_menu">
              <ul className="nav_mobile">
                <li>
                  {/* <a href="/">Home</a> */}
                  <Link to={"/home"}>Home</Link>
                </li>
                <li>
                  {/* <a href="#">Artists</a> */}
                  <Link to={"/artists"}>Artists</Link>
                </li>
                <li>
                  {/* <a href={"/about"}>About us</a> */}
                  <Link to={"/about"}>About us</Link>
                </li>
                <li>
                  <Link to={"/error"}>Care</Link>
                </li>
                <li>
                  <Link to={"/error"}>Contact</Link>
                </li>
                <li>
                  <Link to={"/error"}>Reviews</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
