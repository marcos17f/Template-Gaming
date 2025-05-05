import { ITournament } from '@/types/tournament-type';
import thumb_1 from '@/assets/img/others/tournament_thumb01.png';
import thumb_2 from '@/assets/img/others/tournament_thumb02.png';
import thumb_3 from '@/assets/img/others/tournament_thumb03.png';
import list_img_1 from '@/assets/img/others/tournament01.jpg';
import list_img_2 from '@/assets/img/others/tournament02.jpg';
import list_img_3 from '@/assets/img/others/tournament03.jpg';

const tournament_data:ITournament[] = [
  {
    id:1,
    thumb:thumb_1,
    box_price:25000,
    coming_time:'2025-10-25',
    subtitle:'TOURNAMENT',
    title:'of weekly',
    places:3,
    live_link:'https://www.twitch.tv/videos/1726788358',
    team_name:'FoxTie Max',
    status:'Online',
    list_items:[
      {
        id:1,
        img:list_img_1,
        name:'black ninja',
        price:75000
      },
      {
        id:2,
        img:list_img_2,
        name:'Foxtie Max',
        price:75000
      },
      {
        id:3,
        img:list_img_3,
        name:'Holam Doxe',
        price:75000
      },
    ]
  },
  {
    id:2,
    thumb:thumb_2,
    active:true,
    box_price:50000,
    coming_time:'2025-11-15',
    subtitle:'TOURNAMENT',
    title:'Lucky card',
    places:10,
    live_link:'https://www.twitch.tv/videos/1726788358',
    team_name:'Hatlax TM.',
    status:'Online',
    list_items:[
      {
        id:1,
        img:list_img_1,
        name:'black ninja',
        price:75000
      },
      {
        id:2,
        img:list_img_2,
        name:'Foxtie Max',
        price:75000
      },
      {
        id:3,
        img:list_img_3,
        name:'Holam Doxe',
        price:75000
      },
    ]
  },
  {
    id:3,
    thumb:thumb_3,
    box_price:75000,
    coming_time:'2025-9-28',
    subtitle:'TOURNAMENT',
    title:'of month',
    places:50,
    live_link:'https://www.twitch.tv/videos/1726788358',
    team_name:'Spartan iv',
    status:'Online',
    list_items:[
      {
        id:1,
        img:list_img_1,
        name:'black ninja',
        price:75000
      },
      {
        id:2,
        img:list_img_2,
        name:'Foxtie Max',
        price:75000
      },
      {
        id:3,
        img:list_img_3,
        name:'Holam Doxe',
        price:75000
      },
    ]
  },
]


export default tournament_data;