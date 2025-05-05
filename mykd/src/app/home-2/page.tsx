import { Metadata } from "next";
import Wrapper from "@/layout/wrapper";
import Header from "@/layout/header/header";
import HeroBannerTwo from "../components/hero-banner/hero-banner-2";
import MatchResultArea from "../components/match-result/match-result-area";
import area_bg from '@/assets/img/bg/area_bg02.jpg';
import AboutAreaTwo from "../components/about-area/about-area-2";
import StreamersArea from "../components/streamers/streamers-area";
import UpcomingMatches from "../components/upcoming-match/upcoming-matches";
import ProjectArea from "../components/projects/project-area";
import SocialArea from "../components/social/social-area";
import BrandArea from "../components/brand/brand-area";
import FooterTwo from "@/layout/footer/footer-2";

export const metadata: Metadata = {
  title: "Home Page Two",
};

export default function HomeTwo() {
  return (
    <Wrapper>
      {/* header start */}
      <Header style_2={true} />
      {/* header end */}

      {/* main area start */}
      <main className="main--area">
        
        {/* hero banner start */}
        <HeroBannerTwo />
        {/* hero banner end */}

        {/* match result start */}
        <MatchResultArea/>
        {/* match result end */}

        {/* area-background-start */}
        <div className="area-background" style={{backgroundImage:`url(${area_bg.src})`}}>

        {/* about-area */}
        <AboutAreaTwo/>
        {/* about-area-end */}

        {/* streamers area start */}
        <StreamersArea/>
        {/* streamers area end */}

        </div>
        {/* area-background-end */}

        {/* upcoming matches start */}
        <UpcomingMatches/>
        {/* upcoming matches end */}

        {/* project area start */}
        <ProjectArea/>
        {/* project area end */}

        {/* social area start */}
        <SocialArea/>
        {/* social area end */}

        {/* brand area start */}
        <BrandArea/>
        {/* brand area end */}


      </main>
      {/* main area end */}

      {/* footer start */}
      <FooterTwo/>
      {/* footer end */}
    </Wrapper>
  );
}
