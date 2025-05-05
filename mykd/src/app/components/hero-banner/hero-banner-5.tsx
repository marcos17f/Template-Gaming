import Link from "next/link";
import Image from "next/image";
import keyboard_img from '@/assets/img/slider/slider_img05.png';
import banner_bg from '@/assets/img/slider/banner_bg5.png';
import banner_bg_shape from '@/assets/img/slider/banner_bg_shape5-1.png';



export default function HeroBannerFive() {
    return (
        <section className="banner__area banner__area-four">
            <div className="banner__bg tg-jarallax">
                <Image src={banner_bg} alt="img" />
            </div>
            <div className="banner__bg-shape">
                <Image src={banner_bg_shape} alt="img" />
            </div>
            <div className="container custom-container4">
                <div className="row gy-5 align-items-center flex-row-reverse">
                    <div className="col-xl-6">
                        <div className="slider__img5">
                            <Image src={keyboard_img} data-magnetic="" alt="img" style={{height:'auto'}} />
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="banner__content slider__content">
                            <h2 className="title wow fadeInUp" data-wow-delay=".1s">Wooting 60HE <span className="text-stroke">Wooting 60HE</span></h2>
                            <h3 className="sub-title wow fadeInUp" data-wow-delay=".2s">Challenge the industry
                                with us</h3>
                            <div className="banner__btn d-flex wow fadeInUp" data-wow-delay=".6s">
                                <Link href="/shop" className="tg-btn-5">
                                    <span>Order Now</span>
                                </Link>
                                <Link href="/about" className="tg-btn-line">
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
