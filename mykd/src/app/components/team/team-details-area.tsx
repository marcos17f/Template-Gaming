import React from 'react';
import Image from 'next/image';
import Dots from '../svg/dots';
import bg from '@/assets/img/bg/team_details_bg.jpg';
import t_d_img_1 from '@/assets/img/team/team_details.jpg';
import t_d_img_2 from '@/assets/img/team/team_details01.jpg';
import t_d_img_3 from '@/assets/img/team/team_details02.jpg';

const TeamDetailsArea = () => {
  const imgStyle = {width:'100%',height:'auto'}
  return (
    <section className="team__details-area section-pt-120 section-pb-120" style={{backgroundImage:`url(${bg.src})`}}>
    <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="team__details-img">
                    <Image src={t_d_img_1} alt="img" style={imgStyle}/>
                    <Dots/>
                </div>
                <div className="team__details-content">
                    <span className="sub-title">our team member</span>
                    <h2 className="title">Online Games for Everyone Find the Best MMOs FOR YOU.</h2>
                    <p>Lorem ipsum dolor sit amet, consteur adipiscing Duis elementum sollicitudin is yaugue euismods Nulla ullamcorper. Morbi pharetra tellus miolslis, tincidunt massa venenatis. Lorem Ipsum is simply dummyd the printing and typesetting industry. Lorem Ipsum has been the industries standard dummy text ever since the 1500s, when an unknown printer took a galley. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.</p>
                    <p>Lorem ipsum dolor sit amet, consteur adipiscing Duis elementum sollicitudin is yaugue euismods Nulla ullamcorper. Morbi pharetra tellus miolslis, tincidunt massa venenatis. Lorem Ipsum is simply dummyd the printing and typesetting industry. Lorem Ipsum has been the industries standard dummy text ever since the 1500s, when an unknown printer took a galley. There are many variations of passages.</p>
                    <blockquote className="team__details-quote">
                        <p>Lorem ipsum dolor sit amet, consteur adipiscing Duis elementum sollicitudin is yaugue euimods Nulla ullamcorper. Morbi pharetra tellus miolslis, tincidunt massa venenatis. Lorem Ipsum is simply dummyd the printing and typesetting industry.</p>
                        <cite>SHAKH DANIAL</cite>
                    </blockquote>
                    <p>Lorem ipsum dolor sit amet, consteur adipiscing Duis elementum sollicitudin is yaugue euismods Nulla ullamcorper. Morbi pharetra tellus miolslis, tincidunt massa venenatis. Lorem Ipsum is simply dummyd the printing and typesetting industry. Lorem Ipsum has been the industries standard dummy text ever since the 1500s, when an unknown printer took a galley. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.</p>
                    <div className="team__details-inner-wrap">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="team__details-inner-img">
                                    <Image src={t_d_img_2} alt="img" style={imgStyle}/>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="team__details-inner-img">
                                    <Image src={t_d_img_3} alt="img" style={imgStyle}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consteur adipiscing Duis elementum sollicitudin is yaugue euismods Nulla ullamcorper. Morbi pharetra tellus miolslis, tincidunt massa venenatis. Lorem Ipsum is simply dummyd the printing and typesetting industry. Lorem Ipsum has been the industries standard dummy text ever since the 1500s, when an unknown printer took a galley. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.</p>
                </div>
            </div>
        </div>
    </div>
</section>
  );
};

export default TeamDetailsArea;