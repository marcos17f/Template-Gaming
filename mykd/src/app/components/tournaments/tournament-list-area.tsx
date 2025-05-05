import React from "react";
import Link from "next/link";
import bg from "@/assets/img/bg/tournament_bg.jpg";
import tournament_data from "@/data/tournament-data";
import TournamentListItem from "./tournament-list-item";

const TournamentListArea = () => {
  return (
    <section
      className="tournament__list-area section-pb-120 section-pt-120"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <div className="container">
        <div className="tournament__wrapper">
          <div className="row align-items-end mb-60">
            <div className="col-lg-8">
              <div className="section__title text-center text-lg-start title-shape-none">
                <span className="sub-title tg__animate-text">
                  tournament List
                </span>
                <h3 className="title">Active tournament</h3>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="section__title-link">
                <Link href="/tournament">EXPLORE MORE</Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="tournament__list-item-wrapper">
                {tournament_data.map((item, i) => (
                  <TournamentListItem key={item.id} item={item} index={i} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TournamentListArea;
