"use client";
import React from "react";
import Link from "next/link";
import banner_bg from "@/assets/img/slider/banner_bg.jpg";
import shape from "@/assets/img/icons/shape.svg";
import SvgIconCom from "../common/svg-icon-anim";

const HeroBannerTwo = () => {
  return (
    <section className="banner__area banner__padding">
      <div className="banner__bg tg-jarallax" style={{ backgroundImage: `url(${banner_bg.src})` }}></div>
      <div className="container custom-container">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-10">
            <div className="banner__content slider__content text-center">
              <h2 className="title wow bounceInLeft" data-wow-delay=".2s">steaming</h2>
              <p className="wow bounceInLeft" data-wow-delay=".4s">video games online</p>
              <div className="banner__btn d-flex justify-content-center wow bounceInLeft" data-wow-delay=".6s">
                <Link href="/contact" className="tg-btn-3 tg-svg mx-auto">
                  <SvgIconCom icon={shape} id="svg-1" />
                  <span>contact us</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBannerTwo;
