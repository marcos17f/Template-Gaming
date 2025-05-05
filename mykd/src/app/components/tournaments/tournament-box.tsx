import React from "react";
import Image from "next/image";
import { ITournament } from "@/types/tournament-type";
import CountdownTimer from "../timer/countdown-timer";
import TournamentBoxBgPatch from "../svg/t-box-bg";

const TournamentBox = ({ item }: { item: ITournament }) => {
  return (
    <div className={`tournament__box-wrap ${item.active ? "active" : ""}`}>
      <TournamentBoxBgPatch />
      <div className="tournament__box-price">
        <i className="fas fa-trophy"></i>
        <span>{item.box_price}</span>
      </div>
      <div className="tournament__box-countdown">
        <div className="coming-time" data-countdown="2023/5/16">
          <CountdownTimer expiryTimestamp={new Date(item.coming_time)} />
        </div>
      </div>
      <div className="tournament__box-caption">
        <span className="sub">{item.subtitle}</span>
        <h4 className="title">{item.title}</h4>
      </div>
      <div className="tournament__box-prize">
        <i className="fas fa-trophy"></i>
        <span>{item.places} prize Places</span>
      </div>
      <ul className="tournament__box-list list-wrap">
        {item.list_items.map((l) => (
          <li key={l.id}>
            <div className="tournament__box-list-item">
              <div className="tournament__player-thumb">
                <Image src={l.img} alt="img" />
              </div>
              <h6 className="tournament__player-name">{l.name}</h6>
              <span className="tournament__player-price">
                $ {l.price} <i className="fas fa-bolt"></i>
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TournamentBox;
