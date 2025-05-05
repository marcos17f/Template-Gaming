import React from 'react';
import tournament_data from '@/data/tournament-data';
import TournamentBox from './tournament-box';
import TextAnimation from '../common/text-animation';

const TournamentArea = () => {
  return (
    <section className="tournament-area section-pt-120 section-pb-90">
    <div className="container">
        <div className="tournament__wrapper">
            <div className="row justify-content-center">
                <div className="col-xl-6 col-lg-7 col-md-10">
                    <div className="section__title text-center mb-60">
                        <TextAnimation title='our tournament' />
                        <h3 className="title">play to earn games</h3>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center gutter-25">
              {tournament_data.map((item) => (
                <div key={item.id} className="col-xl-4 col-lg-5 col-md-6 col-sm-9">
                    <TournamentBox item={item} />
                </div>
              ))}
            </div>
        </div>
    </div>
  </section>
  );
};

export default TournamentArea;