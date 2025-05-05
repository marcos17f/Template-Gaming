'use client'
import React,{useState} from "react";
import Image from "next/image";
import Link from "next/link";
import logo from '@/assets/img/logo/logo.png';
import SearchPopup from "@/app/components/common/search-popup";
import OffCanvas from "@/app/components/common/off-canvas";
import MobileOffCanvas from "@/app/components/common/mobile-offcanvas";
import SvgIconCom from "@/app/components/common/svg-icon-anim";
import shape from '@/assets/img/icons/shape02.svg'
import { BtnBg } from "@/app/components/svg";
import HeaderNavMenus from "./header-nav-menus";
import StickyWrapper from "./sticky-wrapper";

const Header = ({style_2=false}:{style_2?:boolean}) => {
  const [isSearchOpen,setIsSearchOpen] = useState<boolean>(false);
  const [isOffCanvasOpen,setIsOffCanvasOpen] = useState<boolean>(false);
  const [openMobileOffCanvas,setOpenMobileOffCanvas] = useState<boolean>(false);
  // handle open search
  const handleOpenSearch = (audioPath: string) => {
    setIsSearchOpen(true)
    const audio = new Audio(audioPath);
    audio.play();
  };
  // handle open offcanvas
  const handleOpenOffCanvas = (audioPath: string) => {
    setIsOffCanvasOpen(true)
    const audio = new Audio(audioPath);
    audio.play();
  };
  // handle open search
  const handleOpenMobileOffCanvas = (audioPath: string) => {
    setOpenMobileOffCanvas(true)
    const audio = new Audio(audioPath);
    audio.play();
  };
  return (
    <header>
      <StickyWrapper>
        <div className="container custom-container">
          <div className="row">
            <div className="col-12">
              <div className="mobile-nav-toggler" onClick={() => handleOpenMobileOffCanvas('/assets/audio/click.wav')} >
                <i className="fas fa-bars"></i>
              </div>
              <div className="tgmenu__wrap">
                <nav className="tgmenu__nav">
                  <div className="logo">
                    <Link href="/">
                      <Image src={logo} alt="Logo" style={{height:'auto'}} />
                    </Link>
                  </div>
                  <div className="tgmenu__navbar-wrap tgmenu__main-menu d-none d-xl-flex">
                    {/* nav menus */}
                    <HeaderNavMenus/>
                    {/* nav menus */}
                  </div>
                  <div className="tgmenu__action d-none d-md-block">
                    <ul className="list-wrap">
                      <li className="search">
                        <a onClick={() => handleOpenSearch('/assets/audio/click.wav')} className="pointer">
                          <i className="flaticon-search-1"></i>
                        </a>
                      </li>
                      <li className="header-btn">
                        <Link href="/contact" className={`${style_2?'tg-btn-3 tg-svg':'tg-border-btn'}`}>
                          <BtnBg/>
                          {style_2 && <SvgIconCom icon={shape} id="svg-2" />}
                          <i className="flaticon-edit"></i> ~sing in
                        </Link>
                      </li>
                      <li className="side-toggle-icon" onClick={()=> handleOpenOffCanvas('/assets/audio/click.wav')}>
                        <span></span>
                        <span></span>
                        <span></span>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </StickyWrapper>

      {/* <!-- header-search --> */}
      <SearchPopup setIsSearchOpen={setIsSearchOpen} isSearchOpen={isSearchOpen} />
      {/* <!-- header-search-end --> */}

      {/* off canvas start */}
      <OffCanvas isOffCanvasOpen={isOffCanvasOpen} setIsOffCanvasOpen={setIsOffCanvasOpen} />
      {/* off canvas end */}

      {/*mobile off canvas start */}
      <MobileOffCanvas openMobileOffCanvas={openMobileOffCanvas} setOpenMobileOffCanvas={setOpenMobileOffCanvas} />
      {/*mobile off canvas end */}
    </header>
  );
};

export default Header;
