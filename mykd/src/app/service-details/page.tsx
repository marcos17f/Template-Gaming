import { Metadata } from "next";
import Wrapper from "@/layout/wrapper";
import Header from "@/layout/header/header";
import Footer from "@/layout/footer/footer";
import BreadcrumbArea from "../components/breadcrumb/breadcrumb-area";
import brd_bg from "@/assets/img/bg/breadcrumb_bg01.jpg";
import brd_img from "@/assets/img/others/breadcrumb_img02.png";
import ServiceDetailsArea from "../components/service-details/service-details-area";
import FaqArea from "../components/faq/faq-area";

export const metadata: Metadata = {
  title: "Services Details Page",
};

export default function ServiceDetailsPage() {
  return (
    <Wrapper>
      {/* header start */}
      <Header />
      {/* header end */}

      {/* main area start */}
      <main className="main--area">
        {/* breadcrumb area start */}
        <BreadcrumbArea
          title="SERVICE SINGLE"
          subtitle="SERVICES DETAILS"
          bg={brd_bg}
          brd_img={brd_img}
        />
        {/* breadcrumb area end */}

        {/* services details area start */}
        <ServiceDetailsArea />
        {/* services details area end */}

        {/* faq area start */}
        <FaqArea />
        {/* faq area end */}
      </main>
      {/* main area end */}

      {/* footer start */}
      <Footer />
      {/* footer end */}
    </Wrapper>
  );
}
