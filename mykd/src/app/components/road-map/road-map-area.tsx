"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { InView } from "react-intersection-observer";
import bg from "@/assets/img/bg/roadmap_bg.jpg";
import road_map from "@/assets/img/others/roadmap.png";
import road_map_step from "@/assets/img/others/roadmap_img.png";
import useTextAnimation from "@/hooks/use-text-animation";
import { BtnBgTwo } from "../svg";

// road map lists
type IRoadMap = {
  id: number;
  active: boolean;
  title: string;
  lists: {
    active: boolean;
    text: string;
  }[];
};
const road_map_lists: IRoadMap[] = [
  {
    id: 1,
    active: true,
    title: "season 1",
    lists: [
      { active: true, text: "Battle Practice Mode" },
      { active: true, text: "iOS Open Beta" },
      { active: true, text: "Land Creation & Building" },
      { active: true, text: "Land Creation & Building" },
    ],
  },
  {
    id: 2,
    active: false,
    title: "season 2",
    lists: [
      { active: true, text: "Battle Practice Mode" },
      { active: true, text: "iOS Open Beta" },
      { active: false, text: "Land Creation & Building" },
      { active: false, text: "Land Creation & Building" },
    ],
  },
  {
    id: 3,
    active: false,
    title: "season 3",
    lists: [
      { active: false, text: "Battle Practice Mode" },
      { active: false, text: "iOS Open Beta" },
      { active: false, text: "Land Creation & Building" },
      { active: false, text: "Land Creation & Building" },
    ],
  },
];

const RoadMapArea = () => {
  const [isView, setIsView] = useState<boolean>(false);
  useTextAnimation(isView);

  const handleInViewChange = (inView: boolean) => {
    if (inView) {
      setIsView(true);
    }
  };


  return (
    <section
      className="roadMap__area roadMap-bg section-pt-150 section-pb-150"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="roadMap__inner">
              <div className="row">
                <div className="col-xl-5 col-lg-6">
                  <div className="roadMap__content">
                    <h2 className="title">a look into roadmaps seasons</h2>
                    <p>
                      With Season 1 Ending with our play and Duis elementum
                      sollicitudin is yaugue euismods Nulla ulla Player-focused
                      updates games from Mobile App and Enjoy.
                    </p>
                    <Link href="/contact" className="tg-btn-1 -btn-yellow">
                      <span>roadmap</span>
                      <BtnBgTwo/>
                    </Link>
                  </div>
                  <div className="roadMap__img">
                    <Image
                      src={road_map}
                      className="tg-parallax"
                      data-scale="1.5"
                      data-orientation="down"
                      alt="roadMap__img"
                    />
                  </div>
                </div>
                <div className="col-xl-7 col-lg-6">
                  <div className="roadMap__steps-wrap">
                    {road_map_lists.map((item) => (
                      <div
                        key={item.id}
                        className={`roadMap__steps-item ${item.active ? "active" : ""}`}
                      >
                        <h3 className="title">{item.title}</h3>
                        <InView
                          as="ul"
                          onChange={handleInViewChange} className="roadMap__list list-wrap">
                          {item.lists.map((l, i) => (
                            <li
                              key={i}
                              className={`${l.active ? "active" : ""} tg__animate-text style2`}
                            >
                              {l.text}
                            </li>
                          ))}
                        </InView>
                        <Image
                          src={road_map_step}
                          alt="img"
                          className="roadMap__steps-img"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadMapArea;
