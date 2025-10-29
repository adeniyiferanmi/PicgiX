import React, { useEffect, useState } from "react";
import "../styles/header.css";
import picfixLogo from "../Multimedia/images/logo (1).svg";

const HeaderPage = ({headerLogin,headerSignUp,headerLinks,headerLink,onClickButton}) => {
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
    <nav  className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 ${
        scrolled ? "bg-black" : "bg-transparent"
      }`}
      >
      <div className="flex  header-container ">
        <div>
          <a href="/">
            <img
              src={picfixLogo}
              alt="PicfiX"
            />
          </a>
        </div>
        <div className="ul-container">
          <ul className="">
            <li>
              <a href="/">
                Home{" "}
               
              </a>
            </li>
            <li>
              <a href="/contact">
                About Us{" "}
                
              </a>
            </li>
            <li>
              <a href="/pricing">
                Shops{" "}
               
              </a>
            </li>
            <li>
              <a href="/">
                Pages{" "}
                
              </a>
            </li>
            <li>
              <a href="/videos">
                Videos
               
              </a>
            </li>
            <li>
              <a href="/contact">
                Contacts{" "}
                
              </a>
            </li>
          </ul>
        </div>
        <div className="">
          <button className="bg-dark/50  login">
            <a href={headerLinks}>{headerLogin}</a>
          </button>
          <button className="signup" onClick={onClickButton}>
            <a href={headerLink}>{headerSignUp}</a>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default HeaderPage;
