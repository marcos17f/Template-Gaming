'use client';
import Link from "next/link";
import Image from "next/image";
import { MouseParallaxContainer, MouseParallaxChild } from 'react-parallax-mouse';

// images
import banner_bg_shape from '@/assets/img/slider/banner_bg_shape3-1.jpg';
import banner_bg from '@/assets/img/slider/banner_bg3.png';
import slider_shape_1 from '@/assets/img/slider/slider_shape3-1.svg';
import slider_shape_2 from '@/assets/img/slider/slider_shape3-2.svg';
import slider_shape_3 from '@/assets/img/slider/slider_shape3-3.svg';
import thumb_bg_shape from '@/assets/img/slider/thumb_bg_shape3-1.jpg';
import hero_main_img from '@/assets/img/slider/slider_img03.png';


export default function HeroBannerThree() {
    return (
        <MouseParallaxContainer>
            <section className="banner__area banner__area-two">
                <div className="banner__bg-shape" style={{ backgroundImage: `url(/assets/img/slider/banner_bg_shape3-2.jpg)` }}>
                    <Image src={banner_bg_shape} alt="img" />
                </div>
                <div className="banner__bg tg-jarallax">
                    <Image src={banner_bg} alt="img" />
                </div>
                <div className="banner__shape banner__shape3-1 jump">
                    <Image src={slider_shape_1} alt="img" />
                </div>
                <div className="banner__shape banner__shape3-2 movingX">
                    <Image src={slider_shape_2} alt="img" />
                </div>
                <div className="banner__shape banner__shape3-3 jump-reverse">
                    <Image src={slider_shape_3} alt="img" />
                </div>
                <div className="container custom-container2">
                    <div className="row gy-5 align-items-center flex-row-reverse">
                        <div className="col-xl-6">
                            <MouseParallaxChild factorX={0.03} factorY={0.03} className="banner__img wow bounceInRight" data-magnetic data-wow-delay=".4s">
                                <div className="banner__img-shape">
                                    <Image src={thumb_bg_shape} alt="img" />
                                </div>
                                <div className="thumb">
                                    <Image src={hero_main_img} alt="img" style={{height:'auto'}} />
                                </div>
                            </MouseParallaxChild>
                        </div>
                        <div className="col-xl-6">
                            <div className="banner__content slider__content">
                                <span className="sub-title2 wow bounceInLeft" data-wow-delay=".1s">
                                    Professional Esports Team
                                </span>
                                <h2 className="title wow bounceInLeft" data-wow-delay=".2s">Game Live</h2>
                                <p className="wow bounceInLeft" data-wow-delay=".4s">Lorem ipsum dolor sit amet consectetur adipiscing elit, non parturient nulla eleifend in sagittis, torquent semper cubilia cras donec vehicula. Ultrices cubilia venenatis mattis senectus vestibulum etiam...</p>
                                <div className="banner__btn d-flex wow bounceInLeft" data-wow-delay=".6s">
                                    <Link href="/contact" className="tg-btn-4">
                                        <span>Explore Items</span>
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
