import Image from "next/image";
import Link from "next/link";
import banner_img from '@/assets/img/slider/banner_bg4.png';


export default function HeroBannerFour() {
    return (
        <section className="banner__area banner__area-three">
            <div className="banner__bg tg-jarallax">
                <Image src={banner_img} alt="img" style={{ height: 'auto' }} />
            </div>
            <div className="container">
                <div className="row gy-5 align-items-center">
                    <div className="col-xl-12">
                        <div className="banner__content slider__content">
                            <span className="sub-title2 wow fadeInUp" data-wow-delay=".1s">Professional Esports Team</span>
                            <h2 className="title wow fadeInUp" data-wow-delay=".2s">WELCOME TO MYKD – </h2>
                            <h2 className="title wow fadeInUp" data-wow-delay=".3s">Game Development Agency</h2>
                            <div className="banner__btn d-flex wow fadeInUp" data-wow-delay=".6s">
                                <Link href="/contact" className="tg-btn-5">
                                    <span>Learn More</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
