import { Metadata } from "next";
import Wrapper from "@/layout/wrapper";
import Header from "@/layout/header/header";
import Footer from "@/layout/footer/footer";
import BreadcrumbArea from "../components/breadcrumb/breadcrumb-area";
import brd_bg from '@/assets/img/bg/breadcrumb_bg01.jpg';
import brd_img from '@/assets/img/others/breadcrumb_img02.png';
import CheckoutArea from "../components/checkout/checkout-area";


export const metadata: Metadata = {
  title: "Checkout Page",
};

export default function CheckoutPage() {
  return (
    <Wrapper>

      {/* header start */}
      <Header />
      {/* header end */}

      {/* main area start */}
      <main className="main--area">

        {/* breadcrumb area start */}
        <BreadcrumbArea title="Checkout" subtitle="Checkout" bg={brd_bg} brd_img={brd_img} />
        {/* breadcrumb area end */}

        {/* chekout area start */}
        <CheckoutArea/>
        {/* chekout area end */}

      </main>
      {/* main area end */}

      {/* footer start */}
      <Footer/>
      {/* footer end */}
    </Wrapper>
  );
}
