import Link from "next/link";
import { Metadata } from "next";
import Wrapper from "@/layout/wrapper";
import Header from "@/layout/header/header";
import Footer from "@/layout/footer/footer";
import BreadcrumbArea from "../components/breadcrumb/breadcrumb-area";
import brd_bg from '@/assets/img/bg/breadcrumb_bg01.jpg';
import brd_img from '@/assets/img/others/breadcrumb_img02.png';
import { GoogleSvg } from "../components/svg";
import LoginForm from "../components/forms/login-form";


export const metadata: Metadata = {
    title: "Login Page",
};

export default function LoginPage() {
    return (
        <Wrapper>
            {/* header start */}
            <Header />
            {/* header end */}

            {/* main area start */}
            <main className="main--area">

                {/* breadcrumb area start */}
                <BreadcrumbArea title="Login" subtitle="SIGN IN" bg={brd_bg} brd_img={brd_img} />
                {/* breadcrumb area end */}

                {/* login area start */}
                <section className="signup__area team-bg section-pt-120 section-pb-120" style={{backgroundImage:`url(/assets/img/bg/team_bg.jpg)`}}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-6 col-lg-8">
                                <div className="singUp-wrap">
                                    <h2 className="title">Welcome back!</h2>
                                    <p>Hey there! Ready to log in? Just enter your username and password below and you will be back in action in no time. {"Let's"} go!</p>
                                    <div className="account__social">
                                        <a href="#" className="account__social-btn">
                                            <GoogleSvg />
                                            Continue with google
                                        </a>
                                    </div>
                                    <div className="account__divider">
                                        <span>OR</span>
                                    </div>
                                    {/* form start */}
                                    <LoginForm />
                                    {/* form end */}
                                    <div className="account__switch">
                                        <p>{"Don't"} have an account?<Link href="/register">Sign Up</Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* login area end */}

            </main>
            {/* main area end */}

            {/* footer start */}
            <Footer />
            {/* footer end */}
        </Wrapper>
    );
}
