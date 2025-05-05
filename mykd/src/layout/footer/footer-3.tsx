import Link from "next/link";
import Image from "next/image";
import logo from '@/assets/img/logo/logo.png';
import { ContactSvg, Location } from "@/app/components/svg";

export default function FooterThree() {
  return (
    <footer className="footer-style-three bg-img-cover bg-img-center" style={{backgroundImage:`url(/assets/img/bg/footer_bg3.png)`}}>
        <div className="footer__top-wrap">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-4 col-lg-5 col-md-7">
                        <div className="footer-widget">
                            <div className="footer-logo logo">
                                <Link href="/"><Image src={logo} alt="Logo" style={{height:'auto'}}/></Link>
                            </div>
                            <div className="footer-text">
                                <p className="desc">Commodo metus auctor poti sapien eget porttitor, elementum semper cubilia lacinia praesent dis hac dui, nisi ridiculus</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                        <div className="footer-widget">
                            <div className="footer-contact-link">
                                <div className="icon">
                                    <Location/>
                                </div>
                                <div>
                                    <h4 className="title">Office Location:</h4>
                                    <p>Marks Dan Street 15UIK, Berlin <br className="d-lg-block d-none"/>
                                        FP 256 Germany.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                        <div className="footer-widget">
                            <div className="footer-contact-link">
                                <div className="icon">
                                    <ContactSvg/>
                                </div>
                                <div>
                                    <h4 className="title">Contact:</h4>
                                    <a className="link" href="tel:163254736587">(+163)-2547-36587</a>
                                    <a className="link" href="mailto:infohelp@example.com">infohelp@example.com</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div className="container">
            <div className="copyright__wrap">
                <div className="row gy-2 align-items-center">
                    <div className="col-lg-6">
                        <div className="copyright__text">
                            <p>Copyright © {new Date().getFullYear()} - All Rights Reserved By <span>Mykd</span></p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="copyright__menu">
                            <ul className="list-wrap d-flex flex-wrap justify-content-center justify-content-lg-end">
                                <li><Link href="/contact">Contact Us</Link></li>
                                <li><Link href="/contact">Join our team</Link></li>
                                <li><Link href="/contact">Privacy Policy</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}
