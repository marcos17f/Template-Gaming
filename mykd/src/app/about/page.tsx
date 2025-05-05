import Wrapper from "@/layout/wrapper";
import Header from "@/layout/header/header";
import Footer from "@/layout/footer/footer";
import BreadcrumbArea from "../components/breadcrumb/breadcrumb-area";
import AboutAreaThree from "../components/about-area/about-area-3";
import ServicesArea from "../components/services/services-area";
import TeamArea from "../components/team/team-area";

export default function AboutPage() {
  return (
    <Wrapper>
      {/* header start */}
      <Header />
      {/* header end */}

      {/* main area start */}
      <main className="main--area">
        {/* breadcrumb area start */}
        <BreadcrumbArea title="ABOUT US" subtitle="ABOUT US" />
        {/* breadcrumb area end */}

        {/* about area start */}
        <AboutAreaThree/>
        {/* about area end */}

        {/* Services area start*/}
        <ServicesArea/>
        {/* Services area end*/}

        {/* team area start */}
        <TeamArea/>
        {/* team area end */}
      </main>
      {/* main area end */}

      {/* footer start */}
      <Footer/>
      {/* footer end */}
    </Wrapper>
  );
}
