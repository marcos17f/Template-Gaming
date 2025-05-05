import Link from "next/link";
import Image from "next/image";
import logo from '@/assets/img/logo/preloader.png';


export default function FooterFour() {
  return (
    <footer className="footer-style-four bg-img-cover bg-img-center" 
      style={{backgroundImage:`url(/assets/img/bg/footer_bg4.png)`}}>
        <div className="footer__top-wrap">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12">
                        <div className="footer-widget text-center">
                            <div className="footer-logo logo">
                                <Link href="/">
                                   <Image src={logo} alt="Logo" style={{height:'auto'}}/>
                                </Link>
                            </div>
                            <div className="footer-menu-link mt-20">
                                <Link href="/">Home</Link>
                                <Link href="/about">About</Link>
                                <Link href="/shop">Shop</Link>
                                <Link href="/tournament">Tournament</Link>
                                <Link href="/blog">Blog</Link>
                            </div>
                        </div>
                        <div className="footer-newsletter2">
                            <h4 className="title">MYKD NEWSLETTER</h4>
                            <form action="#" className="footer-newsletter-form2">
                                <input type="email" placeholder="Enter Email Address"/>
                                <button type="submit">Subscribe</button>
                            </form>
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
