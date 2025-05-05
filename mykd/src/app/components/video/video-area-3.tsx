'use client';
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { VideoSvg } from "../svg";
import VideoPopup from "../common/video-popup";
import { gallery_slider_setting } from "../gallery/gallery-area";

// images
import video_bg_1 from '@/assets/img/gallery/video3-1.jpg';
import video_bg_2 from '@/assets/img/gallery/video3-2.png';
import video_bg_3 from '@/assets/img/gallery/video3-3.png';
import video_bg_4 from '@/assets/img/gallery/video3-4.jpg';
import video_bg_5 from '@/assets/img/gallery/video3-5.jpg';
import card_title_shape_1 from '@/assets/img/gallery/video3-card-title-shape1.png';
import card_title_shape_2 from '@/assets/img/gallery/video3-card-title-shape2.png';


// Video data
const videoItemData = [
   {
      id: 1,
      imgSrc: video_bg_1,
      videoId: "ssrNcwxALS4",
      cardTitle: "Daniel Barna Klark",
   },
   {
      id: 2,
      imgSrc: video_bg_2,
      videoId: "ssrNcwxALS4",
      cardTitle: "Daniel Barna Klark",
   },
   {
      id: 3,
      imgSrc: video_bg_3,
      videoId: "ssrNcwxALS4",
      cardTitle: "Daniel Barna Klark",
   },
   {
      id: 4,
      imgSrc: video_bg_4,
      videoId: "ssrNcwxALS4",
      cardTitle: "Daniel Barna Klark",
   },
   {
      id: 5,
      imgSrc: video_bg_5,
      videoId: "ssrNcwxALS4",
      cardTitle: "Daniel Barna Klark",
   },
];

export default function VideoAreaThree() {
   const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);
   const [videoId, setVideoId] = useState<string>("");

   function handleVideo(videoId: string) {
      setIsVideoOpen(true);
      setVideoId(videoId);
   }
   return (
      <>
         <section
            className="video__area fix section-pb-120 section-pt-120 bg-img-cover bg-img-center"
            style={{ backgroundImage: "url(/assets/img/bg/video_bg4.png)" }}
         >
            <div className="container">
               <div className="row justify-content-center justify-content-center">
                  <div className="col-lg-auto">
                     <div className="section__title mb-60 text-center title-shape-none">
                        <h6 className="sub-title2">Popular Videos</h6>
                        <h3 className="title2">Mykd Media Section</h3>
                     </div>
                  </div>
               </div>
            </div>
            <div className="video__slider">
               <div className="container">
                  <div className="row justify-content-center">
                     <div className="col-xl-12">
                        <Swiper {...gallery_slider_setting} className="swiper-container gallery-active">
                           {videoItemData.map((video) => (
                              <SwiperSlide key={video.id}>
                                 <div className="video__item2">
                                    <div className="video__thumb">
                                       <Image src={video.imgSrc} alt="img" style={{height:'auto'}} />
                                       <a
                                          onClick={() => handleVideo(video.videoId)}
                                          data-magnetic
                                          className="popup-video video-play-btn pointer"
                                       >
                                          <VideoSvg />
                                       </a>
                                    </div>
                                    <Link
                                       href="/services-details"
                                       className="video-card-title"
                                    >
                                       <span className="icon">
                                          <i className="fas fa-link"></i>
                                       </span>
                                       <span className="video-card-title-shape video-card-title-shape2">
                                          <Image
                                             src={card_title_shape_2}
                                             alt="img"
                                          />
                                       </span>
                                       <span className="title">
                                          <span className="video-card-title-shape video-card-title-shape1">
                                             <Image
                                                src={card_title_shape_1}
                                                alt="img"
                                             />
                                          </span>
                                          {video.cardTitle}
                                       </span>
                                    </Link>
                                 </div>
                              </SwiperSlide>
                           ))}
                        </Swiper>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* video modal start */}
         {videoId && (
            <VideoPopup
               isVideoOpen={isVideoOpen}
               setIsVideoOpen={setIsVideoOpen}
               videoId={videoId}
            />
         )}
         {/* video modal end */}
      </>
   );
}
