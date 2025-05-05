import Link from "next/link";
import Image from "next/image";
import { CompareSvg } from "../svg";
import { product_data_two } from "@/data/product-data";


export default function ShopAreaTwo() {
  return (
    <section className="shop-area">
      <div className="container custom-container4">
        <div className="section__title text-center mb-60 title-shape-none">
          <h3 className="title">NEW COLLECTION</h3>
        </div>
        <div className="row justify-content-center gy-4">
          {product_data_two.map((item) => (
            <div key={item.id} className="col-xl-3 col-md-6">
              <div className="shop__item2">
                <div className="shop__item-thumb">
                  <Link href={`/shop-details/${item.id}`}>
                    <Image src={item.img} alt={item.title} style={{height:'auto'}} />
                  </Link>
                  <div className="actions-btn-wrap">
                    <span className="icon-btn">
                      <i className="fas fa-plus"></i>
                    </span>
                    <div className="action-btn">
                      <a href="#" className="icon-btn">
                        <i className="far fa-heart"></i>
                      </a>
                      <a href="#" className="icon-btn">
                        <CompareSvg />
                      </a>
                      <a href="#" className="icon-btn">
                        <i className="far fa-eye"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="shop__item-content">
                  <div className="shop__item-rating">
                    <i className="fas fa-star"></i>
                    {item.rating}
                  </div>
                  <h4 className="title">
                    <Link href={`/shop-details/${item.id}`}>{item.title}</Link>
                  </h4>
                  <div className="shop__item-price">${item.price}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
