"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from 'next/image';
import details_img from '@/assets/img/blog/blog_post03.jpg';
import t_ad_img from '@/assets/img/others/tournament_ad.jpg';
import trend_img_1 from '@/assets/img/others/trend_match01.png';
import trend_img_2 from '@/assets/img/others/trend_match02.png';
import trend_img_3 from '@/assets/img/others/trend_match03.png';
import TrendingMatchItem from './trending-match-item';
import VideoPopup from '../common/video-popup';

const TournamentDetailsArea = () => {
   const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);
   return (
      <>
         <section className="tournament__details-area">
            <div className="container">
               <div className="row justify-content-center">
                  <div className="blog-post-wrapper">
                     <div className="tournament__details-content">
                        <h2 className="title">zombie land TOURNAMENT max</h2>
                        <div className="blog-post-meta">
                           <ul className="list-wrap">
                              <li>By<Link href="#">Admin</Link></li>
                              <li><i className="far fa-calendar-alt"></i> Aug 16, 2023</li>
                              <li><i className="far fa-comments"></i><Link href="#">No comments</Link></li>
                           </ul>
                        </div>
                        <p>Excepteur sint occaecat atat non proident, sunt in culpa qui officia deserunt mollit anim id est labor umLor em ipsum dolor amet consteur adiscing Duis elentum solliciin is yaugue euismods Nulla ullaorper. Ipsum is simply dummy text of  printing and typeetting industry. Lorem Ipsum has been the industries standsaard sipiscing Duis elementum solliciin. Duis aute irure dolor in repderit in voluptate velit esse cillum dolorliq commodo consequat.</p>
                        <blockquote>
                           <p>Duis elentum solliciin is yaugue euismods Nulla ullaorper. Ipsum is simply dummy text of printing and typeetting industry.</p>
                        </blockquote>
                        <p>Axcepteur sint occaecat atat non proident, sunt in culpa qui officia deserunt mollit anim id est labor umLor em ipsum dolor amet, consteur adiscing Duis elentum solliciin is yaugue euismods Nulla ullaorper. Ipsum is simply dummy text of  printing and typeetting industry. Lorem Ipsum has been the industries standsaard sipiscing Duis elementum.</p>
                        <div className="tournament__details-video position-relative">
                           <Image src={details_img} alt="img" style={{ height: 'auto', width: '100%' }} />
                           <a className="popup-video pointer" onClick={() => setIsVideoOpen(true)}><i className="flaticon-play"></i></a>
                        </div>
                        <p>Axcepteur sint occaecat atat non proident, sunt in culpa qui officia deserunt mollit anim id est labor umLor em ipsum dolor amet, consteur adiscing Duis elentum solliciin is yaugue euismods Nulla ullaorper. Ipsum is simply dummy text of printing.</p>
                        <div className="tournament__details-form">
                           <h4 className="tournament__details-form-title">join nft games android</h4>
                           <p>Simply dummy text of printing and typeetting industry been the industries</p>
                           <form action="#">
                              <input type="text" placeholder="Name *" />
                              <input type="text" placeholder="Player ID *" required />
                              <input type="email" placeholder="Email *" required />
                              <button className="tournament__details-form-btn">Join Now</button>
                           </form>
                        </div>
                        <div className="blog-details-bottom">
                           <div className="row">
                              <div className="col-xl-6 col-md-7">
                                 <div className="tg-post-tags">
                                    <h5 className="tags-title">tags :</h5>
                                    <ul className="list-wrap d-flex flex-wrap align-items-center m-0">
                                       <li><Link href="#">Esports</Link>,</li>
                                       <li><Link href="#">Fantasy</Link>,</li>
                                       <li><Link href="#">game</Link></li>
                                    </ul>
                                 </div>
                              </div>
                              <div className="col-xl-6 col-md-5">
                                 <div className="blog-post-share justify-content-start justify-content-md-end">
                                    <h5 className="share">share :</h5>
                                    <ul className="list-wrap">
                                       <li><Link href="#"><i className="fab fa-facebook-f"></i></Link></li>
                                       <li><Link href="#"><i className="fab fa-twitter"></i></Link></li>
                                       <li><Link href="#"><i className="fab fa-linkedin-in"></i></Link></li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="blog-post-sidebar">
                     <aside className="blog-sidebar tournament__sidebar">
                        <div className="shop__widget">
                           <h4 className="shop__widget-title">search</h4>
                           <div className="shop__widget-inner">
                              <div className="shop__search">
                                 <input type="text" placeholder="Search here" />
                                 <button className="p-0 border-0"><i className="flaticon-search"></i></button>
                              </div>
                           </div>
                        </div>
                        <div className="shop__widget">
                           <h4 className="shop__widget-title">TRENDING MATCHES</h4>
                           <div className="shop__widget-inner">
                              <div className="trending__matches-list">
                                 <TrendingMatchItem item={{ thumb: trend_img_1, box_price: 7500, team_name: 'FOXTIE MAX',video_id:"a3_o4SpV1vI" }} />
                                 <TrendingMatchItem item={{ thumb: trend_img_2, box_price: 5500, team_name: 'HATAX NINJA',video_id:"ssrNcwxALS4" }} />
                                 <TrendingMatchItem item={{ thumb: trend_img_3, box_price: 3500, team_name: 'SPARTAN II',video_id:"a3_o4SpV1vI" }} />
                              </div>
                           </div>
                        </div>
                        <div className="shop__widget">
                           <h4 className="shop__widget-title">ADVERTISEMENT</h4>
                           <div className="shop__widget-inner">
                              <div className="tournament__advertisement">
                                 <Link href="#"><Image src={t_ad_img} alt="img" style={{ height: 'auto', width: '100%' }} /></Link>
                              </div>
                           </div>
                        </div>
                     </aside>
                  </div>
               </div>
            </div>
         </section>
         {/* video modal start */}
         <VideoPopup
            isVideoOpen={isVideoOpen}
            setIsVideoOpen={setIsVideoOpen}
            videoId={"ssrNcwxALS4"}
         />
         {/* video modal end */}
      </>
   );
};

export default TournamentDetailsArea;