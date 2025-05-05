'use client'
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import React,{useState} from 'react';
import s_1_img from '@/assets/img/others/services_img01.jpg';
import s_2_img from '@/assets/img/others/services_img02.jpg';
import s_3_img from '@/assets/img/others/services_img03.jpg';
import s_4_img from '@/assets/img/others/services_img04.jpg';

// service images
const service_images:StaticImageData[] = [s_1_img,s_2_img,s_3_img,s_4_img];
// faq data type 
type IFaq = {
  id: string;
  active?: boolean;
  title: string;
  desc: string;
} 
// faq data 
const faq_data:IFaq[] = [
  {
    id:'one',
    active:true,
    title:'Best NFT Game',
    desc:'Been the industries standard dummy text ever since the 1500s, when an unknown printer took a galley'
  },
  {
    id:'two',
    title:'Where can I get some?',
    desc:'Been the industries standard dummy text ever since the 1500s, when an unknown printer took a galley'
  },
  {
    id:'three',
    title:'Does it come from?',
    desc:'Been the industries standard dummy text ever since the 1500s, when an unknown printer took a galley'
  },
]

const FaqArea = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const handleMouseOver = (index: number) => {
    setActiveIndex(index);
  };

  const handleMouseOut = (index: number) => {
    setActiveIndex(index);
  };
  return (
    <section className="faq-area">
    <div className="container">
        <div className="row align-items-center">
            <div className="col-lg-6">
                <div className="faq__content-wrap">
                    <div className="section__title text-start">
                        <span className="sub-title tg__animate-text">Get your answer</span>
                        <h3 className="title">Frequently asked questions</h3>
                        <p>Lorem ipsum dolor sit amet, consteur adipiscing Duis elementum <br/> sollicitudin is yaugue euismods.</p>
                    </div>
                    <div className="faq__wrapper">
                        <div className="accordion" id="accordionExample">
                          {faq_data.map((item,i) => (
                            <div key={i} className="accordion-item" onClick={() => handleMouseOver(i)}>
                                <h2 className="accordion-header" id={`heading-${item.id}`}>
                                    <button className={`accordion-button ${item.active?'':'collapsed'}`} type="button" data-bs-toggle="collapse" data-bs-target={`#collapse-${item.id}`} aria-expanded={item.active?'true':'false'} aria-controls={`collapse-${item.id}`}>
                                       <span className="count">{i+1}</span> {item.title}
                                    </button>
                                </h2>
                                <div id={`collapse-${item.id}`} className={`accordion-collapse collapse ${item.active?'show':''}`} aria-labelledby={`heading-${item.id}`} data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        {item.desc}
                                    </div>
                                </div>
                            </div>
                          ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="services__images">
                {service_images.map((s,i) => (
                    <div key={i} className={`services__images-item ${activeIndex === i ? "active" : ""}`}>
                        <Image src={s} alt="img" style={{width:'100%',height:'100%'}} />
                        <Link href="/service-details" className="services__link">
                            <i className="flaticon-next"></i>
                        </Link>
                    </div>
                  ))}
                </div>
            </div>
        </div>
    </div>
</section>
  );
};

export default FaqArea;