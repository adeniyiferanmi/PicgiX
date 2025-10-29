import React, { use } from "react";
import "../styles/sidebar.css";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, useFormContext } from "react-hook-form";


 const aspectRatio = ["16:9", "4:3", "1:1", "9:16","3:4"];
  const quality = ["720p","1080p"]

 
const SidebarPage = () => {
 const { register,formState: { errors }} = useFormContext()
  return (
    <div className="">
      <div
        id="drawer-navigation"
        class="sidebar-container fixed top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white dark:bg-gray-800"
        tabindex="-1"
        aria-labelledby="drawer-navigation-label"
      >
        <div className="display-button">
        <h5
          id="drawer-navigation-label"
          class="text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
        >
        Generator Options
        </h5>
        <button
          type="button"
          data-drawer-hide="drawer-navigation"
          aria-controls="drawer-navigation"
          class=" close-button text-gray-400 bg-transparent rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            aria-hidden="true"
            class="w-15 h-10 "
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
          
          <span class="sr-only">Close menu</span>
        </button>
        </div>
        <div className="display-select">
          <h4>Model Engine</h4>
          <select name="" id="" {...register("model")}>
            <option value="">----</option>
            <option value="runway-duration-5-generate">runway-duration-5-generate</option>
          </select>
        </div>
        <div className="display-select">
          <h4>aspectRatio</h4>
          <select name="" id="" {...register("aspectRatio")}>
            <option value="">----</option>
          {
            aspectRatio.map((ratio,index)=>( 
              <option value={ratio} key={index}>{ratio}</option>
            ))
          }
          </select>
        </div>
        <div className="display-select">
          <h4>Duration</h4>
          <select name="" id="" {...register("duration")}>
            <option value="">----</option>
            <option value="5">5</option>
            </select>
        </div>
        <div className="display-select">
          <h4>Quality</h4>
          <select name="" id="" {...register("quality")}>
            <option value="">----</option>
            {
              quality.map((qual,index)=>(
                <option value={qual} key={index}>{qual}</option>
              ))
            }
          </select>
        </div>
        <div className="display-select">
          <h4>CallBackUrl</h4>
          <select name="" id="" {...register("callbackUrl")}>
            <option value="">----</option>
            <option value="https://api.example.com/callback">https://api.example.com/callback</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SidebarPage;
