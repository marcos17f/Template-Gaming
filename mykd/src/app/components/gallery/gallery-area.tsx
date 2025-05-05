"use client";
import Image from "next/image";
import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import { PhotoProvider, PhotoView } from "react-photo-view";
import gallery_data from "@/data/gallery-data";
import { AppContext } from "@/context/app-context";
import 'react-photo-view/dist/react-photo-view.css';

// slider setting
export const gallery_slider_setting = {
  centeredSlides: true,
  centeredSlidesBounds: true,
  spaceBetween: 30,
  freeMode: false,
  observer: true,
  observeParents: true,
  breakpoints: {
    1920: {
      slidesPerView: 1,
    },
    992: {
      slidesPerView: 1,
    },
    320: {
      slidesPerView: 1,
    }
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
};

const GalleryArea = () => {
  const { handleMouseEnter, handleMouseLeave } = useContext(AppContext);
  return (
    <>
      <section className="gallery__area fix section-pb-130">
        <div className="gallery__slider">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-9 col-lg-10 col-md-11">
                <PhotoProvider>
                  <Swiper
                    {...gallery_slider_setting}
                    modules={[Navigation, Scrollbar]}
                    className="swiper-container gallery-active"
                    centeredSlides={true}
                    observer={true}
                    observeParents={true}
                  >
                    {gallery_data.map((item, i) => (
                      <SwiperSlide key={item.id}>
                        <div className="gallery__item">
                          <div className="gallery__thumb">
                            <PhotoView src={item.img.src}>
                              <a
                                data-cursor="-theme"
                                data-cursor-text="View <br> Image"
                                className="popup-image pointer"
                                title={item.title}
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                              >
                                <Image src={item.img} alt="img" style={{ width: '100%', height: 'auto' }} />
                              </a>
                            </PhotoView>
                          </div>
                          <div className="gallery__content">
                            <h3 className="title">{item.title}</h3>
                            <span className="rate">rate {item.rate}</span>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                    <div className="swiper-scrollbar"></div>
                  </Swiper>
                </PhotoProvider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GalleryArea;
