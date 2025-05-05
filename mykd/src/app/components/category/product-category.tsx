import Link from "next/link";
import Image from "next/image";
// images
import cate_1 from '@/assets/img/products/product-5-1.png';
import cate_2 from '@/assets/img/products/product-5-2.png';
import cate_3 from '@/assets/img/products/product-5-3.png';
import cate_4 from '@/assets/img/products/product-5-4.png';
import cate_5 from '@/assets/img/products/product-5-5.png';
import cate_6 from '@/assets/img/products/product-5-6.png';

const categoryData = [
    {
      id: 1,
      imgSrc: cate_1,
      title: "Keyboard",
      columnClass: "col-lg-6",
    },
    {
      id: 2,
      imgSrc: cate_2,
      title: "Headset",
      columnClass: "col-xl-3 col-lg-6",
    },
    {
      id: 3,
      imgSrc: cate_3,
      title: "Joystick",
      columnClass: "col-xl-3 col-lg-6",
    },
    {
      id: 4,
      imgSrc: cate_4,
      title: "Accessories",
      columnClass: "col-xl-3 col-lg-6",
    },
    {
      id: 5,
      imgSrc: cate_5,
      title: "Microphone",
      columnClass: "col-xl-3 col-lg-6",
    },
    {
      id: 6,
      imgSrc: cate_6,
      title: "Desk Table",
      columnClass: "col-lg-6",
    },
  ];
  
  export default function ProductCategory() {
    return (
      <section
        className="product-category__area section-pt-120 section-pb-120"
        data-background="/assets/img/bg/item-category-bg.png"
        style={{backgroundImage:`url(/assets/img/bg/item-category-bg.png)`}}
      >
        <div className="container custom-container4">
          <div className="row gy-4">
            {categoryData.map((category) => (
              <div key={category.id} className={category.columnClass}>
                <div className="shop__category">
                  <div className="shop__category-thumb">
                    <Image src={category.imgSrc} alt={category.title} style={{height:'auto'}} />
                  </div>
                  <div className="shop__category-content">
                    <h4 className="title">
                      <Link href="/shop">{category.title}</Link>
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  