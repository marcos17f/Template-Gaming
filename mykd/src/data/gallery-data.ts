import { StaticImageData } from 'next/image';
import img_1 from '@/assets/img/gallery/gallery01.jpg';
import img_2 from '@/assets/img/gallery/gallery02.jpg';
import img_3 from '@/assets/img/gallery/gallery03.jpg';
import img_4 from '@/assets/img/gallery/gallery04.jpg';
import img_5 from '@/assets/img/gallery/gallery05.jpg';

const gallery_data:{
  id: number;
  img: StaticImageData;
  title: string;
  rate: string;
}[] = [
  {
    id:1,
    img:img_1,
    title:'Pubg tournament',
    rate:'50%'
  },
  {
    id:2,
    img:img_2,
    title:'Assassins Creed',
    rate:'65%'
  },
  {
    id:3,
    img:img_3,
    title:'World of Warcraft',
    rate:'60%'
  },
  {
    id:4,
    img:img_4,
    title:'The Chant s.2',
    rate:'70%'
  },
  {
    id:5,
    img:img_5,
    title:'Dota 2 tournament',
    rate:'85%'
  },
]

export default gallery_data;