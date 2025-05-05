'use client';
import Link from "next/link";
import Image from "next/image";
import { MouseParallaxChild, MouseParallaxContainer } from "react-parallax-mouse";
import ab_img from '@/assets/img/others/about_img4-1.png';

export default function AboutAreaFive() {
    return (
        <MouseParallaxContainer>
            <section className="about__area4 section-pt-120 section-pb-100">
                <div className="container">
                    <div className="row gy-5 flex-row-reverse justify-content-center align-items-center">
                        <div className="col-xl-6">
                            <MouseParallaxChild factorX={0.03} factorY={0.03} className="about__funFact-images4">
                                <Image className="main-img1" data-magnetic src={ab_img} alt="img" />
                            </MouseParallaxChild>
                        </div>
                        <div className="col-xl-6">
                            <div className="text-xl-start text-center">
                                <div className="section__title mb-30 title-shape-none">
                                    <h6 className="sub-title2">About Our Agency</h6>
                                    <h3 className="title2">Global Expert team up the next level.</h3>
                                </div>
                                <div className="about__content-three">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elementum sollici tudin augue euismod. Nulla ullamcorper nunc. Morbi pharetra mi eu tellus mollis,  tincidunt massa venenatis. Etiam lacinia ipsumultrices.</p>
                                </div>
                                <div className="btn-group mt-4">
                                    <Link href="/contact" className="tg-btn-5">
                                        <span>Learn More</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </MouseParallaxContainer>
    )
}
