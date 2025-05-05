import { StaticImageData } from 'next/image';
import nft_1 from '@/assets/img/nft/nft_img01.jpg';
import nft_2 from '@/assets/img/nft/nft_img02.jpg';
import nft_3 from '@/assets/img/nft/nft_img03.jpg';
import nft_4 from '@/assets/img/nft/nft_img04.jpg';
import nft_5 from '@/assets/img/nft/nft_img05.jpg';
import nft_6 from '@/assets/img/nft/nft_img06.jpg';
import nft_7 from '@/assets/img/nft/nft_img07.jpg';
import creator_1 from '@/assets/img/nft/nft_avatar.png';
import avatar_1 from '@/assets/img/nft/nft_avatar01.png';
import avatar_2 from '@/assets/img/nft/nft_avatar02.png';
import avatar_3 from '@/assets/img/nft/nft_avatar03.png';

// type 
export interface INftType {
  id: number;
  img: StaticImageData;
  title: string;
  creator: StaticImageData;
  creator_name: string;
  eth: number;
  trending?: boolean;
}

const nft_data:INftType[] = [
  {
    id:1,
    img:nft_1,
    title:'wolf gaming art',
    creator:creator_1,
    creator_name:'Alax Max',
    eth:1.002
  },
  {
    id:2,
    img:nft_2,
    title:'FOREST PRINCESS',
    creator:creator_1,
    creator_name:'Alax Max',
    eth:1.053
  },
  {
    id:3,
    img:nft_3,
    title:'GIRL FIREFLY ART',
    creator:creator_1,
    creator_name:'Alax Max',
    eth:1.024
  },
  // trending
  {
    id:4,
    img:nft_4,
    title:'Crypto Max',
    creator:avatar_1,
    creator_name:'Jon Max',
    eth:1.002,
    trending:true,
  },
  {
    id:5,
    img:nft_5,
    title:'Golden Crypto',
    creator:avatar_2,
    creator_name:'Jon Max',
    eth:1.004,
    trending:true,
  },
  {
    id:6,
    img:nft_6,
    title:'Black Crypto',
    creator:avatar_3,
    creator_name:'Jon Max',
    eth:1.005,
    trending:true,
  },
  {
    id:7,
    img:nft_7,
    title:'Luck Crypto',
    creator:avatar_1,
    creator_name:'Jon Max',
    eth:1.006,
    trending:true,
  },
]

export default nft_data;