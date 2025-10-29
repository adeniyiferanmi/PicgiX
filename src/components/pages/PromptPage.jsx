import React, { use, useContext } from "react";
import HeaderPage from "./HeaderPage";
import "../styles/prompt.css";
import { Sidebar } from "lucide-react";
import SidebarPage from "./SidebarPage";
import { authContext } from "@/context/AuthContext";
import { FormProvider, useForm } from "react-hook-form";
import { videoContext } from "@/context/videoContext";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import SectionVideoPage from "./sectionvideoPage";
import MarquePage from "./MarquePage";

const aspectRatio = ["16:9", "4:3", "1:1", "9:16", "3:4"];
const quality = ["720p", "1080p"];

const videoSchema = yup.object().shape({
  aspectRatio: yup.string().oneOf(aspectRatio).required(),
  quality: yup.string().oneOf(quality).required(),
  duration: yup.number().min(1).required(),
  callbackUrl: yup.string().url().required(),
  prompt: yup.string().required(),
  model: yup.string().required(),
});
const PromptPage = () => {
  const { logOut } = useContext(authContext);
  const { generateVideo, generatingVideo, datas } = useContext(videoContext);
  const handleLogOut = () => {
    logOut();
  };

  const method = useForm({
    resolver: yupResolver(videoSchema),
    defaultValues: {
      quality: "",
      prompt: "",
      callbackUrl: "",
      duration: "",
      aspectRatio: "",
      model: "",
    },
  });

  const onSubmit = (data) => {
    generateVideo(data);
  };

  return (
    <div>
      <div className="prompt-container">
        <HeaderPage
          headerLogin={"Pricing"}
          headerSignUp={"Logout"}
          headerLinks={"/pricing"}
          onClickButton={handleLogOut}
        />
        <FormProvider {...method}>
          <form action="" onSubmit={method.handleSubmit(onSubmit)}>
            <SidebarPage />
            <div className="prompt-content">
              <p
                style={{
                  color: "rgb(196,216,64)",
                  fontSize: "15px",
                }}
              >
                Pixgix Generation of AI videos
              </p>
              <h1>Creativity with AI Powered</h1>
              <h1
                style={{
                  color: "rgb(186,251,56)",
                }}
              >
                Video Generation
              </h1>
              <p
                style={{
                  fontSize: "20px",
                  fontWeight: "400",
                  lineHeight: "30px",
                }}
              >
                AI Video Generation uses advanced machine learning models to
                create unique, high-quality visuals
              </p>
              <div className="prompt-icon-container">
                <button
                  type="button"
                  data-drawer-target="drawer-navigation"
                  data-drawer-show="drawer-navigation"
                  aria-controls="drawer-navigation"
                >
                  <i class="bi bi-gear-fill relative top-2"></i>
                  <i class="bi bi-gear-fill relative"></i>Option
                </button>
                <div className="prompt-input-container">
                  <input
                    type="text"
                    placeholder="Describe what you want"
                    {...method.register("prompt")}
                  />
                  <button disabled={generatingVideo}>
                    {generatingVideo ? (
                      <span class="material-symbols-outlined">
                        progress_activity
                      </span>
                    ) : (
                      "Generate"
                    )}
                  </button>
                </div>
              </div>
              <div className="prompt-display-container">
                <p>cinematography</p>
                <p>Creative</p>
                <p>Art Direction</p>
                <p>Natures</p>
                <p>Illustration</p>
                <p>Concept Art</p>
              </div>
            </div>
          </form>
        </FormProvider>
      </div>
      <div className="video-contain">
        {generatingVideo && (
          <div className="loading">
            <p>Generating your video, please wait...</p>
            <div className="spinner">
              <span class="material-symbols-outlined">progress_activity</span>
            </div>
          </div>
        )}
        {datas?.videoInfo?.videoUrl && (
          <div className="video-wrapper">
            <video
              src={datas?.videoInfo?.videoUrl}
              controls
              loop
              autoPlay
            ></video>
          </div>
        )}
      </div>
      <div>
        <div className="text-gallery-container">
          <p>Explore our collection of</p>
          <h1> AI-Generated Videos</h1>
        </div>
        <SectionVideoPage/>
        <div className="view-container">
          <a href="/videos">
          <button>
            <i class="bi bi-gear-fill relative top-2"></i>{" "}
            <i class="bi bi-gear-fill "></i> View More Videos
          </button>
          </a>
        </div>
      </div>
      <MarquePage/>
    </div>
  );
};

export default PromptPage;
