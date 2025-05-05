import blog_1 from '@/assets/img/blog/blog_post01.jpg';
import blog_2 from '@/assets/img/blog/blog_post02.jpg';
import blog_3 from '@/assets/img/blog/blog_post03.jpg';
import { IBlog } from '@/types/blog-type';

const blog_data:IBlog[] = [
  {
    id:1,
    img:blog_1,
    author:'Admin',
    date:'AUG 19, 2023',
    comments:0,
    title:'ZOMBIE LAND TOURNAMENT MAX',
    desc:"Lorem ipsum dolor sit amet, consteur adipiscing Duis elementum solliciin is yaugue euismods Nulla ullaorper. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard."
  },
  {
    id:2,
    img:blog_2,
    author:'ADMIN',
    date:'AUG 16, 2023',
    comments:0,
    title:'PLAY TO EARN CRYPTO GAMES PLACE',
    desc:"Lorem ipsum dolor sit amet, consteur adipiscing Duis elementum solliciin is yaugue euismods Nulla ullaorper. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard."
  },
  {
    id:3,
    img:blog_3,
    author:'ADMIN',
    date:'MAY 10, 2023',
    comments:0,
    title:'NFT GAMES ANDROID NO INVESTMENT',
    desc:"Lorem ipsum dolor sit amet, consteur adipiscing Duis elementum solliciin is yaugue euismods Nulla ullaorper. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard."
  },
]

export default blog_data;