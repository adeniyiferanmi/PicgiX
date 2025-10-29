import { videoContext } from "@/context/videoContext";
import React, { useContext, useEffect } from "react";

const SectionPage = () => {
  const { userVideos, getVideos, getUserVideos } = useContext(videoContext);
  useEffect(() => {
    getUserVideos();
  }, []);
  return (
    <div>
      {getVideos && (
        <div className="no-video">
          <h1>No Videos Generated</h1>
        </div>
      )}
      <div className="video-section">
        {userVideos?.video?.slice(0, 3).map((video, index) => (
          <div key={index}>
            <video src={video?.videoInfo?.videoUrl} controls />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionPage;
