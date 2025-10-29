import React from "react";
import HeaderPage from "./HeaderPage";
import "../styles/DashBoard.css";
import pixfix from "../Multimedia/images/HEYGEN-Orb-SocialAnimation-Exp-unscreen.gif";
import pixfixVideo from "../Multimedia/videos/video_4736be8da8 (1).mp4";
import MarquePage from "./MarquePage";

const DashBoard = () => {
  return (
    <div className="dashboard-container relative min-h-screen bg-cover bg-center">
      <HeaderPage headerLogin={"Login"}
      headerSignUp={"Signup"} 
      headerLinks={"/login"}
      headerLink={"/signup"}/>
      <div className="ai-container text-60px">
        <div className="w-150 text-container">
          <h1>
            AI  
              <span
              style={{
                color: "rgb(191,249,57)",
              }}
            >
              Generate
            </span>
            <br />
            <span style={{ color: "rgb(241,234,77)" }}> Video</span> by
            Artificial Intelligence
          </h1>
          <p>
            Experience the power of artificial intelligence as it transforms
            your ideas into stunning, high-quality videos.
          </p>
          <a href="/signup">
            <button>
              Get Started{" "}
              <span class="material-symbols-outlined relative top-2">
                arrow_outward
              </span>
            </button>
          </a>
        </div>
        <div className=" video-container ">
          <img src={pixfix} width={500} alt="" />
        </div>
      </div>
      <div className="about-us-content">
        <div className="about-us-container">
          <div className="video-aboutus-container">
            <video src={pixfixVideo} controls width={500}></video>
          </div>
          <div className="w-140 text-aboutus-container">
            <p className="aboutus-paragraph">About Us</p>
            <h1>
              Welcome to Pixgix where creativity meets artificial intelligence.
            </h1>
            <p className="p">
              Our mission is to revolutionize the way you create visuals by
              harnessing the power of AI to generate stunning, high-quality
              videos. Whether you're an artist, designer, or the business
              professional, our platform empowers you to bring.
            </p>
            <button>
              More About{" "}
              <span class="material-symbols-outlined relative top-2">
                arrow_outward
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="gallery-content">
        <div className="gallery-container">
          <div className="text-gallery-container">
            <p>Gallery</p>
            <h1>Make AI-Generated Video</h1>
          </div>
          <div className="video-gallery-container">
            <div>
              <video src="https://tempfile.aiquickdraw.com/p/f879c606-799c-4315-981d-c22b25252ada.mp4" controls></video>
            </div>
            <div>
              <video src="https://tempfile.aiquickdraw.com/p/eb3d4d0c-9c5c-48a5-87bf-7bc956f9a443.mp4" controls></video>
            </div>
            <div>
              <video
                src="https://dynamic.heygen.ai/www/Home%20-%20Page%20-%20Rebrand/avatar_iv.mp4?updatedAt=1757984236000"
                controls
              ></video>
            </div>
            <div>
              <video
                src="https://dynamic.heygen.ai/www/Home%20-%20Page%20-%20Rebrand/JALEN_AV%20IV_For%20Nick.mp4?updatedAt=1757984236000"
                controls
              ></video>
            </div>
            <div>
              <video
                src="https://dynamic.heygen.ai/www/Home%20-%20Page%20-%20Rebrand/text_to_video.mp4?updatedAt=1757984236000"
                controls
              ></video>
            </div>
            <div>
              <video
                src="https://assets-static.invideo.io/files/Generative_v30_b53e1e8491.mp4"
                controls
              ></video>
            </div>
          </div>
        </div>
      </div>
      <div className="text-to-video-content">
        <div className="text-to-video-container">
          <div className="text-to-video-text-container">
            <p className="par">Text to Video</p>
            <h1>Simple Text Prompts</h1>
            <p>PicgiX AI turns your words into the stunning videos.</p>
            <button>
              Enter your prompt{" "}
              <span class="material-symbols-outlined relative top-2">
                arrow_outward
              </span>
            </button>
          </div>
          <div>
            <img
              src="https://d9hhrg4mnvzow.cloudfront.net/ubitems.grooic.com/vido-ai-video-generator-lp/36d08217-text-to-video-card_10fu0gi000000000000000.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <MarquePage />
      <div className="subcription-container">
        <div className="subcription-content">
          <div className="subcription-text-container">
            <p>Pricing Plans</p>
            <h1>Choose the Perfect Pricing Plan</h1>
          </div>
          <div className="subcription-grid-container">
            <div>
              <h4>Basic Plan</h4>
              <h1>Free</h1>
              <hr />
              <p>
                <span class="material-symbols-outlined relative top-2">
                  check
                </span>
                50 AI-generated images/month
              </p>
              <p>
                {" "}
                <span class="material-symbols-outlined relative top-2">
                  check
                </span>
                Standard resolution (1080p)
              </p>
              <p>
                <span class="material-symbols-outlined relative top-2">
                  check
                </span>
                Basic customization options
              </p>
              <p>
                <span class="material-symbols-outlined relative top-2">
                  check
                </span>
                Commercial usage rights
              </p>
              <p>
                <span class="material-symbols-outlined relative top-2">
                  check
                </span>
                Email support
              </p>
              <hr />
              <button>Subcribe Now </button>
            </div>
            <div>
              <h4>Pro Plan</h4>
              <h1>$59</h1>
              <hr />
              <p>
                {" "}
                <span class="material-symbols-outlined relative top-2">
                  check
                </span>
                200 AI-generated images/month
              </p>
              <p>
                <span class="material-symbols-outlined relative top-2">
                  check
                </span>
                High resolution (4k)
              </p>
              <p>
                <span class="material-symbols-outlined relative top-2">
                  check
                </span>
                Advanced customization options
              </p>
              <p>
                <span class="material-symbols-outlined relative top-2">
                  check
                </span>
                Commercial usage rights
              </p>
              <p>
                <span class="material-symbols-outlined relative top-2">
                  check
                </span>
                Priority support
              </p>
              <hr />
              <button>Subcribe Now</button>
            </div>
            <div>
              <h4>Enterprize Plan</h4>
              <h1>$99</h1>
              <hr />
              <p>
                <span class="material-symbols-outlined relative top-2">
                  check
                </span>
                Unlimited AI-generated images
              </p>
              <p>
                <span class="material-symbols-outlined relative top-2">
                  check
                </span>
                Ultra HD resolution (8K)
              </p>
              <p>
                <span class="material-symbols-outlined relative top-2">
                  check
                </span>
                Custom AI model training
              </p>
              <p>
                <span class="material-symbols-outlined relative top-2">
                  check
                </span>
                Dedicated account manager
              </p>
              <p>
                <span class="material-symbols-outlined relative top-2">
                  check
                </span>
                API access & integrations
              </p>
              <hr />
              <button>Subcribe Now</button>
            </div>
          </div>
        </div>
      </div>
      <div className="feature-container">
        <div className="feature-content">
          <div className="feature-text-container">
            <p>Video Feature</p>
            <h1>We offer a wide range of AI driven video generation</h1>
          </div>
          <div className="feature-grid-container">
            <div className="feature-display-container">
              <div>
                <img
                  src="https://d9hhrg4mnvzow.cloudfront.net/ubitems.grooic.com/vido-ai-video-generator-lp/f45cd6d5-icon-01.svg"
                  alt=""
                />
              </div>
              <div>
                <h1>AI-Powered Creativity</h1>
                <p>Generate scripts, scenes, and visuals with advanced AI.</p>
              </div>
            </div>
            <div className="feature-display-container">
              <div>
                <img
                  src="https://d9hhrg4mnvzow.cloudfront.net/ubitems.grooic.com/vido-ai-video-generator-lp/2976a54e-icon-02.svg"
                  alt=""
                />
              </div>
              <div>
                <h1>Customizable Templates</h1>
                <p>
                  Select from a range of industry-specific, pre-designed
                  templates.
                </p>
              </div>
            </div>
            <div className="feature-display-container">
              <div>
                <img
                  src="https://d9hhrg4mnvzow.cloudfront.net/ubitems.grooic.com/vido-ai-video-generator-lp/7be7dc23-icon-03.svg"
                  alt=""
                />
              </div>
              <div>
                <h1>Fast and Intuitive</h1>
                <p>Create videos in minutes with an easy-to-use interface.</p>
              </div>
            </div>
            <div className="feature-display-container">
              <div>
                <img
                  src="https://d9hhrg4mnvzow.cloudfront.net/ubitems.grooic.com/vido-ai-video-generator-lp/4e541906-icon-04.svg"
                  alt=""
                />
              </div>
              <div>
                <h1>High-Quality Outputs</h1>
                <p>Export videos in stunning HD and 4K formats.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="testimonial-container">
        <div className="testimonial-content">
          <div className="testimonial-text-container">
            <p>Testimonials</p>
            <h1>Our Clients Says About Pixgix</h1>
          </div>
          <div className="testimonial-wrapper">
          <div className="testimonial-grid-container">
            <div className="testimonial-display-container">
              <div className="quote-icon">
              <i class="bi bi-quote"></i>
              </div>
              <div>
                <p>
                  "I was blown away by the quality of the AI-generated videos!
                  The platform is incredibly intuitive, and within minutes, I
                  had is and stunning visuals that perfectly matched my vision.
                  As someone with limited design skills, I was amazed at how
                  professional the images looked. This tool has saved me hours
                  of work, and I can't imagine running my business without it
                  now."
                </p>
                <div className="testimonial-user">
                  <img
                    src="https://photoclerks.com/html/pixgix/pixgix/assets/images/testimonial/1.jpg"
                    alt=""
                  />
                  <div>
                    <h2>Emily Rayhan</h2>
                    <p>Graphic designer</p>
                    <div>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-display-container">
              <div className="quote-icon">
              <i class="bi bi-quote"></i>
              </div>
              <div>
                <p>
                  "I was blown away by the quality of the AI-generated videos!
                  The platform is incredibly intuitive, and within minutes, I
                  had is and stunning visuals that perfectly matched my vision.
                  As someone with limited design skills, I was amazed at how
                  professional the images looked. This tool has saved me hours
                  of work, and I can't imagine running my business without it
                  now."
                </p>
                <div className="testimonial-user">
                  <img
                    src="https://photoclerks.com/html/pixgix/pixgix/assets/images/testimonial/2.jpg"
                    alt=""
                  />
                  <div>
                    <h2>John Smith</h2>
                    <p>Marketing Manager</p>
                    <div>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
             <div className="testimonial-display-container">
              <div className="quote-icon">
              <i class="bi bi-quote"></i>
              </div>
              <div>
                <p>
                  "I was blown away by the quality of the AI-generated videos!
                  The platform is incredibly intuitive, and within minutes, I
                  had is and stunning visuals that perfectly matched my vision.
                  As someone with limited design skills, I was amazed at how
                  professional the images looked. This tool has saved me hours
                  of work, and I can't imagine running my business without it
                  now."
                </p>
                <div className="testimonial-user">
                  <img
                    src="https://photoclerks.com/html/pixgix/pixgix/assets/images/testimonial/1.jpg"
                    alt=""
                  />
                  <div>
                    <h2>Emily Rayhan</h2>
                    <p>Graphic designer</p>
                    <div>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
             <div className="testimonial-display-container">
              <div className="quote-icon">
              <i class="bi bi-quote"></i>
              </div>
              <div>
                <p>
                  "I was blown away by the quality of the AI-generated videos!
                  The platform is incredibly intuitive, and within minutes, I
                  had is and stunning visuals that perfectly matched my vision.
                  As someone with limited design skills, I was amazed at how
                  professional the images looked. This tool has saved me hours
                  of work, and I can't imagine running my business without it
                  now."
                </p>
                <div className="testimonial-user">
                  <img
                    src="https://photoclerks.com/html/pixgix/pixgix/assets/images/testimonial/2.jpg"
                    alt=""
                  />
                  <div>
                    <h2>John Smith</h2>
                    <p>Marketing Manager</p>
                    <div>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
