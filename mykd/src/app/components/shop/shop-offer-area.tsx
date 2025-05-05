import Image from "next/image";
import offer_thumb from '@/assets/img/others/offer-thumb5-1.png';
import Link from "next/link";


export default function ShopOfferArea() {
    return (
        <section className="offer__area fix bg-img-cover bg-img-center" style={{backgroundImage:`url(/assets/img/bg/offer_bg5.png)`}}>
            <div className="container custom-container4">
                <div className="row justify-content-center flex-row-reverse">
                    <div className="col-xl-5">
                        <div className="section__title text-center title-shape-none">
                            <h3 className="title2">UPTO 70% OFF</h3>
                            <p>Register for your newsletter today to stay updated on your latest product
                                release and exclusive offers</p>
                            <div className="btn-group">
                                <Link href="/shop" className="tg-btn-4">
                                    <span>Explore Items</span>
                                </Link>
                                <Link href="/shop-details" className="tg-btn-4">
                                    <span>Items Details</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-7 align-self-end">
                        <div className="offer-thumb">
                            <Image src={offer_thumb} alt="img" style={{height:'auto'}} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
