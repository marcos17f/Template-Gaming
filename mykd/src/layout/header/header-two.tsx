'use client';
import Image from "next/image";
import Link from "next/link";
import logo from '@/assets/img/logo/logo.png';
import HeaderNavMenus from "./header-nav-menus";
import StickyWrapper from "./sticky-wrapper";
import { useState } from "react";
import OffCanvas from "@/app/components/common/off-canvas";
import MobileOffCanvas from "@/app/components/common/mobile-offcanvas";


export default function HeaderTwo() {
    const [isOffCanvasOpen, setIsOffCanvasOpen] = useState<boolean>(false);
    const [openMobileOffCanvas, setOpenMobileOffCanvas] = useState<boolean>(false);
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
        <>
            <header>
                <StickyWrapper top_cls="tg-header__area transparent-header tg-header__area-two">
                    <div className="container custom-container2">
                        <div className="row">
                            <div className="col-12">
                                <div onClick={() => handleOpenMobileOffCanvas('/assets/audio/click.wav')} className="mobile-nav-toggler">
                                    <i className="fas fa-bars"></i>
                                </div>
                                <div className="tgmenu__wrap">
                                    <nav className="tgmenu__nav">
                                        <div className="logo">
                                            <Link href="/">
                                                <Image src={logo} alt="Logo" style={{ height: 'auto' }} />
                                            </Link>
                                        </div>
                                        <div className="tgmenu__navbar-wrap tgmenu__main-menu d-none d-xl-flex">
                                            {/* nav menus */}
                                            <HeaderNavMenus />
                                            {/* nav menus */}
                                        </div>
                                        <div className="tgmenu__action d-none d-md-block">
                                            <ul className="list-wrap">
                                                <li className="header-btn">
                                                    <Link href="/login" className="tg-btn-4">
                                                        <span>Get A Quote</span>
                                                    </Link>
                                                </li>
                                                <li onClick={() => handleOpenOffCanvas('/assets/audio/click.wav')} className="side-toggle-icon d-none d-xl-flex">
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
            </header>

            {/* off canvas start */}
            <OffCanvas isOffCanvasOpen={isOffCanvasOpen} setIsOffCanvasOpen={setIsOffCanvasOpen} />
            {/* off canvas end */}

            {/*mobile off canvas start */}
            <MobileOffCanvas openMobileOffCanvas={openMobileOffCanvas} setOpenMobileOffCanvas={setOpenMobileOffCanvas} />
            {/*mobile off canvas end */}
        </>
    )
}
