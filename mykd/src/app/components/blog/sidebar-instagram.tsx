import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import insta_1 from "@/assets/img/instagram/insta01.jpg";
import insta_2 from "@/assets/img/instagram/insta02.jpg";
import insta_3 from "@/assets/img/instagram/insta03.jpg";
import insta_4 from "@/assets/img/instagram/insta04.jpg";
import insta_5 from "@/assets/img/instagram/insta05.jpg";
import insta_6 from "@/assets/img/instagram/insta06.jpg";

// instagram images
const instagram_images:{
  link: string;
  img: StaticImageData;
}[] = [
  {link:'https://www.instagram.com/',img:insta_1},
  {link:'https://www.instagram.com/',img:insta_2},
  {link:'https://www.instagram.com/',img:insta_3},
  {link:'https://www.instagram.com/',img:insta_4},
  {link:'https://www.instagram.com/',img:insta_5},
  {link:'https://www.instagram.com/',img:insta_6},
];

const SidebarInstagram = () => {
  return (
    <div className="sidebar__insta">
      {instagram_images.map((item, i) => (
        <div key={i} className="sidebar__insta-item">
          <Link href={item.link} target="_blank">
            <Image src={item.img} alt="img" style={{width:'100%',height:'auto'}} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default SidebarInstagram;
