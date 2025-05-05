import { Metadata } from "next";
import Wrapper from "@/layout/wrapper";
import Header from "@/layout/header/header";
import Footer from "@/layout/footer/footer";
import BreadcrumbArea from "../components/breadcrumb/breadcrumb-area";
import brd_bg from '@/assets/img/bg/breadcrumb_bg01.jpg';
import brd_img from '@/assets/img/others/breadcrumb_img02.png';
import ServicesArea from "../components/services/services-area";
import VideoArea from "../components/video/video-area";
import RoadMapArea from "../components/road-map/road-map-area";


export const metadata: Metadata = {
  title: "Services Page",
};

export default function ServicesPage() {
  return (
    <Wrapper>
      {/* header start */}
      <Header />
      {/* header end */}

      {/* main area start */}
      <main className="main--area">
        {/* breadcrumb area start */}
        <BreadcrumbArea title="SERVICES" subtitle="OUR SERVICES" bg={brd_bg} brd_img={brd_img} />
        {/* breadcrumb area end */}

        {/* services area start */}
        <ServicesArea/>
        {/* services area end */}

        {/* video area start */}
        <VideoArea/>
        {/* video area end */}

        {/* road map area start */}
        <RoadMapArea/>
        {/* road map area end */}

      </main>
      {/* main area end */}

      {/* footer start */}
      <Footer/>
      {/* footer end */}
    </Wrapper>
  );
}
