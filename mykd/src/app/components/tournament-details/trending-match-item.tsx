"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import VideoPopup from "../common/video-popup";

// prop type
type IProp = {
  item: {
    thumb: StaticImageData;
    team_name: string;
    box_price: number;
    video_id:string;
  };
};

const TrendingMatchItem = ({ item }: IProp) => {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);
  return (
    <>
      <div className="trending__matches-item">
        <div className="trending__matches-thumb">
          <Link href="#">
            <Image src={item.thumb} alt="img" />
          </Link>
        </div>
        <div className="trending__matches-content">
          <div className="info">
            <h5 className="title">
              <Link href="#">{item.team_name}</Link>
            </h5>
            <span className="price">$ {item.box_price}</span>
          </div>
          <div className="play">
            <a
              className="popup-video pointer" onClick={() => setIsVideoOpen(true)}
            >
              <i className="far fa-play-circle"></i>
            </a>
          </div>
        </div>
      </div>
      {/* video modal start */}
       <VideoPopup
          isVideoOpen={isVideoOpen}
          setIsVideoOpen={setIsVideoOpen}
          videoId={item.video_id}
        />
        {/* video modal end */}
    </>
  );
};

export default TrendingMatchItem;
