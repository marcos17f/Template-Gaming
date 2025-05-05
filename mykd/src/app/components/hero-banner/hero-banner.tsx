'use client'
import React,{useState} from 'react';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import { MouseParallaxContainer,MouseParallaxChild } from 'react-parallax-mouse';
import { BtnBgTwo } from '../svg';

// images
import slider_bg from '@/assets/img/slider/slider_bg.jpg';
import slider_img from '@/assets/img/slider/slider_img01.png';
import shape_1 from '@/assets/img/slider/slider_shape01.png';
import shape_2 from '@/assets/img/slider/slider_shape02.png';
import shape_3 from '@/assets/img/slider/slider_shape03.png';
import shape_4 from '@/assets/img/slider/slider_shape04.png';
import logo_1 from '@/assets/img/brand/brand_logo01.png';
import logo_2 from '@/assets/img/brand/brand_logo02.png';
import logo_3 from '@/assets/img/brand/brand_logo03.png';

// brands
const brands:StaticImageData[] = [logo_1,logo_2,logo_3]
const HeroBanner = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
    <MouseParallaxContainer>
     <section className="slider__area slider__bg" style={{backgroundImage:`url(${slider_bg.src})`}}>
        <div className="slider-activee">
            <div className="single-slider">
                <div className="container custom-container">
                    <div className="row justify-content-between">
                        <div className="col-lg-6">
                            <div className="slider__content">
                                <h6 className="sub-title wow fadeInUp" data-wow-delay=".2s">live gaming</h6>
                                <h2 className="title wow fadeInUp" data-wow-delay=".5s">steaming</h2>
                                <p className="wow fadeInUp" data-wow-delay=".8s">video games online</p>
                                <div className="slider__btn wow fadeInUp" data-wow-delay="1.2s">
                                    <Link href="/contact" className="tg-btn-1">
                                      <span>contact us</span>
                                       <BtnBgTwo/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-6 col-xl-5 col-lg-6">
                        <MouseParallaxChild factorX={0.03} factorY={0.03} className="slider__img text-center" >
                          <Image src={slider_img} alt="img" style={{height:'auto'}} priority />
                        </MouseParallaxChild>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
        <div className="slider__shapes">
            <Image src={shape_1} alt="shape"/>
            <Image src={shape_2} alt="shape"/>
            <Image src={shape_3} alt="shape"/>
            <Image src={shape_4} alt="shape"/>
        </div>
        <div className="slider__brand-wrap">
            <div className="container custom-container">
                <ul className="slider__brand-list list-wrap">
                    {brands.map((b,i) => (
                    <li onMouseEnter={() => setHoveredIndex(i)} onMouseLeave={() => setHoveredIndex(null)} style={{ opacity: hoveredIndex === null || hoveredIndex === i ? 1 : 0.3, transition: 'opacity 0.3s'}} key={i}>
                        <Link href="#"><Image src={b} alt="brand"/></Link>
                    </li>
                    ))}
                </ul>
            </div>
        </div>
     </section>
  </MouseParallaxContainer>
  );
};

export default HeroBanner;