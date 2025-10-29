import React from "react";
import "../styles/footer.css";
import picfixLogo from "../Multimedia/images/logo (1).svg";



const FooterPage = () => {
  return (
    <div>
      <footer class="footer-container ">
        <div className="footer-content-container">
          <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
            <div class="flex justify-between gap-8 list-container">
              <div class="mb-6 md:mb-0 img-container w-100">
                <a href="/" class="flex items-center">
                  <img
                    src={picfixLogo}
                    class=""
                    alt="Pixgix Logo"
                  />
                </a>
                <div className="paragraph-container">
                  <p className="paragraph-container">
                    Pixgix is your go-to AI-powered platform for in  effortlessly
                    creating stunning, high-quality  videos seconds. Whether
                    you're a designer, marketer.
                  </p>
                  <a href="" className="example-container">example@gmail.com</a>
                  <h3>+365 4359 4358</h3>
                </div>
              </div>
              <div class="grid grid-cols-2 sm:grid-cols-3 ">
                <div>
                  <h2 class="">
                    Company
                  </h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                    <li class="mb-4">
                      <a href="" class="hover:underline">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        class="hover:underline"
                      >
                        Services
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        class="hover:underline"
                      >
                        Supports
                      </a>
                    </li>
                    <li>
                      <a
                        href="/login"
                        class="hover:underline"
                      >
                        Login
                      </a>
                    </li>
                    <li>
                      <a
                        href="/signup"
                        class="hover:underline"
                      >
                        Sign Up
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 class="">
                    Quick Links
                  </h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                    <li class="mb-4">
                      <a
                        href="/"
                        class="hover:underline "
                      >
                        Generate
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        class="hover:underline"
                      >
                        Our Team
                      </a>
                    </li>
                    <li>
                      <a
                        href="/pricing"
                        class="hover:underline"
                      >
                        Pricing
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        class="hover:underline"
                      >
                        Blog
                      </a>
                    </li>
                    <li>
                      <a
                        href="/contact"
                        class="hover:underline"
                      >
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 class="">
                    Stay Updated
                  </h2>
                  <p className="w-70">
                    join Pixgix newsletter Stay updated with the latest AI
                    trends and offers.
                  </p>
                    

                  <form class="max-w-md mx-auto">
                    <label
                      htmlFor="default-search"
                      class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                    >
                      Search
                    </label>
                    <div class="relative">
                      <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        
                      </div>
                      <input
                        class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Enter Email"
                        required
                      />
                      <button
                        type="submit"
                        class=" submit-button absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Subscribe
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <hr class="my-6" />
            <div class="sm:flex sm:items-center sm:justify-between line-container">
              <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                <a href="https://flowbite.com/" class="hover:underline">
                  Copyright © 2025 All Rights Reserved By Pixgix
                </a>
              </span>
              <div class="flex mt-4 sm:justify-center sm:mt-0 document-container">
                <ul>
                  <li>
                    <a href="">Help Center</a>
                  </li>
                  <li>
                    <a href="">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="">Terms of Services</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FooterPage;
