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
        

<nav class="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    
    <div class="hidden w-full" id="navbar-hamburger">
      <ul class="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
        <li>
          <a href="#" class="block py-2 px-3 text-white bg-blue-700 rounded-sm dark:bg-blue-600" aria-current="page">Home</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Services</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white">Pricing</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

      </div>
    </nav>
  );
};

export default HeaderPage;
