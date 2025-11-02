import React, { useEffect, useState } from "react";
import "../styles/header.css";
import picfixLogo from "../Multimedia/images/logo (1).svg";

const HeaderPage = ({
  headerLogin,
  headerSignUp,
  headerLinks,
  headerLink,
  onClickButton,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 ${
        scrolled ? "bg-black" : "bg-transparent"
      }`}
    >
      <div className="flex  header-container ">
        <div>
          <a href="/">
            <img src={picfixLogo} alt="PicfiX" />
          </a>
        </div>
        <div className="ul-container">
          <ul className="">
            <li>
              <a href="/">Home </a>
            </li>
            <li>
              <a href="/contact">About Us </a>
            </li>
            <li>
              <a href="/pricing">Shops </a>
            </li>
            <li>
              <a href="/">Pages </a>
            </li>
            <li>
              <a href="/videos">Videos</a>
            </li>
            <li>
              <a href="/contact">Contacts </a>
            </li>
          </ul>
        </div>
        <div className="flex gap-5">
          <div className="none-button">
            <button className="bg-dark/50  login">
              <a href={headerLinks}>{headerLogin}</a>
            </button>
            <button className="signup" onClick={onClickButton}>
              <a href={headerLink}>{headerSignUp}</a>
            </button>
          </div>
          <div className="hamburger-container">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto relative">
              <button
                data-collapse-toggle="navbar-hamburger"
                type="button"
                class=""
                aria-controls="navbar-hamburger"
                aria-expanded="false"
              >
                <span class="sr-only">Open main menu</span>
                <svg
                  class="w-7 h-7"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
              <div
                class="hidden w-full absolute top-12 right-40"
                id="navbar-hamburger"
              >
                <ul class="flex flex-col">
                  <li>
                    <a href="/" class="" aria-current="page">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="/contact" class="">
                      About us
                    </a>
                  </li>
                  <li>
                    <a href="/pricing" class="">
                      Shops
                    </a>
                  </li>
                  <li>
                    <a href="/" class="">
                      Pages
                    </a>
                  </li>
                  <li>
                    <a href="/videos" class="">
                      Videos
                    </a>
                  </li>
                  <li>
                    <a href="/contact" class="">
                      Contact
                    </a>
                  </li>
                  <div className="flex align-middle ul-button-container">
                    <button className="bg-dark/50  login">
                      <a href={headerLinks}>{headerLogin}</a>
                    </button>
                    <button className="signup" onClick={onClickButton}>
                      <a href={headerLink}>{headerSignUp}</a>
                    </button>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HeaderPage;
