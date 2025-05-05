import { CSSProperties } from "react";
import Link from "next/link";
import Image from "next/image";
import ab_img_1 from '@/assets/img/others/about_img3-1.png';
import ab_img_2 from '@/assets/img/others/about_img3-2.png';
import ab_img_3 from '@/assets/img/others/about_img3-3.png';
import section_line from '@/assets/img/others/section-line.png';

const imgStyle:CSSProperties = {
    height:'auto'
}
export default function AboutAreaFour() {
    return (
        <section className="about__area section-pb-120">
            <div className="container">
                <div className="row gy-5 justify-content-center align-items-center">
                    <div className="col-xl-6">
                        <div className="about__funFact-images3">
                            <Image className="main-img1" data-magnetic src={ab_img_1} alt="background" style={imgStyle} />
                            <Image className="main-img2" data-magnetic src={ab_img_2} alt="image" style={imgStyle} />
                            <Image className="main-img3" data-magnetic src={ab_img_3} alt="image" style={imgStyle} />
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="section__title text-start mb-30 title-shape-none">
                            <h6 className="sub-title2">More About My Self</h6>
                            <h3 className="title2">Original Esports
                                <br /> <span className="text-theme d-inline-block position-relative"> Pro Player 
                                    <Image className="section-line" src={section_line} alt="img" />
                                </span>
                            </h3>
                        </div>
                        <div className="about__content-three mt-50">
                            <p>Commodo metus auctor potenti sapien eget porttitor, elementum semper cubilia lacinia praesent dis hac dui, nisi ridiculus lobortis purus primis platea. Suscipit ultricies pellentesque hendrerit lectus habitant mattis aenean, quis justo odio blandit vitae nascetur a, vulputate aptent.</p>
                        </div>
                        <div className="btn-group mt-4">
                            <Link href="/about" className="tg-btn-4">
                                <span>Learn More</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
