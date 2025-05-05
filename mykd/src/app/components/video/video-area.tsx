"use client";
import React, { useState } from "react";
import bg from "@/assets/img/bg/video_bg.jpg";
import VideoPopup from "../common/video-popup";
import { BtnBgTwo } from "../svg";

const VideoArea = () => {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);
  return (
    <>
      <section className="video__area video-bg tg-jarallax" style={{backgroundImage:`url(${bg.src})`}}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8 col-md-11">
              <div className="video__content text-center">
                <a
                  className="popup-video pointer"
                  onClick={() => setIsVideoOpen(true)}
                >
                  <i className="flaticon-play"></i>
                </a>
                <h2 className="title">
                  JOIN THE <span>COMMUNITY</span>
                </h2>
                <p>Join our Discord community and choosec onsteur</p>
                <a
                  href="https://discord.com/"
                  target="_blank"
                  className="video__btn tg-btn-1"
                >
                  <span>join discord</span>
                  <BtnBgTwo/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"ssrNcwxALS4"}
      />
      {/* video modal end */}
    </>
  );
};

export default VideoArea;
