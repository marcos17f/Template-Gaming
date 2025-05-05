"use client";
import Image from "next/image";
import { PhotoProvider, PhotoView } from "react-photo-view";
import 'react-photo-view/dist/react-photo-view.css';

// images
import nav_1 from '@/assets/img/products/shop_nav01.jpg';
import nav_2 from '@/assets/img/products/shop_nav02.jpg';
import nav_3 from '@/assets/img/products/shop_nav03.jpg';
import nav_active_1 from '@/assets/img/products/shop_details01.jpg';
import nav_active_2 from '@/assets/img/products/shop_details02.jpg';
import nav_active_3 from '@/assets/img/products/shop_details03.jpg';

const active_images = [
    { id: 'one', img: nav_active_1 },
    { id: 'two', img: nav_active_2 },
    { id: 'three', img: nav_active_3 }
]
const ShopDetailsImages = () => {
    const nabImgStyle = { width: 'auto', height: 'auto' }
    return (
        <>
            <div className="shop__details-images-wrap">
                <ul className="nav nav-tabs" id="imageTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="one-tab" data-bs-toggle="tab" data-bs-target="#one" type="button" role="tab" aria-controls="one" aria-selected="true" tabIndex={-1}>
                            <Image src={nav_1} alt="img" style={nabImgStyle} />
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="two-tab" data-bs-toggle="tab" data-bs-target="#two" type="button" role="tab" aria-controls="two" aria-selected="false" tabIndex={-1}>
                            <Image src={nav_2} alt="img" style={nabImgStyle} />
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="three-tab" data-bs-toggle="tab" data-bs-target="#three" type="button" role="tab" aria-controls="three" aria-selected="false" tabIndex={-1}>
                            <Image src={nav_3} alt="img" style={nabImgStyle} />
                        </button>
                    </li>
                </ul>
                <div className="tab-content" id="imageTabContent">
                    <PhotoProvider>
                        {active_images.map((item, i) => (
                            <div key={item.id} className={`tab-pane ${item.id === 'one' ? 'show active' : ''}`} id={item.id} role="tabpanel" aria-labelledby={`${item.id}-tab`}>
                                <PhotoView src={item.img.src} >
                                    <a className="popup-image pointer">
                                        <Image src={item.img} alt="img" style={{ height: 'auto' }} />
                                    </a>
                                </PhotoView>
                            </div>
                        ))}
                    </PhotoProvider>
                </div>
            </div>
        </>
    );
};

export default ShopDetailsImages;