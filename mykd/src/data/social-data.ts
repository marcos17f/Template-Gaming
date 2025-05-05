// type 
type ISocial = {
  id: number;
  link: string;
  icon: string;
  title: string;
}

const social_data:ISocial[] = [
  {
    id:1,
    link:'https://www.facebook.com/',
    icon:'fab fa-facebook-f',
    title:'Facebook'
  },
  {
    id:2,
    link:'https://twitter.com/',
    icon:'fab fa-twitter',
    title:'Twitter'
  },
  {
    id:3,
    link:'https://www.linkedin.com/',
    icon:'fab fa-linkedin-in',
    title:'Linkedin'
  },
  {
    id:4,
    link:'https://www.youtube.com/',
    icon:'fab fa-youtube',
    title:'Youtube'
  },
]

export default social_data;