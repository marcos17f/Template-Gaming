import React from "react";
import Link from "next/link";
import Image from "next/image";

// logos
import section_line from "@/assets/img/others/section-line.png";
import logo1 from "@/assets/img/others/match-logo3-1.png";
import logo2 from "@/assets/img/others/match-logo3-2.png";
import logo3 from "@/assets/img/others/match-logo3-3.png";
import logo4 from "@/assets/img/others/match-logo3-4.png";
import logo5 from "@/assets/img/others/match-logo3-5.png";
import logo6 from "@/assets/img/others/match-logo3-6.png";



const upcomingMatchData = [
  {
    id: 1,
    leftTeamLogo: logo1,
    streamOn: ["facebook-f", "discord", "vimeo", "youtube"],
    leftTeamName: "MARVEL STADIUM",
    gameName: "CALL OF DUTY Live Stream",
    rightTeamLogo: logo2,
    rightTeamName: "MARVEL STADIUM",
    time: "7:00 Pm - 4:00 Am Cet",
    day: "Monday",
  },
  {
    id: 2,
    leftTeamLogo: logo3,
    streamOn: ["facebook-f", "discord", "vimeo", "youtube"],
    leftTeamName: "MARVEL STADIUM",
    gameName: "CALL OF DUTY Live Stream",
    rightTeamLogo: logo4,
    rightTeamName: "MARVEL STADIUM",
    time: "7:00 Pm - 4:00 Am Cet",
    day: "Tuesday",
  },
  {
    id: 3,
    leftTeamLogo: logo5,
    streamOn: ["facebook-f", "discord", "vimeo", "youtube"],
    leftTeamName: "MARVEL STADIUM",
    gameName: "CALL OF DUTY Live Stream",
    rightTeamLogo: logo6,
    rightTeamName: "MARVEL STADIUM",
    time: "7:00 Pm - 4:00 Am Cet",
    day: "Friday",
  },
];

const UpcomingMatchesTwo = () => {
  return (
    <section
      className="upcoming-match__area3 section-pt-170 section-pb-120 bg-img-cover bg-img-center"
      style={{ backgroundImage: "url(/assets/img/bg/match_bg3.png)" }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="section__title text-center mb-60 title-shape-none">
              <span className="sub-title2">Upcoming Schedule</span>
              <h3 className="title2">
                My STREAM{" "}
                <span className="text-theme d-inline-block position-relative">
                  <Image
                    className="section-line"
                    src={section_line}
                    alt="img"
                  />
                  TIMETABLE
                </span>
              </h3>
            </div>
          </div>
        </div>
        <div className="row gy-5">
          {upcomingMatchData.map((match) => (
            <div className="col-12" key={match.id}>
              <div className="upcoming-match__item2">
                <div className="upcoming-match__wrap">
                  <div className="upcoming-match__team team-left">
                    <Link href="/team-details">
                      <Image src={match.leftTeamLogo} alt="Team Logo" />
                    </Link>
                  </div>
                  <div className="upcoming-match__content">
                    <div className="team--info info-left">
                      <span className="social-wrap">
                        <span>Stream On: </span>
                        {match.streamOn.map((icon, index) => (
                          <a href="#" key={index}>
                            <i className={`fab fa-${icon}`}></i>
                          </a>
                        ))}
                      </span>
                      <h3 className="name">
                        <Link href="/team-details">{match.leftTeamName}</Link>
                      </h3>
                    </div>
                    <div className="upcoming-match__versus">
                      <h2 className="versus">V/S</h2>
                    </div>
                    <div className="team--info info-right">
                      <span className="game-name">{match.gameName}</span>
                      <h3 className="name">
                        <Link href="/team-details">{match.rightTeamName}</Link>
                      </h3>
                    </div>
                  </div>
                  <div className="upcoming-match__team team-right">
                    <Link href="/team-details">
                      <Image src={match.rightTeamLogo} alt="Team Logo" />
                    </Link>
                  </div>
                </div>
                <div className="upcoming-match__date">
                  <span>{match.time}</span>
                </div>
                <div className="upcoming-match__day">
                  <span>{match.day}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingMatchesTwo;
