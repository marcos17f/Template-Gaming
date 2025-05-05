import { Metadata } from "next";
import Wrapper from "@/layout/wrapper";
import Header from "@/layout/header/header";
import Footer from "@/layout/footer/footer";
import BreadcrumbAreaThree from "../components/breadcrumb/breadcrumb-area-3";
import ContactArea from "../components/contact/contact-area";
import ContactMap from "../components/contact/contact-map";

export const metadata: Metadata = {
  title: "Contact Page",
};

export default function ContactPage() {
  return (
    <Wrapper>
      {/* header start */}
      <Header />
      {/* header end */}

      {/* main area start */}
      <main className="main--area">
        {/* breadcrumb area start */}
       <BreadcrumbAreaThree title="Contact us" subtitle="Contact" />
        {/* breadcrumb area end */}

        {/* contact area start */}
        <ContactArea/>
        {/* contact area end */}

        {/* contact map start */}
        <ContactMap/>
        {/* contact map end */}

      </main>
      {/* main area end */}

      {/* footer start */}
      <Footer/>
      {/* footer end */}
    </Wrapper>
  );
}
