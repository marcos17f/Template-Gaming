import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/img/logo/logo.png';
import icon_1 from '@/assets/img/icons/social_icon01.png';
import icon_2 from '@/assets/img/icons/social_icon02.png';
import icon_3 from '@/assets/img/icons/social_icon03.png';
import icon_4 from '@/assets/img/icons/social_icon04.png';
import payment from '@/assets/img/others/payment_card.png';

const Footer = () => {
  return (
    <footer className="footer-style-one">
      <div className="footer__top-wrap">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-5 col-md-7">
              <div className="footer-widget">
                <div className="footer-logo logo">
                  <Link href="/contact">
                    <Image src={logo} alt="Logo" width={177} height={40} />
                  </Link>
                </div>
                <div className="footer-text">
                  <p className="desc">Lorem ipsum dolor sitamet consectur adipiscing Duis esollici tudin augue euismod. Nulla ullam dolor sitamet consectetur</p>
                  <p className="social-title">Active <span>With Us <i className="fas fa-angle-double-right"></i></span></p>
                  <div className="footer-social">
                    <Link href="#"><Image src={icon_1} alt="iocn" width={30} height={30} /></Link>
                    <Link href="#"><Image src={icon_2} alt="iocn" width={30} height={30} /></Link>
                    <Link href="#"><Image src={icon_3} alt="iocn" width={30} height={30} /></Link>
                    <Link href="#"><Image src={icon_4} alt="iocn" width={30} height={30} /></Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-5 col-sm-6">
              <div className="footer-widget widget_nav_menu">
                <h4 className="fw-title">quick link</h4>
                <ul className="list-wrap menu">
                  <li><Link href="#">Gaming</Link></li>
                  <li><Link href="#">Product</Link></li>
                  <li><Link href="#">All NFTs</Link></li>
                  <li><Link href="#">Social Network</Link></li>
                  <li><Link href="#">Domain Names</Link></li>
                  <li><Link href="#">Collectibles</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-5 col-sm-6">
              <div className="footer-widget widget_nav_menu">
                <h4 className="fw-title">Supports</h4>
                <ul className="list-wrap menu">
                  <li><Link href="#">Setting & Privacy</Link></li>
                  <li><Link href="#">Help & Support</Link></li>
                  <li><Link href="#">Live Auctions</Link></li>
                  <li><Link href="#">Item Details</Link></li>
                  <li><Link href="#">24/7 Supports</Link></li>
                  <li><Link href="#">Our News</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5 col-md-7">
              <div className="footer-widget">
                <h4 className="fw-title">Newsletter</h4>
                <div className="footer-newsletter">
                  <p>Subscribe our newsletter to get our latest update & newsconsectetur</p>
                  <form action="#" className="footer-newsletter-form">
                    <input type="email" placeholder="Your email address" />
                    <button type="submit"><i className="flaticon-paper-plane"></i></button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright__wrap">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-7">
              <div className="copyright__text">
                <p>Copyright © {new Date().getFullYear()} - All Rights Reserved By <span>Mykd</span></p>
              </div>
            </div>
            <div className="col-md-5">
              <div className="copyright__card text-center text-md-end">
                <Image src={payment} alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;