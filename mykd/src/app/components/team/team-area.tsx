import React from "react";
import Link from "next/link";
import Image from "next/image";
import team_data from "@/data/team-data";
import bg from '@/assets/img/bg/team_bg.jpg';
import TextAnimation from "../common/text-animation";

const TeamArea = () => {
  return (
    <section
      className="team__area team-bg section-pt-130 section-pb-100"
      style={{backgroundImage:`url(${bg.src})`}}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-7 col-md-10">
            <div className="section__title text-center mb-60">
              <TextAnimation title="our team member" />
              <h3 className="title">ACTIVE TEAM MEMBERS</h3>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {team_data.map((t, i) => (
            <div
              key={t.id}
              className="col-xl-3 col-lg-4 col-sm-6 wow fadeInUp"
              data-wow-delay={`.${i + 1}s`}
            >
              <div className="team__item">
                <div className="team__thumb">
                  <Link href="/team-details">
                    <Image src={t.img} alt="img" style={{width:'100%',height:'auto'}} />
                  </Link>
                </div>
                <div className="team__content">
                  <h4 className="name">
                    <Link href="/team-details">{t.title}</Link>
                  </h4>
                  <span className="designation">{t.subtitle}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamArea;
