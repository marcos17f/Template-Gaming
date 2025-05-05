import Link from "next/link";
import { Metadata } from "next";
import Wrapper from "@/layout/wrapper";
import Header from "@/layout/header/header";
import Footer from "@/layout/footer/footer";
import brd_bg from '@/assets/img/bg/breadcrumb_bg01.jpg';
import brd_img from '@/assets/img/others/breadcrumb_img02.png';
import BreadcrumbArea from "./components/breadcrumb/breadcrumb-area";
import { NotFoundSvg } from "./components/svg";


export const metadata: Metadata = {
    title: "Not Found Page",
};

export default function NotFound() {
    return (
        <Wrapper>
            {/* header start */}
            <Header />
            {/* header end */}

            {/* main area start */}
            <main className="main--area">

                {/* breadcrumb area start */}
                <BreadcrumbArea title="Page Not Found" subtitle="404" bg={brd_bg} brd_img={brd_img} />
                {/* breadcrumb area end */}

                {/* not found area start */}
                <div className="error__area team-bg section-pt-120 section-pb-120" style={{ backgroundImage: `url(/assets/img/bg/team_bg.jpg)` }}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xxl-8 col-xl-7 col-lg-8">
                                <div className="error-content text-center">
                                    <NotFoundSvg />
                                    <h2 className="title">Look Like You’re Lost</h2>
                                    <p>Sorry, the page you are looking for could not be found</p>
                                    <Link href="/" className="btn">back to home</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* not found area end */}

            </main>
            {/* main area end */}

            {/* footer start */}
            <Footer />
            {/* footer end */}
        </Wrapper>
    );
}
