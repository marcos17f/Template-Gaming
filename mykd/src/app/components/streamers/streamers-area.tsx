"use client";
import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image, { StaticImageData } from 'next/image';
import stream_1 from '@/assets/img/team/streamers01.png';
import stream_2 from '@/assets/img/team/streamers02.png';
import stream_3 from '@/assets/img/team/streamers03.png';
import stream_4 from '@/assets/img/team/streamers04.png';
import stream_5 from '@/assets/img/team/streamers05.png';
import stream_6 from '@/assets/img/team/streamers06.png';
import stream_7 from '@/assets/img/team/streamers07.png';
import TextAnimation from "../common/text-animation";

// slider data
const streamers_data: {
  id: number;
  img: StaticImageData;
  title: string;
}[] = [
    {
      id: 1,
      img: stream_1,
      title: 'sky hunter'
    },
    {
      id: 2,
      img: stream_2,
      title: 'Phoenix'
    },
    {
      id: 3,
      img: stream_3,
      title: 'Max Jett'
    },
    {
      id: 4,
      img: stream_4,
      title: 'Brimstone'
    },
    {
      id: 5,
      img: stream_5,
      title: 'Mad Raze'
    },
    {
      id: 6,
      img: stream_6,
      title: 'Jackie Welles'
    },
    {
      id: 7,
      img: stream_7,
      title: 'Yorinobu Ara'
    },
  ]

// slider setting
const slider_setting = {
  observer: true,
  observeParents: true,
  loop: false,
  slidesPerView: 5,
  spaceBetween: 20,
  breakpoints: {
    '1500': {
      slidesPerView: 5,
    },
    '1200': {
      slidesPerView: 4,
    },
    '992': {
      slidesPerView: 4,
    },
    '768': {
      slidesPerView: 3,
    },
    '576': {
      slidesPerView: 2,
    },
    '0': {
      slidesPerView: 1.5,
      centeredSlides: true,
      centeredSlidesBounds: true,
    },
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: ".slider-button-next",
    prevEl: ".slider-button-prev",
  }
};
const StreamersArea = () => {
  return (
    <section className="streamers__area section-pt-95 section-pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-7 col-md-10">
            <div className="section__title text-center mb-60">
              <TextAnimation title="Our top streamers" />
              <h3 className="title">top rated streamers</h3>
            </div>
          </div>
        </div>
        <Swiper {...slider_setting} modules={[Navigation, Pagination]} className="swiper-container streamers-active">
          {streamers_data.map((item, i) => (
            <SwiperSlide key={item.id}>
              <div className="streamers__item">
                <div className="streamers__thumb">
                  <Link href="/team-details">
                    <Image src={item.img} alt="img" style={{ height: 'auto', width: '100%' }} />
                  </Link>
                </div>
                <div className="streamers__content">
                  <h4 className="name">{item.title}</h4>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="streamers__pagination">
          <div className="slider-button-prev streamers__pagination-arrow"><i className="fas fa-angle-left"></i></div>
          <div className="swiper-pagination streamers__pagination-dots"></div>
          <div className="slider-button-next streamers__pagination-arrow"><i className="fas fa-angle-right"></i></div>
        </div>
      </div>
    </section>
  );
};

export default StreamersArea;