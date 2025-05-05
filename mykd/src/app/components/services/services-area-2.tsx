import React from "react";
import Image from "next/image";
import Link from "next/link";
import section_line from '@/assets/img/others/section-line.png';

const serviceData = [
    {
        id: 1,
        img: "/assets/img/service/service3-1.png",
        date: "25th March, 2024",
        time: "18:00",
        match: "HU v/s Lm",
        title: "Daniel Barna Klark",
        views: "280k",
        game: "CK (vs) UO",
        groups: "2 Groups",
    },
    {
        id: 2,
        img: "/assets/img/service/service3-2.png",
        date: "25th March, 2024",
        time: "18:00",
        match: "HU v/s Lm",
        title: "Daniel Barna Klark",
        views: "280k",
        game: "CK (vs) UO",
        groups: "2 Groups",
    },
    {
        id: 3,
        img: "/assets/img/service/service3-3.png",
        date: "25th March, 2024",
        time: "18:00",
        match: "HU v/s Lm",
        title: "Daniel Barna Klark",
        views: "280k",
        game: "CK (vs) UO",
        groups: "2 Groups",
    },
];

const ServiceAreaTwo = () => {
    return (
        <section
            className="service__area3 section-pt-120 section-pb-120"
            style={{ backgroundImage: `url(/assets/img/bg/service_bg3.png)` }}
        >
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section__title text-center mb-60 title-shape-none">
                            <span className="sub-title2">Professional Esports Team</span>
                            <h3 className="title2">
                                TOURNAMENTS{" "}
                                <span className="text-theme">
                                    I’VE{" "}
                                    <span className="d-inline-block position-relative">
                                        <Image
                                            className="section-line"
                                            src={section_line}
                                            alt="img"
                                        />
                                        BEEN A PART OF
                                    </span>
                                </span>
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="row gy-4 justify-content-center">
                    {serviceData.map((service) => (
                        <div className="col-xl-4 col-md-6" key={service.id}>
                            <div className="service-card">
                                <div className="service-card-img">
                                    <Image src={service.img} alt="Service" width={403} height={300} style={{height:'auto'}} />
                                </div>
                                <div className="service-card-details">
                                    <div className="service-card-meta">
                                        <a href="#">{service.date}</a>
                                        <a href="#">{service.time}</a>
                                        <a href="#">{service.match}</a>
                                    </div>
                                    <h4 className="service-card-title">
                                        <Link href="/service-details">{service.title}</Link>
                                    </h4>
                                    <div className="service-card-tag">
                                        <a href="#">
                                            <i className="fas fa-eye"></i>
                                            {service.views}
                                        </a>
                                        <a href="#">
                                            <i className="fas fa-gamepad"></i>
                                            {service.game}
                                        </a>
                                        <a href="#">
                                            <i className="fas fa-users"></i>
                                            {service.groups}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceAreaTwo;
