import { Metadata } from "next";
import Wrapper from "@/layout/wrapper";
import Header from "@/layout/header/header";
import Footer from "@/layout/footer/footer";
import BreadcrumbAreaTwo from "../components/breadcrumb/breadcrumb-area-2";
import TournamentDetailsArea from "../components/tournament-details/tournament-details-area";

export const metadata: Metadata = {
  title: "Tournament Details Page",
};

export default function TournamentDetailsPage() {
  return (
    <Wrapper>
      {/* header start */}
      <Header />
      {/* header end */}

      {/* main area start */}
      <main className="main--area">
        {/* breadcrumb area start */}
        <BreadcrumbAreaTwo title="Tournament Details" subtitle="Tournament Details" />
        {/* breadcrumb area end */}

        {/* tournament details start */}
        <TournamentDetailsArea/>
        {/* tournament details end */}

      </main>
      {/* main area end */}

      {/* footer start */}
      <Footer/>
      {/* footer end */}
    </Wrapper>
  );
}
