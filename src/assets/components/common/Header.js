import { Link, useLocation } from "react-router-dom";
import logo from "./../../img/Logo.png";
import Atropos from "atropos/react";
import React, { useRef, useEffect } from "react";

function Header() {
  const pathname = useLocation();

  const clickHandler = (e) => {
    if (`#${pathname.pathname}` === e.target.getAttribute("href")) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const menuRef = useRef(null);
  const btnRef = useRef(null);

  function handleClickOutside(event) {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      btnRef.current &&
      !btnRef.current.contains(event.target)
    ) {
      closeMenu();
    }
  }

  function closeMenu() {
    document.getElementById("mobile_menu").classList.remove("open");
    document.getElementById("ham_btn").classList.remove("is-active");
  }

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  });

  function handleMenuClick() {
    closeMenu();
  }

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
                <Link to={"/"} onClick={clickHandler}>
                  <Atropos shadow={false} highlight={false}>
                    Home
                  </Atropos>
                </Link>
              </li>
              <li>
                <Link to="/artists" onClick={clickHandler}>
                  <Atropos shadow={false} highlight={false}>
                    Artists
                  </Atropos>
                </Link>
              </li>
              <li>
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
                <Link to={"/reviews"}>
                  {" "}
                  <Atropos shadow={false} highlight={false}>
                    Reviews
                  </Atropos>
                </Link>
              </li>
            </ul>
            <button
              ref={btnRef}
              onClick={toggle}
              className="hamburger hamburger--collapse"
              type="button"
              id="ham_btn"
            >
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
            <div id="mobile_menu" ref={menuRef}>
              <ul className="nav_mobile">
                <li>
                  <Link to={"/"} onClick={handleMenuClick}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to={"/artists"} onClick={handleMenuClick}>
                    Artists
                  </Link>
                </li>
                <li>
                  <Link to={"/about"} onClick={handleMenuClick}>
                    About us
                  </Link>
                </li>
                <li>
                  <Link to={"/error"} onClick={handleMenuClick}>
                    Care
                  </Link>
                </li>
                <li>
                  <Link to={"/error"} onClick={handleMenuClick}>
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to={"/error"} onClick={handleMenuClick}>
                    Reviews
                  </Link>
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
