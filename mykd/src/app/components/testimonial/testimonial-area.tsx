'use client';
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

const slider_setting = {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    observer: true,
    observeParents: true,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    // Navigation arrows
    navigation: {
        nextEl: ".slider-button-next",
        prevEl: ".slider-button-prev",
    },
}


const testimonialData = [
    {
        id: 1,
        thumb: "/assets/img/others/testimonial-thumb.png",
        content: `“Lorem ipsum dolor sit amet consectetur adipiscing elit posuere, orci nulla nam est facilisi pretium class curae rutrum, tempus curabitur ante sociis dui erat vivamus. Porta massa volutpat in vulputate ad congue taciti ligula scelerisque urna, tincidunt odio gravida felis”`,
        name: "Moolin Lexo",
        designation: "SUPPORT",
    },
    {
        id: 2,
        thumb: "/assets/img/others/testimonial-thumb.png",
        content: `“Lorem ipsum dolor sit amet consectetur adipiscing elit posuere, orci nulla nam est facilisi pretium class curae rutrum, tempus curabitur ante sociis dui erat vivamus. Porta massa volutpat in vulputate ad congue taciti ligula scelerisque urna, tincidunt odio gravida felis”`,
        name: "Moolin Lexo",
        designation: "SUPPORT",
    },
];

export default function TestimonialArea() {
    return (
        <section
            className="testimonial__area section-pb-120"
            style={{ backgroundImage: `url(/assets/img/bg/team_bg4.png)` }}
        >
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section__title mb-60 title-shape-none">
                            <h3 className="testimonial-title">
                                <span>15k+ Active Customer Review</span>
                            </h3>
                        </div>
                    </div>
                </div>
                <Swiper {...slider_setting} className="swiper-container testimonial-active">
                    {testimonialData.map((testimonial) => (
                        <SwiperSlide key={testimonial.id}>
                            <div className="testimonial__item">
                                <div className="testimonial__thumb">
                                    <Image src={testimonial.thumb} alt={testimonial.name} width={350} height={352} style={{ height: 'auto' }} />
                                </div>
                                <div className="testimonial__content">
                                    <p className="content">{testimonial.content}</p>
                                    <h4 className="name">{testimonial.name}</h4>
                                    <span className="desig">{testimonial.designation}</span>
                                </div>
                                <div className="quote-shape"></div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
