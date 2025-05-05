import Link from "next/link";
import Image from "next/image";
import cta_thumb from '@/assets/img/others/cta-thumb.png';


export default function CtaArea() {
    return (
        <section className="cta-area position-relative section-pb-120">
            <div className="container custom-container4">
                <div className="cta-wrap">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-xl-7">
                            <div className="cta-thumb">
                                <Image src={cta_thumb} alt="img" style={{height:'auto'}} />
                            </div>
                        </div>
                        <div className="col-xl-5">
                            <div className="cta-content-wrap">
                                <div className="section__title mb-0 title-shape-none">
                                    <h3 className="title mb-20">Best Gaming Sales</h3>
                                    <p>Register for your newsletter today to stay updated on your latest product release and exclusive offers</p>
                                    <Link href="/shop" className="tg-btn-5">
                                        <span>Learn More</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
