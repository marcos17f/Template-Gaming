import { Metadata } from "next";
import Wrapper from "@/layout/wrapper";
import FooterFour from "@/layout/footer/footer-4";
import HeaderFour from "@/layout/header/header-four";
import HeroBannerFive from "../components/hero-banner/hero-banner-5";
import ProductCategory from "../components/category/product-category";
import ShopOfferArea from "../components/shop/shop-offer-area";
import ShopAreaTwo from "../components/shop/shop-area-2";
import ShopDealArea from "../components/shop/shop-deal-area";
import CtaArea from "../components/cta/cta-area";

export const metadata: Metadata = {
    title: "Home Page Five",
};


export default function HomeFourPage() {
    return (
        <Wrapper bodyCls="bg-black2">

            {/* header area start */}
            <HeaderFour/>
            {/* header area end */}

            <main className="main--area">

                {/* hero area start */}
                <HeroBannerFive/>
                {/* hero area end */}

                {/* product category area start */}
                <ProductCategory/>
                {/* product category area end */}

                {/* shop offer area start */}
                <ShopOfferArea/>
                {/* shop offer area end */}

                {/* shop area start */}
                <ShopAreaTwo/>
                {/* shop area end */}

                {/* shop deal area start */}
                <ShopDealArea/>
                {/* shop deal area end */}

                {/* cta area start */}
                <CtaArea/>
                {/* cta area end */}

            </main>

            {/* footer start */}
            <FooterFour/>
            {/* footer end */}
        </Wrapper>
    )
}
