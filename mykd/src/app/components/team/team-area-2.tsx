import React from "react";
import Image from "next/image";
import Link from "next/link";
import section_line from "@/assets/img/others/section-line.png";

const teamData = [
  {
    id: 1,
    imgSrc: "/assets/img/team/team3-1.png",
    name: "Moolin Lexo",
    designation: "SUPPORT",
    delay: ".2s",
  },
  {
    id: 2,
    imgSrc: "/assets/img/team/team3-2.png",
    name: "Moolin Lexo",
    designation: "SUPPORT",
    delay: ".4s",
  },
  {
    id: 3,
    imgSrc: "/assets/img/team/team3-3.png",
    name: "Moolin Lexo",
    designation: "SUPPORT",
    delay: ".6s",
  },
];

type IProps = {
  style_2?: boolean;
};
export default function TeamAreaTwo({style_2=false}: IProps) {
  return (
    <section className={`${style_2?'team__area4':'team__area3 section-pt-120'} section-pb-120`} 
    style={{backgroundImage:style_2 ? `url(/assets/img/bg/team_bg4.png)` : 'none'}}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            {!style_2 && (
              <div className="section__title text-center mb-60 title-shape-none">
                <span className="sub-title2">Professional Esports Team</span>
                <h3 className="title2">
                  Pro Skilled{" "}
                  <span className="text-theme d-inline-block position-relative">
                    <Image
                      className="section-line"
                      src={section_line}
                      alt="img"
                    />
                    Gamers
                  </span>
                </h3>
              </div>
            )}
            {style_2 && (
              <div className="section__title text-center mb-60 title-shape-none">
                <span className="sub-title2">Professional Esports Team</span>
                <h3 className="title2">MEET OUR ELITE TEAM</h3>
              </div>
            )}
          </div>
        </div>
        <div className="row gy-4 justify-content-center">
          {teamData.map((team) => (
            <div
              key={team.id}
              className="col-xl-4 col-md-6 wow fadeInUp"
              data-wow-delay={team.delay}
            >
              <div className="team__item2">
                <div className="team__thumb">
                  <Link href="/team-details">
                    <Image
                      src={team.imgSrc}
                      alt="img"
                      width={383}
                      height={395}
                      style={{ height: "auto" }}
                    />
                  </Link>
                </div>
                <div className="team__content">
                  <h4 className="name">
                    <Link href="/team-details">{team.name}</Link>
                  </h4>
                  <span className="designation">{team.designation}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
