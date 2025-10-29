import React, { useContext, useEffect } from "react";
import HeaderPage from "./HeaderPage";
import { authContext } from "@/context/AuthContext";
import { videoContext } from "@/context/videoContext";
import MarquePage from "./MarquePage";


const VideosPage = () => {
  const { logOut } = useContext(authContext);
  const { userVideos, getVideos, getUserVideos } = useContext(videoContext);
  const handleLogOut = () => {
    logOut();
  };
  useEffect(() => {
    getUserVideos();
  }, []);
  return (
    <div>
      <div className="prompt-container">
        <HeaderPage
          headerLogin={"Pricing"}
          headerSignUp={"Logout"}
          headerLinks={"/pricing"}
          onClickButton={handleLogOut}
        />
        <div className="my-container">
          <h1>MY VIDEOS</h1>
        </div>
      </div>
      <div className="text-gallery-container">
          <p>Explore our collection of</p>
          <h1> AI-Generated Videos</h1>
        </div>
        {
          getVideos && (
            <div style={{textAlign:"center"}}>
              <h1>No Videos Found</h1>
            </div>
          )
        }
      <div className="video-sect">
        {userVideos?.video?.map((video, index) => (
          <div key={index}>
            <video src={video?.videoInfo?.videoUrl} controls />
          </div>
        ))}
      </div>
     <MarquePage/>
    </div>
  );
};

export default VideosPage;
