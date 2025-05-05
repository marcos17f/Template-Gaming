import Wrapper from "@/layout/wrapper";
import Header from "@/layout/header/header";
import HeroBanner from "./components/hero-banner/hero-banner";
import NftItemArea from "./components/nft-item/nft-item-area";
import AboutArea from "./components/about-area/about-area";
import GalleryArea from "./components/gallery/gallery-area";
import TeamArea from "./components/team/team-area";
import area_bg from "@/assets/img/bg/area_bg01.jpg";
import VideoArea from "./components/video/video-area";
import RoadMapArea from "./components/road-map/road-map-area";
import TrendingNftItems from "./components/nft-item/trending-nft-items";
import Footer from "@/layout/footer/footer";

export default function Home() {
  return (
    <Wrapper>
      {/* header start */}
      <Header />
      {/* header end */}

      {/* main area start */}
      <main className="main--area">
        {/* hero banner start */}
        <HeroBanner />
        {/* hero banner end */}

        {/* nft item area start */}
        <NftItemArea />
        {/* nft item area end */}

        {/* area-background-start */}
        <div
          className="area-background"
          style={{ backgroundImage: `url(${area_bg.src})` }}
        >
          {/* about-area */}
          <AboutArea />
          {/* about-area-end */}

          {/* gallery area start */}
          <GalleryArea />
          {/* gallery area end */}
        </div>
        {/* area-background-end */}

        {/* team area start */}
        <TeamArea />
        {/* team area end*/}

        {/* video area start */}
        <VideoArea />
        {/* video area end */}

        {/* road map area start */}
        <RoadMapArea />
        {/* road map area end */}

        {/* trending nft items start */}
        <TrendingNftItems />
        {/* trending nft items end */}
      </main>
      {/* main area end */}

      {/* footer start */}
      <Footer/>
      {/* footer end */}
    </Wrapper>
  );
}
