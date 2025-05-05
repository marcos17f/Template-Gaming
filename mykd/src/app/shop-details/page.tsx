import { Metadata } from "next";
import Wrapper from "@/layout/wrapper";
import Header from "@/layout/header/header";
import Footer from "@/layout/footer/footer";
import BreadcrumbAreaThree from "../components/breadcrumb/breadcrumb-area-3";
import ShopDetailsArea from "../components/shop-details/shop-details-area";
import product_data from "@/data/product-data";


export const metadata: Metadata = {
  title: "Shop Details Page",
};

export default function ShopDetailsPage() {
  const product = product_data[0]
  return (
    <Wrapper>
      {/* header start */}
      <Header />
      {/* header end */}

      {/* main area start */}
      <main className="main--area">
        {/* breadcrumb area start */}
       <BreadcrumbAreaThree title="PRODUCT SINGLE" subtitle="PRODUCT SINGLE" />
        {/* breadcrumb area end */}

        {/* shop details area start */}
        <ShopDetailsArea product={product} />
        {/* shop details area end */}

      </main>
      {/* main area end */}

      {/* footer start */}
      <Footer/>
      {/* footer end */}
    </Wrapper>
  );
}
