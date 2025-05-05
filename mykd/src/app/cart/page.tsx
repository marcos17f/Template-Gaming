import { Metadata } from "next";
import Wrapper from "@/layout/wrapper";
import Header from "@/layout/header/header";
import Footer from "@/layout/footer/footer";
import BreadcrumbArea from "../components/breadcrumb/breadcrumb-area";
import brd_bg from '@/assets/img/bg/breadcrumb_bg01.jpg';
import brd_img from '@/assets/img/others/breadcrumb_img02.png';
import CartArea from "../components/cart/cart-area";


export const metadata: Metadata = {
  title: "Cart Page",
};

export default function CartPage() {
  return (
    <Wrapper>

      {/* header start */}
      <Header />
      {/* header end */}

      {/* main area start */}
      <main className="main--area">

        {/* breadcrumb area start */}
        <BreadcrumbArea title="Shop Cart" subtitle="Cart" bg={brd_bg} brd_img={brd_img} />
        {/* breadcrumb area end */}

        {/* cart area start */}
        <CartArea/>
        {/* cart area end */}

      </main>
      {/* main area end */}

      {/* footer start */}
      <Footer/>
      {/* footer end */}
    </Wrapper>
  );
}
