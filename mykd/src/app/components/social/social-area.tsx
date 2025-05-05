import React from 'react';
import social_bg from '@/assets/img/bg/social_bg.png';
import TextAnimation from '../common/text-animation';
import Link from 'next/link';

// social item 
const social_data:{
    id: number;
    link: string;
    icon: string;
    title: string;
}[] = [
    {
        id:1,
        link:'https://www.facebook.com/',
        icon:'flaticon-facebook',
        title:'facebook'
    },
    {
        id:2,
        link:'https://twitter.com/',
        icon:'flaticon-twitter',
        title:'twitter'
    },
    {
        id:3,
        link:'https://www.instagram.com/',
        icon:'flaticon-instagram',
        title:'instagram'
    },
    {
        id:4,
        link:'https://www.youtube.com/',
        icon:'flaticon-youtube',
        title:'youtube'
    },
    {
        id:5,
        link:'https://discord.com/',
        icon:'flaticon-discord',
        title:'discord'
    },
    {
        id:6,
        link:'https://www.twitch.tv/',
        icon:'flaticon-twitch',
        title:'twitch'
    },
]

const SocialArea = () => {
  return (
    <section className="social__area social-bg" style={{backgroundImage:`url(${social_bg.src})`}}>
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-7 col-md-10">
                <div className="section__title text-center mb-60">
                    <TextAnimation title='connect with us'/>
                    <h3 className="title">stay connected</h3>
                </div>
            </div>
        </div>
        <div className="row justify-content-center gutter-20 row-cols-2 row-cols-lg-6 row-cols-md-4 row-cols-sm-3">
            {social_data.map((s,i) => (
            <div key={i} className="col">
                <div className="social__item">
                    <Link href={s.link} target='_blank'>
                        <i className={s.icon}></i>
                        <span>{s.title}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="65" height="5" viewBox="0 0 65 5">
                            <path d="M968,5630h65l-4,5H972Z" transform="translate(-968 -5630)" />
                        </svg>
                    </Link>
                </div>
            </div>
            ))}
        </div>
    </div>
  </section>
  );
};

export default SocialArea;