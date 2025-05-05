'use client'
import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import about_1 from "@/assets/img/others/about_tab01.png";
import about_2 from "@/assets/img/others/about_tab02.png";
import about_3 from "@/assets/img/others/about_tab03.png";
import about_4 from "@/assets/img/others/about_tab04.png";
import about_5 from "@/assets/img/others/about_tab05.png";
import about_6 from "@/assets/img/others/about_tab06.png";
import about_bg_1 from "@/assets/img/others/about_img01.jpg";
import about_bg_2 from "@/assets/img/others/about_img02.jpg";
import about_bg_3 from "@/assets/img/others/about_img03.jpg";
import about_bg_4 from "@/assets/img/others/about_img04.jpg";
import about_bg_5 from "@/assets/img/others/about_img05.jpg";
import about_bg_6 from "@/assets/img/others/about_img06.jpg";
import icon_1 from "@/assets/img/icons/features_icon01.png";
import icon_2 from "@/assets/img/icons/features_icon02.png";
import icon_3 from "@/assets/img/icons/features_icon03.png";
import TextAnimation from "../common/text-animation";
import { BtnBgFour, BtnBgThree } from "../svg";

// nav button
type INavProps = {id: string;img: StaticImageData;isActive?:boolean}
function NavBtn({id,img,isActive}:INavProps) {
  // handle open search
  const handleClickSound = (audioPath: string) => {
    const audio = new Audio(audioPath);
    audio.play();
  };
  return (
    <li className="nav-item" role="presentation">
      <button
        className={`nav-link ${isActive ? "active" : ""}`}
        id={`about${id}-tab`}
        data-bs-toggle="tab"
        data-bs-target={`#about${id}`}
        type="button"
        role="tab"
        aria-controls={`about${id}`}
        aria-selected={isActive?'true':'false'}
        tabIndex={-1}
        onClick={() => handleClickSound('/assets/audio/tab.mp3')}
      >
        <span className="img-shape"></span>
        <Image src={img} alt="img" />
      </button>
    </li>
  );
}

// tab content item
// prop type
type ITabProps = {
  id: string;
  img: StaticImageData;
  title: string;
  rate: string;
  isActive?: boolean;
}
function TabItem({id,img,title,rate,isActive}:ITabProps) {
  return (
    <div
      className={`tab-pane ${isActive ? "show active" : ""}`}
      id={`about${id}`}
      role="tabpanel"
      aria-labelledby={`about${id}-tab`}
    >
      <div className="row justify-content-center">
        <div className="col-xl-5 col-lg-10">
          <div className="about__img">
            <Image src={img} alt="img" />
          </div>
        </div>
        <div className="col-xl-7 col-lg-10">
          <div className="about__flex-wrap">
            <div className="about__content-wrap">
              <div className="about__content">
                <h4 className="title">{title}</h4>
                <span className="rate">rate {rate}</span>
                <p>
                  Lorem ipsum dolor sit amet, consteur adipiscing Duis elementum
                  sollicitudin is yaugue euismods Nulla ullamcorper. Morbi
                  pharetra tellus miolslis, tincidunt massa venenatis.
                </p>
              </div>
              <div className="about__content-list">
                <ul className="list-wrap">
                  <li>
                    <Image src={icon_1} alt="img" /> Chichi Dragon Ball
                  </li>
                  <li>
                    <Image src={icon_2} alt="img" /> Space Babe Night
                  </li>
                  <li>
                    <Image src={icon_3} alt="img" /> Dragon Ball
                  </li>
                </ul>
              </div>
            </div>
            <div className="about__btn-wrap">
              <ul className="list-wrap">
                <li>
                  <Link href="/shop-details">Dragon Ball</Link>
                </li>
                <li>
                  <Link href="/shop">nft market</Link>
                </li>
                <li>
                  <Link href="/contact">support</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const AboutArea = () => {
  return (
    <section className="about__area section-pt-130 section-pb-130">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-7 col-md-10">
            <div className="section__title text-center mb-60">
              <TextAnimation title="know about us" />
              <h3 className="title">top rated steamers</h3>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="about__tab-wrap">
              <div className="about__buttons">
                <Link href="/shop" className="tg-btn-2">
                  buy Hero
                  <BtnBgThree/>
                </Link>
                <Link href="/shop" className="tg-btn-2 -secondary">
                  buy nfts
                  <BtnBgFour/>
                </Link>
              </div>
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <NavBtn id="01" img={about_1} isActive={true} />
                <NavBtn id="02" img={about_2} />
                <NavBtn id="03" img={about_3} />
                <NavBtn id="04" img={about_4} />
                <NavBtn id="05" img={about_5} />
                <NavBtn id="06" img={about_6} />
              </ul>
            </div>
          </div>
        </div>
        <div className="tab-content" id="myTabContent">
          <TabItem
            id="01"
            img={about_bg_1}
            isActive={true}
            title="human game"
            rate="50%"
          />
          <TabItem id="02" img={about_bg_2} title="Axie Infinity" rate="60%" />
          <TabItem id="03" img={about_bg_3} title="The Walking Dead" rate="75%"/>
          <TabItem id="04" img={about_bg_4} title="The Dogami" rate="65%" />
          <TabItem id="05" img={about_bg_5} title="The Sandbox" rate="85%" />
          <TabItem id="06" img={about_bg_6} title="Pegaxy Horses" rate="90%" />
        </div>
      </div>
    </section>
  );
};

export default AboutArea;
